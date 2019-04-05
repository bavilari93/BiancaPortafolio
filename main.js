$(() => {

    // overlaying 


    window.addEventListener('scroll', (() => {

        let pageTop = $(this).scrollTop(),
            pageBottom = pageTop + $(this).height() + 0.2;
        sectionTags = document.querySelectorAll('.scroll');


        if (pageTop > 10) {
            $('.scroll').addClass('slide');



        } else {
            $('.scroll').removeClass('slide');

        }


    }))
    // scroll top on click 

    const element = document.getElementById('scroll-top')
    element.addEventListener('click',((event)=>{
        event.preventDefault();
        $("#modal").animate({ scrollTop: 0 }, "slow");
        return false;
    }))





    // modal box open 
    $('button').click(function() {
        let value = $(this).val();
        const mainWrap = document.getElementById('mainWrap');

        let slideSection = document.getElementById(`${value}`);
        const span = slideSection.querySelector('span');
       
         element.style.display='-webkit-inline-box';
        slideSection.style.width = '100%';
        mainWrap.style.display = 'none';
        // close span
        span.onclick = function() {

            element.style.display='none';
            slideSection.style.width = "0%";
            mainWrap.style.display = 'flex';
        }
    });
    // code from Simple Typing Carousel A PEN BY KS
    // typewriter
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };


    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }


}) // end of jquery