# DIO | Desafio De Lógica

Nesse terceiro desafio, Escrevendo a Classe de um Jogo, tinha por objetivo botar em pratica tudo que vimos durante o curso de formação em lógica de progração. Então foi utilizado no projeto basicamente um pouco de cada parte que vimos, como variáveis, operadores e laços de repetição, estruturas de decisão, funções, classes e objetos.

[Desafio Escrevendo a Classe de um Jogo] (https://web.dio.me/lab/escrevendo-as-classes-de-um-jogo/learning/202d96ad-5cbe-4efe-9a2e-5ba90701314d?back=/track/formacao-logica-de-programacao).

## 📚 O Projeto

Criar uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deveria ter um método chamado atacar, que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## O Output deveria ser:

Ao final deve se exibir uma mensagem: "o {tipo} atacou usando {ataque}"

## 💻 Como ficou:

"O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando ${ataque}."

## Exemplo de uma saída:

"O mago Lito de 200 anos atacou usando magia."

## Melhorias:

Acrecentei gerador randomico de qual heroi aparecer no Output.
