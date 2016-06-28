sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("test_data_binding.controller.View1", {
		onInit: function () {
		
		},
		/**
	*@memberOf test_data_binding.controller.View1
	*/
on_Search: function () {

	var req = new XMLHttpRequest();
			var URL = "https://netflixroulette.net/api/api.php?";
			var queryString = "type=json";
			queryString += "&actor=" + this.getView().byId("__input0").getValue();
			req.open("GET", URL + queryString.replace(/\s/gi, "%20"), false);
			req.send(null);
			if (req.status === 200) {
				var model = new sap.ui.model.json.JSONModel();
				model.setJSON(req.responseText);
				this.getView().setModel(model);	// cast = response[count].show_cast;
                                    // this.getView().byId("__area1").setValue("Schauspieler: " + cast);
                                    // title = response[count].show_title;
                                    // this.getView().byId("__input3").setValue("Titel: " + title);
                                    // director = response[count].director;
                                    // this.getView().byId("__input5").setValue("Regisseur: " + director);
                                    // summary = response[count].summary;
                                    // this.getView().byId("__area0").setValue("Handlung: " + summary);
                                    // poster = response[count].poster;
                                    // this.getView().byId("__image0").setSrc(poster);
			}


		}
	});
});