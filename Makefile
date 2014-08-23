.PHONEY: build

all: build

run: build
	node server.js

node_packages/: package.json
	npm install

bower_components/: bower.json
	bower install

build: node_packages/ bower_components/ server.js
