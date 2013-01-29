#!/bin/sh
echo "Building..."
./make-wgt.sh >/dev/null

echo "Pushing the widget file..."
sdb push hoofbeats.wgt /home/developer

echo "Installing the widget file..."
sdb shell 'wrt-launcher -k 1234567890; sleep 2; wrt-installer -un 1234567890; wrt-installer -i /home/developer/hoofbeats.wgt; wrt-launcher -d -s 1234567890'
echo "Done."
