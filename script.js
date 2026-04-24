// script.js - Main JavaScript for L'Oréal Beauty Assistant
// Import API credentials (loaded from secrets.js or environment)

document.addEventListener('DOMContentLoaded', function() {
  const chatWindow = document.getElementById('chatWindow');
  const chatForm = document.getElementById('chatForm');
  const userInput = document.getElementById('userInput');
  const productButtons = document.querySelectorAll('.product-btn');

  // Handle product button clicks
  productButtons.forEach(button => {
    button.addEventListener('click', function() {
      const product = this.getAttribute('data-product');
      const message = `Tell me about ${product}`;
      addMessage('user', message);
      sendMessage(message);
    });
  });

  // Handle chat form submission
  chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = userInput.value.trim();
    if (message) {
      addMessage('user', message);
      sendMessage(message);
      userInput.value = '';
    }
  });

  // Function to add a message to the chat window
  function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // Function to send message to OpenAI API
  async function sendMessage(message) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful beauty assistant for L\'Oréal products. Provide accurate information about beauty products, tips, and recommendations.'
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 150
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const reply = data.choices[0].message.content.trim();
      addMessage('assistant', reply);
    } catch (error) {
      console.error('Error:', error);
      addMessage('assistant', 'Sorry, I couldn\'t process your request right now. Please try again later.');
    }
  }
});