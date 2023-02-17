var container = document.querySelector(".container");
var thanks = document.querySelector(".thank-you");
var submitButton = document.getElementById("submit");
var rateAgainButton = document.getElementById("rate-again");
var rating = document.getElementById("rating");
var rates = document.querySelectorAll(".btn");


submitButton.addEventListener("click",()=>{
    thanks.classList.remove("hidden");
    container.style.display = "none";
})
rateAgainButton.addEventListener("click",()=>{
    thanks.classList.add("hidden");
    container.style.display = "block";
})

rates.forEach((rate) => {
    rate.addEventListener("click" , () => {
        rating.innerHTML = rate.innerHTML;
    })
})