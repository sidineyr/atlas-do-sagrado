# Revisão pedagógica e de UX — 29/10/2026

## Escopo e decisão editorial

Revisão do teste exploratório simulado realizado no Atlas do Sagrado. Não houve participantes reais. A navegação examinou a página inicial, o módulo 05 e os créditos; não autoriza conclusões sobre a aprendizagem em todos os módulos.

O critério pedagógico é a relação entre objetivo, explicação, exemplo, fonte e oportunidade de reflexão. Quantidade de parágrafos não é medida suficiente de qualidade. Ausência de busca não é automaticamente um defeito em um curso com oito módulos; a busca foi adicionada como melhoria de localização de temas.

## Correção das conclusões anteriores

| Conclusão do relatório | Revisão de professor | Tratamento |
| --- | --- | --- |
| Proposta clara e acolhedora | Mantida como interpretação apoiada nos textos de entrada, sem generalizar para todos os estudantes. | Linguagem de entrada simplificada; sigla MOOC substituída por curso aberto e gratuito. |
| Conteúdo curto implica pouca qualidade | Reformulada: faltavam exemplos e apoio para a pergunta específica sobre Candomblé e Umbanda; extensão sozinha não prova deficiência. | Módulo 05 com objetivos, glossário, exemplos situados, comparação histórica e atividade. |
| Módulo tinha três parágrafos | Imprecisa: havia três seções; o código organizava o conteúdo principal em quatro parágrafos. | Não usar essa contagem como critério de gravidade. |
| Links internos apresentam falha geral | Não confirmada. O comportamento ocorreu no navegador de teste, sem causa isolada. | Navegação principal, rodapé, percurso e certificado passam a links HTML nativos. O teste local confirmou transições; não estabelece a causa da falha no site publicado. |
| Falta de busca é problema | É uma oportunidade de melhoria, não falha funcional comprovada. | Busca local em títulos e conteúdo, sem distinção de acentos, com limpeza e mensagem sem resultados. |
| Fontes não permitem verificar cada passagem | Mantida para o módulo examinado. | Referências por seção, autoria, data, escopo e limitações de cada fonte do módulo 05. |
| Os 35 minutos estavam incorretos | Não foi medido tempo de estudo. A falha era a ausência de explicação do que entrava na estimativa. | Em todos os módulos, leitura estimada a 180 palavras/minuto, reflexão sugerida e aprofundamento opcional; total calculado a partir dessas parcelas. |
| Abrir equivale a concluir | Confirmada no código anterior. O certificado já era explicitamente simbólico. | Conclusão por confirmação reversível, sem teste obrigatório; visitas antigas não são convertidas em confirmação. |
| Vocabulário cria barreira | Risco pedagógico plausível, a confirmar com estudantes. | Glossário no módulo 05 e explicações contextualizadas. |
| Diversidade e respeito estão garantidos | Não pode ser garantido pela amostra. O texto examinado demonstra cuidados, mas exige revisão continuada. | Exemplos situados, distinção entre interpretação acadêmica e narrativa das comunidades, inclusão de não religião e limites explícitos de representação. |
| Acessibilidade aprovada | O relatório não demonstrou conformidade completa. | Atalho ao conteúdo, foco visível, alvos do menu ampliados e ajustes de quebra de texto. Testes parciais; sem alegação de conformidade WCAG. |
| Fontes estavam quebradas | Respostas 401/403 do extrator não eram prova. O endereço original do IBGE apareceu depois em página 404 no navegador. | Referência substituída pela republicação oficial EBC/Agência Gov, identificada como conteúdo via IBGE. Referência IPHAN substituída por página documental acessível. |

## Implementação

