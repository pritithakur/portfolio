#!/bin/bash

# Exit on error
set -e

# Display a heading
echo "======================================"
echo "Portfolio Website Deployment Script"
echo "======================================"

# Check if git is clean
if [[ $(git status --porcelain) ]]; then
  echo "⚠️  You have uncommitted changes. Commit before deploying."
  exit
fi

# Get current branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "🔍 Current branch: $BRANCH"

# Run tests and linting
echo "🧪 Running linting..."
npm run lint

# Build the application
echo "🔨 Building the application..."
npm run build

# Generate sitemap
echo "🌐 Generating sitemap..."
npm run postbuild

# Production optimizations
echo "⚡ Running production optimizations..."
# Add any custom optimizations here, like image compression or asset management

# Check if Vercel CLI is installed
if command -v vercel &> /dev/null; then
  echo "🚀 Deploying to Vercel..."
  # Use --prod for production environment
  vercel --prod
else
  echo "⚠️  Vercel CLI not found. Please install it to deploy directly."
  echo "   Run: npm i -g vercel"
  echo "   Or deploy manually by running: npm run build && vercel --prod"
fi

echo "✅ Deployment process completed!" 