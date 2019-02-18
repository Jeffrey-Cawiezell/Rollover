"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");           
    
    // preload images 
    var links = $("image_list").getElementsByTagName("a");
    var i, link, image;
    preloadImage(links[0].href);
    preloadImage(links[1].href);
    preloadImage(links[2].href);
    preloadImage(links[3].href);

    // attach mouseover and mouseout events for each image
    image1.onmouseover = function() {
        image1.src = links[0].href;
    };
    image1.onmouseout = function() {
        image1.src = links[2].href;
    };
    
    image2.onmouseover = function() {
        image2.src = links[1].href;
    };
    image2.onmouseout = function() {
        image2.src = links[3].href;
    };
};
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}
