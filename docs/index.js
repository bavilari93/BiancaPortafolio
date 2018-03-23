

$(function() {
	console.log("this is conected");
	// top nav display 
	
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
})// end of j query