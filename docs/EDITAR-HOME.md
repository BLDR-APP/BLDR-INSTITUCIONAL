# Como editar a nova home do BLDR

A home usa React e os arquivos normais deste repositório. Não depende do Figma, do Codex ou de uma biblioteca de visualização para funcionar.

## Atalhos

| O que editar | Arquivo ou pasta |
| --- | --- |
| Imagens das telas | [`public/rebranding/screens`](../public/rebranding/screens) |
| Logo | [`public/rebranding/logo.png`](../public/rebranding/logo.png) |
| Textos, legendas, links das lojas e caminhos das imagens | [`src/content/home.json`](../src/content/home.json) |
| Cores, fontes e espaçamentos da home | [`src/pages/Home.css`](../src/pages/Home.css) |
| Estrutura e comportamento da home | [`src/pages/Index.tsx`](../src/pages/Index.tsx) |
| Título e descrição para busca e compartilhamento | [`index.html`](../index.html) |

## Trocar uma tela sem editar código

1. Exporte **o frame completo** do Figma, sem cortar cabeçalhos, rodapés ou conteúdo. JPG, PNG e WebP são aceitos pelo navegador.
2. Substitua o arquivo correspondente na pasta `public/rebranding/screens`. Se mantiver o mesmo nome e formato, não precisa mudar a configuração.
3. Faça essa alteração na branch de revisão e confira o resultado antes de mesclar com `main`.

No GitHub, abra a pasta de imagens, confirme a branch selecionada e use **Add file → Upload files** para enviar o arquivo com o mesmo nome. Revise o diff e confirme o commit nessa branch.

| Tela | Arquivo atual |
| --- | --- |
| Home | `home.jpg` |
| Treinos | `workout.jpg` |
| Nutrição | `nutrition.jpg` |
| Progresso | `progress.jpg` |
| Perfil | `profile.jpg` |
| HAVOK | `havok.jpg` |
| Esportes | `sports.jpg` |
| Comunidade | `community.jpg` |

As telas atuais medem **440 × 956 px**. A apresentação respeita a imagem inteira, com altura automática. Se exportar em outra resolução, atualize também `width` e `height` em `home.json` para reservar o espaço correto durante o carregamento. A mesma proporção pode ser exportada em 2× para maior nitidez.

Se mudar o nome ou o formato, altere apenas o campo `src` da tela em `home.json`. Exemplo:

```json
"profile": {
  "src": "/rebranding/screens/profile-v2.webp",
  "alt": "Perfil do BLDR com níveis e conquistas",
  "width": 880,
  "height": 1912
}
```

O fundo cinza do Perfil está **dentro da imagem**. Corrija no frame do Figma e substitua `profile.jpg`; mudar a cor da seção não altera o fundo da captura.

## Trocar a logo

`logo.png` é o arquivo original enviado para o rebranding, com bastante espaço preto em torno do símbolo. O enquadramento de `.official-mark` em `Home.css` esconde somente esse espaço externo. Se substituir por uma logo já recortada, remova os valores de enquadramento de `.official-mark img` e use `width: 100%; height: auto; position: static`.

## Editar textos e links

Abra `src/content/home.json`:

- `brand`: logo e slogan na abertura.
- `screens`: imagens, descrições acessíveis e dimensões.
- `stores`: destinos da App Store e Google Play.
- `features`: título e legenda do painel alternável de Treinos/Nutrição/Progresso.
- `copy`: demais textos da home, identificados por nomes baseados no conteúdo.

Mantenha a sintaxe JSON: aspas duplas e vírgulas entre campos, sem vírgula depois do último campo. Os textos são renderizados como texto comum, sem HTML.

## Validar localmente

```sh
npm ci
npm run dev
npm run build
npx tsc --noEmit -p tsconfig.app.json
```

Confira a home no celular e no desktop, as três opções do painel, o FAQ, os links das lojas e as rotas `/sobre`, `/contato`, `/seguranca`, `/termos` e `/privacidade`.

## Revisão antes de publicar

Esta implementação fica em uma branch separada. Mesclar na `main` pode disparar o deploy configurado no provedor atual; use o pull request para revisar primeiro. Esta alteração não cria outro serviço de hospedagem.

Antes do lançamento, confirme os benefícios e a disponibilidade dos recursos da v2.0 no aplicativo. Os preços não são publicados nesta home: o visitante consulta os planos no app.
