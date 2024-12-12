$("#loader").show();
$(".invitation").hide()
$("#flowers").hide();

function loaded() {
    $("#loader").hide();
    $(".invitation").show()
$("#flowers").show();

}

$(document).ready(function () {
    $(".lettering").lettering();
    $(".lettering").hide();
})

function animate(element) {
    $(".lettering").show()

    var title1 = new TimelineMax();
    title1.staggerFromTo(element, 0.5,
        { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
        { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 }, 0.05);
}

const button = $('#inv-btn');
const envelope = $('.envelope');
var flipped = false;

function pullOut() {
    myAudio = new Audio('assets/music/krishna.mp3');
    myAudio.loop = true;
    myAudio.play()
    return new TimelineMax()
        .to('.flap', 1, {
            rotationX: 180,
            ease: Power1.easeInOut
        }, 'scaleBack')
        .to('.invitation', 1, {
            scale: 0.8,
            ease: Power4.easeInOut,
        }, 'scaleBack')
        .set('.flap', {
            zIndex: 0
        })
        .to('.card', 1, {
            y: '0%',
            scaleY: 1.2,
            ease: Circ.easeInOut,
        })
        .set('.mask', {
            //- Change overflow on mask
            overflow: 'visible',
            onComplete: function () {
                //- Change Z-Index on Pseudo element
                envelope.toggleClass('is-open');
            }
        })
        .to('.mask', 1.3, {
            'clip-path': 'inset(0 0 0% 0)',
            ease: Circ.easeInOut,
        }, 'moveDown')
        .to('.card', 1.3, {
            y: '100%',
            scaleY: 1,
            ease: Circ.easeInOut,
        }, 'moveDown')
        .to('button', 1, {
            y: '250px',
            ease: Circ.easeInOut,
            onComplete: toggleText
        }, 'moveDown+=0.15');
}

function toggleFlip() {
    if (!envelope.hasClass('is-open')) {
        return;
    }

    const ry = (!flipped) ? 180 : 0;
    flipped = (!flipped) ? true : false;

    // $("#front-content").hide();
    // $("#back-content").hide();

    TweenMax.to('.card', 1, {
        rotationY: ry,
        ease: Power4.easeInOut,
        onComplete: toggleText
    });
}

button.one('click', pullOut);
button.on('click', toggleFlip);


