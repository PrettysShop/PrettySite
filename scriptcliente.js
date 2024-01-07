
function toggleChat() {
    var chat = document.getElementById('chat');
    chat.style.display = (chat.style.display === 'none' || chat.style.display === '') ? 'block' : 'none';
}

function closeChat() {
    var chat = document.getElementById('chat');
    chat.style.display = 'none';
}

function sendMessage() {
    var userInput = document.getElementById('userInput');
    var chatMessages = document.getElementById('chat-messages');

    var userMessage = userInput.value.trim();
    if (userMessage === '') return;

    // Adapte ou adicione lógica para processar a mensagem do usuário e obter a resposta do chatbot
    var botResponse = getChatbotResponse(userMessage);

    // Exibir mensagens do usuário e do chatbot
    displayMessage('Você:', userMessage);
    displayMessage('Pretty Bot:', botResponse);

    // Limpar a entrada do usuário
    userInput.value = '';
}

function displayMessage(sender, message) {
    var chatMessages = document.getElementById('chat-messages');
    var messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${sender}</strong>: ${message}`;
    chatMessages.appendChild(messageElement);

    // Role automaticamente para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getChatbotResponse(userMessage) {
    // Converte a mensagem do usuário para minúsculas para facilitar a correspondência
    const lowerCaseMessage = userMessage.toLowerCase();

    // Mapeamento de palavras-chave e respostas associadas
    const keywordResponses = {
        'oi': 'Olá, como posso ajudar você hoje?',
        'sou administrador, mas não tenho acesso ao painel': 'Tente pedir para que a Dona da loja libere o painel, caso isso continue entre em contato com o criador do site.',
        // Adicione mais palavras-chave e respostas conforme necessário
    };

    // Procura por palavras-chave na mensagem do usuário
    for (const keyword in keywordResponses) {
        if (lowerCaseMessage.includes(keyword)) {
            return keywordResponses[keyword];
        }
    }

    // Resposta padrão se nenhuma palavra-chave for encontrada
    return 'Desculpe, não entendi. Como posso ajudar?';
}
