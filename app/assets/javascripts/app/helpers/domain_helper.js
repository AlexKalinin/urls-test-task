String.prototype.toDomain = function(){
    var str = this.toString();

    str = str.toLowerCase();

    str = str.replace('http://', '').replace('https://', '').replace('ftp://', '');

    //getting domain from url
    str = str.split('/').shift();
    if(String.isEmpty(str)){
        return false;
    }

    //test domain for regex
    if('' !== str.replace(/[\w\.\-]+/gmi, '')){
        return false;
    }

    //remove www, if this is not top level domain and if www in the begining of the string
    var unWww = str.split('.');
    if(unWww[0] == 'www'){
        unWww.shift();
        unWww = unWww.join('.');
        if(unWww.split('.').length > 1){
            str = unWww;
        }
    }


    //checking for dots: .; ..; ...; .a..;
    var isEmptyDot = false;
    str.split('.').map(function(val){
        if(String.isEmpty(val)){
            isEmptyDot = true;
        }
    });
    if(isEmptyDot){
        return false;
    }

    //checking for top level domains: localhost, com, ru, etc...
    if(str.split('.').length < 2){
        return false;
    }

    //checking for alfa domain exists
    if(AlfaDomains.indexOf(str.split('.').pop()) === -1){
        return false;
    }


    return str;
};