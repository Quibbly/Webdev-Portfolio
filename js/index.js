
// COPY TO CLIPBOARD STUFF
const copyToClipboard = str => {
    const el = document.createElement('textarea');  
    el.value = str;                                 
    el.setAttribute('readonly', '');                
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                      
    document.body.appendChild(el);                  
    const selected =            
      document.getSelection().rangeCount > 0        
        ? document.getSelection().getRangeAt(0)    
        : false;                                   
    el.select();                                    
    document.execCommand('copy');                   
    document.body.removeChild(el);                  
    if (selected) {                                 
      document.getSelection().removeAllRanges();   
      document.getSelection().addRange(selected);   
    }
};

// Changes text upon click to indicate it has been copied
const emailLink = document.querySelectorAll("#navEmail");
for(var i=0;i<emailLink.length;i++){
    emailLink[i].addEventListener("click", function() {
        copyToClipboard("owenhedwards@gmail.com");
        document.getElementById("toolTipText").innerHTML = "Email address has been copied to your clipboard.";
    })
}
// Changes text back to default when user moves mouse away
for(var i=0;i<emailLink.length;i++){
    emailLink[i].addEventListener("mouseout", function() {
        document.getElementById("toolTipText").innerHTML = "Click to copy address to clipboard.";
    })
}
// COPY TO CLIPBOARD STUFF


// SCROLL TO TOP BUTTON
const upArrow = document.getElementById("arrowCircle");
  // When the user clicks on the button, scroll to the top of the document
topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
// SCROLL TO TOP BUTTON




// onmouseover="style.transform = 'translate(-30%, 0)'" onmouseout="style.transform = 'translate(-130%, 0)'"

const cardADetails = document.querySelector(".cardADetails");
const cardAArrow1 = document.querySelector(".cardADetails .fa-chevron-right");
const cardAArrow2 = document.querySelector(".cardADetails .fa-chevron-left");
const cardA = document.querySelector("#card-a");


const cardBDetails = document.querySelector(".cardBDetails");
const cardBArrow1 = document.querySelector(".cardBDetails .fa-chevron-left");
const cardBArrow2 = document.querySelector(".cardBDetails .fa-chevron-right");
const cardB = document.querySelector("#card-b");

const cardCDetails = document.querySelector(".cardCDetails");
const cardCArrow1 = document.querySelector(".cardCDetails .fa-chevron-right");
const cardCArrow2 = document.querySelector(".cardCDetails .fa-chevron-left");
const cardC = document.querySelector("#card-c");

const cardDDetails = document.querySelector(".cardDDetails");
const cardDArrow1 = document.querySelector(".cardDDetails .fa-chevron-left");
const cardDArrow2 = document.querySelector(".cardDDetails .fa-chevron-right");
const cardD = document.querySelector("#card-d");


cardA.addEventListener("mouseover", function(){
    cardADetails.classList.remove("left-details-hidden");
    cardADetails.classList.add("left-details-tab");
})
cardA.addEventListener("mouseout", function(){
    cardADetails.classList.remove("left-details-tab");
    cardADetails.classList.add("left-details-hidden");
})
cardAArrow1.addEventListener("click", function(){
    cardADetails.classList.remove("left-details-tab");
    cardADetails.classList.add("left-details-full");
    cardAArrow1.style.display = "none";
    cardAArrow2.style.display = "block";
})
cardAArrow2.addEventListener("click", function(){
    cardADetails.classList.remove("left-details-full");
    cardADetails.classList.add("left-details-tab");
    cardAArrow1.style.display = "block";
    cardAArrow2.style.display = "none";
})

cardB.addEventListener("mouseover", function(){
    cardBDetails.classList.remove("right-details-hidden");
    cardBDetails.classList.add("right-details-tab");
})
cardB.addEventListener("mouseout", function(){
    cardBDetails.classList.remove("right-details-tab");
    cardBDetails.classList.add("right-details-hidden");
})
cardBArrow1.addEventListener("click", function(){
    cardBDetails.classList.remove("right-details-tab");
    cardBDetails.classList.add("right-details-full");
    cardBArrow1.style.display = "none";
    cardBArrow2.style.display = "block";
})
cardBArrow2.addEventListener("click", function(){
    cardBDetails.classList.remove("right-details-full");
    cardBDetails.classList.add("right-details-tab");
    cardBArrow1.style.display = "block";
    cardBArrow2.style.display = "none";
})

cardC.addEventListener("mouseover", function(){
    cardCDetails.classList.remove("left-details-hidden");
    cardCDetails.classList.add("left-details-tab");
})
cardC.addEventListener("mouseout", function(){
    cardCDetails.classList.remove("left-details-tab");
    cardCDetails.classList.add("left-details-hidden");
})
cardCArrow1.addEventListener("click", function(){
    cardCDetails.classList.remove("left-details-tab");
    cardCDetails.classList.add("left-details-full");
    cardCArrow1.style.display = "none";
    cardCArrow2.style.display = "block";
})
cardCArrow2.addEventListener("click", function(){
    cardCDetails.classList.remove("left-details-full");
    cardCDetails.classList.add("left-details-tab");
    cardCArrow1.style.display = "block";
    cardCArrow2.style.display = "none";
})


cardD.addEventListener("mouseover", function(){
    cardDDetails.classList.remove("right-details-hidden");
    cardDDetails.classList.add("right-details-tab");
})
cardD.addEventListener("mouseout", function(){
    cardDDetails.classList.remove("right-details-tab");
    cardDDetails.classList.add("right-details-hidden");
})
cardDArrow1.addEventListener("click", function(){
    cardDDetails.classList.remove("right-details-tab");
    cardDDetails.classList.add("right-details-full");
    cardDArrow1.style.display = "none";
    cardDArrow2.style.display = "block";
})
cardDArrow2.addEventListener("click", function(){
    cardDDetails.classList.remove("right-details-full");
    cardDDetails.classList.add("right-details-tab");
    cardDArrow1.style.display = "block";
    cardDArrow2.style.display = "none";
})




