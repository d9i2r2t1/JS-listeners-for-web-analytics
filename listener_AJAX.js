// <script>
(function() {
    if (window.ajax_listener !== 1) {
        var send = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function() {
            this.addEventListener('load', function() {
                //выполняем нужные действия, когда запрос отправится
                if(this.status === 200) {
                    console.log(arguments);
                }
            });
            return send.apply(this, arguments);
        };
        window.ajax_listener = 1;
    }
})();
// </script>