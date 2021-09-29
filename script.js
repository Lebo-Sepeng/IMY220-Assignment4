//Molebogeng Sepeng - #13
$(document).ready(() => {
    console.log('The document is ready!');

    $("button").on('click', function(){
        if($(this).html() == "Edit")
        {
            $(this).html("Update");
            $(this).siblings().hide();
           if( $(this).parent().data("type") == "text")
           {
                $(this).parent().append(
                    $('<input type="text" id="text">', {
                        class : 'details'
                }))
           }
           else if( $(this).parent().data("type") == "email")
           {
                $(this).parent().append(
                    $('<input type="email" id="email" name="email">', {
                        class : 'details'
                }))
           }
           else if( $(this).parent().data("type") == "date")
           {
                $(this).parent().append(
                    $('<input type="date" id="birthday" name="birthday">', {
                        class : 'details'
                }))
           }
        }
        else{
            $(this).html("Edit");
            $(this).siblings().show();
            $(this).siblings('span').html( $(this).siblings('input').val());
            $(this).siblings('input').remove();

        }
    });
});
