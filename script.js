document.getElementById('send-button').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const message = inputField.value.trim();
    if (message === '') return;

    displayMessage(message, 'user-message');

    inputField.value = '';
    inputField.focus();

    // Simulate bot response
    setTimeout(function() {
        const botResponse = generateBotResponse(message);
        displayMessage(botResponse, 'bot-message');
    }, 1000);
}

function displayMessage(message, className) {
    const chatMessages = document.getElementById('chat-messages');

    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;

    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = message;

    messageElement.appendChild(messageContent);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
    // Advanced logic to generate a bot response based on user input
    if (userMessage.toLowerCase().includes('hello')) {
        return 'Hi there! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('help')) {
        return 'Sure, I am here to help you. What do you need assistance with?';
    } else {
        return 'I am not sure how to respond to that. Could you please elaborate?';
    }
}
