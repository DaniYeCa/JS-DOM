const QUOTES = [
  {
    quote: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, ',
    author: 'Author 1',
    year: 2022,
  },
  {
    quote: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, ',
    author: 'Author 2',
    year: 2024,
  },
  {
    quote: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, ',
    author: 'Albert Eintein',
    year: 1950,
  },
];
const quoteList = document.querySelector('#quote-list');

const getQuoteTemplate = (quote, author, year) => {
  return `<div class="quote-block">
  <blockquote>${quote}</blockquote>
  <p>${author} - ${year}</p>
  </div>`
};


const setupQuotesList = () => {

  for (let i = 0; i < QUOTES.length; i++) {
    const quoteElement = QUOTES[i];

    quoteList.innerHTML += getQuoteTemplate(
      quoteElement.quote,
      quoteElement.author,
      quoteElement.year
    );
  };
};


const handleFormSubmit = (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  const newQuote = {
    quote: formElements.quote.value,
    author: formElements.author.value,
    year: formElements.year.value,
  };


  quoteList.innerHTML += getQuoteTemplate(
    newQuote.quote,
    newQuote.author,
    newQuote.year
  );

  event.target.reset();
};

const form = document.querySelector('#quote-form');
form.addEventListener('submit', handleFormSubmit);

setupQuotesList();

