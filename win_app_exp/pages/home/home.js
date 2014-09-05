(function () {
    "use strict";
    console.log('exec home.js');

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
          console.log('home.js -> page ready');
          WinJS.Utilities.query('a').listen('click', this.linkClickHandler, false);
        },

        linkClickHandler: function (ev) {
          console.log('linkClickHandler')
          ev.preventDefault();
          var link = ev.target
          WinJS.Navigation.navigate(link.href);
        }
    });
})();
