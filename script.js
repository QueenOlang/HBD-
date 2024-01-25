document.getElementById("randomizeButton").addEventListener("click", function() {
    let foodOptions = ["Wali nyama🍚🥩", "Ndizi za kukaanga+Kuku🍌🍗", "Wali kuku🍚🍗", "Samaki Mchemsho+ Ndizi🐟🍌", "Wali maini", "Fruit salad🥑🍉", "Zege🍟", "Zege+Mshkaki🍟🍢","Zege+Kuku🍟🍗"];
    let choice = foodOptions[Math.floor(Math.random() * foodOptions.length)];
    document.getElementById("result").innerHTML = "You should eat: " + choice;
});
