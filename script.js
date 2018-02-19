var answer="sorry no result";
var fake = false;
var petetion = "Please answer the question";
var count = 1;
var hint = "";

function checkPet() {
  var pet = document.getElementById('pet').value;
  if(pet =='.') {
    answer ='';
    hint = 'P'
    document.getElementById('pet').value = hint;


    fake = true;
  }
  else if(fake == true && count <=25) {
    var element =document.getElementById('pet').value;
    var length = element.length -1;
    answer = answer + element[length];
    hint = hint + petetion[count];
    document.getElementById('pet').value = hint;
    count = count +1;

  }
}

  function checkAnswer() {
    if(document.getElementById('quest').value != "")
      document.getElementById('ans').innerHTML = answer;
}
