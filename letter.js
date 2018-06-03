fetch('days/1.html').then(function (response) {
  document.querySelector('section').innerHTML = response.text();
});
