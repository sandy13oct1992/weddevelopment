
//const elements = document.getElementsByClassName("item");
//elements[2].style.backgroundColor='green';
//elements[1].style.backgroundColor='yellow';

//for(var i=0; i<elements.length;i++)
//{
  //elements[i].style.fontweight='bold';
//}

//const elements = document.getElementsById("item"

//const name = document.getElementById("name");
//const email = document.getElementById("E-mail");
//const button = document.getElementById("Submit");

//const submitFunction = (event) =>{
  //  event.preventDefault();
    //console.log(name.value)
    //console.log(email.value)
   // }
//button.addEventListener("click",submitFunction);
//const li = document.getElementsByTagName("li");
//console.log(li);
//li[2].style.backgroundColor='green';
//elements[1].style.backgroundColor='yellow';

//for(var i=0; i<li.length;i++)
//{
  //li[i].style.fontweight='bold';
//}
//var seconditem=document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundcolor='green';

//parent node
//var itemlist=document.querrySelector('#items');
//console.log(itemlist.parentNode);

//last child
//console.log(itemlist.lastChild);
//last Eelement child
//console.log(itemlist.lastElementChild);

//first child
//console.log(itemlist.firstChild);
//last Eelement child
//console.log(itemlist.firstElementChild);

//Next Sibling
//console.log(itemlist.nextSibling);
//next element sibling
//console.log(itemlist.nextElementSibling);

//previous Sibling
//console.log(itemlist.previousSibling);
//previous Element sibling
//console.log(itemlist.previousElementSibling);

//create new element
 
//create new div
var newdiv = document.createElement('div');

//add class name
newdiv.className= 'hello';

//add id
newdiv.id='hello1';

//add attribute
newdiv.setAttribute('title','hello div');

//create textNode
var newdivTN=newdiv.creatTextNode('hello world');

newdiv.append(newdivTN);

var container=document.querrySelector('header .container');

var h1=document.querrySelector('header h1');

console.log(newdiv);

container.insertBefore(newdiv, h1);

