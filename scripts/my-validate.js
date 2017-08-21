$(document).ready(function(){

    $("#main-form").validate({

       rules:{

            telephone:{
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10,

            },

            email:{
              required:true,
              email:true,
            },

            steamid:{
              required:true,
            },

            game_name:{
              required:true,
            },


       },

       messages:{

            telephone:{
                required: "Это поле обязательно для заполнения",
                digits: "Используйте только цифры",
                minlength: "Номер телефона должен состоять из 10 цифр",
                maxlength: "Номер телефона должен состоять из 10 цифр",

            },

            email: {
              required: "Это поле обязательно для заполнения",
              email:"Некорректный e-mail",
            },

            steamid:{
              required: "Это поле обязательно для заполнения",
            },

            game_name:{
              required: "Это поле обязательно для заполнения",
            },

       },

    });


    var sum = $('#sum');

    sum.blur(function(){
    if(sum.val() != ''){
        $('#valid').text('');
    }
    else{
        $('#valid').text('Это поле обязательно для заполнения');
      }
    });

    $('#main-form').submit(function(){
      var $radios = $('input:radio[name=shopping]');
      if($radios.filter('[value=yes]').is(':checked') === true) {
        if(sum.val() != '' ){
          $('#valid').text('');
          return true;
        }
        else{
          $('#valid').text('Это поле обязательно для заполнения');
          sum.focus();
          return false;
        }
      }

    });

}); //end of ready

