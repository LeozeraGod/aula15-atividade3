//3- A criptografia é um conjunto de técnicas pensadas para proteger uma
//informação de modo que apenas o emissor e receptor consigam compreendê-la.
//Uma forma simples de fazer criptografar um vetor de strings é aplicar uma lógica de
//troca em cada posição do vetor, de modo que apenas o programador conheça a regra,
//lembrando que a regra aplicada precisa de alguma forma ser reversível.
//Dessa forma um vetor auxiliar e faça a cópia dos dados do vetor original,
//porém de forma criptografada e na sequência imprima os dados criptografados no console
//e por fim, crie outro vetor auxiliar que faça a restauração do texto original,
//copiando a partir do vetor criptografado, e também faça a impressão no console do mesmo.

//!Função para criptografar o vetor

const criptografar = (vetor: string[]) => vetor.map (str =>
  str.replace (/./g, char => String.fromCharCode (char.charCodeAt (0) + 3))
)


//!Função para descriptografar vetor, deslocar em -3

const descriptografar = (vetor: string[]) => vetor.map (str =>
  str.replace (/./g, char => String.fromCharCode (char.charCodeAt (0) - 3))
)

const vetor1 = ["Ola", "Mundo", "Criptografar", "Descriptografar", "Bolsonaro",];

//!criptografar e imprimir

const vetorCriptografado = criptografar(vetor1);
console.log ("Vetor Criptografado", vetorCriptografado);

//!Descriptografar e imprimir

const vetorDescriptografado = descriptografar(vetorCriptografado);
console.log ("Vetor Descriptografado", vetorDescriptografado)