const quotes = [
  {
    quote:
      "The sky above the port was the color of television, tuned to a dead channel.",
    author: "William Gibson, Neuromancer",
  },
  {
    quote: "Emigrate or Degenerate.",
    author: "Philip K. Dick, Do Androids Dream of Electric Sheep?",
  },
  {
    quote: "One loves ultimately one's desires, not the thing desired.",
    author: "Friedrich Nietzsche, Beyond Good and Evil",
  },
  {
    quote:
      "I may not have been sure about what really did interest me, but I was absolutely sure about what didn't.",
    author: "Albert Camus, The Stranger",
  },
  {
    quote: "Courage is fear that has said its prayers.",
    author: "Dorothy Bernard",
  },
  {
    quote: "l'existence précède l'essence",
    author: "Jean-Paul Sartre",
  },
  {
    quote: "Perfection is the willingness to be imperfect.",
    author: "Laozi",
  },
  {
    quote: "Hell isn't other people. Hell is yourself.",
    author: "Ludwig Wittgenstein",
  },
  {
    quote: "He who has a why to live for can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;
