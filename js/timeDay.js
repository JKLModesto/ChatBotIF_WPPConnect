function timeDay() {
  const horaAtual = new Date().getHours();

  if (horaAtual >= 5 && horaAtual < 12) {
    return "Bom dia";
  } else if (horaAtual >= 12 && horaAtual < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

module.exports = timeDay();
