document.querySelector('form').addEventListener('submit', function(event) {
    alert("Detectado");
    event.preventDefault(); // Detener el envío del formulario para procesarlo antes.
    replaceText();
    event.target.submit(); // Enviar el formulario una vez que se haya procesado el texto.
});

function replaceText() {
    const textArea = document.querySelector('textarea');
    const text = textArea.value;
    const replacedText = text.replace(/dp/g, "xx");
    if (replacedText !== text) {
        textArea.value = replacedText;
        alert("El texto se ha reemplazado por política de privacidad.");
    }
}