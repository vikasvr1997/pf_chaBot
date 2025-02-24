
document.addEventListener('DOMContentLoaded', function() {
  console.log('Document loaded. Initializing chatbot.');

  fetch('chatbot.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('chatbot-container').innerHTML = data;
      initializeChatbot();
    })
    .catch(error => console.error('Error loading chatbot HTML:', error));
});

function initializeChatbot() {
  document.getElementById('chatbot-toggle').addEventListener('click', function() {
    console.log('Chatbot icon clicked');
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) {
      chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
    } else {
      console.error('Chat window not found!');
    }
  });

  // Attach navigation handlers to buttons after the chatbot has loaded
  document.querySelectorAll('.chat-quick-actions button').forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('onclick').match(/'(.*?)'/)[1];
      navigateToSection(target);
    });
  });

  console.log('Chatbot initialized successfully.');
}

function navigateToSection(sectionId) {
  console.log(`Navigating to section: ${sectionId}`);
  const controlButton = document.querySelector(`.control[data-id='${sectionId}']`);
  if (controlButton) {
    controlButton.click(); // Simulate click event for navigation
    addBotMessage(`Navigating to ${sectionId} section.`);
  } else {
    addBotMessage(`Sorry, I couldn't find the ${sectionId} section.`);
  }
}
