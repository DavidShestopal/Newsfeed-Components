/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = ['Students', 'Faculty', "What's New", 'Tech Trends', 'Music', 'Hire Jackson Ogles', 'Log Out'];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
//Created a function
// functions job is to create component for you
// created lego pieces
function createMenu(data) {
  const menu = document.createElement('div');
  const list = document.createElement('ul');

  data.forEach(array => {
    const items = document.createElement('li');
    items.textContent = array;
    list.appendChild(items);
  });

  //Created Structure
  // glues lego pieces together
  menu.appendChild(list);
  // This creates class that is then added to the html we have created and names them

  menu.classList.add('menu');
  //This creates an event which works when the button is clicked
  const button = document.querySelector('.menu-button');
  button.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });

  return menu;
}

//This adds the menu component to the DOM.

const header = document.querySelector('.header').appendChild(createMenu(menuItems));
