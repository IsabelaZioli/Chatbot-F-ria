
document.getElementById("send-button").addEventListener("click", sendMessage);

document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage(); 
  }
});

function sendMessage() {
  const userMessage = document.getElementById("user-input").value.toLowerCase();
  const chatbox = document.getElementById("chatbox");

  if (userMessage.trim() !== "") {
    const userMessageElement = document.createElement("p");
    userMessageElement.className = "user-message";
    userMessageElement.textContent = userMessage;
    chatbox.appendChild(userMessageElement);

  
    const botMessageElement = document.createElement("p");
    botMessageElement.className = "bot-message";

   
    if (userMessage.includes("proximo jogo") || userMessage.includes("quando")  || userMessage.includes("que horas") || userMessage.includes("horario")) {
      botMessageElement.textContent = "O próximo jogo da Fúria é hoje às 19h contra a Pain 🤏.";
    } else if (userMessage.includes("jogadores")) {
      botMessageElement.textContent = "Os jogadores da Fúria são: KSCERATO, yuriih, FalleN, molodoy e YEKINDAR.";
    } else if (userMessage.includes("assistir") || userMessage.includes("ver")){
      botMessageElement.textContent = "Você pode assistir aos jogos no canal oficial da Fúria na Twitch.";
    } else if (userMessage.includes("molodoy")) {
      botMessageElement.textContent = "HAHAHAHAHA é o que todo mundo está se perguntando! Molodoy é o novo AWPer do time de CS2 da nossa Fúria. É um jovem talento do Cazaquistão que surpreendeu nossos caça talentos e promete surpreender os fãs e os adversários também.";
    } else if (userMessage.includes("novidade") || userMessage.includes("yekindar")) {
      botMessageElement.textContent = "A Fúria está apostando na internacionalização do elenco de CS2. A novidade é a aquisição do player YEKINDAR como standin, jogador que conta com grande experiência e vai agregar muito o nosso time 👊🌍";
    } else if (userMessage.includes("obrigada")) {
      botMessageElement.textContent = "Imagina! Sempre uma honra ajudar uma Furiosa!";
    } else if (userMessage.includes("obrigado")) {
      botMessageElement.textContent = "Imagina! Sempre uma honra ajudar uma Furioso!";
    } else {
      botMessageElement.textContent = "Desculpe, não entendi. Pode tentar outra pergunta?";
    }

   
    chatbox.appendChild(botMessageElement);

  
    document.getElementById("user-input").value = "";
  }
}
