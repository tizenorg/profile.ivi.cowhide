#!/bin/sh
LOCAL_PORT=11224
IP=$1

echo "Deleting the old widget file..."
ssh root@$IP -t 'rm /home/app/cowhide-docs.wgt'

echo "Building..."
./make-widget.sh >/dev/null

echo "Pushing the widget file..."
scp cowhide-docs.wgt root@$IP:/home/app

echo "Installing the widget file..."
REMOTE_PORT=`scp root@$IP -t 'wrt-launcher -k 1234567890; sleep 2; wrt-installer -un 1234567890; wrt-installer -i /home/app/cowhide-docs.wgt; wrt-launcher -d -s 1234567890' | awk '/port:/ { print $2 }'`

echo "Starting debugging..."
google-chrome http://$IP:$REMOTE_PORT
echo "Done."
