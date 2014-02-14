#!/bin/bash

# This script generates a widget package cowhide-docs.wgt inside
# the root directory of this project.

CONFIG_FILE=config.xml
PROJECT_NAME=cowhide-docs

if [[ -f $PROJECT_NAME.wgt ]] ; then
  rm $PROJECT_NAME.wgt
fi

cd ../../dist
zip -r ../docs/tizen/$PROJECT_NAME.wgt * -x cowhide.zip

cd ../docs/tizen
zip -j $PROJECT_NAME.wgt $CONFIG_FILE

cd ..
zip -j tizen/$PROJECT_NAME.wgt cowhide-icon.png
