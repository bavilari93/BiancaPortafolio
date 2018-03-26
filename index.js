$(function() {
    // top nav to mmanage what to display when sixe changes
    const topNav = document.getElementById("myTopNav");

    $(".icon").click(function() {
        if (topNav.className === "top-nav") {
            topNav.className += " responsive";
            // else is in case of unclick
        } else {
            topNav.className = "top-nav"
        }

    })

    // modal boxes 
    $(".portafolio").find(":button").click(function() {
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
    	console.log(value);
        // push values of previously selected
        removeList.push(value);
        modal.style.display = "block"
        // remove prevously selected elements
        remover(removeList);
        const modeSelector = modal.querySelectorAll(`.${value}`)[0];
        if (value === "front-end") {
            modeSelector.style.display = "block"
        } else if (value === "full-stack") {
            modeSelector.style.display = "block"
        } else if (value === "react") {
            modeSelector.style.display = "block"
        } else {
            modeSelector.style.display = "block"
        }
    }
    // close the span
    span.onclick = function() {
        modal.style.display = "none";
    }
    // click outside of the modal 
    window.onclick = function(e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }
}) // end of j query