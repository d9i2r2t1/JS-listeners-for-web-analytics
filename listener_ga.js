// <script>
(function() {
    var gCounter = 0;
    (function gSearch() {
        if (window.ga && window.ga_listener !== 1) {
            var original_ga = window.ga;
            window.ga = function() {
                original_ga.apply(this, arguments);
                //выполняем действия в зависимости от значений аргументов ga()
                if (arguments[2] === 'Подключение') {
                    dataLayer.push({
                        'event': 'connection_ym'
                    });
                }
                if (arguments[4] == 'Покупка') {
                    dataLayer.push({
                        'event': 'purchase_ym'
                    });               
                }
            };
            window.ga_listener = 1;
        }
        else if (window.ga_listener !== 1 && gCounter < 100) {
            setTimeout(gSearch, 100);
            gCounter++;
        }
    })();
})();
// </script>