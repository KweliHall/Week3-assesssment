console.log("hello world");



function handleSubmit(evt) {
	
	alert("the form has been submitted successfully")
}
let cat = document.getElementById("catpic");

catpic.addEventListener("mouseover", function(event) {
	alert("you look nice today!");
})



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);