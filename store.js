console.log("Here")
var TIMEOUT = 6000;


var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

  }

}

$(document).ready(function() {
    $("#login-btn").click
    (function() {
    $("#form1").toggle();
    });
  }); 

  $(function() {
  $("#email_error_message").hide();
  $("#mot_de_passe_error_message").hide();

  var error_email = false;
  var error_mot_de_passe = false;

  $("#form_email").focusout(function(){
    check_email();
  });
  $("#form_mot_de_passe").focusout(function() {
    check_mot_de_passe();
  });

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#form_email").val();
    if (pattern.test(email) && email !== '') {
      $("#email_error_message").hide();
    } else {
      $("#email_error_message").html("Email Invalide");
      $("#email_error_message").show();
      error_email = true;
    }
  };

  function check_mot_de_passe() {
    var mot_de_passe_length = $("#form_mot_de_passe").val().length;
    if (mot_de_passe_length < 8) {
       $("#mot_de_passe_error_message").html("Au moins 8 Charactères");
       $("#mot_de_passe_error_message").show();
       error_mot_de_passe = true;
    } else {
       $("#mot_de_passe_error_message").hide();
    }
 };

  $("#form1").submit(function() {
    error_email = false;
    error_mot_de_passe = false;

    check_email();
    check_mot_de_passe();

    if (error_email === false && error_mot_de_passe === false) {
      alert("Vous êtes connectés!");
    } else {
      alert("Finissez ce formulaire pour vous connecter!");
    }


   });
});
