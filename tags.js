'use strict';

function getTags(text) {
	var regexp = /\B\#\w\w+\b/g
    var result = text.match(regexp);
    var final = [];
    if (result) {
    	for(var i=0; i < result.length; i++){
    		if( result[i] == result[i].toLowerCase() && 2 < result[i].length < 121 ){
    			final.push(result[i]);
    		}
    	}
        console.log(result);
        return final;
    } else {
        return [];
    }
}

console.log(getTags("I hate when people smoke e-cigarettes indoors. #annoying #rude #whygodwhy"));

module.exports = {
  getTags: getTags
};
