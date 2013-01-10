#!/bin/sh
node tests/server.js &
sleep 2
phantomjs tests/phantom.js "http://localhost:3000/tests"
kill -9 `cat tests/pid.txt`
rm tests/pid.txt
