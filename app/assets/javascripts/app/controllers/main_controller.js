var MainController;
(function(){
    var _inst;
    MainController = function MainController(context){
        if(_inst){
            return _inst;
        }
        this.context = context;

        this.urlsModel = [];

        //fields and methods
        //...

        this.urlAddRequest = function(url){
            var uDomain = url.toDomain();
            if(String.isEmpty(uDomain)){
                Notificator.warn('Wrong domain "' + url + '"!');
                return;
            }

            Notificator.debug("urlAddRequest(): add url: " + url);

            //ignore dublicates
            if(-1 !== _inst.urlsModel.indexOf(uDomain)){
                Notificator.warn("urlAddRequest(): the domain: '" + uDomain + "' already exists!");
                return;
            }

            _inst.urlsModel.push(uDomain);
            _inst.syncSendToServer();
        };


        this.syncSendToServer = function(){
            $.ajax({
                type: "POST",
                url: Configuration.ApiServerUrlPutAll,
                data: {urls: _inst.urlsModel}
            }).done(function(response){
                if(response.rsp_status){
                    Notificator.debug('syncSendToServer(): successfully sent data to server with result: ' + JSON.stringify(response));
                    _inst.syncGetFromServer();
                }else{
                    Notificator.warn('syncSendToServer(): fail with server: ' + + JSON.stringify(response));
                }
            }).fail(function(){
                Notificator.warn('syncSendToServer(): fail with server: ' + this);
            });
        };

        this.syncGetFromServer = function(){
            $.ajax({
                type: "GET",
                url: Configuration.ApiServerUrlGetAll
            }).done(function(response){
                if(response.rsp_status){
                    Notificator.debug('syncGetFromServer(): successfully received data from server with result: ' + JSON.stringify(response));
                    _inst.urlsModel = response.urls || [];
                }else{
                    Notificator.warn('syncGetFromServer(): fail with server: ' + JSON.stringify(response));
                }
            }).fail(function(){
                Notificator.warn('syncGetFromServer(): fail with server: ' + this);
            });
        };

        _inst = this;
    }
}());
