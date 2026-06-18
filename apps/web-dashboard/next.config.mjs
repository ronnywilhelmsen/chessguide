import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Isolate this app from the legacy root lockfile/workspace.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
