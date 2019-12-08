(function() {
    if (window.ajax_listener !== 1) {
        var send = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function() {
            this.addEventListener('load', function() {
                // Когда запрос успешно обработается сервером - выполняем нужные действия
                if(this.status === 200) {
                    console.log({
                        'event': 'AJAX was intercepted',
                        'event_param': arguments
                    }); 
                }
            });
            return send.apply(this, arguments);
        };
        window.ajax_listener = 1;
    }
})();