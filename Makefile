PREFIX ?= /usr
DESTDIR = ${PREFIX}/share/cowhide

install:
	mkdir -p ${DESTDIR}
	cp -av dist/*.js ${DESTDIR}
	cp -av dist/*.css ${DESTDIR}
	cp -av dist/images ${DESTDIR}

