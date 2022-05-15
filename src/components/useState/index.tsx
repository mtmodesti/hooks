import "./styles.css";
import { useState } from "react";

export const UseStateComponent = () => {
  const [count, setCount] = useState(0);
  const teste = "const somar = () => useState(count + 1)";

  return (
    <main>
      <p>
        Nosso principal e mais básico hook do React.JS. Sua função é a capacidade de
        armazenar um valor, esse valor pode ser de qualquer tipo, uma string, um
        array, um booleano, um array de objetos, enfim, o que você precisar
        armazenar, e, além de armazenar, podemos alterar sempre que necessário
        esse valor. Vamos entender um pouco melhor. Para declarar uma variável
        com o useState, usamos a seguinte sintaxe: {<br />} {<br />}
        const [count, setCount] = useState(0){<br />}
        {<br />}
        Perceba que estamos desestruturando de dentro do useState um array com
        dois valores, o count e o setCount, e logo em frente atribuindo o valor
        inicial de 0. Os nomes poderiam ser qualquer coisa, mas vamos usar o
        famoso exemplo do contador. Estamos iniciando um variável qualquer com o
        nome de count e atribuindo para ela o valor de 0.{<br />}
        {<br />}
        Para alterarmos agora o seu valor, usamos o setCount, que
        desestruturamos do useState e nada mais que é que uma função do react
        com a capacidade de alterar o valor do count. Não podemos alterar
        diretamente igual no JavaScript pois o React trabalha com o conceito de
        imutabilidade, tópico para outro dia. A padronização dos nomes segue
        essa estrutura, declaramos uma variável primeira para armazenar o valor,
        e função de alterar a variável leva o nome set como prefixo:
        {<br />}
        {<br />}
        Exemplos: [lista, setLista] ou [arrayQualquer, setArrayQualquer]{" "}
        {<br />}
        {<br />}
        Então agora que entedemos como salvar um valor, e que precisamos usar o
        segundo parâmetro para alterar o valor ficou fácil montarmos um simples
        contador de exemplo. Basta criarmos um botão para executar a função de
        somar e um outro para diminuir o valor do contador, que inicialmente
        definimos como 0 por padrão. Para a função de somar, usamos o seguinte
        trecho: <br />
        {<br />}
        `${teste}`<br />
        {<br />}E a mesma coisa para a função de diminuir, só que com count - 1.
        Agora basta inserirmos isso na função de onClick de nosso botão e
        inserir tudo isso para renderizar em tela. O resultado vc confere abaixo
      </p>
      <div className="counter">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          diminuir
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Somar
        </button>
      </div>
    </main>
  );
};
