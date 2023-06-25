const quotes = [
    "오늘 할 일을 내일로 미루지 말라",
    "망설이는 사람, 주저하는 사람, 미루는 사람은 지는 사람이다",
    "‘오늘’은 ‘승자’들의 단어이고, ‘내일’은 패자들의 단어이다.",
    "미루는 것은 시간의 도둑이다.",
    "쉬운 일이 굉장히 힘들게 느껴지게 만들고 싶다면 계속해서 그 일을 미루면 된다."
];

let index = 0;
const quote = document.getElementById('quote');

function showQuote() {
    quote.textContent = quotes[index];
    quote.style.opacity = 0;

    setTimeout(() => {
        quote.style.opacity = 1;
    }, 500);

    index = (index + 1) % quotes.length;
}

showQuote();

setInterval(() => {
    const quote = document.getElementById('quote');
    quote.style.opacity = 0;

    setTimeout(showQuote, 500);
}, 10000);
