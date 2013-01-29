#!/bin/sh
echo "Building..."
./make-wgt.sh >/dev/null

echo "Pushing the widget file..."
sdb push hoofbeats-unittests.wgt /home/developer

echo "Installing the widget file..."
sdb shell 'wrt-launcher -k 1234567891; sleep 2; wrt-installer -un 1234567891; wrt-installer -i /home/developer/hoofbeats-unittests.wgt; wrt-launcher -d -s 1234567891' | awk '/port:/ { print $2 }' | xargs -i google-chrome http://$(sdb shell ifconfig eth0 | awk '/inet addr/ { print $2 }' | cut -d':' -f2):{}
echo "Done."
