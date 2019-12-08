(function() {
    var gCounter = 0;
    (function gSearch() {
        if (window.ga && window.ga_listener !== 1) {
            var original_ga = window.ga;
            window.ga = function() {
                original_ga.apply(this, arguments);
                // Выполняем нужные действия
                console.log({
                    'event': 'ga() was intercepted',
                    'event_param': arguments
                }); 
            };
            window.ga_listener = 1;
        }
        else if (window.ga_listener !== 1 && gCounter < 100) {
            setTimeout(gSearch, 100);
            gCounter++;
        }
    })();
})();