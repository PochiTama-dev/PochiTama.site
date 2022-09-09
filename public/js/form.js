
const info = document.querySelectorAll('.contactInput');


const errors = document.querySelectorAll('.errorsMsg');


const form = document.querySelector('.contactForm');


let submit = true;


const expresions = {
    name: /^[a-zA-Z\sñáéíóúü ]*$/,
    phone: /^[0-9]{8,15}$/,
    email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
}


const msg = {
    name: 'Complete con un nombre de 3 a 15 caracteres.',
    email: 'La dirección de Email debe ser válida.',
    phone: 'Ingrese un teléfono válido o deje en blanco.',
    msg: 'Escriba algo coherente 400 caracteres máximo.',
    confirmed: 'Dato completado con exito!!',
    required: 'Este dato es obligatorio.',
    empty: '',

   
    message: function (index, msg, boolean) {
        errors.forEach((error, position) => {
            if (index === position) {
                error.innerText = msg;
                submit = boolean;
            }
        });
    }
}

form.addEventListener('submit', (event)=>{

   
    event.preventDefault();

   
    grecaptcha.ready(function() {
        grecaptcha.execute('6Ld9GYYhAAAAAFCO21pdydwaFif03N0CZ1FDIejU', {action: 'homepage'})
        .then(function(token) {
            document.getElementById('captchaResponse').value = token;

           
            info.forEach((data, index) => {
                data.addEventListener('blur', ()=>{
                    switch (data.name) {
                        case 'name':
                            if (!expresions.name.test(data.value.trim()) || data.value.trim().length < 3 || data.value.trim().length > 15) {
                                msg.message(index, msg.name, false);
                            } else {
                                msg.message(index, msg.confirmed, true);
                            }
                        break;
                    
                        case 'email':
                            if (!expresions.email.test(data.value.trim())) {
                                msg.message(index, msg.email, false);
                            } else {
                                msg.message(index, msg.confirmed, true);
                            }
                        break;
            
                        case 'phone':
                            if (!expresions.phone.test(data.value.trim()) && data.value.trim() !== '') {
                                msg.message(index, msg.phone, false);
                            } else if (data.value.trim() !== '') {
                                msg.message(index, msg.confirmed, true); 
                            } else {
                                msg.message(index, msg.empty, true);
                                submit = true;
                            }
                        break;
            
                        case 'msg':
                            if (data.value.trim().length < 20 || data.value.trim().length > 400) {
                                msg.message(index, msg.msg, false);
                            } else {
                                msg.message(index, msg.confirmed, true);  
                            }
                        break;
                    }
                });  
            });

           
            info.forEach((data, index) => {
                if (data.value === '' && data.name !== 'phone') {
                    msg.message(index, msg.required, false);
                }
            });

           
            if (submit) {
                form.submit();
            }
        })
    });
});