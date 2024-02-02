const wppconnect = require("@wppconnect-team/wppconnect");
const db = require("./js/db")

wppconnect
  .create({
    session: "ChatBotIFPA", //Pass the name of the client you want to start the bot
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

// const lista = `
//   1. PSU 2024 - Seu futuro é no IFPA 
//   2. Link ao site IFPA 
//   3. Endereços IFPA - Campus Tucuruí
//   4. Video apresentação Ciência da Computação
//   5. Finalizar o atendimento`;

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
      mensagemInicial(client, userId);
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

async function mensagemInicial(client, userId) {
  const hora = saudacaoPorHora();
  const textoInicial =
    hora +
    ", bem vindo ao ChatBot do IFPA. A seguir algumas opções para você: \n" +
    db.menuAtendimento;

  try {
    let resultado = await client.sendText(userId, textoInicial);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

async function sendDefaultResponse(client, userId) {
  // Resposta padrão para mensagens que o bot não entende.
  const response =
    "Desculpe, não entendi sua pergunta. Por favor, digite algo referente as opções para obter informações relevantes.";

  try {
    let resultado = await client.sendText(userId, response);
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
  const response = `
    🎓 Processo Seletivo Unificado (PSU) 2024 - IFPA Tucuruí 📚
    
    O Instituto Federal do Pará (IFPA) está com inscrições abertas para o Processo Seletivo Unificado (PSU) 2024 em Tucuruí! 🚀
    
    Vagas Disponíveis:
    Cursos Técnicos Integrados: 175 vagas
    Curso Técnico Subsequente: 40 vagas
    Cursos Superiores de Graduação: 160 vagas
    Totalizando 375 vagas gratuitas para diversos cursos.
    
    ⏰ Período de Inscrições:
    
    Início: 26 de outubro às 15h
    Término: 27 de novembro às 23h59
    🌐 Inscrições Online:
    Acesse o site do processo seletivo do IFPA para realizar a inscrição: https://prosel.ifpa.edu.br/psu2024
    
    Não perca a chance de fazer parte do IFPA! 🌟`;

  try {
    let resultado = await client.sendText(userId, response);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

async function responseTwo(client, userId) {
  const response = `🌐 Acesse o site do IFPA Campus Tucuruí através deste link: https://tucurui.ifpa.edu.br/ 🏫`;

  try {
    let resultado = await client.sendText(userId, response);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

async function responseThree(client, userId) {
  const response = `
  🏛 *A seguir, a lista de endereços do IFPA Campus Tucuruí:* 🌍
  
  *Prédio Principal:*
  Av. Brasília, s/n - Vila Permanente
  Tucuruí - PA
  CEP: 68455-766
  
  *Prédio Secundário:*
  Rua Porto Colômbia, s/n - Vila Permanente
  Tucuruí - PA
  CEP: 68455-695
  `;

  try {
    let resultado = await client.sendText(userId, response);
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
  const response = `
  O IFPA Campus Tucuruí oferta 40 vagas gratuitas para o curso superior em Ciências da Computação 📣📣📣 

  Com duração de 4 anos, o curso é voltado para candidatos que estão concluindo ou já concluíram o Ensino Médio. 
  
  As inscrições podem ser realizadas até 27 de novembro de 2023. A taxa de inscrição é R$ 40,00. 
  
  Confira no vídeo a explicação da estudante Thaís de Oliveira sobre o curso de Ciências da Computação. 
  
  📍Para mais informações, acesse: https://tucurui.ifpa.edu.br/ultimas-noticias/636-ifpa-campus-tucurui-oferta-375-vagas-em-cursos-tecnicos-e-superiores.
  `;
  try {
    let resultado = await client.sendText(userId, response);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

async function finalizando(client, userId) {
  const response = "Obrigado por entrar em contato. Espero ter ajudado.";

  try {
    let resultado = await client.sendText(userId, response);
    console.log("Result: ", resultado);
  } catch (erro) {
    console.error("Error when sending: ", erro); //return object error
  }
}

// async function finalizando(client, userId){
//   try {
//     let resultado = await client.sendText(userId, 'WPPConnect message with buttons', {
//       useTemplateButtons: true, // False for legacy
//       buttons: [
//         {
//           url: 'https://wppconnect.io/',
//           text: 'WPPConnect Site'
//         },
//         {
//           phoneNumber: '+55 11 22334455',
//           text: 'Call me'
//         },
//         {
//           id: 'your custom id 1',
//           text: 'Some text'
//         },
//         {
//           id: 'another id 2',
//           text: 'Another text'
//         }
//       ],
//    })
//     console.log("Result: ", resultado);
//   } catch (erro) {
//     console.error("Error when sending: ", erro); //return object error
//   }
// }
