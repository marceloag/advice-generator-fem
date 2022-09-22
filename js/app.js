document.getElementById('dice').addEventListener('click', changeQuote);

function changeQuote() {
  let quote = document.getElementById('quote');
  let quoteNumber = document.getElementById('quotenumber');

  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      quoteNumber.innerHTML = data.slip.id;
      quote.innerHTML = data.slip.advice;
    });
}
