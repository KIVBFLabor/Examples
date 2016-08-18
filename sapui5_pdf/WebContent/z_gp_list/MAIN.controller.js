sap.ui.controller("z_gp_list.MAIN", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf z_gp_list.MAIN
	 */
	onInit : function() {

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData(
				"/sap/opu/odata/sap/Z_GP_LIST_SRV/gp_listSet?$format=json", "",
				false);

		this.getView().setModel(oModel);

	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf z_gp_list.MAIN
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf z_gp_list.MAIN
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf z_gp_list.MAIN
	 */
	// onExit: function() {
	//
	// }

	onPress : function(evt) {
		// MessageToast.show(evt.getSource().getId() + " Pressed");
		console.log("test vor");

		  var oModel = new sap.ui.model.json.JSONModel();


          $.ajax({
                      //url: "http://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json",
              url: "/sap/opu/odata/sap/Z_GP_LIST_SRV/gp_listSet?$format=json",        
        	  dataType: "json",
                      success: function(response){

                                  //oModel.setData(response.value);
                                  //var data = response.value;
                    	oModel.setData(response.d.results);
                          var data = response.d.results;
                                  console.log(data);                           

                                  var columns = [
                                                 {title: "Id", key: "partner"},
                                                 {title: "Name", key: "name"},
                                             ];

                                  var doc = new jsPDF('p', 'pt', 'a2');
                                  doc.autoTable(columns, data, {});
                                  doc.text(35, 25, "Kundenliste");
                                  doc.save('table.pdf');

                      }

          });



		console.log("test nach");

	}

});