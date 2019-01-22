$(() => {

    // nav bar for mobile 
    const mainWrap= document.getElementById('mainWrap');
            const topNav = document.getElementById('topNav');
            const modalTopNav = document.getElementById('innerNav');
            $('.icon').click(() => {
                if (topNav.className === 'navbar') {

                    topNav.className += " responsive";
                    modalTopNav.style.display = 'flex';
                    mainWrap.style.display = 'none'
                    $('.icon').toggleClass("change");

    
                } else {

                     mainWrap.style.display = 'flex'
                    topNav.className = 'navbar'
                    modalTopNav.style.display = 'none';
                    $(".icon").removeClass('change');                
                }
            })
            // close when click on a top-nav 
            modalTopNav.addEventListener('click', function(e){
                if(topNav.className === 'navbar'){
                    modalTopNav.style.display = 'block';
                }else{
                    topNav.className = 'navbar'
                   mainWrap.style.display = 'flex'
                 modalTopNav.style.display = 'none';
                 $(".icon").removeClass('change');                }
            })
            

    // skill modal activation
    const skills = document.getElementById('skills').querySelectorAll('img');
    skills.forEach((e) => {

        let alt = e.getAttribute("alt")
        

        // change image skill section
        e.addEventListener("mouseover", (() => {
            e.setAttribute('src', `./Skills/${alt}_empty.png`);
        }))
        e.addEventListener("mouseleave", (() => {
            e.setAttribute('src', `./Skills/${alt}_full.png`);

        }))
        // click slider on span on image on skill section
        e.nextSibling.addEventListener('click', (() => {
            let array = ["heart", "brain", "hand"];
            sliderUp(alt, array)
        }));

    })
    //project button 
   $(".button-project").click(function() {
        let projectArray = ["front-end", "full-stack", "react", "express"];
                let value = $(this).val();
                sliderUp(value, projectArray)
            })
    // modal expanding width 100%
    function sliderUp(value, array) {
        var skillArray = array;
        let slideSection = document.getElementById(`${value}`);
        const span = slideSection.querySelector('span');

        if (skillArray.includes(value)) {
            slideSection.style.width = '100%';


        }
        // close span
        span.onclick = function() {


            slideSection.style.width = "0%";
        }

    }

    // infinite slider 
    $num = $('.slide').length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;

    // choose the first one to display
    if ($num % 2 == 0) {
        // selects that child that is in the middle to initiaze the slide 
        // select the child with active class and aplies prev and nect class to the sorrounded ones 
        $('.slide:nth-child(' + $even + ')').addClass('active');
        $('.slide:nth-child(' + $even + ')').prev().addClass('prev');
        $('.slide:nth-child(' + $even + ')').next().addClass('next');
    } else {
        $('.slide:nth-child(' + $odd + ')').addClass('active');
        $('.slide:nth-child(' + $odd + ')').prev().addClass('prev');
        $('.slide:nth-child(' + $odd + ')').next().addClass('next');
    }


    // on click change 
    $('.slide').click(function() {
        $slide = $('.active').width();
        // control if it's left or right
        if ($(this).hasClass('next')) {
            $('.carousel').stop(false, true).animate({ left: '-=' + $slide });
        } else if ($(this).hasClass('prev')) {
            $('.carousel').stop(false, true).animate({ left: '+=' + $slide });
        }

        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev active next');

        $(this).addClass('active');
        $(this).prev().addClass('prev');
        $(this).next().addClass('next');
    });

    const button = document.querySelectorAll('button');
    button.forEach((e) => {
        e.addEventListener('click', (() => {
            if (e.className === "prev") {
                $('.active').prev().trigger('click');
            } else if (e.className === "next") {
                $('.active').next().trigger('click');
            }
        }))

    })

   


}) // end of query