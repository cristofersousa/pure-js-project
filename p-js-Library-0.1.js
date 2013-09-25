/**
 * User: Guilherme Cabrini
 * Date-Time: 24/09/13 16:55
 * Project: Pure Javascript Library
 * Content: Only essentials javascripts helpers
 */

//////////////////////////////////
////////////[OBJECTS]/////////////
//////////////////////////////////

//[CLASS]
Object.prototype.hasClass = Object.prototype.hasClass ||
    function(cls) {
        return this.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    }

Object.prototype.addClass = Object.prototype.addClass ||
    function(cls) {
        if (!this.hasClass(cls)) if(this.className == "") this.className += cls; else this.className += " "+cls;
    }

Object.prototype.removeClass = Object.prototype.removeClass ||
    function(cls) {
        if (this.hasClass(cls)) {
            var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
            this.className = this.className.replace(reg,' ').replace(/\s+/g,' ');
            if(this.className.trim() == '') this.removeAttribute('class');
        }
    }

//////////////////////////////////
////////////[STRINGS]/////////////
//////////////////////////////////

//[TRIM]
String.prototype.trim = String.prototype.trim ||
    function(){
        return this.replace(/^\s+|\s+$/g,"")
    }

//[URL FORMAT]
String.prototype.toUrlFormat = String.prototype.toUrlFormat ||
    function(){
        return this.replace(/[á|ã|â|à]/gi,"a").replace(/[é|ê|è]/gi,"e").replace(/[í|ì|î]/gi,"i").replace(/[õ|ò|ó|ô]/gi,"o").replace(/[ú|ù|û]/gi,"u").replace(/[ç]/gi,"c").replace(/[ñ]/gi,"n").replace(/[á|ã|â]/gi,"a").replace(/\W/gi,"-").replace(/(\-)\1+/gi,"-").toLowerCase()
    }
