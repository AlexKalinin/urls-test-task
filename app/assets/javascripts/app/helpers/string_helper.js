
//got from here: http://stackoverflow.com/a/7616484/1685577
String.prototype.hashCode = function(){
    var hash = 0, i, chr, len;
    if (this.length === 0) return hash;
    for (i = 0, len = this.length; i < len; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

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