(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
          WinJS.Utilities.query('a').listen('click', this.linkClickHandler, false);
        },

        linkClickHandler: function (ev) {
          ev.preventDefault();
          var link = ev.target
          WinJS.Navigation.navigate(link.href);
        }
    });
})();
