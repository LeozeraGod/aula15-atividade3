//3- A criptografia é um conjunto de técnicas pensadas para proteger uma
//informação de modo que apenas o emissor e receptor consigam compreendê-la.
//Uma forma simples de fazer criptografar um vetor de strings é aplicar uma lógica de
//troca em cada posição do vetor, de modo que apenas o programador conheça a regra,
//lembrando que a regra aplicada precisa de alguma forma ser reversível.
//Dessa forma um vetor auxiliar e faça a cópia dos dados do vetor original,
//porém de forma criptografada e na sequência imprima os dados criptografados no console
//e por fim, crie outro vetor auxiliar que faça a restauração do texto original,
//copiando a partir do vetor criptografado, e também faça a impressão no console do mesmo.

import Scanner from "@codeea/scanner";
let scanner: Scanner;

// Função para deslocar caracteres de uma palavra
const deslocarCaracteres = (palavra: string, deslocamento: number): string => {
  return palavra.split('').map(letra =>
      String.fromCharCode(letra.charCodeAt(0) + deslocamento)
  ).join('');
};

// Função para criptografar um vetor de strings
const criptografar = (vetor: string[]): string[] => {
  return vetor.map(palavra => deslocarCaracteres(palavra, 5));
};

// Função para descriptografar um vetor de strings
const descriptografar = (vetor: string[]): string[] => {
  return vetor.map(palavra => deslocarCaracteres(palavra, -5));
};


const executar = async () => {

  const palavrasOriginais = ["Ola", "Mundo", "Criptografar", "Descriptografar"];

  // Criptografar o vetor e imprimir o resultado
  const palavrasCriptografadas = criptografar(palavrasOriginais);
  console.log("Palavras Criptografadas:", palavrasCriptografadas);

  // Descriptografar o vetor e imprimir o resultado
  const palavrasDescriptografadas = descriptografar(palavrasCriptografadas);
  console.log("Palavras Descriptografadas:", palavrasDescriptografadas);
};

// Chamar a função principal
executar();
