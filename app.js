//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
window.addEventListener("DOMContentLoaded", () => {
    console.log('Lets get ready to party with jQuery!');

    //Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
    $('article img').addClass('image-center');

    //Remove the last paragraph in the article.
    $('article p')[5].remove()

    //Set the font size of the title to be a random pixel size from 0 to 100.
    $('#title').css('font-size', function () {
        return Math.floor(Math.random() * 101) + 'px';
    })

    //Add an item to the list; it can say whatever you want.
    $('ol').append('<li>It can say whatever you want.</li>');

    //Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.

    $('aside').children().remove();

    $('<p>Apologizing for the list existence</p>').appendTo('aside');

    //When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.


    $(".form-control").on('keyup blur change', function () {
        let red = $(".form-control").eq(0).val();
        let blue = $(".form-control").eq(1).val();
        let green = $(".form-control").eq(2).val();
        $("body").css("background-color", `rgb(${red},${blue},${green})`);
    });


    //Add an event listener so that when you click on the image, it is removed from the DOM.
    $("img").on("click", function () {
        $(this).remove();
    })

});


