var Configuration = {
    //jquery selectors for view
    jqselUrlForm: '.urlForm',
    jqselInputUrl: '.urlForm input[name="url"]',
    jqselResultContainer: ".items-container",

    //urls for API
    ApiServerUrlGetAll: '/api/urls', //get
    ApiServerUrlPutAll: '/api/urls', //post

    //Syncronization timeout in milliseconds
    ApiSyncTimeout: 15 * 1000,


    //Model change check timeout
    CoreModelCnangeCheckTimeout: 300


};