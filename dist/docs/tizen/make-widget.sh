#!/bin/bash

# This script generates a widget package cowhide-docs.wgt inside
# the root directory of this project.

CONFIG_FILE=config.xml
PROJECT_NAME=cowhide-docs
DOCS_DIR=$(pwd)
DIST_DIR=$(pwd)/../../dist

if [[ -f $PROJECT_NAME.wgt ]] ; then
  rm $PROJECT_NAME.wgt
fi

cd $DIST_DIR
zip -r $DOCS_DIR/$PROJECT_NAME.wgt * -x cowhide.zip

cd $DOCS_DIR
zip -j $PROJECT_NAME.wgt $CONFIG_FILE

zip -j $PROJECT_NAME.wgt ../cowhide-icon.png
