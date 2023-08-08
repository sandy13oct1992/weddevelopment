
//const elements = document.getElementsByClassName("item");
//elements[2].style.backgroundColor='green';
//elements[1].style.backgroundColor='yellow';

//for(var i=0; i<elements.length;i++)
//{
  //elements[i].style.fontweight='bold';
//}

const elements = document.getElementById("items");
console.log(elements);

//const name = document.getElementById("name");
//const email = document.getElementById("E-mail");
//const button = document.getElementById("submit");
//console.log(button);
//const submitFunction = (event) =>{
  //  event.preventDefault();
    //console.log(name.value)
    //console.log(email.value)
    //}
//button.addEventListener("click",submitFunction);
//const li = document.getElementsByTagName("li");
//console.log(li);
//li[2].style.backgroundColor='green';
//elements.firstElementChild.style.backgroundColor='yellow';

//for(var i=0; i<li.length;i++)
//{
  //li[i].style.fontweight='bold';
//}
//var seconditem=document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundcolor='green';

//parent node
//var itemlist=document.querySelector('#items');
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
//var newdiv = document.createElement('div');

//add class name
//newdiv.className= 'hello';

//add id
//newdiv.id='hello1';

//add attribute
//newdiv.setAttribute('title','hello div');

//create textNode
//var newdivTN=newdiv.creatTextNode('hello world');

//newdiv.append(newdivTN);

//var container=document.querrySelector('header .container');

//var h1=document.querrySelector('header h1');

//console.log(newdiv);

//container.insertBefore(newdiv, h1);

var form = document.getElementById('add-form');
var itemlist = document.getElementById('item');

//form submit event
form.addEventListener('submit' addItem);

// remove item
itemlist.addEventListener('click' removeItem);

// Add Item
function addItem(e){
  e.preventDefault();

  // Input value
  var newItem= document.getElementById('item').value;

  // create new li element
  var li= document.createElement('li');

  // add class name
  li.className = 'list-group-item';

  // add textnode to input value
  li.appendChild(document.createTextNode(newItem));
  
  //crete delete button
  var deletebtn = document.createElement('button');

  //add classes to delete button
  deletebtn.className= 'btn btn-danger btn-sm float-right delete';

  //append text node to button
  deletebtn.appendChild(document.createTextNode('X'));

  //append button to li
  li.appendChild(deletebtn);

  //append li to itemlist
  itemlist.appendChild(li);


}

function removeItem(e)
{
  if(e.target.classList.contains('delete'))
  {
    if(confirm('Are You sure'))
    {
      var li=e.target.parentElement;
      itemlist.removeChild(li);
    }
  
  }
}

function filter(e)
{
  // convert text to lowercase
  var text = e.target.value.tolowerCase();
  // get list
  var items=document.getElementsByTagName('item');
  //convert to array
  Array.from(items).forEach(function(item))
  {
    var itemName= items.firstChild.textContent;
    if(itemName.tolowerCase().indexOf(text)!=-1)
    {
      items.style.display='block';

    }
    else
    {
      items.style.display='none';
    }
  }
}