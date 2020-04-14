
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();



$(document).ready(()=> {

   
    $('#question-area').text(()=>{
        return convo.getQuestion()
    })
  
  $('#ans-button').click(() => {
    //   get value from text area
    let answer = $('#input-area').val()
    $('#messages').append(() => `<div class='answer'>${answer} <h3 class='time' align='right'>${time}</h3></div> `)
    
    $('#messages').append(()=>{
        return `<div class='question'>${convo.getQuestion()}<h3 class='time'>${time}</h3> </div>`
    })
    $('#input-area').val(() => {
        return '';
    })
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }) 

  $('#input-area').keypress(function (e) {
    var key = e.which;
    if(key === 13){
        $('#ans-button').click();
        return false;
    }
  }
  )
})

