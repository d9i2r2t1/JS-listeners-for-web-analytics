(function() {
    var yaCounter = 0;
    function yaSearch() {
        if (window.ym && window.ya_listener !== 1) {
            window.zm = window.ym;
            window.ym = function() {
                window.zm.a.push(arguments);
                // Если перехватили метод reachGoal - выполняем нужные действия
                if (arguments[1] === 'reachGoal') {
                    console.log({
                        'event': 'yandex metrika reachGoal() was intercepted',
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