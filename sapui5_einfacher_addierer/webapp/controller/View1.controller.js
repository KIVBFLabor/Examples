sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("test1000.controller.View1", {
		/**
	*@memberOf test1000.controller.View1
	*/
test: function () {
			var zahl1 = this.getView().byId("__input0").getValue();
			var zahl2 = this.getView().byId("__input1").getValue();
			
			var ergebnis = Number(zahl1) + Number(zahl2);
			
			
			this.getView().byId("__label0").setText(ergebnis);
			
		}
	});
});