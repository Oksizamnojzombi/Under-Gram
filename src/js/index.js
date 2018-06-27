import './../scss/styles.scss';
import './../js/threesixty.js';
import _ from 'lodash';

// const getHeader = () => {
    // const helloWebpack = _.join(_.values({
    //     a: 'Hello',
    //     b: 'webpack'
    // }), ' ');
    //
    // const element = document.createElement('h1');
    //
    // element.innerHTML = helloWebpack;
    //
    // return element;
// };
//
// document.body.appendChild(getHeader());


const parentEl = document.getElementById("id"),
    img = document.createElement("IMG");

img.src = "./1.png";


parentEl.appendChild(img);



// Threesixty images function
$(function() {

    // var arr = new Array();
    // $("#dvImages img").each(function () {
    //     arr.push($(this).attr("src"));
    // });
    //
    // $("#product1, #product2, #product3").attr("src", arr[0]);

    $('.threesixty').ThreeSixty({
        totalFrames: 52,
        endFrame: 52,
        currentFrame: 1,
        framerate: 20,
        imgList: '.threesixty_images',
        imagePath: './src/images/',
        ext: '.png',
        height: 1000,
        width: 447,
        responsive: true,
        disableSpin: true
    });
    console.log('z nen');

});
