PROJECT = CowhideDocs

VERSION := 0.1.17
PACKAGE = $(PROJECT)-$(VERSION)

INSTALL_DIR = ${DESTDIR}/opt/usr/apps/.preinstallWidgets

FILES = dist/*.js dist/*.css docs/cowhide-icon.png docs/tizen/config.xml
DIRS = images docs

all:
	@echo "Nothing to build"

widget:
	zip -rj $(PROJECT).wgt $(FILES)
	(cd dist; zip -r ../$(PROJECT).wgt $(DIRS))
