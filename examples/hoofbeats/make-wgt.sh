#!/bin/bash

# This script generates a widget package hoofbeats.wgt inside
# the root directory of this project.
#
# By default, it produces a package for the new Tizen
# APIs. If you want a package for the old APIs, call
# it with:
#
#   ./make-wgt.sh old

USE_OLD_CONFIG=$1
CONFIG_FILE=config.xml
PROJECT_NAME=hoofbeats

if [ "x$USE_OLD_CONFIG" != "x" ] ; then
  echo "******* USING OLD APIS"

  if [[ -d /tmp/$PROJECT_NAME ]] ; then
    rm -Rf /tmp/$PROJECT_NAME/*
    rmdir /tmp/$PROJECT_NAME
  fi

  mkdir /tmp/$PROJECT_NAME

  # replace /api/ with /privilege/
  sed -e 's%http://tizen\.org/privilege/%http://tizen\.org/api/%g' ./$CONFIG_FILE > /tmp/hoofbeats/$CONFIG_FILE

  # the tmp file is the new config file
  CONFIG_FILE=/tmp/$PROJECT_NAME/config.xml

  # replace content privilege with mediacontent
  sed -i -e 's%api/content%api/mediacontent%' $CONFIG_FILE

  # remove privileges which don't exist in the old API:
  # datacontrol, callhistory, networkbearerselection, setting
  cat $CONFIG_FILE > $CONFIG_FILE.tmp

  cat $CONFIG_FILE.tmp | grep -v "api/datacontrol" | grep -v "api/callhistory" | grep -v "api/networkbearerselection" | grep -v "api/setting" > $CONFIG_FILE
else
  echo "******* USING NEW APIS"
fi

if [[ -f $PROJECT_NAME.wgt ]] ; then
  rm $PROJECT_NAME.wgt
fi

zip --exclude stats/utils/\* stats/.git -r $PROJECT_NAME.wgt index.html icon.png javascripts lib
zip -j $PROJECT_NAME.wgt $CONFIG_FILE
