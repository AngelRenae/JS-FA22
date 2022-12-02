const nav = document.createElement('nav');
const logoDiv = document.createElement('div');
const heroDiv = document.createElement('div');

const ul = document.createElement('ul');
const liOne = document.createElement('li');
const liTwo = document.createElement('li');

const h1 = document.createElement('h1');

logoDiv.classList.add('logo');
heroDiv.classList.add('hero');

liOne.textContent = 'home';
liTwo.textContent = 'about';
h1.textContent = 'hero';

document.body.append(nav);
nav.append(logoDiv);
document.body.append(heroDiv);
logoDiv.append(ul);
ul.append(liOne);
ul.append(liTwo);
heroDiv.append(h1);

liOne.addEventListener('click', (e) => {
  h1.style.color = 'pink';
});

liTwo.addEventListener('click', (e) => {
  h1.style.color = 'green';
});

// appendchild = only html elements, append = html elements and regular text
