#!/usr/bin/env node

/**
 * This script generates build metadata that can be useful for tracking deployments
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get current git information
const gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const gitCommitHash = execSync('git rev-parse HEAD').toString().trim();
const gitCommitMessage = execSync('git log -1 --pretty=%B').toString().trim();
const buildDate = new Date().toISOString();

// Create metadata object
const buildMeta = {
  version: process.env.npm_package_version || require('../package.json').version,
  buildDate,
  gitBranch,
  gitCommitHash,
  gitCommitMessage,
  nodeVersion: process.version,
};

// Ensure public directory exists
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write metadata to file
fs.writeFileSync(
  path.join(publicDir, 'build-meta.json'),
  JSON.stringify(buildMeta, null, 2)
);

console.log('Build metadata generated successfully'); 