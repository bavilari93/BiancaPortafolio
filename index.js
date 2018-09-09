$(() => {

            // modal boxes 
            $(".button-project").click(function() {
                var value = $(this).val();
                modalBox(value);
            })

            // select dom elements 
            const modal = document.getElementById("modal");
            const span = document.getElementsByClassName("close")[0];
            const removeList = [];

            // display remover 
            const remover = (list) => {
                list.forEach(e => {
                    let modeRemover = modal.querySelectorAll(`.${e}`)[0];
                    modeRemover.style.display = "none"
                });
            }
            // modal display 
            const modalBox = (value) => {
                // push values of previously selected
                removeList.push(value);
                modal.style.width = "100%"

                // remove prevously selected elements

                remover(removeList);
                const modeSelector = modal.querySelectorAll(`.${value}`)[0];
                if (value === "front-end") {
                    modeSelector.style.display = "block"
                    topNav.className = 'top-nav'
                } else if (value === "full-stack") {
                    modeSelector.style.display = "block"
                } else if (value === "react") {
                    modeSelector.style.display = "block"
                } else if (value === "express") {
                    modeSelector.style.display = "block"
                }
            }
            // close the span
            span.onclick = function() {
                modal.style.width = "0%";
            }
            // click outside of the modal 
            window.onclick = function(e) {
                if (e.target == modal) {
                    modal.style.width = "0%";
                }
            }
            // topnav mobile 
            const topNav = document.getElementById("myTopNav");
            const modalTopNav = document.getElementById('modal-topnav');
            $('.icon').click(() => {
                console.log(modalTopNav);
                if (topNav.className === 'top-nav') {
                    topNav.className += " responsive";
                    modalTopNav.style.display = 'block';
                    $('#modal-topnav').toggleClass('modal-container ');
                    $('.icon').toggleClass("change");
                } else {
                    console.log('this is it');
                    topNav.className = 'top-nav'
                    modalTopNav.style.display = 'none';
                    $(".icon").removeClass('change');
                    $('#modal-topnav').removeClass('modal-container');
                }
            })
            // close when click on a top-nav 
            modalTopNav.addEventListener('click', function(e){
                if(topNav.className === 'top-nav'){
                    modalTopNav.style.display = 'block';
                }else{
                    topNav.className = 'top-nav'
                 modalTopNav.style.display = 'none';
                 $(".icon").removeClass('change');
                 $('#modal-topnav').removeClass('modal-container');
                }
            })
            



                const parallax = document.getElementById('parallax');
                window.addEventListener('scroll', function() {
                    // paralax
                    let offset = window.pageYOffset;
                    parallax.style.backgroundPositionY = offset * 0.4 + "px";
                    // make each section visible when scroll
                    let pageTop = $(this).scrollTop()
                    let pageBottom = pageTop + $(this).height();
                    let sectionTags = document.getElementsByTagName('section');
                    for (var i = 0; i < sectionTags.length; i++) {
                        let tag = sectionTags[i]
                        if ($(tag).position().top < pageBottom) {
                            $(tag).addClass('visible')
                        } else {
                            $(tag).removeClass('visible')
                        }
                    }
                    // fade out header content 
                    if (pageTop > 50) {
                        $('.tittle').fadeOut('slow');
                        $('#parallax').css('background-image', "url()")
                    } else {
                        $('.tittle').fadeIn('slow');
                        $('#parallax').css('background-image', "url(background.png)")
                    }
                })

                // move on mouse over 

                $('#parallax').mousemove(function(e) {
                    var amountMovedX = (e.pageX * -1 / 6);
                    var amountMovedY = (e.pageY * -1 / 6);
                    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
                });

            }) // end of jquery