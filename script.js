
const today = new Date();
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

$(document).ready(() => {
  $('#question-area').text(() => convo.getQuestion());

  const scrollToTop = () => {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  };

  $('#ans-button').click(() => {
    // get value from text area
    const answer = $('#input-area').val();
    $('#messages').append(() => `<div class='answer'>${answer}
     <h3 class='time' align='right'>${time}</h3></div> `);
    scrollToTop();
    if (answer === 'q' || answer === 'Q') {
      alert('Goodbye!');
      window.close();
    }

    // delay the next message by 1s
    // scroll automatically when overflow
    setTimeout(() => {
      $('#messages').append(() => `<div class='question'>${convo.getQuestion()}<h3 class='time'>${time}</h3> </div>`);
      scrollToTop();
    }, 1000);

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
