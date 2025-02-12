/* JavaScript (script.js) */

document.querySelector(".chatbot-toggle").addEventListener("click", function() {
    let chatbox = document.querySelector(".chatbox");
    chatbox.style.display = chatbox.style.display === "none" || chatbox.style.display === "" ? "block" : "none";
});

document.querySelector("#send-btn").addEventListener("click", function() {
    let userInput = document.querySelector("#chat-input").value;
    let chatMessages = document.querySelector(".chat-messages");
    
    if (userInput.trim() !== "") {
        chatMessages.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
        document.querySelector("#chat-input").value = "";
        
        setTimeout(() => {
            chatMessages.innerHTML += `<p><strong>Bot:</strong> Hello! How can I help you?</p>`;
        }, 1000);
    }
});