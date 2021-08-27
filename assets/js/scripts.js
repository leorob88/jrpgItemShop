
// Function to create new elements
function create(element, id, text, classes){
    var div = document.createElement(element);
    div.id = id;
    div.innerHTML = text;
    div.className = classes;
    return div;
}

// This stores money value
let money = 5000;
// This stores total bill
let bill = 0;


// Creating new main elements with array data

// External container
document.body.appendChild(create("div", "main", "", ""));
// Contained elements
let pars = ["main",
            "main",
            "main",
            "main",
            "main",
            "main",
            "confirm",
            "answer",
            "answer",
            "yes",
            "no"]
let elems = ["div",
             "div",
             "div",
             "div",
             "div",
             "div",
             "button",
             "div",
             "div",
             "button",
             "button"]
let ids = ["welcome",
           "itemList",
           "money",
           "confirm",
           "question",
           "answer",
           "buy",
           "yes",
           "no",
           "butyes",
           "butno"];
let texts = ["Welcome to my shop! Do you want to buy anything?",
             "Shop items:",
             "Gil: " + money.toString(),
             "",
             "Are you sure?",
             "",
             "Buy",
             "",
             "",
             "Yes",
             "No"];
let classLists = ["round-border resized white-border",
                  "round-border resized white-border",
                  "round-border resized white-border",
                  "centered-flex resized",
                  "centered-text resized",
                  "centered-flex resized",
                  "centered-text",
                  "centered-flex",
                  "centered-flex",
                  "centered-text",
                  "centered-text"];
// Loop to create elements
for (let i = 0; i < ids.length; i++)
{
  document.getElementById(pars[i]).appendChild(create(elems[i], ids[i], texts[i], classLists[i]));
}

// Hiding bottom section
document.getElementById("question").style.visibility = "hidden";
document.getElementById("answer").style.visibility = "hidden";
// Formatting silgle elements
document.getElementById("main").style["width"] = "320px";
document.getElementById("main").style["margin-top"] = "24px";
document.getElementById("confirm").style["margin-top"] = "40px";

// Creating shop list with loop and array data
let items = ["potion", "ether", "spell-book", "secret-book"];
let names = ["Potion", "Ether", "Spell Book", "Secret Book"];
let prices = ["50", "1500", "3000", "4500"];
for (let i = 0; i < items.length; i++)
{
  document.getElementById("itemList").appendChild(create("div", "item" + i, "", "item-row"));
  document.getElementById("item" + i).appendChild(create("div", items[i], "<img src=\"assets/img/" + items[i] + ".png\">" + names[i], "icon-name lesser-font"));
  document.getElementById("item" + i).appendChild(create("div", "price" + i, prices[i] + " Gil", "price lesser-font"));
  document.getElementById("item" + i).appendChild(create("div", "sel" + i, "", "selection"));
  document.getElementById("sel" + i).appendChild(create("button", "minus" + i, "-", "minus-button lesser-font centered-text"));
  document.getElementById("sel" + i).appendChild(create("div", "quantity" + i, "0", "quantity lesser-font centered-text"));
  document.getElementById("sel" + i).appendChild(create("button", "plus" + i, "+", "plus-button lesser-font centered-text"));
}

// When the DOM is loaded ->
document.addEventListener("DOMContentLoaded", function(){

  // Event listener for minus buttons
  for (let i = 0; i < items.length; i++)
  {
    document.getElementById("minus" + i).addEventListener("click", function(){
      let value = Number(document.getElementById("quantity" + i).innerHTML);
      if (value > 0){
        bill -= Number(prices[i]);
        document.getElementById("money").innerHTML = "Gil: " + money.toString() + " > " + (money - bill).toString();
        value -= 1;
        document.getElementById("quantity" + i).innerHTML = value.toString();
      }
    });
  }
  // Event listener for plus buttons
  for (let i = 0; i < items.length; i++)
  {
    document.getElementById("plus" + i).addEventListener("click", function(){
      let value = Number(document.getElementById("quantity" + i).innerHTML);
      if ((money - bill) >= Number(prices[i])){
        bill += Number(prices[i]);
        document.getElementById("money").innerHTML = "Gil: " + money.toString() + " > " + (money - bill).toString();
        value += 1;
        document.getElementById("quantity" + i).innerHTML = value.toString();
      }
    });
  }
  // Event listener for Buy button
  document.getElementById("buy").addEventListener("click", function(){
    if (bill > 0){
    document.getElementById("question").style.visibility = "visible";
    document.getElementById("answer").style.visibility = "visible";
    }
    else{
      alert("You're buying nothing.");
    }
  });
  // Event listener for Yes button
  document.getElementById("butyes").addEventListener("click", function(){
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("answer").style.visibility = "hidden";
    for (let i = 0; i < items.length; i++)
    {
      document.getElementById("quantity" + i).innerHTML = "0";
    }
    money -= bill;
    document.getElementById("money").innerHTML = "Gil: " + money.toString();
    bill = 0;
  });

  // Event listener for No button
  document.getElementById("butno").addEventListener("click", function(){
    document.getElementById("question").style.visibility = "hidden";
    document.getElementById("answer").style.visibility = "hidden";
  });

});
