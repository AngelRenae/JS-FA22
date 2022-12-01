const SERVER_URL = 'http://numbersapi.com/';

function getNumberFact(type) {
  return fetch(SERVER_URL + type)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('error', error);
    });
}

function displayTrivia(data) {
    const triviaText = document.createElement('p');
    triviaText.innerText = data;
    document.body.appendChild(triviaText);
    return data;
}

getNumberFact('5').then(displayTrivia)