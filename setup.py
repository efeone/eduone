from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in eduone/__init__.py
from eduone import __version__ as version

setup(
	name="eduone",
	version=version,
	description="eduone is an Extension for ERPNext Education Module",
	author="efeone",
	author_email="info@efeone.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
