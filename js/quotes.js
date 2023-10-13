const quotes = [
  {
    quote: "항구의 하늘색은 죽은 채널 텔레비전 화면 색이였다.",
    author: "뉴로맨서의 첫 문장",
  },
  {
    quote: "안드로이드도 꿈을 꾸나?",
    author: "안드로이드는 전기양을 꿈꾸는가 중",
  },
  {
    quote:
      "'인식 자체를 위한 인식', 이것은 도덕이 파놓은 마지막 함정이다. 이와 함께 인간은 다시 한 번 도덕 속 으로 빠져들게 된다.",
    author: "프리드리히 니체, 선악의 저편 중",
  },
  {
    quote:
      "누구도, 그 누구도 그녀의 죽음에 울 권리를 가지고 있지 못한 것이다. 그리고 나 역시 모든 것을 다시 살아 볼 준비가 되었음을 느낀다.",
    author: "알베르 카뮈, 이방인 마지막 문장 중",
  },
  {
    quote: "용기는 기도를 마친 두려움이다.",
    author: "도로시 버나드",
  },
  {
    quote:
      "나한테는 영혼이 없는데. 명확하게 영혼의 위치를 밝힐 수 없다면, 저 아이들과 마찬가지로 나도 함께 데려가야한다고 생각하는데.",
    author: "도매가로 기억을 팝니다, 전 인간 중",
  },
  {
    quote: "실존은 본질을 앞선다.",
    author: "장 폴 사르트르",
  },
  {
    quote: "행복을 탐욕스럽게 좇지 말며, 두려워하지 마라.",
    author: "노자",
  },
  {
    quote: "나는 나의 세계이다.",
    author: "비트겐슈타인",
  },
  {
    quote: "우린 허무 속에 살고 있다.",
    author: "미상",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;
