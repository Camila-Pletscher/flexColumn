/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comproy/flex_column/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
