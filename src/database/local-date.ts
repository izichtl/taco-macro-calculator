interface AssociatedQuestion {
  qsn: string;
  optn: string[];
}
interface NotAssociatedQuestions {
  qsn: string;
  optn: string[];
  values: number[]
}
  
interface NotAssociatedQuizObject {
  qsns: NotAssociatedQuestions[];
}
interface AssociatedQuizObject {
  qsns: AssociatedQuestion[];
}
  
export const associatedQuestions: AssociatedQuizObject = {
    qsns: [
      {
        qsn: "Qual a sua relação com o Sicredi como instituição financeira?",
        optn: [
          "Não conheço ou uso os produtos financeiros do Sicredi",
          "Uso alguns produtos do Sicredi, mas tenho outro banco como principal",
          "O Sicredi é minha principal instituição financeira"
        ],
      },
      {
        qsn: "Como você percebe o Sicredi na sua região?",
        optn: [
          "Confesso que não entendo bem o que é nem o que oferece",
          "O discurso é bonito, mas na prática não vejo diferença de um banco tradicional",
          "Acredito e uso o Sicredi porque ele fortalece e desenvolve a região"
        ],
      },
  
      {
        qsn: "Sobre a distribuição de sobras, qual dessas frases te representa melhor?",
        optn: [
          "Não sabia que o Sicredi distribuía sobras para os associados",
          "Sei que recebo sobras do Sicredi, mas não sei o valor e nem como consultar",
          "Acompanho os resultados e procuro utilizar os produtos para gerar mais sobras"
        ],
      },
  
      {
        qsn: "Você já participou de alguma assembleia no Sicredi?",
        optn: [
          "Nunca ouvi falar sobre assembleias no Sicredi",
          "Já fui convidado mas não tenho interesse ou tempo de participar",
          "Participo sempre que possível e ajudo a decidir os rumos da cooperativa"
        ],
      },
      {
        qsn: "Você conhece algum projeto social que o Sicredi apoia ou desenvolve?",
        optn: [
          "Não conheço nenhum investimento social do Sicredi",
          "Imagino que o Sicredi investe em projetos sociais, mas não sei exatamente como",
          "Conheço, acompanho e admiro os projetos sociais do Sicredi na minha região"
        ],
      },
      {
        qsn: "Sobre capital social, qual dessas opções descreve melhor sua situação?",
        optn: [
          "Nunca ouvi falar ou não sei o que é capital social",
          "Investi para me associar mas não sei quanto tenho nem quanto rendeu",
          "Realizo aportes recorrentes para fortalecer a cooperativa e isentar tarifas"
        ],
      },
    ]
};

export const associatedProfiles: any = [
  {
    title: 'Cético(a) do cooperativismo',
    profile: `
      Você ainda está cético(a) sobre o Sicredi e o cooperativismo. 
      Tem muitas dúvidas e não está convencido dos benefícios oferecidos.
      Você não sabe se o modelo cooperativo pode trazer vantagens reais.
      Você não conhece as diferenças entre o Sicredi e um banco tradicional.
      Embora exista curiosidade, ainda mantém um pé atrás.
    `,
    nextSteps: [
      'Procure no YouTube por vídeos de outros associados(as) compartilhando opiniões reais sobre sua experiência com o Sicredi.',
      'Marque uma conversa com um gerente para compartilhar suas dúvidas e inquietações sobre o cooperativismo.',
      'Teste um produto básico, como conta corrente ou cartão, para começar a ver como funciona na prática.',
    ]
  },
  {
    title: 'Iniciante do cooperativismo',
    profile: `
      Você está dando os primeiros passos no Sicredi e no cooperativismo.
      Ainda possui dúvidas e inseguranças mas está aberto a saber mais.
      Você abriu sua conta, se tornou associado(a) e começou a utilizar alguns produtos.
      Assembleias, distribuição de lucros e capital social ainda são conceitos difíceis de entender.
      Talvez queira saber mais sobre cooperativismo mas não sabe por onde começar.
    `,
    nextSteps: [
      'Solicite uma visita para seu gerente de contas para compartilhar suas necessidades e entender como o Sicredi pode te ajudar.',
      'Explore novos produtos, como cartões, seguros e investimentos, ampliando sua movimentação e participação nas sobras.',
      'Participe da assembleia da sua cooperativa, acontece anualmente e é um momento essencial para viver o cooperativismo na prática.',
      'Informe-se na sua agência sobre o Programa Crescer, para aprofundar seu entendimento sobre cooperativismo e o Sicredi.',
    ]
  },
  {
    title: 'Entusiasta do cooperativismo',
    profile: `
      Você é um entusiasta, conhece o Sicredi e entende os diferenciais do cooperativismo.
      Mesmo assim, ainda existem oportunidades para ampliar sua participação.
      Você já utiliza alguns produtos do Sicredi e tem curiosidade por outros.
      Você percebe e acredita no impacto positivo gerado através da cooperativa.
      Na prática, até gostaria de participar mais, porém acaba deixando para depois.
    `,
    nextSteps: [
      'Transforme o Sicredi na sua principal instituição financeira, utilize novos produtos e amplie suas movimentações e sobras.',
      'Inscreva-se no Programa Crescer e considere se tornar um coordenador de núcleo na sua cooperativa.',
      'Priorize a assembleia da cooperativa na sua agenda e ajude a decidir os rumos da cooperativa que você também é dono.',
      'Realize aportes programados de capital social para isentar ou reduzir suas taxas.',
    ]
  },
  {
    title: 'Porta-voz do cooperativismo',
    profile: `
      Você é um(a) verdadeiro(a) porta-voz do Sicredi e do cooperativismo. 
      Seu engajamento faz a diferença na cooperativa e inspira outros associados(as). 
      Você entende a importância de usar nossos produtos e de investir na cooperativa. 
      Você participa das assembleias e ajuda a decidir os rumos da cooperativa.
      A sua contribuição viabiliza projetos de impacto social na sua região.
    `,
    nextSteps: [
      'Transforme o Sicredi na sua principal instituição financeira, utilize novos produtos e amplie suas movimentações e sobras.',
      'Inscreva-se no Programa Crescer e considere se tornar um coordenador de núcleo na sua cooperativa.',
      'Priorize a assembleia da cooperativa na sua agenda e ajude a decidir os rumos da cooperativa que você também é dono.',
      'Realize aportes programados de capital social para isentar ou reduzir suas taxas.',
    ]
  },

]

