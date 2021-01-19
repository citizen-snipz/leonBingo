const weeklyPhrases = [
  // `The Golden Rule: Seperation of Concerns
  // 👑👑👑`,
  // 'Someone preemptively types "organization" in the chat 👩🏽‍💻',
  // "Don't know? Go to the MDN!",
  // "Only ONE id with the same value per document!",
  "Make good content decisions",
  "Computers do what you tell them to do",
  "Variables are buckets",
  `Syntax:
  Spelling and Grammar rules`,
  "Declaration and then Assignment",
  "select my query!!!",
  "spend Jeff Bezos' money! 💸",
  "Not that kind of stream, folx!",
  "modulus % finds the remainder",
  "BEWARE reassignment <br> ( = ) vs. comparison <br> ( ==/=== )",
  "functions are the building blocks of a program 🧱",
  "functions can take parameters and pass arguments",
  "multiple conditions? Use && or ||",
  "Beware the trough of sorrow!",
  "TURN IT UP!",
  // "Get a paid client by Feb 2!",
  "Arrays are like Bill Gates' toaster",
  "Arrays are 0 indexed!",
  "Arrays have methods - check out the MDN! 🔎",
  "Don't forget to take care of your health! 💗",
  "Objects store 'keyed' collections 🔑",
  "Properties are attributes and methods are behavior (objects)",
  "Constructors then Classes",
  "Classes are like templates for objects!",
  "APIs are a simple interface for some complex action",
  "Leon tries to make fetch happen 👚",
  "You create an object that has four properties and three methods"
];
/*
const weekOnePhrases = [
    "The Golden Rule 👑👑👑",
    "What is the internet? 💻 🖥️",
    "angry Shia LaBeouf",
    "Hello world!",
    "Size doesn't matter, okay? OKAY???",
    "CSS is about <em>style</em>",
    "Ordered List",
    "Unordered List",
    `Syntax:
     Spelling and Grammar rules`,
    'Someone preemptively types "organization" in the chat 👩🏽‍💻',
    "Resetting the Forgetting Curve 😱",
    "What should go in the head tag?",
    "anchor tags are for links ⚓",
    "Progressive Enhancement"
  ]
*/

/*
const weekTwoPhrases = [
  "The Golden Rule: Seperation of Concerns 👑👑👑",
  "What is the internet? 💻 🖥️",
  "Hello twitch!",
  `Syntax:
   Spelling and Grammar rules`,
  'Someone preemptively types "organization" in the chat 👩🏽‍💻',
  "Resetting the Forgetting Curve 😱",
  "Progressive Enhancement!",
  // "Everyone freaks out about operators",
  "Repetition Repetition Repetition Repetition Repetition Repetition",
  "CSS link goes in the head 🗣️",
  "Don't know? Go to the MDN!",
  "Selectors are about relationships",
  "Only ONE id with the same value per document!",
  "Someone figures out the specificity before you even started",
  "You messed up"
]
*/

/*
const week3Phrases = [
  `The Golden Rule: Seperation of Concerns
  👑👑👑`,
  'Someone preemptively types "organization" in the chat 👩🏽‍💻',
  "CSS goes in a separate file",
  "Don't know? Go to the MDN!",
  "Get your selector relationships in order",
  "Only ONE id with the same value per document!",
  "Someone figures out the specificity before you even start",
  "Cascade - lower rules can override the ones above!",
  "The Box Model:  Content > Padding > Border > Margin",
  "We all float down here; you'll float too 🎈🎈🎈",
  "Get your shit together UPS",
  "Fluid: EVERYTHING IS A PERCENTAGE %%%",
  "Ems and Rems keep your font sizes elastic",
  "Flexbox is magic, y'all ✨✨✨",
  `<a href="http://css-tricks.com">css-tricks.com</a>: your CSS bible`,
  "Tried to use a media query without viewport <meta> tag",
  "Make good content decisions",
  "Today's stranger is tomorrow's coworker",
  "Insert unpaid meetup.com advertisement",
  "A lime alien that will haunt your dreams",
  "Spaced follow-up is important"
]
*/

// const week4Phrases = [
//   `The Golden Rule: Seperation of Concerns
//   👑👑👑`,
//   'Someone preemptively types "organization" in the chat 👩🏽‍💻',
//   "Don't know? Go to the MDN!",
//   "Get your selector relationships in order",
//   "Only ONE id with the same value per document!",
//   "Someone figures out the specificity before you even start",
//   "Cascade - lower rules can override the ones above!",
//   "The Box Model:  Content > Padding > Border > Margin",
//   "We all float down here; you'll float too 🎈🎈🎈",
//   "Get your shit together UPS",
//   "Fluid: EVERYTHING IS A PERCENTAGE %%%",
//   "Ems and Rems keep your font sizes elastic",
//   "Flexbox is magic, y'all ✨✨✨",
//   `<a href="http://css-tricks.com">css-tricks.com</a>: your CSS bible`,
//   "Tried to use a media query without viewport <meta> tag",
//   "Make good content decisions",
//   "Stranger to coworker pipeline",
//   "Insert unpaid meetup.com advertisement",
//   "A lime alien that will life forever in your nightmares",
//   "Spaced follow-up is important",
//   "Progressive Enhancement",
//   "Khan Academy",
//   "Sh*t just got real 💩",
//   "Boats and logs 🚣🏽‍♀️",
//   "Make layouts 5-8 mobile responsive! 📱"
// ];

