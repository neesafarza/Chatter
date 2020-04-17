
const time = () => {
  const today = new Date();
  return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
};

const scrollToTop = () => {
  $('#messages').scrollTop($('#messages')[0].scrollHeight);
};

const sendAnswer = () => {
  $('textarea').removeClass('no-answer');
  const answer = $('#input-area').val();
  if (answer === '' || answer.match(/^ *$/)) {
    $('textarea').attr('placeholder', 'Type your answer here!');
    $('textarea').addClass('no-answer');
    return false;
  }
  $('#messages').append(() => `<div class='answer'>${answer}<h3 class='time' align='right'>${time()}</h3></div> `);
  scrollToTop();

  if (answer === 'q' || answer === 'Q') {
    alert('Goodbye!');
    window.close();
  }
};

const sendQuestion = (convo, audioElement) => {
  // will not accept no answer
  // delay the next message by 1s
  // scroll automatically when overflow
  setTimeout(() => {
    audioElement.play();
    $('#messages').append(() => `<div class='question'>${convo.getQuestion()}<h3 class='time'>${time()}</h3> </div>`);
    scrollToTop();
  }, 1000);
};

$(document).ready(() => {
  // add sound
  const audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'https://www.soundjay.com/misc/magic-chime-02.mp3');
  const convo = new Conversation(convo1);
  $('#question-area').text(() => convo.getQuestion());

  // method is too long, split into functions ie: writeAnswer, writeQuestion
  $('#ans-button').click(() => {
    // get value from text area
    sendAnswer();
    const answer = $('#input-area').val();
    if (answer === '' || answer.match(/^ *$/)) {
      return false;
    }
    audioElement.currentTime = 0;
    sendQuestion(convo, audioElement);


    // clear input-area after sending
    $('#input-area').val(() => '');
  });

  $('#input-area').keypress((e) => {
    const key = e.which;
    if (key === 13) {
      $('#ans-button').click();
      return false;
    }
  });
});
