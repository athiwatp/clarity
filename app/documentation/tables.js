var core = require('@angular/core');
var tablesDemoModule = require('clarity-demos/tables/demo/tables.demo.module');

// ALWAYS name the export AppComponent
exports.AppComponent = core.Component({
        // ALWAYS use selector my-app and this "dynamic" template
        selector: 'my-app',
        template: document.getElementById("app-template").innerHTML
    })
    .Class({
        constructor: function() {}
    });

// ALWAYS name the export demosModule
exports.DemosModule = tablesDemoModule.default;