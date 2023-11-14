const wppconnect = require("@wppconnect-team/wppconnect");


wppconnect
  .create({
    session: "WhatsMOD", //Pass the name of the client you want to start the bot
    statusFind: (statusSession, session) => {
      console.log("Status Session: ", statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
      //Create session wss return "serverClose" case server for close
      console.log("Session name: ", session);
    },
    headless: true, // Headless chrome
    devtools: false, // Open devtools by default
    useChrome: true, // If false will use Chromium instance
    debug: false, // Opens a debug session
    logQR: true, // Logs QR automatically in terminal
    browserWS: "", // If u want to use browserWSEndpoint
    browserArgs: [""], // Parameters to be added into the chrome browser instance
    puppeteerOptions: {}, // Will be passed to puppeteer.launch
    disableWelcome: false, // Option to disable the welcoming message which appears in the beginning
    updatesLog: true, // Logs info updates automatically in terminal
    autoClose: 60000, // Automatically closes the wppconnect only when scanning the QR code (default 60 seconds, if you want to turn it off, assign 0 or false)
    tokenStore: "file", // Define how work with tokens, that can be a custom interface
    folderNameToken: "./tokens", //folder name when saving tokens
    // BrowserSessionToken
    // To receive the client's token use the function await clinet.getSessionTokenBrowser()
    sessionToken: {
      WABrowserId: '"UnXjH....."',
      WASecretBundle:
        '{"key":"+i/nRgWJ....","encKey":"kGdMR5t....","macKey":"+i/nRgW...."}',
      WAToken1: '"0i8...."',
      WAToken2: '"1@lPpzwC...."',
    },
  })
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);
  });

// Variável para rastrear o estado da conversa
const conversationState = {};

const lista = 
"1. PSU 2024 - Seu futuro é no IFPA\n" +
"2. Link ao site IFPA\n" +
"3. Endereços IFPA - Campus Tucuruí\n" +
"4. Finalizar o atendimento";

function start(client) {
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      const user = message.from; //Aqui é armazenada as informações do user que está interagindo com o bot(message.from = mensagem de "user")
      if (!conversationState[user]) {
        //Aqui faz um teste se o user já existe, caso não ele cria na proxima linha e incia na etapa 0
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
      if (!isNaN(choice) && choice >= 1 && choice <= 3) {
        handleChoice(client, user, choice);
        state.step = 1; // Mantem na mesma linha de escolhas
      } else if (!isNaN(choice) && choice == 4) {
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
    ", bem vindo ao ChatBot do IFPA. A seguir algumas opções para você: \n" +
    lista;

  try {
    let resultado = await client.sendText(texto, textoInicial);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
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
    let resultado = await client.sendText(recipient, response);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
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
  const response =
    "O Instituto Federal do Pará (IFPA) deu início ao Processo Seletivo Unificado (PSU) 2024.\n" +
    "Em Tucuruí, são 175 vagas para cursos técnicos integrados, 40 vagas para curso técnico subsequente e 160 para cursos superiores de graduação, totalizando 375 vagas gratuitas." +
    "O período de inscrições ocorre a partir das 15h do dia 26 de outubro até às 23h59 do dia 27 de novembro, exclusivamente pela internet, no site do processo seletivo do IFPA: https://prosel.ifpa.edu.br/psu2024.";

  try {
    let resultado = await client.sendText(text, response);
    console.log("Result: ", resultado);
    // let resultado2 = await client.sendText(text, lista);
    // console.log("Result: ", resultado2);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
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
  const response =
    "Acesse o site do IFPA Campus Tucuruí por esse link:\n" +
    "https://tucurui.ifpa.edu.br/";

  try {
    let resultado = await client.sendText(text, response);
    console.log("Result: ", resultado);
    // let resultado2 = await client.sendText(text, lista);
    // console.log("Result: ", resultado2);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
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
  const response =
    "A seguir a lista de endereços do IFPA Campus Tucuruí" +
    "\n\nPrédio principal: Av. Brasília, s/n - Vila Permanente, Tucuruí - PA CEP: 68455-766" +
    "\n\nPrédio secundario: Rua Porto Colômbia, s/n - Vila Permanente, Tucuruí - PA - CEP 68455695";

  try {
    let resultado = await client.sendText(text, response);
    console.log("Result: ", resultado);
    // let resultado2 = await client.sendText(text, lista);
    // console.log("Result: ", resultado2);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
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
    let resultado = await client.sendText(text, response);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
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
