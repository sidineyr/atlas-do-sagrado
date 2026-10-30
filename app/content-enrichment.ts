/**
 * Complementos editoriais com referências consultadas em 29/10/2026.
 * Sínteses breves: fontes situadas não representam todos os integrantes de um grupo.
 */
type Enrichment = {
  objectives: string[];
  glossary: { term: string; definition: string }[];
  sections: {
    title: string;
    paragraphs: string[];
    sources: { title: string; institution: string; url: string; scope?: string }[];
  }[];
  activity: { prompt: string; feedback: string };
};

export const enrichments: Record<string, Enrichment> = {
  "onde-tudo-comeca": {
    objectives: [
      "Separar descrição de um vestígio e interpretação de seu significado.",
      "Explicar por que uma data arqueológica não identifica a primeira crença humana.",
      "Reconhecer a incerteza como parte da investigação histórica.",
    ],
    glossary: [
      { term: "Vestígio", definition: "Material preservado que permite investigar atividades passadas; seu significado depende do contexto." },
      { term: "Inferência", definition: "Conclusão construída a partir de indícios, que pode ser revista diante de novas evidências." },
    ],
    sections: [{
      title: "Um lugar, várias perguntas: Göbekli Tepe",
      paragraphs: [
        "A UNESCO situa os monumentos de Göbekli Tepe, na atual Turquia, entre 9600 e 8200 a.C. Sua descrição relaciona essas estruturas a possíveis usos rituais, sem transformar a hipótese em certeza sobre uma crença específica.",
        "Uma coluna esculpida pode ser descrita e datada. Dizer o que seus construtores pensavam exige interpretação. Por isso, encontrar uma estrutura antiga não basta para anunciar a origem de toda religião.",
      ],
      sources: [{ title: "Göbekli Tepe", institution: "UNESCO · World Heritage Centre", url: "https://whc.unesco.org/en/list/1572/", scope: "Descrição patrimonial e cronologia; a formulação sobre uso ritual é probabilística. Em inglês e outros idiomas." }],
    }],
    activity: {
      prompt: "Escolha um vestígio citado e escreva duas frases: uma descrição observável e uma interpretação possível. Marque o que ainda precisaria ser investigado.",
      feedback: "Descrever forma, material ou localização é diferente de atribuir uma crença. Uma boa interpretação explicita seus indícios e seus limites; não precisa eliminar toda incerteza.",
    },
  },
  "religiao-no-mundo-antigo": {
    objectives: [
      "Relacionar um culto a uma cidade e a um contexto histórico.",
      "Identificar limites de fontes produzidas por instituições e elites.",
      "Evitar tratar milênios de mudanças como uma religião imóvel.",
    ],
    glossary: [
      { term: "Panteão", definition: "Conjunto de divindades reconhecidas em determinado contexto; sua organização pode mudar." },
      { term: "Fonte material", definition: "Objeto, construção ou imagem investigado como evidência, considerando sua produção, circulação e preservação." },
    ],
    sections: [{
      title: "Cidades e divindades: vínculos que mudam",
      paragraphs: [
        "No ensaio de Ira Spar para o Metropolitan Museum of Art, textos e imagens mesopotâmicos relacionam cidades e divindades: Inanna aparece vinculada a Uruk, por exemplo. O autor também acompanha mudanças no panteão em contextos de transformação política.",
        "O exemplo permite investigar relações entre culto e poder. Não significa que todo habitante acreditava da mesma maneira, nem que cada mudança política determinava automaticamente uma mudança de crença.",
      ],
      sources: [{ title: "Mesopotamian Deities", institution: "Ira Spar · The Metropolitan Museum of Art, 2009", url: "https://www.metmuseum.org/essays/mesopotamian-deities", scope: "Ensaio sobre fontes textuais, imagens e relações entre cidades e divindades. Em inglês." }],
    }],
    activity: {
      prompt: "Imagine que só restaram inscrições de um templo. Que perguntas elas ajudam a responder? Que experiências de outros habitantes podem ter ficado de fora?",
      feedback: "As inscrições podem revelar nomes, oferendas e autoridades, mas não representam sozinhas toda a vida cotidiana. Comparar tipos de fonte ajuda a reconhecer vozes ausentes.",
    },
  },
  "tradicoes-do-oriente": {
    objectives: [
      "Reconhecer Sikhi e jainismo por trajetórias e conceitos próprios.",
      "Distinguir uma tradição de seus diferentes modos de observância.",
      "Problematizar a separação rígida entre filosofia e religião no daoismo.",
    ],
    glossary: [
      { term: "Ahimsa", definition: "Não violência; princípio central do jainismo, vivido de modos distintos por pessoas leigas e monásticas." },
      { term: "Langar", definition: "Refeição comunitária sikh apresentada como prática de partilha e igualdade, aberta a pessoas de diferentes origens." },
    ],
    sections: [
      {
        title: "Hinduísmos e budismos: caminhos e comunidades",
        paragraphs: [
          "Nas tradições hindus, bhakti designa caminhos de devoção ao divino, enquanto diferentes ensinamentos também discutem conhecimento e ação. A introdução do Pluralism Project apresenta Vedas, templos e diásporas: textos, práticas e pertenças se relacionam de maneiras diversas, dentro e fora do Sul da Ásia.",
          "A expansão dos budismos formou comunidades com diferentes textos e práticas. Theravada tem presença histórica no Sri Lanka e no Sudeste Asiático; Mahayana, no Leste Asiático; Vajrayana ganhou particular expressão no Tibete. Esses nomes não indicam graus de evolução: apresentam trajetórias distintas, com circulação e diásporas que atravessam regiões.",
        ],
        sources: [
          { title: "Introduction to Hinduism", institution: "The Pluralism Project · Harvard University", url: "https://pluralism.org/introduction-to-hinduism", scope: "Introdução à diversidade de caminhos, textos, práticas e diásporas hindus. Em inglês." },
          { title: "Introduction to Buddhism", institution: "The Pluralism Project · Harvard University", url: "https://pluralism.org/introduction-to-buddhism", scope: "Percursos de expansão e diferenças entre tradições budistas. Em inglês." },
        ],
      },
      {
        title: "Jainismo e Sikhi: histórias próprias",
        paragraphs: [
          "No jainismo, o cuidado com a vida se articula às Três Joias: visão, conhecimento e conduta corretos. A introdução do Pluralism Project diferencia pessoas monásticas renunciantes e comunidades leigas, que lhes oferecem alimentos e outros recursos. Apresenta também as tradições monásticas Digambara e Shvetambara, com diferentes formas de renúncia. Compartilhar ahimsa não torna todas as rotinas idênticas.",
          "A Sikh Coalition descreve o langar como refeição preparada e partilhada em comunidade, sem discriminação. A organização também reconhece variações de observância. Sikhi não deve ser apresentada apenas como combinação de outras religiões.",
        ],
        sources: [
          { title: "Introduction to Jainism", institution: "The Pluralism Project · Harvard University", url: "https://pluralism.org/introduction-to-jainism", scope: "Introdução acadêmica a conceitos, tradições monásticas e vida leiga. Em inglês." },
          { title: "FAQ — About Sikhs", institution: "Sikh Coalition · organização comunitária e de direitos civis", url: "https://www.sikhcoalition.org/about-sikhs/faq/", scope: "Perspectiva comunitária sobre langar, identidade e observância; não é uma descrição de cada pessoa sikh. Em inglês." },
        ],
      },
      {
        title: "Categorias que precisam de cuidado",
        paragraphs: [
          "Fabrizio Pregadio, na Stanford Encyclopedia of Philosophy, questiona uma fronteira rígida entre daoismo filosófico e religioso. Textos, linhagens, instituições e práticas não cabem sempre nas divisões que o observador traz de fora.",
          "A Encyclopedia of Shinto da Universidade Kokugakuin reúne história, santuários, festas e diferentes concepções de kami. Seu índice mostra a amplitude do tema; para uma afirmação específica, é preciso ler o verbete correspondente.",
        ],
        sources: [
          { title: "Religious Daoism", institution: "Fabrizio Pregadio · Stanford Encyclopedia of Philosophy, revisão de 2020", url: "https://plato.stanford.edu/entries/daoism-religion/", scope: "Discussão acadêmica das categorias filosofia/religião e da heterogeneidade daoista. Em inglês." },
          { title: "Encyclopedia of Shinto", institution: "Institute for Japanese Culture and Classics · Kokugakuin University", url: "https://d-museum.kokugakuin.ac.jp/eos/", scope: "Portal acadêmico japonês com verbetes e bibliografia; entrada de consulta, não uma doutrina única. Em inglês." },
        ],
      },
    ],
    activity: {
      prompt: "Escolha uma tradição deste módulo. Registre uma prática ou conceito e uma diferença interna que impeça descrevê-la como bloco uniforme.",
      feedback: "Uma comparação cuidadosa identifica comunidade e contexto. Também distingue a descrição de uma prática da ideia de que todo integrante necessariamente a realiza.",
    },
  },
  "judaismo-cristianismo-isla": {
    objectives: [
      "Distinguir vínculos históricos de equivalência entre tradições.",
      "Reconhecer judaísmos, cristianismos e islãs como tradições vivas e internamente diversas.",
      "Atribuir narrativas de fé às comunidades que as sustentam.",
    ],
    glossary: [
      { term: "Diáspora", definition: "Formação e vida de comunidades dispersas em diferentes lugares, com vínculos e histórias próprios." },
      { term: "Confessional", definition: "Relacionado a uma posição de fé; uma narrativa confessional tem perguntas e critérios próprios." },
    ],
    sections: [
      {
        title: "Histórias que continuam",
        paragraphs: [
          "A introdução ao judaísmo do Pluralism Project inclui diásporas, tradições rabínicas e movimentos modernos. A história judaica não se encerra no surgimento do cristianismo: comunidades continuam a interpretar textos, criar instituições e transformar práticas.",
          "A coleção sobre cristianismo distingue igrejas ortodoxas, comunhão católica e movimentos protestantes. Ao estudar seus relatos, diferencie uma afirmação de fé de uma conclusão construída por investigação histórica.",
        ],
        sources: [
          { title: "Introduction to Judaism", institution: "The Pluralism Project · Harvard University", url: "https://pluralism.org/introduction-to-judaism", scope: "História, práticas, diásporas e movimentos judaicos. Em inglês." },
          { title: "Introduction to Christianity", institution: "The Pluralism Project · Harvard University", url: "https://pluralism.org/introduction-christianity", scope: "Introdução às narrativas e à diversidade institucional cristã. Em inglês." },
        ],
      },
      {
        title: "Uma comunidade, interpretações diversas",
        paragraphs: [
          "A introdução ao islã do Pluralism Project apresenta diferenças de interpretação de textos e de autoridade. Correntes sunitas, xiitas e movimentos sufis não devem ser transformados em três caixas sempre separadas: as pertenças e práticas podem se cruzar.",
          "Comparar exige perguntas equivalentes, sem exigir respostas iguais. Compartilhar uma personagem religiosa, por exemplo, não significa atribuir-lhe o mesmo lugar em cada tradição.",
        ],
        sources: [{ title: "Introduction to Islam", institution: "The Pluralism Project · Harvard University", url: "https://pluralism.org/introduction-to-islam", scope: "Diversidade de interpretações, autoridade, reformas e migrações. Em inglês." }],
      },
    ],
    activity: {
      prompt: "Escolha uma personagem ou texto compartilhado. Formule uma pergunta histórica e outra sobre seu sentido dentro de uma tradição. Explique por que são perguntas diferentes.",
      feedback: "Datação, circulação e contexto pedem evidências históricas. O significado de uma narrativa para uma comunidade exige escutar suas interpretações e reconhecer diferenças internas.",
    },
  },
  "africa-americas-brasil": {
    objectives: [
      "Escutar uma autoria indígena identificada, sem convertê-la em voz de todos os povos.",
      "Reconhecer modos de transmissão de conhecimento em contextos africanos e diaspóricos.",
      "Relacionar fonte, autoria, lugar e limites de uma interpretação.",
    ],
    glossary: [
      { term: "Autoria situada", definition: "Perspectiva identificada por quem fala e por seu contexto; não é uma representação automática de um grupo inteiro." },
      { term: "Transmissão oral", definition: "Circulação de conhecimentos pela fala, escuta e prática, com formas próprias de memória e autoridade." },
    ],
    sections: [
      {
        title: "Uma voz situada: Davi Kopenawa",
        paragraphs: [
          "Em uma aula na UFMG, em 2018, Davi Kopenawa relacionou conhecimento, língua, floresta e defesa do povo Yanomami. A transcrição foi publicada no caderno Hutukara: grito da terra, em 2021.",
          "Leia essa fonte pelo nome de seu autor e pelo contexto da fala. Ela permite encontrar um pensamento indígena em primeira pessoa; não autoriza resumir todos os povos, ou mesmo toda experiência Yanomami, em uma única descrição.",
        ],
        sources: [{ title: "Hutukara: grito da terra", institution: "Davi Kopenawa · aula na UFMG, 2018; Chão da Feira, 2021", url: "https://chaodafeira.com/wp-content/uploads/2021/07/cad130-kopenawa-hutukara.pdf", scope: "Autoria indígena situada; transcrição de aula com mediação editorial. PDF de 14 páginas, em português." }],
      },
      {
        title: "Ifá: conhecimento em contexto",
        paragraphs: [
          "O arquivo audiovisual da UNESCO apresenta Ifá em comunidades iorubás e na diáspora. A página descreve um sistema de sinais e repertórios interpretados por especialistas e identifica o documental de Tunde Kelani, produzido pelo Ifa Group of Oyo em 2004.",
          "Esse exemplo não representa toda a África. A autoria, a comunidade e a circulação de conhecimentos ajudam a evitar a expressão genérica de uma religião africana única.",
        ],
        sources: [{ title: "Ifa of the Yoruba People of Nigeria", institution: "Tunde Kelani / Ifa Group of Oyo, 2004 · arquivo UNESCO", url: "https://www.unesco.org/archives/multimedia/document-3742", scope: "Descrição documental acessível; material em inglês. A reprodução audiovisual pode depender do serviço externo." }],
      },
    ],
    activity: {
      prompt: "Escolha Kopenawa ou a página de Ifá. Anote autor, comunidade, contexto e uma pergunta que a fonte permite investigar. O que ela não representa?",
      feedback: "Uma fonte situada amplia a escuta sem representar todas as experiências. Identificar seus limites faz parte de respeitar a autoria, não de desvalorizar seu conhecimento.",
    },
  },
  "religiao-no-mundo-moderno": {
    objectives: [
      "Ler dados de pertencimento sem atribuir crenças a indivíduos.",
      "Identificar período, cobertura e categorias de uma pesquisa demográfica.",
      "Distinguir transformação religiosa de uma trajetória universal de desaparecimento da religião.",
    ],
    glossary: [
      { term: "Filiação religiosa", definition: "Identificação de uma pessoa com um grupo em determinado instrumento de pesquisa; não descreve toda sua experiência." },
      { term: "Secularização", definition: "Conjunto de processos de mudança nas relações entre religião e sociedade; seus sentidos e trajetórias são debatidos." },
    ],
    sections: [{
      title: "Um mapa é também uma escolha de categorias",
      paragraphs: [
        "O relatório do Pew Research Center publicado em 2025 compara estimativas de 2010 e 2020. Sua análise reúne mais de 2.700 censos e pesquisas em 201 países e territórios, com critérios próprios de agrupamento.",
        "A categoria sem filiação religiosa não equivale automaticamente a ateísmo. Antes de comparar números, pergunte o que foi medido, em qual período e quais diferenças foram reunidas em uma mesma categoria.",
      ],
      sources: [{ title: "How the Global Religious Landscape Changed From 2010 to 2020", institution: "Conrad Hackett e coautores · Pew Research Center, 2025", url: "https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/", scope: "Estimativas demográficas para 2010–2020; consulte a metodologia. Em inglês." }],
    }],
    activity: {
      prompt: "Escolha uma categoria do relatório. Escreva o que ela mede e uma pergunta sobre práticas ou sentidos que os números, sozinhos, não respondem.",
      feedback: "Uma estatística de pertencimento pode ajudar a conhecer distribuições. Ela não mede valor cultural, intensidade da fé ou a história particular de cada pessoa.",
    },
  },
  "ateismo-agnosticismo": {
    objectives: [
      "Reconhecer diferentes usos de ateísmo e agnosticismo.",
      "Distinguir ausência de filiação de uma posição filosófica.",
      "Conhecer uma perspectiva ética de pessoas sem religião, sem universalizá-la.",
    ],
    glossary: [
      { term: "Agnosticismo", definition: "Termo com usos diferentes sobre suspensão de juízo e limites do conhecimento; a definição precisa acompanhar o contexto." },
      { term: "Humanismo secular", definition: "Perspectiva que desenvolve ética e sentido sem recorrer a uma autoridade divina; não representa todas as pessoas sem religião." },
    ],
    sections: [
      {
        title: "Definições são ferramentas, não rótulos obrigatórios",
        paragraphs: [
          "Paul Draper, na Stanford Encyclopedia of Philosophy, distingue usos psicológicos e filosóficos de ateísmo e agnosticismo. Uma conversa melhora quando esclarece se está tratando de crença, conhecimento ou identidade.",
          "A pessoa que declara não pertencer a uma religião não informa, por isso apenas, todas as suas crenças. Evite deduzir valores ou comportamento moral a partir desse registro.",
        ],
        sources: [{ title: "Atheism and Agnosticism", institution: "Paul Draper · Stanford Encyclopedia of Philosophy, revisão de 2022", url: "https://plato.stanford.edu/entries/atheism-agnosticism/", scope: "Análise filosófica de definições e argumentos, não um censo de identidades. Em inglês." }],
      },
      {
        title: "Ética e sentido sem religião",
        paragraphs: [
          "A Humanists International se apresenta por compromissos com razão, ciência, responsabilidade e direitos humanos. Essa autodescrição mostra um movimento organizado que constrói referências éticas e sentido sem crença divina.",
          "Trata-se de uma perspectiva identificada, não da posição obrigatória de todo ateu ou agnóstico. Pessoas sem religião também divergem entre si.",
        ],
        sources: [{ title: "What is humanism?", institution: "Humanists International · autodescrição do movimento", url: "https://humanists.international/what-is-humanism/", scope: "Perspectiva interna do humanismo organizado. As estimativas demográficas antigas dessa página não são usadas aqui. Em inglês." }],
      },
    ],
    activity: {
      prompt: "Explique por que não ter religião, suspender o juízo sobre deuses e adotar o humanismo não são expressões equivalentes.",
      feedback: "As expressões respondem a perguntas diferentes: pertencimento, conhecimento e orientação ética. Elas podem se combinar, mas uma não permite inferir automaticamente as outras.",
    },
  },
  "filosofia-da-religiao": {
    objectives: [
      "Distinguir diversidade social de uma tese filosófica sobre religiões.",
      "Comparar argumentos sem hierarquizar a dignidade das pessoas.",
      "Explicitar premissas, critérios e limites de uma conclusão.",
    ],
    glossary: [
      { term: "Premissa", definition: "Afirmação usada para sustentar uma conclusão; pode ser examinada e contestada." },
      { term: "Pluralismo", definition: "Termo usado para diferentes respostas à diversidade; seu sentido social, filosófico ou teológico precisa ser indicado." },
    ],
    sections: [{
      title: "Conviver não exige declarar todas as crenças iguais",
      paragraphs: [
        "Michael Barnes Norton, na Internet Encyclopedia of Philosophy, distingue a existência de diversidade religiosa das respostas filosóficas e teológicas a ela. Um fato social e uma tese sobre verdade não são a mesma coisa.",
        "O Atlas propõe respeito às pessoas e investigação de diferenças. Esse compromisso não exige que o estudante afirme equivalência entre doutrinas, abandone suas convicções ou concorde com todo argumento apresentado.",
      ],
      sources: [{ title: "Religious Pluralism", institution: "Michael Barnes Norton · Internet Encyclopedia of Philosophy", url: "https://iep.utm.edu/rel-plur/", scope: "Distinções e debates filosóficos sobre respostas à diversidade. Em inglês." }],
    }],
    activity: {
      prompt: "Escolha uma questão do curso. Escreva uma conclusão e duas premissas que poderiam sustentá-la. Indique uma objeção e como investigá-la sem atacar pessoas.",
      feedback: "Criticar um argumento significa examinar suas razões. O desacordo pode continuar após a análise; respeito e convivência não dependem de uma conclusão filosófica única.",
    },
  },
};
