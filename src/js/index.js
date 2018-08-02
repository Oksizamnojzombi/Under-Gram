import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

import _ from 'lodash';

/**
 * For Canvas Loader
 */
(function(w){var k=function(b,c){typeof c=="undefined"&&(c={});this.init(b,c)},a=k.prototype,o,p=["canvas","vml"],i=["oval","spiral","square","rect","roundRect"],x=/^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,v=navigator.appVersion.indexOf("MSIE")!==-1&&parseFloat(navigator.appVersion.split("MSIE")[1])===8?true:false,y=!!document.createElement("canvas").getContext,q=true,n=function(b,c,a){var b=document.createElement(b),d;for(d in a)b[d]=a[d];typeof c!=="undefined"&&c.appendChild(b);return b},m=function(b,
c){for(var a in c)b.style[a]=c[a];return b},t=function(b,c){for(var a in c)b.setAttribute(a,c[a]);return b},u=function(b,c,a,d){b.save();b.translate(c,a);b.rotate(d);b.translate(-c,-a);b.beginPath()};a.init=function(b,c){if(typeof c.safeVML==="boolean")q=c.safeVML;try{this.mum=document.getElementById(b)!==void 0?document.getElementById(b):document.body}catch(a){this.mum=document.body}c.id=typeof c.id!=="undefined"?c.id:"canvasLoader";this.cont=n("div",this.mum,{id:c.id});if(y)o=p[0],this.can=n("canvas",
this.cont),this.con=this.can.getContext("2d"),this.cCan=m(n("canvas",this.cont),{visibility:"hidden"}),this.cCon=this.cCan.getContext("2d");else{o=p[1];if(typeof k.vmlSheet==="undefined"){document.getElementsByTagName("head")[0].appendChild(n("style"));k.vmlSheet=document.styleSheets[document.styleSheets.length-1];var d=["group","oval","roundrect","fill"],e;for(e in d)k.vmlSheet.addRule(d[e],"behavior:url(#default#VML); position:absolute;")}this.vml=n("group",this.cont)}this.setColor(this.color);
this.draw();m(this.cont,{visibility:"hidden"})};a.cont={};a.can={};a.con={};a.cCan={};a.cCon={};a.timer={};a.activeId=0;a.diameter=40;a.setDiameter=function(b){this.diameter=Math.round(Math.abs(b));this.redraw()};a.getDiameter=function(){return this.diameter};a.cRGB={};a.color="#000000";a.setColor=function(b){this.color=x.test(b)?b:"#000000";this.cRGB=this.getRGB(this.color);this.redraw()};a.getColor=function(){return this.color};a.shape=i[0];a.setShape=function(b){for(var c in i)if(b===i[c]){this.shape=
b;this.redraw();break}};a.getShape=function(){return this.shape};a.density=40;a.setDensity=function(b){this.density=q&&o===p[1]?Math.round(Math.abs(b))<=40?Math.round(Math.abs(b)):40:Math.round(Math.abs(b));if(this.density>360)this.density=360;this.activeId=0;this.redraw()};a.getDensity=function(){return this.density};a.range=1.3;a.setRange=function(b){this.range=Math.abs(b);this.redraw()};a.getRange=function(){return this.range};a.speed=2;a.setSpeed=function(b){this.speed=Math.round(Math.abs(b))};
a.getSpeed=function(){return this.speed};a.fps=24;a.setFPS=function(b){this.fps=Math.round(Math.abs(b));this.reset()};a.getFPS=function(){return this.fps};a.getRGB=function(b){b=b.charAt(0)==="#"?b.substring(1,7):b;return{r:parseInt(b.substring(0,2),16),g:parseInt(b.substring(2,4),16),b:parseInt(b.substring(4,6),16)}};a.draw=function(){var b=0,c,a,d,e,g,k,j,r=this.density,s=Math.round(r*this.range),l,h,q=0;h=this.cCon;var f=this.diameter;if(o===p[0]){h.clearRect(0,0,1E3,1E3);t(this.can,{width:f,height:f});
for(t(this.cCan,{width:f,height:f});b<r;){l=b<=s?1-1/s*b:l=0;k=360-360/r*b;j=k/180*Math.PI;h.fillStyle="rgba("+this.cRGB.r+","+this.cRGB.g+","+this.cRGB.b+","+l.toString()+")";switch(this.shape){case i[0]:case i[1]:c=f*0.07;e=f*0.47+Math.cos(j)*(f*0.47-c)-f*0.47;g=f*0.47+Math.sin(j)*(f*0.47-c)-f*0.47;h.beginPath();this.shape===i[1]?h.arc(f*0.5+e,f*0.5+g,c*l,0,Math.PI*2,false):h.arc(f*0.5+e,f*0.5+g,c,0,Math.PI*2,false);break;case i[2]:c=f*0.12;e=Math.cos(j)*(f*0.47-c)+f*0.5;g=Math.sin(j)*(f*0.47-c)+
f*0.5;u(h,e,g,j);h.fillRect(e,g-c*0.5,c,c);break;case i[3]:case i[4]:a=f*0.3,d=a*0.27,e=Math.cos(j)*(d+(f-d)*0.13)+f*0.5,g=Math.sin(j)*(d+(f-d)*0.13)+f*0.5,u(h,e,g,j),this.shape===i[3]?h.fillRect(e,g-d*0.5,a,d):(c=d*0.55,h.moveTo(e+c,g-d*0.5),h.lineTo(e+a-c,g-d*0.5),h.quadraticCurveTo(e+a,g-d*0.5,e+a,g-d*0.5+c),h.lineTo(e+a,g-d*0.5+d-c),h.quadraticCurveTo(e+a,g-d*0.5+d,e+a-c,g-d*0.5+d),h.lineTo(e+c,g-d*0.5+d),h.quadraticCurveTo(e,g-d*0.5+d,e,g-d*0.5+d-c),h.lineTo(e,g-d*0.5+c),h.quadraticCurveTo(e,
g-d*0.5,e+c,g-d*0.5))}h.closePath();h.fill();h.restore();++b}}else{m(this.cont,{width:f,height:f});m(this.vml,{width:f,height:f});switch(this.shape){case i[0]:case i[1]:j="oval";c=140;break;case i[2]:j="roundrect";c=120;break;case i[3]:case i[4]:j="roundrect",c=300}a=d=c;e=500-d;for(g=-d*0.5;b<r;){l=b<=s?1-1/s*b:l=0;k=270-360/r*b;switch(this.shape){case i[1]:a=d=c*l;e=500-c*0.5-c*l*0.5;g=(c-c*l)*0.5;break;case i[0]:case i[2]:v&&(g=0,this.shape===i[2]&&(e=500-d*0.5));break;case i[3]:case i[4]:a=c*
0.95,d=a*0.28,v?(e=0,g=500-d*0.5):(e=500-a,g=-d*0.5),q=this.shape===i[4]?0.6:0}h=t(m(n("group",this.vml),{width:1E3,height:1E3,rotation:k}),{coordsize:"1000,1000",coordorigin:"-500,-500"});h=m(n(j,h,{stroked:false,arcSize:q}),{width:a,height:d,top:g,left:e});n("fill",h,{color:this.color,opacity:l});++b}}this.tick()};a.clean=function(){if(o===p[0])this.con.clearRect(0,0,1E3,1E3);else{var b=this.vml;if(b.hasChildNodes())for(;b.childNodes.length>=1;)b.removeChild(b.firstChild)}};a.redraw=function(){this.clean();
this.draw()};a.reset=function(){typeof this.timer==="number"&&(this.hide(),this.show())};a.tick=function(){var b=this.con,a=this.diameter;typeof timer!=="number"&&(this.activeId+=360/this.density*this.speed);o===p[0]?(b.clearRect(0,0,a,a),u(b,a*0.5,a*0.5,this.activeId/180*Math.PI),b.drawImage(this.cCan,0,0,a,a),b.restore()):(this.activeId>=360&&(this.activeId-=360),m(this.vml,{rotation:this.activeId}))};a.show=function(){if(typeof this.timer!=="number"){var a=this;this.timer=self.setInterval(function(){a.tick()},
Math.round(1E3/this.fps));m(this.cont,{visibility:"visible"})}};a.hide=function(){typeof this.timer==="number"&&(clearInterval(this.timer),delete this.timer,m(this.cont,{visibility:"hidden"}))};a.kill=function(){var a=this.cont;typeof this.timer==="number"&&this.hide();o===p[0]?(a.removeChild(this.can),a.removeChild(this.cCan)):a.removeChild(this.vml);for(var c in this)delete this[c]};w.CanvasLoader=k})(window);


