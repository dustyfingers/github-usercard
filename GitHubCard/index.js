/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/dustyfingers').then(data => {
//   console.log('response:', data.data);
// });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const friendsArray = [
  'lavonmejia',
  'MarquesJ8023',
  'juliethrallstewart',
  'ebcitron',
  'christopherayork'
];

function Card(user) {
  // create elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userLegalName = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p')
  const bio = document.createElement('p');


  // set styles
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  userLegalName.classList.add('name');
  username.classList.add('username');


  // set inner content
  img.src = user.data.avatar_url;
  userLegalName.textContent = user.data.name;
  username.textContent = user.data.login;
  location.textContent = `Location: ${user.data.location}`;
  profile.textContent = 'Profile: \n';
  profileLink.href = user.data.url;
  followers.textContent = user.data.followers;
  following.textContent = user.data.following;


  // put together
  card.appendChild(img);
  card.appendChild(cardInfo);
  card.appendChild(userLegalName);
  card.appendChild(username);
  card.appendChild(location);
  profile.appendChild(profileLink);
  card.appendChild(profile);
  card.appendChild(followers);
  card.appendChild(bio);

  return card;
};


function buildCards() {
  let cardsContainer = document.querySelector('.cards');
  friendsArray.forEach(async friend => {
    try {
      let user = await axios.get(`https://api.github.com/users/${friend}`);
      cardsContainer.appendChild(Card(user));
    } catch (err) {
      console.error(err);
    }
  });
};

buildCards();
