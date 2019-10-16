// <script>
(function() {
    var counter_id = 123456789;
    var yaCounter = 0;
    (function yaSearch() {
        if (window['yaCounter' + counter_id] && window.yaReachGoal_listener !== 1) {
            var original_yaReachGoal = window['yaCounter' + counter_id].reachGoal;
            window['yaCounter' + counter_id].reachGoal = function() {
                original_yaReachGoal.apply(this, arguments);
                //выполняем действия в зависимости от значений аргументов yaCounterXXXXXXXX.reachGoal()
                console.log({
                    'event': 'metrika',
                    'event_param': arguments
                });    
            };
            window.yaReachGoal_listener = 1;
        }
        else if (window.yaReachGoal_listener !== 1 && yaCounter < 100) {
            setTimeout(yaSearch, 100);
            yaCounter++;
        }
    })();
})();
// </script>