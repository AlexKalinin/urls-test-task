var AppContext = {};

var mainController = new MainController(AppContext);
var mainView = new MainView(AppContext);

AppContext.controller = mainController;
AppContext.view = mainView;



//todo: add server syncronyzation scheduller


//todo: create the model one way binding


//todo: handle the Enter key pressed on input
$(document).ready(function(){
    $(Configuration.jqselUrlForm).on('keypress', function(e){
        var keyCode = e.keyCode || e.which;

        if(keyCode === 13){ //Enter keycode
            mainController.urlAddRequest(mainView.getUrl());
            mainView.clearUrl();
            e.preventDefault();
            return false;
        }
    });
});

