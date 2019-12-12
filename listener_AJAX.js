(function() {
    if (window.ajax_listener !== 1) {
        // Слушаем открытие соединения с сервером
        var open = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function() { 
            // Аргументы, с которыми было открыто соединение
            console.log('AJAX open:', arguments);
            console.log('Request type =', arguments[0]);
            console.log('Request URL =', arguments[1]);
            console.log('Is request async =', arguments[2]);
            return open.apply(this, arguments);
        };

        // Слушаем отправку запроса
        var send = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function() {
            // Аргументы, с которыми был отправлен запрос
            console.log('AJAX send:', arguments);
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