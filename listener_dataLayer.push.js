(function() {
    var dlCounter = 0;
    (function dlSearch() {
        if (window.dataLayer && window.dl_listener !== 1) {
            var originalPush = window.dataLayer.push;
            window.dataLayer.push = function() {
                originalPush.apply(this, arguments);
                // Выполняем нужные действия
                console.log({
                    'event': 'dataLayer.push was intercepted',
                    'event_param': arguments
                });    
            };
            window.dl_listener = 1;
        }
        else if (window.dl_listener !== 1 && dlCounter < 100) {
            setTimeout(dlSearch, 100);
            dlCounter++;
        }
    })();
})();