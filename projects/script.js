// Progress Bar
window.onscroll = function() {addProgress()};

function addProgress() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// Button Ripple Effect
const rippleElements = document.getElementsByClassName("btnRippleEffect");

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
// Get the modal
let modal = document.getElementById('zoomModal');
let images = document.getElementsByClassName('zoomImages');
// the image in the modal
let modalImg = document.getElementById("img01");
// and the caption in the modal
let captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (let i = 0; i < images.length; i++) {
    let img = images[i];
    console.log('working!');
    // and attach our click listener for this image.
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