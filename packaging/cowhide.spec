Name:       cowhide
Version:    0.1.3
Release:    0
Summary:    UI Framework Library based on Twitter Bootstrap
Group:      Development/Other
License:    Apache 2.0
BuildArch:  noarch
BuildRequires:  grunt-cli
%ifarch %{arm}
BuildRequires:  nodejs-x86-arm
%else
BuildRequires:  nodejs
%endif

Source0:    %{name}-%{version}.tar.gz

%description
UI Framework Library based on Twitter Bootstrap

%prep
%setup -q

%build
grunt

%install
make PREFIX=%{buildroot} install

%post

%files
/usr/share/cowhide/*

###############################
%package -n cowhide
BuildArch:  noarch
Summary:   Cowhide
%Description -n Cowhide
    UI Framework Library based on Twitter Bootstrap
###############################

%changelog

* Tue Apr 30 2013 Salvatore Iovene <salvatore.iovene@intel.com> 0.1.4
- Initial packaging
