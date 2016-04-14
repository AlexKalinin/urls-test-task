$(document).ready(function () {
    var AppContext = {};

    var mainController = new MainController(AppContext);
    var mainView = new MainView(AppContext);

    AppContext.controller = mainController;
    AppContext.view = mainView;

    mainController.syncSendToServer();

    //the model one way binding
    var lastModelHash;
    window.setInterval(function () {
        var newModelHash = mainController.urlsModel.join("_").hashCode();
        if (lastModelHash !== newModelHash) {
            Notificator.debug("Got model change with hash: " + newModelHash + " old hash was: " + lastModelHash);
            mainView.render();
            lastModelHash = newModelHash;
        }
    }, Configuration.CoreModelCnangeCheckTimeout);

    //handling the Enter key pressed on input
    $(Configuration.jqselUrlForm).on('keypress', function (e) {
        var keyCode = e.keyCode || e.which;

        if (keyCode === 13) { //Enter keycode
            mainController.urlAddRequest(mainView.getUrl());
            mainView.clearUrl();
            e.preventDefault();
            return false;
        }
    });

    //server syncronyzation scheduller
    window.setInterval(function () {
        mainController.syncSendToServer()
    }, Configuration.ApiSyncTimeout);

});

