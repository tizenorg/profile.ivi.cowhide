Name:       cowhide
Version:    0.1.17
Release:    0
Summary:    UI Framework Library based on Twitter Bootstrap
Group:      Development/Other
License:    Apache 2.0
BuildArch:  noarch
BuildRequires: zip
Requires: wrt-installer

Source0:    %{name}-%{version}.tar.gz

# Main description
%description
UI Framework Library based on Twitter Bootstrap

%prep
tar xvfz %{_sourcedir}/%{name}-%{version}.tar.gz

%install
mkdir -p %{buildroot}/usr/share/cowhide
cp -ar %{name}-%{version}/dist/*.js %{buildroot}/usr/share/cowhide/
cp -ar %{name}-%{version}/dist/*.css %{buildroot}/usr/share/cowhide/
cp -ar %{name}-%{version}/dist/images %{buildroot}/usr/share/cowhide/
cp -ar %{name}-%{version}/dist/README.md %{buildroot}/usr/share/cowhide/
cp -ar %{name}-%{version}/dist/docs %{buildroot}/usr/share/cowhide/
mkdir -p %{buildroot}/opt/usr/apps/.preinstallWidgets
cp -ar %{name}-%{version}/CowhideDocs.wgt %{buildroot}/opt/usr/apps/.preinstallWidgets

# "lib" package, including the development files
%package lib
Summary: UI Framework Library based on Twitter Bootstrap

%description lib
UI Framework Library based on Twitter Bootstrap

%files lib
/usr/share/cowhide/*.js
/usr/share/cowhide/*.css
/usr/share/cowhide/images
/usr/share/cowhide/README.md

%build
(cd %{name}-%{version}; make widget)

%package docs
Summary: UI Framework Library based on Twitter Bootstrap, documentation package

%description docs
UI Framework Library based on Twitter Bootstrap, documentation package

%files docs
/usr/share/cowhide/docs
/opt/usr/apps/.preinstallWidgets/CowhideDocs.wgt

%post docs
if [ -f /opt/usr/apps/.preinstallWidgets/preinstallDone ]; then
	echo "Installing package"
	wrt-installer -i /opt/usr/apps/.preinstallWidgets/CowhideDocs.wgt
fi

%postun docs
wrt-installer -un 1234567890.CowhideDocs


%changelog

* Thu Feb 20 2014 Salvatore Iovene <salvatore.iovene@intel.com> 0.1.16
- Add NightMode support via websocket connection

* Wed Aug 14 2013 Salvatore Iovene <salvatore.iovene@intel.com> 0.1.5
- Package the library and the docs separately

* Tue Apr 30 2013 Salvatore Iovene <salvatore.iovene@intel.com> 0.1.4
- Initial packaging

