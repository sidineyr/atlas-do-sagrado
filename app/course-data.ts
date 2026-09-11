export type Source = { title: string; institution: string; url: string };
export type CourseModule = {
  slug: string;
  title: string;
  era: string;
  minutes: number;
  summary: string;
  opening: string;
  sections: { title: string; paragraphs: string[]; points?: string[] }[];
  pause: string;
  sources: Source[];
};

const openStax = "Ann Kordas, Ryan J. Lynch, Brooke Nelson e Julie Tatlock — World History, Volume 1 (2023)";

export const modules: CourseModule[] = [
  {
    slug: "onde-tudo-comeca",
    title: "Onde tudo começa?",
    era: "Pré-história e método",
    minutes: 25,
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
    minutes: 30,
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
    minutes: 35,
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
    minutes: 40,
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
    slug: "africa-americas-brasil",
    title: "África, Américas e Brasil",
    era: "Longa duração–presente",
    minutes: 35,
    summary: "Ancestralidade, território, colonialismo e religiões afro-brasileiras.",
    opening: "Muitas histórias da religião foram escritas como se Europa e textos fossem o centro. Este módulo desloca o olhar para oralidade, território, corpo, ancestralidade e para os efeitos violentos da colonização.",
    sections: [
      { title: "Tradições africanas", paragraphs: ["O continente africano abriga enorme diversidade linguística, histórica e religiosa. Relações com ancestrais, forças, divindades e comunidades assumem formas específicas; “religião africana” no singular é uma generalização inadequada."] },
      { title: "Povos originários das Américas", paragraphs: ["Cosmologias indígenas vinculam pessoas, outros seres, território e memória de modos que nem sempre cabem na separação ocidental entre religião, natureza e política. A colonização destruiu populações, proibiu práticas e reinterpretou mundos indígenas por categorias cristãs."] },
      { title: "Brasil: encontro, coerção e criação", paragraphs: ["Catolicismos, protestantismos, espiritismos, tradições indígenas, judaísmo, islã, budismos, novas religiões e posições sem religião compõem o campo brasileiro. Candomblé e Umbanda preservam e recriam heranças africanas em condições marcadas por escravização, racismo e resistência.", "Sincretismo pode descrever encontros e recomposições, mas não deve apagar coerção nem a agência das comunidades. Dados censitários medem declaração de pertencimento; não capturam toda prática, dupla pertença ou circulação religiosa."] }
    ],
    pause: "Quem ganha e quem perde quando apenas tradições com livros e instituições centralizadas são tratadas como religiões completas?",
    sources: [
      { title: "Censo 2022: católicos seguem em queda; evangélicos e sem religião crescem", institution: "IBGE · Agência de Notícias", url: "https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43593-censo-2022-catolicos-seguem-em-queda-evangelicos-e-sem-religiao-crescem-no-pais" },
      { title: "Iphan celebra 40 anos de tombamento do Terreiro da Casa Branca", institution: "IPHAN · Governo Federal", url: "https://www.gov.br/iphan/pt-br/assuntos/noticias/iphan-celebra-40-anos-de-tombamento-do-terreiro-da-casa-branca-ba" }
    ]
  },
  {
    slug: "religiao-no-mundo-moderno",
    title: "Religião no mundo moderno",
    era: "1500–presente",
    minutes: 30,
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
    minutes: 25,
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
    minutes: 35,
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
