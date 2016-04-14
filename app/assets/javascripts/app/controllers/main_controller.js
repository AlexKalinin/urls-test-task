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
            //validations are here
            //todo: create validations


            //ignore dublicates
            if(-1 !== _inst.urlsModel.indexOf()){
                Notificator.warn("urlAddRequest(): the domain: '" + uDomain + "' already exists!");
                return;
            }

            _inst.urlsModel.push(uDomain);

            //todo: sync to server
        };

        _inst = this;
    }
}());
