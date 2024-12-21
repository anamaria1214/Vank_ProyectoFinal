// Contexto inicial del chatbot
const contextoInicial = `
Vank es un banco virtual diseñado para facilitar la gestión de cuentas de sus usuarios. 
Con Vank, los usuarios pueden transferir dinero entre sus cuentas, enviar y recibir dinero 
de otras cuentas del sistema y gestionar sus finanzas de manera segura y eficiente. 
Responde de manera profesional, clara y útil.
`;

// Variable para controlar si el mensaje de bienvenida ya fue mostrado
let mensajeDeBienvenidaMostrado = false;

// Función para abrir/cerrar el chatbox
function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    const chatboxBody = document.getElementById('chatboxBody');

    if (chatbox.style.display === 'block') {
        chatbox.style.display = 'none';
    } else {
        chatbox.style.display = 'block';

        // Mostrar mensaje de bienvenida si aún no se ha mostrado
        if (!mensajeDeBienvenidaMostrado) {
            const mensajeDeBienvenida = document.createElement('div');
            mensajeDeBienvenida.className = 'bot-message';
            mensajeDeBienvenida.textContent = '¡Hola! Soy el asistente virtual de Vank. Estoy aquí para ayudarte con tus dudas sobre nuestro banco virtual y sus funcionalidades. Pregúntame lo que necesites.';
            chatboxBody.appendChild(mensajeDeBienvenida);

            // Scroll automático hacia abajo
            chatboxBody.scrollTop = chatboxBody.scrollHeight;

            mensajeDeBienvenidaMostrado = true; // Marcar que ya se mostró
        }
    }
}

// Función para enviar un mensaje y procesar la respuesta de Gemini
function enviarMensaje() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput.trim()) return;

    const chatboxBody = document.getElementById('chatboxBody');

    // Agregar el mensaje del usuario al chatbox
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    chatboxBody.appendChild(userMessage);

    // Llamar a la API de Gemini con el contexto inicial
    llamarGemini(userInput).then((respuesta) => {
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = respuesta;
        chatboxBody.appendChild(botMessage);

        // Scroll automático hacia abajo
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    });

    document.getElementById('userInput').value = ''; // Limpiar el input
}

// Función para llamar a la API de Gemini
function llamarGemini(prompt) {
    const API_KEY = 'AIzaSyAjD5R2bI7wiTBuSrwAMN7zIn_DwSetlfQ'; // Reemplaza con tu clave válida
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    // Añadir el contexto inicial al prompt
    const promptConContexto = `${contextoInicial}\n\nUsuario: ${prompt}\nBot:`;

    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: promptConContexto, // Enviar el prompt con el contexto
                        }
                    ]
                }
            ]
        }),
    })
    .then((respuesta) => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        return respuesta.json();
    })
    .then((datos) => {
        console.log(datos); // Inspecciona la respuesta
        return datos.candidates && datos.candidates[0].content 
            ? datos.candidates[0].content.parts[0].text
            : 'No se generó una respuesta.';
    })
    .catch((error) => {
        console.error('Error al llamar a la API de Gemini:', error);
        return 'Hubo un error al procesar tu solicitud.';
    });
}
