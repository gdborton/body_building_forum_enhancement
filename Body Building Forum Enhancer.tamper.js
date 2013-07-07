// ==UserScript==
// @name       Body Building Forum Enhancer
// @namespace  http://www.garyborton.com
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js
// @version    0.1
// @description  Changes links to media to embedded media.
// @match      http://forum.bodybuilding.com/*
// @copyright  2013+, Gary Borton
// ==/UserScript==

$(document).ready(function(){
    
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
    	return function( elem ) {
        	return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    	};
	});
    
    $('a:contains(.jpg)').each(function(){
        $(this).replaceWith("<img src=\""+$(this).attr('href')+"\">"+$(this).text()+"</img>");
    });
});