import jQuery from 'jquery';
import './../scss/styles.scss';
import './../js/threesixty.js';
// import _ from 'lodash';

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

// Threesixty images function
$(function() {

    let arr = new Array();
    $("#dvImages img").each(function () {
        arr.push($(this).attr("src"));
    });

    $("#product1, #product2, #product3").attr("src", arr[0]);

    $('.threesixty').ThreeSixty({
        images: arr,
        method: 'click',
        sensibility: 2,
        totalFrames: 52, // Total no. of image you have for 360 slider
        endFrame: 52, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imagePath: './../images/',
        ext: '.png',
        height: 1000,
        width: 447,
        responsive: true,
        disableSpin: true
    });
    console.log('z nen');

});
