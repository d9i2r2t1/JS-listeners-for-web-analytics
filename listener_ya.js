// <script>
(function() {
    var yaCounter = 0;
    function yaSearch() {
        if (window.ym && window.ya_listener !== 1) {
            window.zm = window.ym;
            window.ym = function() {
                window.zm.a.push(arguments);
                //выполняем действия в зависимости от значений аргументов ya()
                if (arguments[1] === 'reachGoal') {
                    console.log({
                        'event': 'metrika',
                        'event_param': arguments[2]
                    });    
                }
            };
            window.ya_listener = 1;
        }
        else if (window.ya_listener !== 1 && yaCounter < 100) {
            setTimeout(yaSearch, 100);
            yaCounter++;
        }
    }
    setTimeout(yaSearch, 1000);
})();
// </script>