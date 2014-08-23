.PHONEY: build

all: build

run: build
	node server.js

node_packages/: package.json
	npm install

build: node_packages/ server.js
