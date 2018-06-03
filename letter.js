fetch('days/1.html').then(function (response) {
  response.text().then(function (text) {
    document.querySelector('section').innerHTML = text;  
  });
});
