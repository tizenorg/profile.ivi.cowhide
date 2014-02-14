#!/bin/sh
LOCAL_PORT=11224
SOCKET='unix:/tmp/qemu.sock'
SDB=~/tizen-sdk/tools/sdb

echo "Deleting the old widget file..."
$SDB shell 'rm /home/developer/cowhide-docs.wgt'

echo "Building..."
./make-widget.sh >/dev/null

echo "Pushing the widget file..."
$SDB push cowhide-docs.wgt /home/developer

echo "Installing the widget file..."
REMOTE_PORT=`$SDB shell 'wrt-launcher -k 1234567890; sleep 2; wrt-installer -un 1234567890; wrt-installer -i /home/developer/cowhide-docs.wgt; wrt-launcher -d -s 1234567890' | awk '/port:/ { print $2 }'`


echo "Enabling forwarding to port $PORT..."
echo "hostfwd_remove ::$LOCAL_PORT" | socat $SOCKET -
echo "hostfwd_add ::$LOCAL_PORT-:$REMOTE_PORT" | socat $SOCKET -

echo "Starting debugging..."
google-chrome http://localhost:$LOCAL_PORT
echo "Done."
