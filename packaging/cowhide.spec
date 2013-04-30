Name:       cowhide
<<<<<<< HEAD
Version:    0.1.4
=======
Version:    0.1.3
>>>>>>> 8a47931... Add initial Tizen packaging.
Release:    0
Summary:    UI Framework Library based on Twitter Bootstrap
Group:      Development/Other
License:    Apache 2.0
BuildArch:  noarch

Source0:    %{name}-%{version}.tar.gz

%description
UI Framework Library based on Twitter Bootstrap

%prep
<<<<<<< HEAD
tar xvfz %{_sourcedir}/%{name}-%{version}.tar.gz

%install
mkdir -p %{buildroot}/usr/share/cowhide
cp -ar %{name}-%{version}/dist/* %{buildroot}/usr/share/cowhide/
=======

%build

%install
mkdir -p /usr/share/cowhide
cp dist/* /usr/share/cowhide/

%post
>>>>>>> 8a47931... Add initial Tizen packaging.

%files
/usr/share/cowhide/*

%changelog

* Tue Apr 30 2013 Salvatore Iovene <salvatore.iovene@intel.com> 0.1.4
- Initial packaging
