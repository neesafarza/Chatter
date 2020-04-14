
$(document).ready(()=> {

    $('#ask-button').click(() => {
        $('#question-area').text(()=>{
            return convo.getQuestion()
        })
    })
  $('#ans-button').click(() => {
    //   get value from text area
    let answer = $('#input-area').val()
    $('#answer-area').text(() => answer)
  }) 
})