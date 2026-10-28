// CONFIGURAÇÃO CENTRAL — edite aqui os dados do site.
window.KELVRA = {
  // Formato internacional, só dígitos. Ex.: "5516999999999". PREENCHER.
  whatsappNumber: "",
  whatsappMessage: "Olá! Conheci a Kelvra pelo site e gostaria de solicitar um orçamento para um projeto web.",
  instagramUrl: "", // opcional; vazio = link oculto
  founderName: "[Nome do fundador]", // PLACEHOLDER
  // Projetos do portfólio, na ordem de exibição. url vazia = card sem botão; soon: true = card informativo ("em breve").
  projects: [
    {
      name: "Raquiel Studio Fitness",
      category: "Website institucional",
      description: "Apresentação do projeto de desenvolvimento de site para o segmento fitness.",
      url: "https://raquielstudiofitness.com.br/",
      image: "assets/images/raquiel-studio-fitness-preview.webp" // recorte 16:10 da captura enviada (original em assets/images/originals/)
    },
    {
      name: "Rede Prime — Negócios que Constroem",
      category: "Site institucional",
      description: "Site institucional para apresentar a Rede Prime, fortalecer sua presença digital e comunicar sua atuação no segmento de negócios da construção civil em Ribeirão Preto.",
      url: "https://redeprimes.com.br/",
      image: "assets/images/rede-prime-home.webp" // recorte 16:10 da captura atual da home (original em assets/images/originals/)
    },
    {
      name: "Novos projetos em breve",
      category: "Em breve",
      description: "Estamos trabalhando em novos projetos incríveis. Em breve, você poderá conhecer mais trabalhos desenvolvidos pela Kelvra Software.",
      soon: true
    }
  ],
  // Adicione apenas depoimentos reais e autorizados: { text, name, role }
  testimonials: []
};
