const wppconnect = require("@wppconnect-team/wppconnect");

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);
  });

// Variável para rastrear o estado da conversa
const conversationState = {};

function start(client) {
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      const user = message.from; //Aqui é armazenada as informações do user que está interagindo com o bot(message.from = mensagem de "user")
      if (!conversationState[user]) { //Aqui faz um teste se o user já existe, caso não ele cria na proxima linha e incia na etapa 0
        conversationState[user] = { step: 0 };
      }

      handleConversation(client, user, message.body); //(cliente atual, dados do user de origem, corpo da mensagem)
    }
  });
}

function handleConversation(client, user, message) {
  const state = conversationState[user]; // Aqui state vai receber vai obter o estado atual do user em especifico salvo no objeto conversationState
  switch (state.step) {
    case 0:
      mensagemInicial(client, user);
      state.step = 1;
      break;
    case 1:
      const choice = parseInt(message);
      if (!isNaN(choice) && choice >= 1 && choice <= 4) {
        handleChoice(client, user, choice);
        state.step = 0; // Reiniciar o ciclo
      } else {
        sendDefaultResponse(client, user);
      }
      break;
  }
}

function handleChoice(client, user, choice) {
  switch (choice) {
    case 1:
      funcOne(client, user);
      break;
    case 2:
      funcTwo(client, user);
      break;
    case 3:
      funcThr(client, user);
      break;
    case 4:
      finalizando(client, user);
      break;
    default:
      sendDefaultResponse(client, user);
  }
}

function saudacaoPorHora() {
  const horaAtual = new Date().getHours();

  if (horaAtual >= 5 && horaAtual < 12) {
    return "Bom dia";
  } else if (horaAtual >= 12 && horaAtual < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

async function mensagemInicial(client, texto) {
  const hora = saudacaoPorHora();
  const textoInicial =
    hora +
    ", bem vindo ao ChatBot do IFPA. A seguir algumas opções para você:" +
    "\n1. Primeira opção" +
    "\n2. Segunda opção" +
    "\n3. Terceira opção" +
    "\n4. Finalizar o atendimento";

  try {
    let resultado = await client
      .sendText(texto, textoInicial);
    console.log('Result: ', resultado)
  } catch (erro) {
    console.error('Error when sending: ', erro); //return object error
  }
  /*
    client
    .sendText(texto, textoInicial)
    .then((result) => {
      console.log("Result: ", result);
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem: ", error);
    });*/
}

async function sendDefaultResponse(client, recipient) {
  // Resposta padrão para mensagens que o bot não entende.
  const response =
    "Desculpe, não entendi sua pergunta. Por favor, digite algo referente as opções para obter informações relevantes.";

  try {
    let resultado = await client
      .sendText(recipient, response);
    console.log('Result: ', resultado);
  } catch (erro) {
    console.error('Error when sending: ', erro); //return object error
  }
  /*  client
    .sendText(recipient, response)
    .then((result) => {
      console.log("Result: ", result);
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem: ", error);
    });*/
}

async function funcOne(client, text) {
  const response = "Primeira Opção";

  try {
    let resultado = await client
      .sendText(text, response)
    console.log('Result: ', resultado)
  } catch (erro) {
    console.error('Error when sending: ', erro); //return object error
  }

  /*client
    .sendText(text, response)
    .then((result) => {
      console.log("Result: ", result);
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem: ", error);
    });*/
}

async function funcTwo(client, text) {
  const response = "Segunda Opção";

  try {
    let resultado = await client
      .sendText(text, response)
    console.log('Result: ', resultado)
  } catch (erro) {
    console.error('Error when sending: ', erro); //return object error
  }

  /* client
     .sendText(text, response)
     .then((result) => {
       console.log("Result: ", result);
     })
     .catch((error) => {
       console.error("Erro ao enviar mensagem: ", error);
     });*/
}

async function funcThr(client, text) {
  const response = "Terceira Opção";

  try {
    let resultado = await client
      .sendText(text, response)
    console.log('Result: ', resultado)
  } catch (erro) {
    console.error('Error when sending: ', erro); //return object error
  }

  /*client
    .sendText(text, response)
    .then((result) => {
      console.log("Result: ", result);
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem: ", error);
    });*/
}

async function finalizando(client, text) {
  const response = "Obrigado por entrar em contato. Espero ter ajudado.";

  try {
    let resultado = await client
      .sendText(text, response)
    console.log('Result: ', resultado)
  } catch (erro) {
    console.error('Error when sending: ', erro); //return object error
  }

  /*client
    .sendText(text, response)
    .then((result) => {
      console.log("Result: ", result);
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem: ", error);
    });*/
}
