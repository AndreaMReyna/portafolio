const contactForm = document.querySelector('.contacto__formulario');
contactForm.addEventListener('submit', (e) => {
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;

    if (name === '' || email === '') {
        e.preventDefault();
        alert('Por favor completa todos los campos.');
    }
});
