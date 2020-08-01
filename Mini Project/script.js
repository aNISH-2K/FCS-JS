var quotes = [`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." <br />  - Albert Einstein`,
    `"the people who are crazy enough to think they can change the world are the ones who do." <br /> - Steve Jobs`,
    `"A man who dares to waste one hour of time has not discovered the value of life." <br /> - Charles Darwin`,
    `"You cannot teach a man anything; you can only help him discover it in himself." <br /> - Galileo`,
    `"If I have seen further it is by standing on the shoulders of Giants." <br /> - Isaac Newton`,
    `"One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away." <br /> - Stephen Hawking`,
    `"Imagination is more important than knowledge." <br /> - Albert Einstein`,
    `"The saddest aspect of life right now is that gathers knowledge faster than society gathers wisdom." <br /> - Isaac Asimov`,
    `"Faith is not belief without proof, but trust without reservation." <br /> - D. Elton Trueblood`,
    `"There's an important difference between giving up and letting go." <br /> - Jessica Hatchigan `,
    `"I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it's not the answer." <br /> - Jim Carrey `,
    `"The purpose of our lives is to be happy."<br /> — Dalai Lama`,
    `"Life is what happens when you’re busy making other plans."<br /> — John Lennon`,
    `"Get busy living or get busy dying."<br />— Stephen King`,
    `"You only live once, but if you do it right, once is enough."<br /> — Mae West`,
    `"Many of life’s failures are people who did not realize how close they were to success when they gave up."<br />– Thomas A. Edison`
];

function newQuote() {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNum];
}