let ratingbtn = document.querySelectorAll(".numbers");
let submitbtn = document.querySelector(".submit");
let ratetxt = document.querySelector(".given-rating");


ratingbtn.forEach( function rate1(rate){
  rate.addEventListener("click", () => {
    var rating = rate.innerHTML;
    ratetxt.innerHTML = rating;
  });
})

submitbtn.onclick = function(){
  document.querySelector(".container").style.display = "none";
  document.querySelector(".container1").style.display = "block";
}
