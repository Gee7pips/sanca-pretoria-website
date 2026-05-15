#!/bin/bash
cd /home/z/my-project
echo "Starting Next.js dev server..."
exec node node_modules/.bin/next dev --port 3000
