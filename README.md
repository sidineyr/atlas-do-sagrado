# Atlas do Sagrado

MOOC aberto em português sobre história das religiões, não religião e filosofia, com fontes verificáveis e certificado simbólico em PDF.

**Site:** https://atlas-do-sagrado.blubier.chatgpt.site

## Percurso

1. Onde tudo começa?
2. Religião no mundo antigo
3. Tradições do Sul e do Leste da Ásia
4. Judaísmo, cristianismo e islã
5. África, Américas e Brasil
6. Religião no mundo moderno
7. Ateísmo, agnosticismo e não religião
8. Filosofia da religião

O curso é introdutório, não confessional e autoinstrucional. Não há prova nem prazo. Cada página contabiliza uma leitura por sessão sem armazenar dados pessoais. Ao confirmar explicitamente a conclusão dos oito módulos, o navegador libera um certificado gratuito e simbólico em PDF, sem equivalência acadêmica ou profissional.

## Método e fontes

O conteúdo separa evidência histórica, interpretação acadêmica e narrativa interna das tradições. Os módulos apontam para fontes verificáveis, entre elas OpenStax, Stanford Encyclopedia of Philosophy, Internet Encyclopedia of Philosophy, Pew Research Center, IBGE, IPHAN e The Metropolitan Museum of Art.

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

O contador de leituras usa Cloudflare D1 em produção. A emissão do certificado é feita no servidor e não mantém cadastro de estudantes.

## Créditos

- Idealização e direção pedagógica: [Sidiney Rodrigues](https://www.linkedin.com/in/sidineyrodrigues)
- Criação e desenvolvimento: ChatGPT, a partir da orientação e curadoria de Sidiney Rodrigues
- Ícones: [Lucide](https://lucide.dev/), licença ISC
- Outros projetos: [GitHub](https://github.com/sidineyr) · [Substack](https://sidineyr.substack.com)

## Versão

A revisão pedagógica e de UX de 29/10/2026 está documentada em [docs/revisao-ux-2026-10-29.md](docs/revisao-ux-2026-10-29.md).

## Estudo e progresso

- A busca na página inicial consulta títulos e conteúdo, sem distinguir acentos.
- Todos os módulos apresentam estimativas editoriais separadas de leitura, reflexão e aprofundamento opcional. A leitura usa uma referência de 180 palavras por minuto; os demais tempos são sugestões, não medições de usuários.
- O módulo 05 inclui objetivos, glossário, exemplos, atividade com resposta possível e referências por seção.
- Abrir uma página não registra conclusão. O botão ao final permite confirmar ou desmarcar.
- O progresso confirmado fica em `atlas-confirmed-modules-v2`. O registro antigo de visitas é preservado, mas não convertido em conclusão.
- O certificado é simbólico e baseado na declaração do aluno; não verifica aprendizagem e não exige login.
- Navegação e leitura usam HTML acessível sem depender da hidratação. Busca e progresso exigem JavaScript.

## Verificação

```bash
pnpm test:ux
pnpm exec tsc --noEmit
pnpm build
```

Os testes cobrem dados de progresso inválidos, visitas legadas, falhas de armazenamento, busca sem acentos e integridade de referências. O roteiro manual e suas limitações constam na revisão de UX.
