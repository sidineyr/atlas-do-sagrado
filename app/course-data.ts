export type Source = { title: string; institution: string; url: string; scope?: string };
export type CourseModule = {
  slug: string;
  title: string;
  era: string;
  summary: string;
  opening: string;
  sections: { title: string; paragraphs: string[]; points?: string[]; sourceIndexes?: number[] }[];
  pause: string;
  sources: Source[];
  objectives?: string[];
  glossary?: { term: string; definition: string }[];
  activity?: { prompt: string; feedback: string };
};

const openStax = "Ann Kordas, Ryan J. Lynch, Brooke Nelson e Julie Tatlock — World History, Volume 1 (2023)";

export const modules: CourseModule[] = [
  {
    slug: "onde-tudo-comeca",
    title: "Onde tudo começa?",
    era: "Pré-história e método",
    summary: "Vestígios, ritos funerários e os limites do que a arqueologia permite dizer.",
    opening: "Antes de existirem templos, livros ou a palavra religião, seres humanos já enterravam mortos, criavam imagens e marcavam lugares. Esses vestígios sugerem mundos simbólicos, mas não autorizam uma resposta simples sobre a primeira crença.",
    sections: [
      { title: "Religião: uma categoria em debate", paragraphs: ["Religião pode envolver ritos, narrativas, comunidades, normas, experiências e relações com seres ou realidades consideradas sagradas. Nenhuma definição curta serve igualmente para todos os povos e épocas.", "Neste curso, religião é uma categoria de análise — não um rótulo rígido. Ela ajuda a comparar fenômenos, desde que não apague os nomes e conceitos usados pelas próprias comunidades."] },
      { title: "O que os vestígios mostram", paragraphs: ["Sepultamentos intencionais, objetos depositados com mortos, pinturas e monumentos como Göbekli Tepe indicam práticas simbólicas antigas. O contexto arqueológico informa quando e como algo foi usado; o significado exato continua sujeito a debate.", "Dizer que um objeto prova fé, deuses ou vida após a morte vai além da evidência. Uma formulação responsável é: certos vestígios são compatíveis com práticas rituais ou concepções simbólicas."] },
      { title: "Três camadas de leitura", paragraphs: ["Uma narrativa religiosa explica o mundo a partir de uma tradição. A história investiga documentos, objetos, datas e contextos. A filosofia examina conceitos e argumentos. As três podem conversar, mas não devem ser confundidas."], points: ["Evidência: o que foi encontrado ou documentado.", "Interpretação: a explicação proposta por pesquisadores.", "Tradição: como uma comunidade compreende a si mesma."] }
    ],
    pause: "Quando uma hipótese sobre o passado começa a parecer uma certeza? Observe as palavras usadas: “prova”, “sugere”, “pode indicar”.",
    sources: [
      { title: `${openStax}, cap. 2`, institution: "OpenStax · Rice University", url: "https://openstax.org/books/world-history-volume-1/pages/2-introduction" }
    ]
  },
  {
    slug: "religiao-no-mundo-antigo",
    title: "Religião no mundo antigo",
    era: "c. 3500 a.C.–500 a.C.",
    summary: "Cidades, impérios, ancestrais, divindades e a escrita do sagrado.",
    opening: "Com a urbanização, ritos e narrativas passaram a ocupar templos, calendários, códigos e administrações. Isso não criou a religião, mas tornou parte dela mais visível para a história.",
    sections: [
      { title: "Mesopotâmia e Egito", paragraphs: ["Na Mesopotâmia, cidades cultivavam divindades protetoras e mantinham templos ligados à economia e ao poder. No Egito, práticas funerárias, culto aos deuses e realeza estavam articulados a ideias de ordem e continuidade.", "Não havia uma única religião mesopotâmica ou egípcia imóvel: cultos locais, deuses e ênfases mudaram ao longo de milênios."] },
      { title: "Poder, escrita e memória", paragraphs: ["Hinos, mitos, inscrições e leis preservaram vozes que a arqueologia sozinha não revela. Ainda assim, grande parte da documentação foi produzida por elites e instituições, deixando práticas cotidianas menos visíveis."] },
      { title: "Muitos centros, muitas histórias", paragraphs: ["África, Ásia, Europa, Oceania e Américas desenvolveram sistemas simbólicos próprios. Uma história mundial responsável não transforma Mesopotâmia e Egito em origem única de todas as religiões."] }
    ],
    pause: "Que aspectos da experiência religiosa ficam invisíveis quando só sobrevivem textos de sacerdotes, reis e escribas?",
    sources: [
      { title: `${openStax}, cap. 4`, institution: "OpenStax · Rice University", url: "https://openstax.org/books/world-history-volume-1/pages/4-introduction" },
      { title: "Ancient Near Eastern Art", institution: "The Metropolitan Museum of Art", url: "https://www.metmuseum.org/toah/hd/ane/hd_ane.htm" }
    ]
  },
  {
    slug: "tradicoes-do-oriente",
    title: "Tradições do Sul e do Leste da Ásia",
    era: "c. 1500 a.C.–700 d.C.",
    summary: "Tradições védicas, hinduísmos, budismos, jainismo, confucionismo, daoismo e xintoísmo.",
    opening: "“Oriente” é um rótulo amplo criado a partir de um ponto de vista europeu. Aqui ele é substituído, sempre que possível, por regiões e tradições específicas.",
    sections: [
      { title: "Sul da Ásia", paragraphs: ["Textos védicos, práticas rituais e debates sobre ação, renascimento e libertação formaram ambientes dos quais emergiram tradições hoje reunidas sob o nome hinduísmo. Budismo e jainismo também nasceram nesse campo histórico, propondo caminhos distintos diante do sofrimento e do ciclo de renascimentos.", "Hinduísmo e budismo são famílias internamente diversas, não sistemas uniformes. Seus conceitos mudam conforme escola, época, língua e região."] },
      { title: "China", paragraphs: ["Confucionismo enfatizou cultivo moral, relações, educação e ordem social; daoismo reuniu textos, práticas e instituições em torno do Dao e de modos de viver em consonância com ele. Na história chinesa, essas tradições interagiram entre si e com o budismo."] },
      { title: "Japão e circulação", paragraphs: ["O termo xintoísmo reúne cultos e práticas relacionados aos kami, lugares, ancestrais e ritos. Sua formação histórica ocorreu em diálogo com o budismo e com mudanças políticas. Ideias viajaram com monges, comerciantes, impérios e traduções — nunca em blocos fechados."] }
    ],
    pause: "O que se perde quando uma tradição plural é resumida por uma única doutrina?",
    sources: [
      { title: `${openStax}, seção 5.4`, institution: "OpenStax · Rice University", url: "https://openstax.org/books/world-history-volume-1/pages/5-4-vedic-india-to-the-fall-of-the-maurya-empire" },
      { title: `${openStax}, cap. 5`, institution: "OpenStax · Rice University", url: "https://openstax.org/books/world-history-volume-1/pages/5-introduction" }
    ]
  },
  {
    slug: "judaismo-cristianismo-isla",
    title: "Judaísmo, cristianismo e islã",
    era: "c. 1000 a.C.–1500 d.C.",
    summary: "Três histórias ligadas, sem reduzir uma tradição à continuação da outra.",
    opening: "Judaísmo, cristianismo e islã compartilham personagens, textos e territórios de memória. Essa proximidade produziu diálogos, disputas e interpretações diferentes — não uma linha evolutiva simples.",
    sections: [
      { title: "Judaísmos", paragraphs: ["A religião israelita antiga se transformou ao longo de reinos, exílios, reconstruções e diásporas. Após a destruição do Segundo Templo em 70 d.C., tradições rabínicas ganharam centralidade. Falar em “judaísmos” recorda a diversidade histórica e contemporânea."] },
      { title: "Cristianismos", paragraphs: ["O cristianismo surgiu no ambiente judaico do século I. Comunidades espalhadas pelo Mediterrâneo interpretaram a vida, morte e ressurreição de Jesus e produziram diferentes textos e práticas. Concílios, impérios, cismas e reformas moldaram múltiplos cristianismos."] },
      { title: "Islãs", paragraphs: ["O islã surgiu na Arábia do século VII em torno das revelações proclamadas por Muhammad e preservadas no Alcorão. Expansões políticas não equivalem automaticamente a conversão religiosa. Tradições sunitas, xiitas, sufis e outras mostram sua diversidade interna."] },
      { title: "Comparar sem hierarquizar", paragraphs: ["“Religiões abraâmicas” é uma categoria útil para certos vínculos, mas pode esconder diferenças centrais. Cada tradição deve ser compreendida também por seus próprios conceitos, práticas e memórias."] }
    ],
    pause: "Compartilhar personagens e narrativas significa atribuir a eles o mesmo sentido?",
    sources: [
      { title: `${openStax}, seção 4.4: The Hebrews`, institution: "OpenStax · Rice University", url: "https://openstax.org/books/world-history-volume-1/pages/4-4-the-hebrews" },
      { title: `${openStax}, livro completo e sumário`, institution: "OpenStax · Rice University", url: "https://openstax.org/books/world-history-volume-1/pages/1-introduction" }
    ]
  },
  {
  "slug": "africa-americas-brasil",
  "title": "África, Américas e Brasil",
  "era": "Longa duração–presente",
  "summary": "Ancestralidade, território, colonialismo e religiões afro-brasileiras.",
  "opening": "Este módulo aproxima histórias africanas, indígenas e brasileiras por meio de exemplos situados. O recorte não representa todos os povos desses continentes: observe quem fala, de qual lugar e em que momento.",
  "objectives": [
    "Reconhecer a diversidade interna das tradições e evitar explicações únicas.",
    "Distinguir Candomblé e Umbanda sem estabelecer hierarquia entre elas.",
    "Relacionar um exemplo às fontes e apontar o que elas não permitem concluir."
  ],
  "glossary": [
    {
      "term": "Cosmologia",
      "definition": "Modo de compreender a organização do mundo e as relações entre seres, lugares e tempos. Cada povo elabora suas próprias concepções."
    },
    {
      "term": "Ancestralidade",
      "definition": "Relação com gerações anteriores e suas memórias, que pode envolver parentesco, pertencimento e práticas religiosas."
    },
    {
      "term": "Diáspora africana",
      "definition": "Dispersão de populações africanas e formação de comunidades fora da África, incluindo deslocamentos forçados pela escravização."
    },
    {
      "term": "Sincretismo",
      "definition": "Termo usado para estudar aproximações e recomposições entre tradições. Não significa que elas sejam idênticas nem que os encontros tenham sido livres de violência."
    },
    {
      "term": "Agência das comunidades",
      "definition": "Capacidade de pessoas e grupos de agir, escolher e recriar práticas, mesmo sob condições de dominação."
    },
    {
      "term": "Terreiro",
      "definition": "Espaço de culto, convivência e transmissão de conhecimentos em diversas tradições afro-brasileiras; suas formas variam."
    }
  ],
  "sections": [
    {
      "title": "Tradições africanas: começar por um exemplo",
      "paragraphs": [
        "Em comunidades iorubás, o sistema de Ifá articula sinais e um repertório de versos interpretados por especialistas. A UNESCO o reconhece como patrimônio cultural imaterial. Esse caso mostra uma tradição de conhecimento transmitida e praticada em contextos específicos.",
        "Ifá não representa toda a África. Investigar uma tradição exige identificar comunidade, região, época e formas de transmissão. Não é adequado reunir experiências tão diversas sob a expressão “religião africana” como se fossem uma unidade."
      ],
      "sourceIndexes": [
        0
      ]
    },
    {
      "title": "Povos originários: cosmologias no plural",
      "paragraphs": [
        "Na apresentação de Aracy Lopes da Silva, narrativas indígenas se articulam a rituais, organização social e modos próprios de pensar tempo, espaço e pessoa. “Mito”, nesse contexto, não é sinônimo de mentira: é uma categoria usada para estudar narrativas significativas para seus grupos.",
        "Esta leitura oferece uma introdução comparativa, não a voz de todos os povos indígenas. Para aprofundar, identifique o povo e a autoria de cada relato; procure também materiais produzidos por suas próprias organizações. Não deduza a crença de uma pessoa apenas por sua identificação como indígena."
      ],
      "sourceIndexes": [
        1
      ]
    },
    {
      "title": "Candomblé e Umbanda: aproximações e diferenças",
      "paragraphs": [
        "No estudo de Reginaldo Prandi, o Candomblé é situado historicamente na Bahia do século XIX. O autor também apresenta a formação da Umbanda no Rio de Janeiro no início do século XX, em relações com tradições afro-brasileiras, espiritismo, catolicismo e referências indígenas.",
        "Essas trajetórias não tornam as duas religiões equivalentes. Prandi diferencia práticas de culto a divindades e consultas a entidades espirituais. A comparação é um ponto de partida: há variações entre casas e tradições, e os termos usados pelas próprias comunidades importam.",
        "O artigo é uma interpretação sociológica publicada em 2004. Seus dados demográficos não descrevem o Brasil atual. Para números de pertencimento religioso, consulte a divulgação do Censo 2022 indicada adiante."
      ],
      "sourceIndexes": [
        2
      ]
    },
    {
      "title": "Patrimônio: um caso situado na Bahia",
      "paragraphs": [
        "O parecer de Márcia Sant’Anna para o IPHAN, de 2024, examina o Terreiro Ilê Axé Icimimó Aganju Didê, em Cachoeira, Bahia. Sua introdução relaciona o processo ao reconhecimento do Terreiro da Casa Branca, em Salvador, quarenta anos antes.",
        "Como atividade de leitura histórica, observe a diferença entre um documento de reconhecimento patrimonial e uma descrição completa da vida religiosa. O parecer ajuda a estudar políticas de preservação; não substitui os conhecimentos e as narrativas das comunidades."
      ],
      "sourceIndexes": [
        3
      ]
    },
    {
      "title": "Brasil plural: o que os números dizem",
      "paragraphs": [
        "A divulgação dos resultados preliminares de religiões do Censo 2022 trata das declarações de pessoas com dez anos ou mais. Ela reúne Umbanda e Candomblé em uma categoria estatística e também apresenta pessoas sem religião. Uma categoria de pesquisa não torna duas tradições iguais nem descreve cada indivíduo.",
        "Use o censo para investigar pertencimento declarado. Para compreender práticas, sentidos e mudanças, combine essa informação com estudos contextualizados e com as perspectivas das comunidades. Não confunda quantidade de declarações com valor de uma tradição."
      ],
      "sourceIndexes": [
        4
      ]
    }
  ],
  "pause": "Escolha uma afirmação deste módulo. Qual fonte permite investigá-la? O que essa fonte deixa em aberto?",
  "activity": {
    "prompt": "Em seu caderno, compare Candomblé e Umbanda a partir do texto de Prandi. Registre uma diferença histórica, uma aproximação e uma pergunta que ainda depende de outras fontes. Não é preciso informar sua religião.",
    "feedback": "Uma resposta possível distingue as trajetórias na Bahia do século XIX e no Rio de Janeiro do início do século XX, reconhece relações com heranças africanas e aponta a diversidade entre comunidades. O artigo de 2004 oferece uma interpretação histórica; sozinho, não representa todas as casas atuais."
  },
  "sources": [
    {
      "title": "Ifa divination system",
      "institution": "UNESCO · Patrimônio Cultural Imaterial",
      "url": "https://ich.unesco.org/en/RL/ifa-divination-system-00146",
      "scope": "Exemplo iorubá e formas de transmissão de Ifá. Página em inglês; o portal pode solicitar verificação de acesso."
    },
    {
      "title": "Mitos e cosmologia",
      "institution": "Aracy Lopes da Silva · Povos Indígenas no Brasil / Instituto Socioambiental",
      "url": "https://pib.socioambiental.org/pt/Mitos_e_cosmologia",
      "scope": "Introdução às relações entre narrativas, cosmologias e vida social; edição de textos de 1992 e 1995."
    },
    {
      "title": "O Brasil com axé: candomblé e umbanda no mercado religioso (2004)",
      "institution": "Reginaldo Prandi · Estudos Avançados / USP",
      "url": "https://www.scielo.br/j/ea/a/tFh5DWhR8wWVWNsXL4Z9yxv/?lang=pt",
      "scope": "Interpretação sociológica das trajetórias e transformações afro-brasileiras. Dados demográficos históricos, não atuais."
    },
    {
      "title": "Parecer: Terreiro Ilê Axé Icimimó Aganju Didê, Cachoeira-BA (2024)",
      "institution": "Márcia Sant’Anna · Conselho Consultivo do IPHAN",
      "url": "https://www.gov.br/iphan/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/banco-de-pareceres/tombamento/parecer-terreiro-cachoeira-ba-conselheira-marcia-santanna.pdf",
      "scope": "Página do IPHAN com parecer para download em PDF (cerca de 17 MB). Contextualiza reconhecimento patrimonial e o precedente da Casa Branca."
    },
    {
      "title": "Censo 2022: evangélicos e sem religião crescem no País; católicos em queda",
      "institution": "Agência Gov / EBC · conteúdo via IBGE, 06/06/2025",
      "url": "https://agenciagov.ebc.com.br/noticias/202506/censo-2022-catolicos-seguem-em-queda-evangelicos-e-sem-religiao-crescem-no-pais",
      "scope": "Republicação da divulgação dos resultados preliminares do IBGE. Recorte: pessoas com dez anos ou mais."
    }
  ]
},
  {
    slug: "religiao-no-mundo-moderno",
    title: "Religião no mundo moderno",
    era: "1500–presente",
    summary: "Reformas, colonialismos, secularização, novos movimentos e um planeta plural.",
    opening: "A modernidade não eliminou a religião. Ela alterou instituições, autoridades, identidades e relações entre religião, Estado, ciência e mercado.",
    sections: [
      { title: "Reformas e Estados", paragraphs: ["Reformas cristãs, expansão marítima e formação de Estados mudaram a distribuição do poder religioso. A ideia de separação entre religião e Estado assumiu formas diferentes; laicidade não significa proibição da religião, mas regras públicas sobre liberdade e autoridade."] },
      { title: "Colonialismo e classificação", paragraphs: ["Impérios europeus levaram missões, impuseram categorias e coletaram conhecimentos. O próprio conceito moderno de “religiões mundiais” foi moldado nesse contexto e tende a privilegiar tradições com textos, fundadores e doutrinas reconhecíveis aos europeus."] },
      { title: "O mapa atual", paragraphs: ["Demografia religiosa varia por nascimento, migração, mudança de filiação e modo de medir. Segundo o Pew Research Center, entre 2010 e 2020 cristãos permaneceram o maior grupo global e muçulmanos foram o grupo principal que mais cresceu em número; pessoas sem filiação também aumentaram como parcela da população mundial.", "Números não medem intensidade da crença nem tornam indivíduos representativos de um grupo inteiro."] }
    ],
    pause: "Uma sociedade com mais pessoas sem filiação religiosa é necessariamente menos espiritual ou menos marcada por tradições religiosas?",
    sources: [
      { title: "How the Global Religious Landscape Changed From 2010 to 2020", institution: "Pew Research Center (2025)", url: "https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/" },
      { title: "World History, Volume 2: From 1400", institution: "OpenStax · Rice University", url: "https://openstax.org/details/books/world-history-volume-2" }
    ]
  },
  {
    slug: "ateismo-agnosticismo",
    title: "Ateísmo, agnosticismo e não religião",
    era: "Antiguidade–presente",
    summary: "Descrença, suspensão de juízo e vidas seculares em seus contextos históricos.",
    opening: "Não religião não é uma posição única. Ateísmo, agnosticismo, humanismo secular, indiferença e ausência de filiação respondem a perguntas diferentes.",
    sections: [
      { title: "Definições cuidadosas", paragraphs: ["Em sentido filosófico, ateísmo costuma nomear a posição de que Deus ou deuses não existem; em usos cotidianos, pode significar ausência de crença. Agnosticismo trata principalmente do conhecimento: sustenta que não sabemos, ou talvez não possamos saber, se há divindades.", "Uma pessoa pode combinar categorias de modos distintos. Pesquisas de filiação também incluem pessoas que acreditam em Deus ou em alguma realidade espiritual entre os “sem religião”."] },
      { title: "Uma história não linear", paragraphs: ["Críticas a deuses, sacerdócios e crenças aparecem em diferentes sociedades antigas, mas categorias modernas tomaram forma em contextos filosóficos, científicos e políticos específicos. Não existe uma marcha inevitável da religião para o ateísmo."] },
      { title: "Ética sem religião", paragraphs: ["Filosofias não teístas discutem ética com base em razão, bem-estar, virtudes, direitos, responsabilidade e vida comum. Da mesma forma, tradições religiosas apresentam múltiplas bases para a ética. O debate não se resolve por rótulos."] }
    ],
    pause: "“Não ter religião”, “não acreditar” e “afirmar que deuses não existem” são respostas à mesma pergunta?",
    sources: [
      { title: "Atheism and Agnosticism", institution: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/atheism-agnosticism/" },
      { title: "Religiously Unaffiliated People", institution: "Pew Research Center", url: "https://www.pewresearch.org/religion/2012/12/18/globally-the-religiously-unaffiliated/" }
    ]
  },
  {
    slug: "filosofia-da-religiao",
    title: "Filosofia da religião",
    era: "Perguntas em aberto",
    summary: "Razão, fé, linguagem, sofrimento, pluralidade e os limites do argumento.",
    opening: "A filosofia da religião não é catequese nem refutação automática. Ela examina conceitos, razões e experiências mobilizados por pessoas religiosas, agnósticas e ateias.",
    sections: [
      { title: "Que realidade está em questão?", paragraphs: ["“Deus” pode designar um ser pessoal, a realidade última, o fundamento do ser ou algo inteiramente diferente. Tradições não teístas mostram que religião não depende sempre de uma divindade criadora. Argumentos só podem ser avaliados depois que seus termos são esclarecidos."] },
      { title: "Argumentos e objeções", paragraphs: ["Argumentos cosmológicos, teleológicos e ontológicos procuram oferecer razões para o teísmo. O problema do mal, a ocultação divina e explicações naturalistas apresentam desafios. Nenhum resumo honesto transforma séculos de debate em prova simples."] },
      { title: "Diversidade e conhecimento", paragraphs: ["A coexistência de crenças incompatíveis levanta perguntas: desacordo reduz a confiança? É racional manter uma tradição herdada? Experiência religiosa conta como evidência? Respostas variam entre exclusivismo, inclusivismo, pluralismo, ceticismo e outras posições."] },
      { title: "Encerrar sem fechar", paragraphs: ["Conhecer a história das religiões não obriga a crer ou descrer. O ganho formativo está em formular melhor as perguntas, reconhecer assimetrias históricas e escutar conceitos antes de julgá-los."] }
    ],
    pause: "Que tipo de evidência você consideraria relevante para uma afirmação religiosa — e aplicaria o mesmo critério à posição contrária?",
    sources: [
      { title: "Philosophy of Religion", institution: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/philosophy-religion/" },
      { title: "Philosophy of Religion", institution: "Internet Encyclopedia of Philosophy", url: "https://iep.utm.edu/religion/" }
    ]
  }
];

export function getModule(slug: string) {
  return modules.find((module) => module.slug === slug);
}

/** Editorial estimates, not measured task times. External reading is optional. */
export function getStudyPlan(module: CourseModule) {
  const text = [module.opening, ...module.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.points ?? [])]), ...(module.glossary ?? []).map((entry) => entry.definition)].join(" ");
  const reading = Math.max(1, Math.ceil(text.trim().split(/\s+/u).length / 180));
  const reflection = module.activity ? 10 : 5;
  const sources = module.activity ? 15 : 10;
  return { reading, reflection, sources, total: reading + reflection + sources };
}