- Abertura de módulo não escreve conclusão.
- Aluno confirma e pode desmarcar. Mensagens informam falha de armazenamento.
- A chave `atlas-completed-modules` é preservada; `atlas-confirmed-modules-v2` registra declarações novas.
- Página inicial e certificado compartilham a mesma leitura validada do progresso, removendo duplicatas e identificadores desconhecidos.
- O certificado continua simbólico, baseado na declaração do aluno, sem avaliação de aprendizagem.
- Roteiro de estudo em todos os módulos; aprofundamento editorial concentrado no módulo efetivamente examinado.
- Referências do módulo 05 são reutilizadas em Créditos para evitar divergência.
- Links nativos permitem navegação sem depender da hidratação de componentes.
- Seletor de idioma existente preservado e colocado no fluxo da página, sem ocupar o menu.

## Fontes da revisão de conteúdo

Consultadas em 29/10/2026. Sínteses próprias e breves, sem reprodução integral.

1. [UNESCO — Ifa divination system](https://ich.unesco.org/en/RL/ifa-divination-system-00146): exemplo iorubá; descrição localizada em busca. O acesso direto encontrou verificação automatizada. Não foi burlada; a limitação está indicada no módulo.
2. [Aracy Lopes da Silva / ISA — Mitos e cosmologia](https://pib.socioambiental.org/pt/Mitos_e_cosmologia): página lida; relações entre narrativas e vida social. Introdução comparativa, não representação de todos os povos.
3. [Reginaldo Prandi — O Brasil com axé (2004)](https://www.scielo.br/j/ea/a/tFh5DWhR8wWVWNsXL4Z9yxv/?lang=pt): artigo lido; interpretação histórica e sociológica identificada com autoria e data. Não usar seus dados como demografia atual.
4. [IPHAN — Parecer sobre o Terreiro Ilê Axé Icimimó Aganju Didê](https://www.gov.br/iphan/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/banco-de-pareceres/tombamento/parecer-terreiro-cachoeira-ba-conselheira-marcia-santanna.pdf): página documental lida e introdução localizada na indexação do parecer; link para download, aproximadamente 17 MB. Não substitui perspectivas das comunidades.
5. [Agência Gov/EBC — divulgação do Censo 2022 via IBGE](https://agenciagov.ebc.com.br/noticias/202506/censo-2022-catolicos-seguem-em-queda-evangelicos-e-sem-religiao-crescem-no-pais): texto lido; resultados preliminares e recorte de pessoas com dez anos ou mais.

## Validação

- `node --test tests/ux.test.mjs`: cinco testes aprovados.
- `node node_modules/typescript/bin/tsc --noEmit --incremental false`: aprovado.
- `node scripts/run-framework.mjs build`: aprovado. Vinext informa limitação de classificação estática de rotas, sem erro de build.
- Navegador na versão compilada: busca “candomble” encontrou o módulo 05; resultado abriu; botão confirmou conclusão; “Próximo” abriu módulo 06; certificado exibiu apenas módulo 05 concluído e emissão bloqueada.
- Tela de 390 × 844 px: interface inicial adaptada, menu aberto por teclado e link Créditos navegou.
- A prévia de desenvolvimento com Cloudflare não iniciou o listener. A versão compilada servida por Vinext permitiu testar interface; o contador dependente de D1 não foi validado nesse servidor Node.
- Zoom de 200%/400%, leitor de tela, uso em aparelho físico, tradução completa e testes com estudantes reais continuam pendentes.
- Esta revisão atualiza o código no GitHub. Não comprova publicação automática no domínio de produção.

## Roteiro de aceitação após publicação

1. Em perfil novo, abrir um módulo e voltar: progresso deve continuar zerado.
2. Confirmar conclusão, abrir certificado e verificar apenas um módulo concluído.
3. Desmarcar, recarregar e conferir persistência.
4. Testar navegador com dados antigos de visitas: não devem liberar o certificado como conclusões.
5. Buscar “candomble”, buscar um termo inexistente e limpar.
6. Percorrer Próximo, Anterior, Todos os módulos e Créditos no computador e no celular.
7. Conferir referências por seção e a republicação da fonte do Censo.
8. Com armazenamento bloqueado, confirmar: deve aparecer mensagem de falha sem sucesso fictício.
9. Concluir os oito módulos por confirmação e testar o PDF simbólico.
10. Realizar teste moderado com estudantes; revisar compreensão e tempos a partir de resultados reais.
