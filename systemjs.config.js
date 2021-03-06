(function (global) {
	// Map tells the System loader where to look for things.
	var map = {
		"app": "app",
		"@angular": "node_modules/@angular",
		"primeng": "node_modules/primeng",
		"angular2-in-memory-web-api": "node_modules/angular2-in-memory-web-api",
		"angular2-component-outlet": "node_modules/angular2-component-outlet",
		"angular2-cookie": "node_modules/angular2-cookie",
		"rxjs": "node_modules/rxjs",
		"@angular/platform-browser/animations" : "node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js",
        "@angular/animations/browser": "node_modules/@angular/animations/bundles/animations-browser.umd.js"
	};

	// Packages tells the System loader how to load when no filename and/or no extension.
	var packages = {
		"app": {main: "main.js", defaultExtension: "js"},
		"rxjs": {defaultExtension: "js"},
		"primeng": {defaultExtension: "js"},
		"angular2-component-outlet": {main: "index.js", defaultExtension: "js"},
		"angular2-in-memory-web-api": {main: "index.js", defaultExtension: "js"},
		"angular2-cookie": {defaultExtension: 'js', main: 'core.js'}
	};

	var ngPackageNames = [
		"common",
		"compiler",
		"core",
		"forms",
		"http",
		"platform-browser",
		"platform-browser-dynamic",
		"router",
		"router-deprecated",
		"upgrade",
		"animations",
		"material"
	];

	// Individual files (~300 requests):
	function packIndex(pkgName) {
		packages["@angular/" + pkgName] = {main: "index.js", defaultExtension: "js"};
	}

	// Bundled (~40 requests):
	function packUmd(pkgName) {
		packages["@angular/" + pkgName] = {main: "/bundles/" + pkgName + ".umd.js", defaultExtension: "js"};
	}

	// Most environments should use UMD; some (Karma) need the individual index files.
	var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

	// Add package entries for angular packages.
	ngPackageNames.forEach(setPackageConfig);

	var config = {
		map: map,
		packages: packages
	};

	System.config(config);
})(this);
