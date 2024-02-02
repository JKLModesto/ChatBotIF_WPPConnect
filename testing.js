const wppconnect = require("@wppconnect-team/wppconnect");
const db = require("./js/db")

wppconnect
  .create({
    session: "testing", //Pass the name of the client you want to start the bot
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


function start(client) {
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      const userId = message.from; //Aqui é armazenada as informações do userId que está interagindo com o bot(message.from = mensagem de "userId")
      if (!conversationState[userId]) {
        //Aqui faz um teste se o userId já existe, caso não ele cria na proxima linha e incia na etapa 0
        conversationState[userId] = { step: 0 };
      }

      handleConversation(client, userId, message.body); //(cliente atual, dados do userId de origem, corpo da mensagem)
    }
  });
}
function handleConversation(client, userId, message) {
  const state = conversationState[userId]; // Aqui state vai receber vai obter o estado atual do userId em especifico salvo no objeto conversationState
  switch (state.step) {
    case 0:
      // mensagemInicial(client, userId);
      try {
        let resultado = client.sendText(userId, db.menuAtendimento);
        console.log("Result: ", resultado);
      } catch (erro) {
        console.error("Error when sending: ", erro);
      }
      state.step = 1;
      break;
    case 1:
      const choice = parseInt(message);
      if (!isNaN(choice) && choice >= 1 && choice <= 4) {
        handleChoice(client, userId, choice);
        state.step = 1; // Mantem na mesma linha de escolhas
      } else if (!isNaN(choice) && choice == 5) {
        handleChoice(client, userId, choice);
        state.step = 0; // Reiniciar o ciclo
      } else {
        sendDefaultResponse(client, userId);
      }
      break;
  }
}

function handleChoice(client, userId, choice) {
  switch (choice) {
    case 1:
      responseOne(client, userId);
      responseOnePointOne(client, userId);
      break;
    case 2:
      responseTwo(client, userId);
      break;
    case 3:
      responseThree(client, userId);
      break;
    case 4:
      responseFour(client, userId);
      responseFourPointOne(client, userId);
      break;
    case 5:
      finalizando(client, userId);
      break;
    default:
      sendDefaultResponse(client, userId);
  }
}

async function mensagemInicial(client, userId) {
  try {
    let resultado = await client.sendText(userId, db.menuAtendimento);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro);
  }
}

async function sendDefaultResponse(client, userId) {
  // Resposta padrão para mensagens que o bot não entende.
  try {
    let resultado = await client.sendText(userId, db.defaultResponse);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

async function responseOne(client, userId) {
  try {
    let imageIF = await client.sendImage(userId, "./img/psu_2024.png");
    console.log("Result: ", imageIF);
  } catch (erro) {
    console.error("Error when sending: ", erro);
  }
}

async function responseOnePointOne(client, userId) {
  try {
    let resultado = await client.sendText(userId, db.textPSU2024);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

async function responseTwo(client, userId) {
  try {
    let resultado = await client.sendText(userId, db.siteIFPA);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

async function responseThree(client, userId) {
  try {
    let resultado = await client.sendText(userId, db.enderecoIFPA);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

async function responseFour(client, userId) {
  try {
    let resultado = await client.sendFile(
      userId,
      "./img/video_ciencia_comp.mp4",
      'video_ciencia_comp'
    );
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

async function responseFourPointOne(client, userId) {
  try {
    let resultado = await client.sendText(userId, db.inforCursoCienciaComputacao);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

async function finalizando(client, userId) {
  try {
    let resultado = await client.sendText(userId, db.endMensage);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}