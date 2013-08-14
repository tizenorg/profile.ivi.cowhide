Name:       cowhide
Version:    0.1.5
Release:    0
Summary:    UI Framework Library based on Twitter Bootstrap
Group:      Development/Other
License:    Apache 2.0
BuildArch:  noarch

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


# "docs" package, including documentation and examples
%package docs
Summary: UI Framework Library based on Twitter Bootstrap, documentation package

%description docs
UI Framework Library based on Twitter Bootstrap, documentation package

%files docs
/usr/share/cowhide/docs


%changelog

* Wed Aug 14 2013 Salvatore Iovene <salvatore.iovene@intel.com> 0.1.5
- Package the library and the docs separately

* Tue Apr 30 2013 Salvatore Iovene <salvatore.iovene@intel.com> 0.1.4
- Initial packaging

