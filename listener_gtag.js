// <script>
// gtag() используется, например, для динамического ремаркетинга Google Ads
(function() {
    var gCounter = 0;
    (function gSearch() {
        if (window.gtag && window.gtag_listener !== 1) {
            var original_gtag = window.gtag;
            window.gtag = function() {
                original_gtag.apply(this, arguments);
                //выполняем действия в зависимости от значений аргументов gtag()
                console.log(arguments);
            };
            window.gtag_listener = 1;
        }
        else if (window.gtag_listener !== 1 && gCounter < 100) {
            setTimeout(gSearch, 100);
            gCounter++;
        }
    })();
})();
// </script>