# Atlas editorial — revisão em time, 29/10/2026

## Resultado implementado

Nova identidade visual de atlas editorial: cartografia Natural Earth, entrada por regiões, catálogo com busca e filtros temáticos, destaques de perspectivas, páginas de leitura, biblioteca de fontes por capítulo e percurso de conclusão.

Os oito capítulos receberam complementos com objetivos, vocabulário, seções com referências e atividade. A ampliação inclui hinduísmos, budismos, jainismo, Sikhi, daoismo, xintoísmo, diversidade judaica/cristã/islâmica, autoria indígena de Davi Kopenawa, contexto iorubá de Ifá, humanismo e pluralismo filosófico. Isso não constitui cobertura de todas as tradições.

## Trabalho em time

- Pesquisa: fontes primárias, institucionais, acadêmicas e comunitárias abertas e identificadas por autoria/escopo.
- Interface: folha de estilos integral e revisão de integração, com foco em leitura e reflow.
- Segurança e qualidade: revisão independente de código e testes; sem bloqueador encontrado no escopo examinado.
- Integração: conferência editorial, remoção de redundância, build e navegação real na prévia.

As revisões são de agentes; não equivalem à validação por especialistas humanos de cada tradição nem a testes com estudantes reais.

## Decisões de segurança

- Nome do certificado por POST JSON, sem query string, corpo máximo de 1 KiB e validação do nome. PDF por Blob, sem cadastro.
- O PDF registra declaração de conclusão; não atesta aprendizagem nem validade acadêmica.
- Tradução externa só por link acionado pelo visitante. Removida injeção automática de Google Translate.
- Contador aceita somente início e oito capítulos, usa SQL parametrizado e informa indisponibilidade. Contagens são aproximadas, não pessoas únicas.
- Progresso explícito e reversível no navegador; dados inválidos/duplicados são filtrados.
- Sem nova dependência instalada. Auditoria atual de CVEs e rate limit do provedor não foram executados.

## Evidências de validação

- 12 testes aprovados: sete de segurança/validação e cinco de UX.
- TypeScript sem emissão aprovado.
- Build Vinext aprovado; limitação do próprio framework na classificação estática de rotas permanece.
- Busca “kopenawa” encontrou o capítulo 05; filtro de ideias combinado produziu estado vazio; limpar restaurou oito capítulos.
- Menu móvel aberto por teclado; link para Fontes navegou; grupo de referências expandiu e abriu o capítulo.
- Capítulo 05 confirmou conclusão; Próximo abriu capítulo 06, que continuou pendente. Certificado mostrou apenas uma conclusão e formulário bloqueado.
- Reflow medido em créditos e certificado a 320 px e capítulo a 390 px: largura do conteúdo igual à largura útil do viewport, sem rolagem horizontal.
- API local com nome fictício: POST retornou 200, application/pdf, no-store e assinatura %PDF-1.4; nome vazio retornou 400; GET retornou 405.
- Tela inicial conferida a 1440 px. Interface de leitura conferida a 390 px.
- Uma aba de teste perdeu sincronização; a validação continuou em aba nova. Isso não foi classificado como defeito do site.

## Limites e continuidade

Não foram realizados testes moderados com estudantes, auditoria WCAG completa, leitura por leitor de tela, teste em aparelho físico, reprodução de todos os vídeos externos ou inspeção de todas as configurações de produção. A prévia Node não suporta o binding Cloudflare D1; o contador informa indisponibilidade nesse ambiente. A emissão de PDF foi testada pela API; o percurso visual com oito confirmações e download pelo navegador não foi concluído.

Os textos legados foram preservados e receberam complementos; ainda é indicada revisão especializada contínua, sobretudo com autores e comunidades de terreiro. As fontes não são tratadas como confirmação automática de toda interpretação.

## Aceitação após publicação

1. Abrir início, explorar um ponto do mapa e voltar ao acervo.
2. Combinar busca/filtros, verificar resultado vazio e limpar.
3. Abrir vocabulário e atividade; navegar à fonte correspondente.
4. Confirmar/desmarcar um capítulo e conferir persistência no percurso.
5. Verificar o certificado com dados fictícios e o contador na infraestrutura Cloudflare.
6. Revisar traduções automáticas com cuidado; não são uma edição autoral em inglês.

Base cartográfica: [Natural Earth land 1:110m](https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson), simplificada. A biblioteca dentro do site identifica todas as fontes de conteúdo, seus autores e limites.
