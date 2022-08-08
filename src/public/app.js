$(document).ready(function () {
    $('form').on('submit', function (e) {
        //e.preventDefault();

        apellidosCli = $('#input_apellido').val();
        nombresCli = $('#input_nombre').val();
        dniCli = $('#input_dni').val();
        celularCli = $('#input_celular').val();
        emailCli = $('#input_email').val();
        consultaCli = $('#input_consulta').val();
        messageCli = 'Mensaje de: '+ apellidosCli + " " + nombresCli;

        $.ajax({
            url: '/users',
            method: 'POST',
            data: {
                apellidos: apellidosCli,
                nombres: nombresCli,
                dni: dniCli,
                celular: celularCli,
                email: emailCli
            },
            success: function (response) {
                if (response == '1') {

                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success',
                    )
                    $('#input_apellido').val("");
                    $('#input_nombre').val("");
                    $('#input_dni').val("");
                    $('#input_celular').val("");
                    $('#input_email').val("");
                    $('#input_consulta').val("");
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        //footer: '<a href="">Why do I have this issue?</a>'
                    })
                }

            }
        });


        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/sharon.camilabf@gmail.com',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                name: "Cardio Center",
                message: messageCli
            },
            success: (data) => console.log(data),
            error: (err) => console.log(err)
        });
    })
});