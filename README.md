# 🎁 Amigo Secreto – Jogo Interativo em JavaScript

Este é um jogo simples e funcional de **Amigo Secreto**, desenvolvido com HTML, CSS e JavaScript puro. O usuário pode adicionar nomes à lista, evitar duplicatas, sortear um nome aleatório e limpar a lista com um clique.

## 💡 Funcionalidades

- ✅ Adicionar nomes à lista de amigos
- 🚫 Bloqueia nomes vazios ou contendo números
- 🔁 Verifica se o nome já foi adicionado (não aceita repetição)
- 🎲 Sorteia um amigo aleatoriamente da lista
- 🧹 Limpa todos os nomes e reinicia o jogo

## 📷 Interface

A interface conta com:
- Um campo de entrada para nomes
- Botões de "Adicionar", "Sortear amigo" e "Limpar"
- Lista com os nomes adicionados
- Resultado do sorteio exibido dinamicamente
- Imagens e fontes do Google Fonts para melhor experiência visual

## 🧠 Lógica JavaScript (app.js)

- `adicionarAmigo()`: adiciona o nome à lista após validação (sem números, sem repetição, sem vazio).
- `verificarAmigoRepetido(nome)`: verifica se o nome já está na lista, ignorando maiúsculas/minúsculas.
- `percorrerLista()`: renderiza a lista atualizada no HTML.
- `limparCampo()`: limpa o campo de entrada.
- `sortearAmigo()`: escolhe aleatoriamente um nome da lista, desde que haja mais de um.
- `limparNomes()`: zera a lista de amigos e o conteúdo renderizado na tela.

## 🚀 Como usar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Digite os nomes dos participantes.
4. Clique em **Adicionar** para montar a lista.
5. Clique em **Sortear amigo** para ver um nome aleatório.
6. Use **Limpar** para reiniciar o jogo.

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript 
- Google Fonts (`Inter`, `Merriweather`)
