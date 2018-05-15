var $text = $(".tagline h1"),
    $stars = $(".st0"),
    $smallStars = $("#tiniest, #tiny, #smaller"),
    $huge = $("#huge"),
    $biggestSmallest = $("#huge, #tiniest"),
    $small = $("#small");

function animateText() {
    var tl = new TimelineMax();
    var mySplitText = new SplitText($text, { type: "words,chars" }),
        chars = mySplitText.chars;

    tl.staggerFrom(
        chars,
        1.2,
        {
            opacity: 0,
            scale: 0,
            y: 30,
            transformOrigin: "0% 50%",
            ease: Bounce.easeOut
        },
        0.08,
        "-=0.1"
    );

    return tl;
}

function animateStars() {
    var tl = new TimelineMax();
    tl.staggerTo($stars, 1, { opacity: 0.8 }, 0.4, "-=0.8");
    tl.to($biggestSmallest, 1, { rotation: -30, ease: Power1.easeOut }, "-=0.5");
    tl.staggerTo(
        $biggestSmallest,
        2,
        { x: 700, y: -600, scale: 1.3, ease: Power1.easeOut },
        0.5,
        "-=0.2"
    );
    tl.to($small, 1, { rotation: -30, ease: Power1.easeOut }, "-=0.3");
    tl.to($small, 1.9, { x: 700, y: -600, ease: Power1.easeOut }, "-=0.3");

    return tl;
}

var master = new TimelineMax({
    repeat: -1,
    smoothChildTiming: true
});
master.add(animateText());
master.add(animateStars(), "-=2");

