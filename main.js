var images=
["dad.jpg",
"sister.png",
"mom.png"
]

var names= 
[
"Zahir Jamani", "Zahra Jamani","Gulzar Jamani"
]

var i= 0;
function update() {
i++;
var number_of_family_members= 5
if (i > number_of_family_members){
i=0;
}
var updatedImage= images[i];
var updatedName= names[i];
document.getElementById("family_picture").src= updatedImage;
document.getElementById("family_name").innerHTML= updatedName;
}