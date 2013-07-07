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
    var fileTypes = [".jpg", ".jpeg", ".png", ".gif"];
    var allLinks = $('a');
    
    allLinks.each(function(){
        var element = $(this);
        
        if (validImageLink(element)) {
            element.replaceWith("<img src=\""+$(this).attr('href')+"\">"+$(this).text()+"</img>");
        }
    });
    
    $('.inlineimg').remove();
    
    function validImageLink(element) {
        
        var returnValue = false;
        
        $.each(fileTypes, function(index, value) {
            if (element.text().toLowerCase().indexOf(value) > -1) {
                returnValue = true;
                return false; // Breaks the jQuery loop
            }
        });
        
        return returnValue;
    }
});