// const weekSevenPhrases = [
//   `The Golden Rule: Seperation of Concerns
//   👑👑👑`,
//   // 'Someone preemptively types "organization" in the chat 👩🏽‍💻',
//   "Don't know? Go to the MDN!",
//   // "Only ONE id with the same value per document!",
//   "Make good content decisions",
//   "Stranger to coworker pipeline",
//   // "Insert unpaid meetup.com advertisement",
//   // "Computers do what you tell them to do",
//   // "Variables are buckets",
//   // "binary, upload, boom 👽",
//   // `Syntax:
//   // Spelling and Grammar rules`,
//   // "Declaration and then Assignment",
//   // "camelCase isOurConvention",
//   // "Leon misspelled 'oven'",
//   // "Everyone freaks out about operators",
//   "if(conditions mentioned){click!}",
//   "select my query!!!",
//   "spend Jeff Bezos' money! 💸",
//   "Not that kind of stream, folx!",
//   "modulus % finds the remainder",
//   "BEWARE reassignment <br> ( = ) vs. comparison <br> ( ==/=== )",
//   "functions are the building blocks of a program 🧱",
//   "functions can take parameters and pass arguments",
//   "multiple conditions? Use && or ||",
//   "You come to the realization that Leon is NOT a lawyer ⚖️",
//   "Build an online presence",
//   "Unless you're a designer, use a portfolio template",
//   "Don't freelance without a contract! 📝",
//   "Under promise, over deliver! 📦"
// ];

// const weekEightPhrases = [
//   `The Golden Rule: Seperation of Concerns
//   👑👑👑`,
//   'Someone preemptively types "organization" in the chat 👩🏽‍💻',
//   "Don't know? Go to the MDN!",
//   "Only ONE id with the same value per document!",
//   "Make good content decisions",
//   "Computers do what you tell them to do",
//   "Variables are buckets",
//   "binary, upload, boom 👽",
//   `Syntax:
//   Spelling and Grammar rules`,
//   "Declaration and then Assignment",
//   "Everyone freaks out about operators",
//   // "if(conditions mentioned){click!}",
//   "select my query!!!",
//   "spend Jeff Bezos' money! 💸",
//   "Not that kind of stream, folx!",
//   "modulus % finds the remainder",
//   "BEWARE reassignment <br> ( = ) vs. comparison <br> ( ==/=== )",
//   "functions are the building blocks of a program 🧱",
//   "functions can take parameters and pass arguments",
//   "multiple conditions? Use && or ||",
//   "Leon reveals house-specific office hours!",
//   "Beware the trough of sorrow!",
//   "TURN IT UP!",
//   "Get a paid client by Feb 2!",
//   "Welcome back, we missed you! <br> Have a free space for being awesome! 😊"
// ];

// const weekNinePhrases = [
//   `The Golden Rule: Seperation of Concerns
//   👑👑👑`,
//   'Someone preemptively types "organization" in the chat 👩🏽‍💻',
//   // "Don't know? Go to the MDN!",
//   // "Only ONE id with the same value per document!",
//   "Make good content decisions",
//   "Computers do what you tell them to do",
//   "Variables are buckets",
//   // "binary, upload, boom 👽",
//   `Syntax:
//   Spelling and Grammar rules`,
//   "Declaration and then Assignment",
//   "Everyone freaks out about operators",
//   // "if(conditions mentioned){click!}",
//   "select my query!!!",
//   "spend Jeff Bezos' money! 💸",
//   "Not that kind of stream, folx!",
//   "modulus % finds the remainder",
//   "BEWARE reassignment <br> ( = ) vs. comparison <br> ( ==/=== )",
//   "functions are the building blocks of a program 🧱",
//   "functions can take parameters and pass arguments",
//   "multiple conditions? Use && or ||",
//   // "Beware the trough of sorrow!",
//   "TURN IT UP!",
//   "Get a paid client by Feb 2!",
//   "Happy birthday, Alissa! 🎂",
//   "Arrays are like Bill Gates' toaster",
//   "Arrays are 0 indexed!",
//   "Arrays have methods - check out the MDN! 🔎"
// ];
