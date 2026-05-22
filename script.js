const contactForm =
document.getElementById(
'contactForm');

if(contactForm){

  contactForm.addEventListener(
  'submit',

  function(e){

    e.preventDefault();

    const name =
    document.querySelector(
    'input[type="text"]')
    .value;

    const email =
    document.querySelector(
    'input[type="email"]')
    .value;

    const message =
    document.querySelector(
    'textarea')
    .value;

    const messages =
    JSON.parse(
    localStorage.getItem(
    'messages'))
    || [];

    messages.push({
      name,
      email,
      message,
      Date: new Date() . toLocaleString()
    });

    localStorage.setItem(
      'messages',

      JSON.stringify(messages)
    );

    alert(
    'Message Sent Successfully!'
    );

    contactForm.reset();

  });

}

const messagesContainer =
document.getElementById(
'messagesContainer');

if(messagesContainer){

  const messages =
  JSON.parse(
  localStorage.getItem(
  'messages'))
  || [];

  messagesContainer.innerHTML =
  "";

  messages.forEach((msg, index) => {

    messagesContainer.innerHTML += `

    <div class="message-card">

      <h3>${msg.name}</h3>

      <p>
      <strong>Email:</strong>
      ${msg.email}
      </p>

      <p>${msg.message}</p>

      <p><small>${msg.Date}</small></p>

      <button onclick=
      "editMessage(${index})">
      Edit
      </button>

      <button onclick=
      "deleteMessage(${index})">
      Delete
      </button>

    </div>

    `;

  });

}

function deleteMessage(index){

  const messages =
  JSON.parse(
  localStorage.getItem(
  'messages'))
  || [];

  messages.splice(index, 1);

  localStorage.setItem(
  'messages',

  JSON.stringify(messages)
  );

  location.reload();

}

function editMessage(index){

  const messages =
  JSON.parse(
  localStorage.getItem(
  'messages'))
  || [];

  const newMessage =
  prompt(

  'Edit your message:',

  messages[index].message

  );

  if(newMessage !== null){

    messages[index].message =
    newMessage;

    localStorage.setItem(
    'messages',

    JSON.stringify(messages)
    );

    location.reload();

  }

}

const searchInput =
document.getElementById(
'searchInput');

if(searchInput){

  searchInput.addEventListener(
  'keyup',

  function(){

    const filter =
    searchInput.value
    .toLowerCase();

    const recipeBoxes =
    document.querySelectorAll(
    '.recipe-box');

    recipeBoxes.forEach(box => {

      const title =
      box.querySelector('h2')
      .textContent
      .toLowerCase();

      if(title.includes(filter)){

        box.style.display =
        'block';

      }

      else{

        box.style.display =
        'none';

      }

    });

  });

}

const hash =
window.location.hash;

if(hash){

  const allRecipes =
  document.querySelectorAll(
  '.recipe-box');

  allRecipes.forEach(recipe => {

    recipe.style.display =
    'none';

  });

  const selectedRecipe =
  document.querySelector(hash);

  if(selectedRecipe){

    selectedRecipe.style.display =
    'block';

  }

}