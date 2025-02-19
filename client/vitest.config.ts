import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Enable JSX support
  test: {
    environment: 'jsdom', // For DOM testing
    globals: true, // Enable global variables like `expect`, `describe`, `test`, etc.
  },
});