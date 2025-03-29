import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    
    // Create a new submission with timestamp
    const newSubmission = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString()
    };
    
    // Define file path for storing submissions
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'contact-submissions.json');
    
    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Read existing submissions or create empty array
    let submissions = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      submissions = JSON.parse(fileData);
    }
    
    // Add new submission and write back to file
    submissions.push(newSubmission);
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf8');
    
    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process your submission' },
      { status: 500 }
    );
  }
} 