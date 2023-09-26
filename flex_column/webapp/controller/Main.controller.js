sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.proy.flexcolumn.controller.Main", {
            onInit: function () {
                var sJsonPath = jQuery.sap.getModulePath("com/proy/flexcolumn", "/localservice/products.json");
                var oModel = new JSONModel(sJsonPath);
                oModel.setSizeLimit(10000);
                this.getOwnerComponent().setModel(oModel, "productsModel");
                console.log(oModel);
            }
        });
    });