// ------------
// ------------
// ------------

// Com qual dessas alternativas você mais se identifica?
export const notAssociatedQuestions: NotAssociatedQuizObject = {
  qsns: [
    {
      qsn: "Sobre atendimento na sua instituição financeira:",
      optn: [
        "Um gerente que me conhece mas também poder resolver meus problemas pela internet.",
        "Prefiro rapidez e conveniência, mesmo que de forma mais impessoal.",
      ],
      values: [15, 5]
    },
    {
      qsn: "Sobre abordagem comercial na sua instituição financeira:",
      optn: [
        "Prefiro uma instituição que priorize entender minhas necessidades e momento de vida.",
        "Só quero utilizar um banco que funcione, sem a necessidade de personalização.",
      ],
      values: [14, 5]
    },

    {
      qsn: "Sobre distribuição de lucros na sua instituição financeira:",
      optn: [
        "Gosto da ideia de receber lucros proporcionais a utilização dos produtos e serviços.",
        "Prefiro que os lucros sejam distribuídos somente para os acionistas dos bancos.",
      ],
      values: [19, 2]
    },

    {
      qsn: "Sobre participação e assembleias na sua instituição financeira:",
      optn: [
        "Acho importante participar e acompanhar temas que afetam a mim e a minha comunidade.",
        "Prefiro não participar e deixar essa responsabilidade para quem está no comando.",
      ],
      values: [14, 3]
    },
    {
      qsn: "Sobre sua relação com sua instituição financeira:",
      optn: [
        "Gosto da ideia de ser dono e cliente ao mesmo tempo, participando dos lucros e decisões.",
        "Só quero um banco que funcione, não faço questão de me envolver e participar.",
      ],
      values: [17, 4]
    },
    {
      qsn: "Sobre impacto social na sua instituição financeira:",
      optn: [
        "Prefiro uma instituição que investe em projetos sociais e no desenvolvimento local.",
        "Não me interesso pelo impacto social da instituição, desde que funcione e me atenda.",
      ],
      values: [21, 1]
    },
  ]
};

export const notAssociatedProfiles: any = [
  {
    title: 'Leve conexão (0-40%)',
    profile: `
      😢Você merece mais que um banco. Que tal conhecer mais sobre cooperativismo?
      Você prefere a abordagem dos bancos e não se sente muito atraído pelo modelo cooperativo. 
      O Sicredi pode não ser a sua primeira escolha, mas vale a pena conhecer mais sobre os diferenciais do cooperativismo.
    `,
    nextSteps: [
      'Procure no YouTube por vídeos de outros associados(as) compartilhando opiniões reais sobre sua experiência com o Sicredi.',
      'Pesquise sobre as diferenças, prós e contras de um banco tradicional em comparação com uma cooperativa de crédito.',
      'Marque uma conversa com um gerente para compartilhar suas dúvidas e inquietações sobre o cooperativismo.',
    ]
  },
  {
    title: 'Média conexão (41-70%)',
    profile: `
      😊Você gosta da ideia cooperativismo. O Sicredi pode ser uma ótima opção para você.
      Você vê o lado bom do cooperativismo, mas ainda valoriza alguns aspectos dos bancos.
      Talvez o Sicredi seja mais interessante do que você imagina.
    `,
    nextSteps: [
      'Pesquise na internet ou visite uma agência Sicredi para entender os principais diferenciais de fazer parte de uma cooperativa.',
      'Abra sua conta no Sicredi na agência próxima ou mesmo através do nosso site.',
      'Teste um produto básico, como conta corrente ou cartão, para começar a ver como funciona na prática.',
    ]
  },
  {
    title: 'Altíssima conexão (71-100%)',
    profile: `
      💚 O cooperativismo e você tem tudo a ver! O Sicredi é a escolha certa para você.
      Você se identifica fortemente com o modelo cooperativo, valoriza o impacto na comunidade local e os diferenciais de ser dono e cliente ao mesmo tempo.
    `,
    nextSteps: [
      'Abra sua conta no Sicredi na agência mais próxima ou mesmo através do nosso site.',
      'Solicite uma visita para seu gerente para compartilhar suas necessidades e entender como o Sicredi pode te ajudar.',
      'Transforme o Sicredi na sua principal instituição financeira, utilize novos produtos e aumente sua participação nas sobras.',
    ]
  },
]