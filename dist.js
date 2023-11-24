"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var wppconnect = require("@wppconnect-team/wppconnect");
wppconnect.create({
  session: "ChatBotIFPA",
  //Pass the name of the client you want to start the bot
  statusFind: function statusFind(statusSession, session) {
    console.log("Status Session: ", statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
    //Create session wss return "serverClose" case server for close
    console.log("Session name: ", session);
  },
  headless: true,
  // Headless chrome
  devtools: false,
  // Open devtools by default
  useChrome: true,
  // If false will use Chromium instance
  debug: false,
  // Opens a debug session
  logQR: true,
  // Logs QR automatically in terminal
  browserWS: "",
  // If u want to use browserWSEndpoint
  browserArgs: [""],
  // Parameters to be added into the chrome browser instance
  puppeteerOptions: {},
  // Will be passed to puppeteer.launch
  disableWelcome: false,
  // Option to disable the welcoming message which appears in the beginning
  updatesLog: true,
  // Logs info updates automatically in terminal
  autoClose: 60000,
  // Automatically closes the wppconnect only when scanning the QR code (default 60 seconds, if you want to turn it off, assign 0 or false)
  tokenStore: "file",
  // Define how work with tokens, that can be a custom interface
  folderNameToken: "./tokens",
  //folder name when saving tokens
  // BrowserSessionToken
  // To receive the client's token use the function await clinet.getSessionTokenBrowser()
  sessionToken: {
    WABrowserId: '"UnXjH....."',
    WASecretBundle: '{"key":"+i/nRgWJ....","encKey":"kGdMR5t....","macKey":"+i/nRgW...."}',
    WAToken1: '"0i8...."',
    WAToken2: '"1@lPpzwC...."'
  }
}).then(function (client) {
  return start(client);
})["catch"](function (error) {
  console.log(error);
});

// Variável para rastrear o estado da conversa
var conversationState = {};
var lista = "1. PSU 2024 - Seu futuro é no IFPA\n" + "2. Link ao site IFPA\n" + "3. Endereços IFPA - Campus Tucuruí\n" + "4. Finalizar o atendimento";
function start(client) {
  client.onMessage(function (message) {
    if (message.isGroupMsg === false) {
      var userId = message.from; //Aqui é armazenada as informações do userId que está interagindo com o bot(message.from = mensagem de "userId")
      if (!conversationState[userId]) {
        //Aqui faz um teste se o userId já existe, caso não ele cria na proxima linha e incia na etapa 0
        conversationState[userId] = {
          step: 0
        };
      }
      handleConversation(client, userId, message.body); //(cliente atual, dados do userId de origem, corpo da mensagem)
    }
  });
}

function handleConversation(client, userId, message) {
  var state = conversationState[userId]; // Aqui state vai receber vai obter o estado atual do userId em especifico salvo no objeto conversationState
  switch (state.step) {
    case 0:
      mensagemInicial(client, userId);
      state.step = 1;
      break;
    case 1:
      var choice = parseInt(message);
      if (!isNaN(choice) && choice >= 1 && choice <= 3) {
        handleChoice(client, userId, choice);
        state.step = 1; // Mantem na mesma linha de escolhas
      } else if (!isNaN(choice) && choice == 4) {
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
      break;
    case 2:
      responseTwo(client, userId);
      break;
    case 3:
      responseThree(client, userId);
      break;
    case 4:
      finalizando(client, userId);
      break;
    default:
      sendDefaultResponse(client, userId);
  }
}
function saudacaoPorHora() {
  var horaAtual = new Date().getHours();
  if (horaAtual >= 5 && horaAtual < 12) {
    return "Bom dia";
  } else if (horaAtual >= 12 && horaAtual < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}
function mensagemInicial(_x, _x2) {
  return _mensagemInicial.apply(this, arguments);
}
function _mensagemInicial() {
  _mensagemInicial = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(client, userId) {
    var hora, textoInicial, resultado;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          hora = saudacaoPorHora();
          textoInicial = hora + ", bem vindo ao ChatBot do IFPA. A seguir algumas opções para você: \n" + lista;
          _context.prev = 2;
          _context.next = 5;
          return client.sendText(userId, textoInicial);
        case 5:
          resultado = _context.sent;
          console.log("Result: ", resultado);
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.error("Error when sending: ", _context.t0); //return object error
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _mensagemInicial.apply(this, arguments);
}
function sendDefaultResponse(_x3, _x4) {
  return _sendDefaultResponse.apply(this, arguments);
}
function _sendDefaultResponse() {
  _sendDefaultResponse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(client, userId) {
    var response, resultado;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // Resposta padrão para mensagens que o bot não entende.
          response = "Desculpe, não entendi sua pergunta. Por favor, digite algo referente as opções para obter informações relevantes.";
          _context2.prev = 1;
          _context2.next = 4;
          return client.sendText(userId, response);
        case 4:
          resultado = _context2.sent;
          console.log("Result: ", resultado);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.error("Error when sending: ", _context2.t0); //return object error
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _sendDefaultResponse.apply(this, arguments);
}
function responseOne(_x5, _x6) {
  return _responseOne.apply(this, arguments);
}
function _responseOne() {
  _responseOne = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(client, userId) {
    var response, imageIF, resultado;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          response = "O Instituto Federal do Pará (IFPA) deu início ao Processo Seletivo Unificado (PSU) 2024.\n" + "Em Tucuruí, são 175 vagas para cursos técnicos integrados, 40 vagas para curso técnico subsequente e 160 para cursos superiores de graduação, totalizando 375 vagas gratuitas." + "O período de inscrições ocorre a partir das 15h do dia 26 de outubro até às 23h59 do dia 27 de novembro, exclusivamente pela internet, no site do processo seletivo do IFPA: https://prosel.ifpa.edu.br/psu2024.";
          _context3.prev = 1;
          _context3.next = 4;
          return client.sendImage(userId, "./img/psu_2024.png");
        case 4:
          imageIF = _context3.sent;
          console.log("Result: ", imageIF);
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          console.error("Error when sending: ", _context3.t0);
        case 11:
          _context3.prev = 11;
          _context3.next = 14;
          return client.sendText(userId, response);
        case 14:
          resultado = _context3.sent;
          console.log("Result: ", resultado);
          _context3.next = 21;
          break;
        case 18:
          _context3.prev = 18;
          _context3.t1 = _context3["catch"](11);
          console.error("Error when sending: ", _context3.t1); //return object error
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8], [11, 18]]);
  }));
  return _responseOne.apply(this, arguments);
}
function responseTwo(_x7, _x8) {
  return _responseTwo.apply(this, arguments);
}
function _responseTwo() {
  _responseTwo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(client, userId) {
    var response, resultado;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          response = "Acesse o site do IFPA Campus Tucuruí por esse link:\n" + "https://tucurui.ifpa.edu.br/";
          _context4.prev = 1;
          _context4.next = 4;
          return client.sendText(userId, response);
        case 4:
          resultado = _context4.sent;
          console.log("Result: ", resultado);
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          console.error("Error when sending: ", _context4.t0); //return object error
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _responseTwo.apply(this, arguments);
}
function responseThree(_x9, _x10) {
  return _responseThree.apply(this, arguments);
}
function _responseThree() {
  _responseThree = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(client, userId) {
    var response, resultado;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          response = "A seguir a lista de endereços do IFPA Campus Tucuruí" + "\n\nPrédio principal: Av. Brasília, s/n - Vila Permanente, Tucuruí - PA CEP: 68455-766" + "\n\nPrédio secundario: Rua Porto Colômbia, s/n - Vila Permanente, Tucuruí - PA - CEP 68455695";
          _context5.prev = 1;
          _context5.next = 4;
          return client.sendText(userId, response);
        case 4:
          resultado = _context5.sent;
          console.log("Result: ", resultado);
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          console.error("Error when sending: ", _context5.t0); //return object error
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _responseThree.apply(this, arguments);
}
function finalizando(_x11, _x12) {
  return _finalizando.apply(this, arguments);
}
function _finalizando() {
  _finalizando = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(client, userId) {
    var response, resultado;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          response = "Obrigado por entrar em contato. Espero ter ajudado.";
          _context6.prev = 1;
          _context6.next = 4;
          return client.sendText(userId, response);
        case 4:
          resultado = _context6.sent;
          console.log("Result: ", resultado);
          _context6.next = 11;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          console.error("Error when sending: ", _context6.t0); //return object error
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _finalizando.apply(this, arguments);
}
