//Progress Bar
window.onscroll = function() {addProgress()};
function addProgress() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// Button Ripple
let rippleElements = document.getElementsByClassName("btnRippleEffect");
for(let i = 0; i < rippleElements.length; i++) {
    rippleElements[i].onclick = function(e) {
        let X = e.pageX - this.offsetLeft;
        let Y = e.pageY - this.offsetTop;
        let rippleDiv = document.createElement("div");
        rippleDiv.classList.add('ripple');
        rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
        console.log('worked til here!');
        this.appendChild(rippleDiv);
        setTimeout(function(){
            rippleDiv.parentElement.removeChild(rippleDiv);
        }, 900);
    }
}

// Image Modal
let modal = document.getElementById('zoomModal');
let images = document.getElementsByClassName('zoomImages');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

// Go through all of the images with class zoomImages
for (let i = 0; i < images.length; i++) {
    let img = images[i];
    console.log('working!');
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// Back to Top Link
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {userScroll()};

function userScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}