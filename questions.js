const convo1 = ['What is your name?',
  'what is your favourite colour',
  'Do you think OJ did it?',
  'Do you think Carole Baskin killed her husband?',
  'Do you believe in life outer space?',
  'What house are you in Hogwarts?',
  'do you want more question?',
  'Unfortunately there are no more questions',
];

const Conversation = class {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestion = 0;
  }

    getQuestion = () => {
      const question = this.questions[this.currentQuestion];
      this.currentQuestion += 1;
      if (this.currentQuestion === convo1.length + 1) {
        alert('Goodbye!');
        window.close();
      }
      return question;
    }
};
const convo = new Conversation(convo1);

// remove this commented code
/* var pickrandom = () => {
    let random1 = Math.floor(Math.random() * conversations.length) ;
    return conversations[random1]
} */
