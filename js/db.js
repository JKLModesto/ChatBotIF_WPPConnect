const timeDay = require("./timeDay.js");

const db = {
  menuAtendimento: `${timeDay}, bem vindo ao ChatBot do IFPA. A seguir algumas opções para você:
    1. PSU 2024 - Seu futuro é no IFPA 
    2. Link ao site IFPA 
    3. Endereços IFPA - Campus Tucuruí
    4. Video apresentação Ciência da Computação
    5. Finalizar o atendimento`,
  defaultResponse: `Desculpe, não entendi sua pergunta. Por favor, digite algo referente as opções para obter informações relevantes.`,
  textPSU2024: `
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
    
    Não perca a chance de fazer parte do IFPA! 🌟
  `,
  siteIFPA: `🌐 Acesse o site do IFPA Campus Tucuruí através deste link: https://tucurui.ifpa.edu.br/ 🏫`,
  enderecoIFPA:`
  🏛 *A seguir, a lista de endereços do IFPA Campus Tucuruí:* 🌍
  
  *Prédio Principal:*
  Av. Brasília, s/n - Vila Permanente
  Tucuruí - PA
  CEP: 68455-766
  
  *Prédio Secundário:*
  Rua Porto Colômbia, s/n - Vila Permanente
  Tucuruí - PA
  CEP: 68455-695
  `,
  inforCursoCienciaComputacao: `
  O IFPA Campus Tucuruí oferta 40 vagas gratuitas para o curso superior em Ciências da Computação 📣📣📣 

  Com duração de 4 anos, o curso é voltado para candidatos que estão concluindo ou já concluíram o Ensino Médio. 
  
  As inscrições podem ser realizadas até 27 de novembro de 2023. A taxa de inscrição é R$ 40,00. 
  
  Confira no vídeo a explicação da estudante Thaís de Oliveira sobre o curso de Ciências da Computação. 
  
  📍Para mais informações, acesse: https://tucurui.ifpa.edu.br/ultimas-noticias/636-ifpa-campus-tucurui-oferta-375-vagas-em-cursos-tecnicos-e-superiores.
  `,
  endMensage: `Obrigado por entrar em contato. Espero ter ajudado.`
};

// console.log(db.menuAtendimento)

module.exports = db;