//https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
//http://bunkat.github.io/later/

var CRONManager = (function () {
    "use strict";

    // Instance stores a reference to the Singleton
    var cron_manager_instance;

    function cron_manager_init() {

        // Private variables

        // Private methods

        return {
            // Public variables

            // Public methods

        };

    };

    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't  
        getInstance: function () {
            //if (!cron_manager_instance)
            //    cron_manager_instance = cron_manager_init();

            //return cron_manager_instance;
            return later;
        }

    }
}());