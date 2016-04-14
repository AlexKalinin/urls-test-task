String.isEmpty = function(str){
    if(typeof str === 'string'){
        str = str.trim();
    }

    switch(str){
        case "":
        case 0:
        case null:
        case false:
        case undefined:
            return true;
        default:
            return false;
    }
};