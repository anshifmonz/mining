import { profile } from "./data.js";
import data  from './data.js';

const root = document.getElementById('root');
let container = document.createElement('div');
container.id = 'container';

let profileDiv = document.createElement('div');
profileDiv.id = 'profile'

let profilePic = document.createElement('img');
profilePic.setAttribute('src', profile.pic);
profilePic.setAttribute('alt', profile.imgAlt);

let companyName = document.createElement('h1');
companyName.className = 'arsal';
companyName.textContent = profile.name;

let companyCaption = document.createElement('p');
companyCaption.className = 'company-caption';
companyCaption.textContent = profile.caption;

profileDiv.appendChild(profilePic);
profileDiv.appendChild(companyName);
profileDiv.appendChild(companyCaption);

root.appendChild(profileDiv);

data.forEach(app => {

  let section = document.createElement('section');
  if (app.titles) {
    let title = document.createElement('p');
    let title1 = document.createElement('p');

    title.textContent = app.titles[0];
    title1.textContent = app.titles[1];

    section.appendChild(title);
    section.appendChild(title1);
  } 

  let title = document.createElement('p');
  title.textContent = app.title;
  section.appendChild(title);
  
  app.apps.forEach(card => {
    let newDiv = document.createElement('div');
    newDiv.className = 'card';
  
    let newLink = document.createElement('a');
    newLink.setAttribute('href', card.link);
    newLink.setAttribute('target', '_blank');
    newLink.setAttribute('rel', 'nofollow noopener noreferrer');
  
    let newImg = document.createElement('img');
    newImg.setAttribute('src', card.imgLink);
    newImg.setAttribute('alt', card.imgAlt);

    let nameDiv = document.createElement('div');
    nameDiv.className = 'app-name';

    let cartParagraph = document.createElement('p');
    cartParagraph.textContent = card.title;
    
    newLink.appendChild(newImg);
    nameDiv.appendChild(cartParagraph)
    newLink.appendChild(nameDiv);
    newDiv.appendChild(newLink);
    section.appendChild(newDiv);
  })

  container.appendChild(section);
});

root.appendChild(container);