/**
 * ThreeSixty JS
 * We wrap all our code in the jQuery "DOM-ready" function to make sure the script runs only
 * after all the DOM elements are rendered and ready to take action
 */
$(document).ready(function () {
    // Tells if the app is ready for user interaction
    var ready = false,
        // Tells the app if the user is dragging the pointer
        dragging = false,
        // Stores the pointer starting X position for the pointer tracking
        pointerStartPosX = 0,
        // Stores the pointer ending X position for the pointer tracking
        pointerEndPosX = 0,
        // Stores the distance between the starting and ending pointer X position in each time period we are tracking the pointer
        pointerDistance = 0,

        // The starting time of the pointer tracking period
        monitorStartTime = 0,
        // The pointer tracking time duration
        monitorInt = 10,
        // A setInterval instance used to call the rendering function
        ticker = 0,
        // Sets the speed of the image sliding animation
        speedMultiplier = 10,
        // CanvasLoader instance variable
        spinner,

        // Stores the total amount of images we have in the sequence
        totalFrames = 24,
        // The current frame value of the image slider animation
        currentFrame = 0,
        // Stores all the loaded image objects
        frames = [],
        // The value of the end frame which the currentFrame will be tweened to during the sliding animation
        endFrame = 0,
        // We keep track of the loaded images by increasing every time a new image is added to the image slider
        loadedImages = 0,

        // Caching DOM element references
        $document = $(document),
        $container = $('#threesixty'),
        $images = $('#threesixty_images'),

        // Initial spin demo vars
        demoMode = false,
        fakePointer = {
            x: 0,
            speed: 4
        },
        fakePointerTimer = 0;

    /**
     * Adds a "spiral" shaped CanvasLoader instance to the #spinner div
     */
    function addSpinner () {
        spinner = new CanvasLoader("spinner");
        spinner.setShape("spiral");
        spinner.setDiameter(90);
        spinner.setDensity(90);
        spinner.setRange(1);
        spinner.setSpeed(4);
        spinner.setColor("#333333");
        // As its hidden and not rendering by default we have to call its show() method
        spinner.show();
        // We use the jQuery fadeIn method to slowly fade in the preloader
        $("#spinner").fadeIn("slow");
    };

    /**
     * Creates a new <li> and loads the next image in the sequence inside it.
     * With jQuery we add the "load" event handler to the image, so when it's successfully loaded, we call the "imageLoaded" function.
     */
    function loadImage() {
        // Creates a new <li>
        var li = document.createElement("li");
        // Generates the image file name using the incremented "loadedImages" variable
        var imageName = "img/360/IMG_" + (loadedImages + 1) + ".jpg";
        /*
            Creates a new <img> and sets its src attribute to point to the file name we generated.
            It also hides the image by applying the "previous-image" CSS class to it.
            The image then is added to the <li>.
        */
        var image = $('<img>').attr('src', imageName).addClass("previous-image").appendTo(li);
        // We add the newly added image object (returned by jQuery) to the "frames" array.
        frames.push(image);
        // We add the <li> to the <ol>
        $images.append(li);
        /*
            Adds the "load" event handler to the new image.
            When the event triggers it calls the "imageLoaded" function.
        */
        $(image).load(function() {
            imageLoaded();
        });
    };

    /**
     * It handles the image "load" events.
     * Each time this function is called it checks if all the images have been loaded or it has to load the next one.
     * Every time a new image is succesfully loaded, we set the percentage value of the preloader to notify the user about the loading progress.
     * If all the images are loaded, it hides the preloader using the jQuery "fadeOut" method, which on complete stops the preloader rendering
     * and calls the "showThreesixty" method, that displays the image slider.
     */
    function imageLoaded() {
        // Increments the value of the "loadedImages" variable
        loadedImages++;
        // Updates the preloader percentage text
        $("#spinner span").text(Math.floor(loadedImages / totalFrames * 100) + "%");
        // Checks if the currently loaded image is the last one in the sequence...
        if (loadedImages == totalFrames) {
            // ...if so, it makes the first image in the sequence to be visible by removing the "previous-image" class and applying the "current-image" on it
            frames[0].removeClass("previous-image").addClass("current-image");
            /*
                Displays the image slider by using the jQuery "fadeOut" animation and its complete event handler.
                When the preloader is completely faded, it stops the preloader rendering and calls the "showThreesixty" function to display the images.
            */
            $("#spinner").fadeOut("slow", function(){
                spinner.hide();
                showThreesixty();
            });
        } else {
            // ...if not, Loads the next image in the sequence
            loadImage();
        }
    };

    /**
     * Displays the images with the "swooshy" spinning effect.
     * As the endFrame is set to -720, the slider will take 4 complete spin before it stops.
     * At this point it also sets the application to be ready for the user interaction.
     */
    function showThreesixty () {
        // Fades in the image slider by using the jQuery "fadeIn" method
        $images.fadeIn("slow");
        // Sets the "ready" variable to true, so the app now reacts to user interaction
        ready = true;
        // Sets the endFrame to an initial value...
        endFrame = -720;
        // ...so when the animation renders, it will initially take 4 complete spins.
        if(!demoMode) {
            refresh();
        } else {
            fakePointerTimer = window.setInterval(moveFakePointer, 100);
        }
    };

    /*
    * Moves the fake pointer, so that we can have some demo spinning until the user interferes with their pointer
    */
    function moveFakePointer () {
        fakePointer.x += fakePointer.speed;
        trackPointer();
    };

    /*
    * Stops the fake pointer moving and lets the user control the spinning
    */
    function quitDemoMode() {
        window.clearInterval(fakePointerTimer);
        demoMode = false;
    };

    /*
        We launch the application by...
        Adding the preloader, and...
    */
    addSpinner();
    // loading the firt image in the sequence.
    loadImage();

    /**
     * Renders the image slider frame animations.
     */
    function render () {
        // The rendering function only runs if the "currentFrame" value hasn't reached the "endFrame" one
        if(currentFrame !== endFrame)
        {
            /*
                Calculates the 10% of the distance between the "currentFrame" and the "endFrame".
                By adding only 10% we get a nice smooth and eased animation.
                If the distance is a positive number, we have to ceil the value, if its a negative number, we have to floor it to make sure
                that the "currentFrame" value surely reaches the "endFrame" value and the rendering doesn't end up in an infinite loop.
            */
            var frameEasing = endFrame < currentFrame ? Math.floor((endFrame - currentFrame) * 0.1) : Math.ceil((endFrame - currentFrame) * 0.1);
            // Sets the current image to be hidden
            hidePreviousFrame();
            // Increments / decrements the "currentFrame" value by the 10% of the frame distance
            currentFrame += frameEasing;
            // Sets the current image to be visible
            showCurrentFrame();
        } else {
            // If the rendering can stop, we stop and clear the ticker
            window.clearInterval(ticker);
            ticker = 0;
        }
    };

    /**
     * Creates a new setInterval and stores it in the "ticker"
     * By default I set the FPS value to 60 which gives a nice and smooth rendering in newer browsers
     * and relatively fast machines, but obviously it could be too high for an older architecture.
     */
    function refresh () {
        // If the ticker is not running already...
        if (ticker === 0) {
            // Let's create a new one!
            ticker = self.setInterval(render, Math.round(1000 / 60));
        }
    };

    /**
     * Hides the previous frame
     */
    function hidePreviousFrame() {
        /*
            Replaces the "current-image" class with the "previous-image" one on the image.
            It calls the "getNormalizedCurrentFrame" method to translate the "currentFrame" value to the "totalFrames" range (1-180 by default).
        */
        frames[getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image");
    };

    /**
     * Displays the current frame
     */
    function showCurrentFrame() {
        /*
            Replaces the "current-image" class with the "previous-image" one on the image.
            It calls the "getNormalizedCurrentFrame" method to translate the "currentFrame" value to the "totalFrames" range (1-180 by default).
        */
        frames[getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image");
    };

    /**
     * Returns the "currentFrame" value translated to a value inside the range of 0 and "totalFrames"
     */
    function getNormalizedCurrentFrame() {
        var c = -Math.ceil(currentFrame % totalFrames);
        if (c < 0) c += (totalFrames - 1);
        return c;
    };

    /**
     * Returns a simple event regarding the original event is a mouse event or a touch event.
     */
    function getPointerEvent(event) {
        return event.originalEvent.targetTouches ? event.originalEvent.targetTouches[0] : event;
    };

    /**
     * Adds the jQuery "mousedown" event to the image slider wrapper.
     */
    $container.on("mousedown", function (event) {
        quitDemoMode();

        // Prevents the original event handler behaciour
        event.preventDefault();
        // Stores the pointer x position as the starting position
        pointerStartPosX = getPointerEvent(event).pageX;
        // Tells the pointer tracking function that the user is actually dragging the pointer and it needs to track the pointer changes
        dragging = true;
    });

    /**
     * Adds the jQuery "mouseup" event to the document. We use the document because we want to let the user to be able to drag
     * the mouse outside the image slider as well, providing a much bigger "playground".
     */
    $document.on("mouseup", function (event){
        // Prevents the original event handler behaciour
        event.preventDefault();
        // Tells the pointer tracking function that the user finished dragging the pointer and it doesn't need to track the pointer changes anymore
        dragging = false;
    });

    /**
     * Adds the jQuery "mousemove" event handler to the document. By using the document again we give the user a better user experience
     * by providing more playing area for the mouse interaction.
     */
    $document.on("mousemove", function (event){
        if(demoMode) {
            return;
        }

        // Prevents the original event handler behaciour
        event.preventDefault();
        // Starts tracking the pointer X position changes
        trackPointer(event);
    });

    /**
     *
     */
    $container.on("touchstart", function (event) {
        quitDemoMode();

        // Prevents the original event handler behaciour
        event.preventDefault();
        // Stores the pointer x position as the starting position
        pointerStartPosX = getPointerEvent(event).pageX;
        // Tells the pointer tracking function that the user is actually dragging the pointer and it needs to track the pointer changes
        dragging = true;
    });

    /**
     *
     */
    $container.on("touchmove", function (event) {
        // Prevents the original event handler behaciour
        event.preventDefault();
        // Starts tracking the pointer X position changes
        trackPointer(event);
    });

    /**
     *
     */
    $container.on("touchend", function (event) {
        // Prevents the original event handler behaciour
        event.preventDefault();
        // Tells the pointer tracking function that the user finished dragging the pointer and it doesn't need to track the pointer changes anymore
        dragging = false;
    });

    /**
     * Tracks the pointer X position changes and calculates the "endFrame" for the image slider frame animation.
     * This function only runs if the application is ready and the user really is dragging the pointer; this way we can avoid unnecessary calculations and CPU usage.
     */
    function trackPointer(event) {
        var userDragging = ready && dragging ? true : false;
        var demoDragging = demoMode;

        if(userDragging || demoDragging) {

            // Stores the last x position of the pointer
            pointerEndPosX = userDragging ? getPointerEvent(event).pageX : fakePointer.x;

            // Checks if there is enough time past between this and the last time period of tracking
            if(monitorStartTime < new Date().getTime() - monitorInt) {
                // Calculates the distance between the pointer starting and ending position during the last tracking time period
                pointerDistance = pointerEndPosX - pointerStartPosX;
                // Calculates the endFrame using the distance between the pointer X starting and ending positions and the "speedMultiplier" values
                endFrame = currentFrame + Math.ceil((totalFrames - 1) * speedMultiplier * (pointerDistance / $container.width()));
                // Updates the image slider frame animation
                refresh();
                // restarts counting the pointer tracking period
                monitorStartTime = new Date().getTime();
                // Stores the the pointer X position as the starting position (because we started a new tracking period)

                pointerStartPosX = userDragging ? getPointerEvent(event).pageX : fakePointer.x;
            }
        } else {
            return;
        }
    };
});


$(document).ready(function(){
    // for smooth scroll
    $('.go_to').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});
