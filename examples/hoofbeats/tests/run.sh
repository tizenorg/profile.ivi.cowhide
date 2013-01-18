#!/bin/sh
echo "Starting server..."
node tests/server.js >/dev/null &

echo "Waiting for server to be ready..."
sleep 2

echo "Starting tests..."
phantomjs tests/phantom.js "http://localhost:3000/tests"

echo "Cleaning up..."
kill -9 `cat tests/pid.txt` >/dev/null
rm tests/pid.txt > /dev/null

echo "All done."
