Name:       cowhide
Version:    0.1.3
Release:    0
Summary:    UI Framework Library based on Twitter Bootstrap
Group:      Development/Other
License:    Apache 2.0
BuildArch:  noarch

Source0:    %{name}-%{version}.tar.gz

%description
UI Framework Library based on Twitter Bootstrap

%prep

%build

%install
mkdir -p /usr/share/cowhide
cp dist/* /usr/share/cowhide/

%post

%files
/usr/share/cowhide/*

%changelog

* Tue Apr 30 2013 Salvatore Iovene <salvatore.iovene@intel.com> 0.1.4
- Initial packaging
