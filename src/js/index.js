import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

import _ from 'lodash';

// const getHeader = () => {
//     const helloWebpack = _.join(_.values({
//         a: 'Hello',
//         b: 'webpack'
//     }), ' ');
//
//     const element = document.createElement('h1');
//
//     element.innerHTML = helloWebpack;
//
//     return element;
// };
//
// document.body.appendChild(getHeader());

$(document).ready(function(){
    // For slider Threethixty
    $(function () {
        //Load the image URLs into an Array.
        var arr = new Array();
        $("#dvImages img").each(function () {
            arr.push($(this).attr("src"));
        });

        //Set the first image URL as source for the Product.
        $("#product1, #product2, #product3").attr("src", arr[0]);

        //Click mode.
        $("#product1").threesixty({ images: arr,
            // method: 'click',
            sensibility: 2,
            navigation: true,
            disableSpin: true,
            responsive: true,
            drag: true
        });
    });

    // for smooth scroll
    $('.go_to').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});
