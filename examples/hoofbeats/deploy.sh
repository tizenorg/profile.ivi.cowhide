#!/bin/sh
LOCAL_PORT=11224
SOCKET='unix:/tmp/qemu.sock'

echo "Deleting the old widget file..."
sdb shell 'rm /home/developer/hoofbeats.wgt'

echo "Building..."
./make-wgt.sh >/dev/null

echo "Pushing the widget file..."
sdb push hoofbeats.wgt /home/developer

echo "Installing the widget file..."
REMOTE_PORT=`sdb shell 'wrt-launcher -k 1234567890; sleep 2; wrt-installer -un 1234567890; wrt-installer -i /home/developer/hoofbeats.wgt; wrt-launcher -d -s 1234567890' | awk '/port:/ { print $2 }'`

echo "Enabling forwarding to port $PORT..."
echo "hostfwd_remove ::$LOCAL_PORT" | socat $SOCKET -
echo "hostfwd_add ::$LOCAL_PORT-:$REMOTE_PORT" | socat $SOCKET -

echo "Starting debuggin..."
google-chrome http://localhost:$LOCAL_PORT
echo "Done."
