// Menu
const navHeight = $("nav.menu").outerHeight();
$('nav a').on('click', function() {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - navHeight - 120
    })
})
$('button.help').on('click', function() {
        const goToSection = "[data-section=" + $(this).attr('class') + "]";
        $('body, html').animate({
            scrollTop: $(goToSection).offset().top - navHeight - 120
        })
    })
    // Przyklejenie menu
$(window).on("scroll", function() {
        const headerH = $("div.opener").offset().top;
        const headerH2 = $("div.opener").outerHeight()
        if ($(window).scrollTop() >= headerH2) {
            $('nav.menu').addClass('active');

        } else {
            $('nav.menu').removeClass('active');
        }
    })
    // Wyjeżdżające sekcje
$(document).on('scroll', function() {

        const windowHeight = $(window).height();
        const scrollValue = $(this).scrollTop();
        // console.log(scrollValue);


        //Pierwsza sekcja
        const $l2 = $('.l2');
        const l2FromTop = $l2.offset().top
            // console.log(art2FromTop);
        const l2Height = $l2.outerHeight()
            // console.log(art2Height);

        const $l3 = $('.l3');
        const l3FromTop = $l3.offset().top
        const l3Height = $l3.outerHeight()


        if (scrollValue > l2FromTop + l2Height - windowHeight - navHeight - 300) {
            console.log("jestem art 2 wywietlony w całości");
            $l2.addClass('active');
        } else if (scrollValue > l2FromTop + l2Height - windowHeight - navHeight - 400) {
            $l2.removeClass('active');
        }

        if (scrollValue > l3FromTop + l3Height - windowHeight - navHeight - 300) {
            console.log("jestem art 3 wywietlony w całości");
            $l3.addClass('active');
        } else if (scrollValue > l3FromTop + l3Height - windowHeight - navHeight - 400) {
            $l3.removeClass('active');
        }
    })
    // Przewijany slider

$('button.arrow-left').on('click', function() {
    $("section.about-project").css("left", "-=720");



})
$('button.arrow-right').on('click', function() {
    $("section.about-project").css("left", "+=720");
})