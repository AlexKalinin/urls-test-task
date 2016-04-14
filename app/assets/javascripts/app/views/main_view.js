var MainView;
(function(){
    var _inst;
    MainView = function MainView(context){
        if(_inst){
            return _inst;
        }
        this.context = context;

        //fields and methods
        //...

        this.getUrl = function(){
          return $(Configuration.jqselInputUrl).val();
        };

        this.clearUrl = function(){
            return $(Configuration.jqselInputUrl).val('');
        };

        this.addItem = function(url){
          $(Configuration.jqselResultContainer).prepend($('<a href="javascript:void(0)" class="list-group-item">' + url + '</a>'));
        };

        this.clearItems = function(){
            $(Configuration.jqselResultContainer).html('');
        };

        this.render = function(){
            _inst.clearItems();
            var urls = _inst.context.controller.urlsModel;
            for(var i = 0; i < urls.length; i++){
                _inst.addItem(urls[i]);
            }
        };


        _inst = this;
    }
}());
