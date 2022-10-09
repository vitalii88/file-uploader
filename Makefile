release:
	npm run release
install:
	npm install
start:
	make -C server start
start-dev:
	make -C server dev
first-init:
	make -C server env-init & make -C server install

