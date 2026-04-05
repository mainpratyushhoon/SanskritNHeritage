// Chatbot functionality
document.addEventListener('DOMContentLoaded', () => {
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotModal = document.getElementById('chatbot-modal');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const chatbotMessages = document.getElementById('chatbot-messages');

  // Toggle chatbot modal
  chatbotToggle.addEventListener('click', () => {
    chatbotModal.style.display = 'block';
  });

  chatbotClose.addEventListener('click', () => {
    chatbotModal.style.display = 'none';
  });

  // Close modal when clicking outside
  chatbotModal.addEventListener('click', (e) => {
    if (e.target === chatbotModal) {
      chatbotModal.style.display = 'none';
    }
  });

  // Send message
  const sendMessage = async () => {
    const message = chatbotInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    chatbotInput.value = '';

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot';
    typingDiv.textContent = 'Thinking...';
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: message }),
      });

      const data = await response.json();
      
      // Remove typing indicator
      chatbotMessages.removeChild(typingDiv);

      if (response.ok) {
        addMessage(data.answer, 'bot');
      } else {
        addMessage('Sorry, I encountered an error. Please try again.', 'bot');
      }
    } catch (error) {
      // Remove typing indicator
      chatbotMessages.removeChild(typingDiv);
      addMessage('Sorry, I could not connect to the AI service. Please check your connection.', 'bot');
    }
  };

  chatbotSend.addEventListener('click', sendMessage);
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${type}`;
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
});