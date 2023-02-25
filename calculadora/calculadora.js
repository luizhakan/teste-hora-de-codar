// Defina a variável "rodando" como verdadeira
let rodando = true;

// Enquanto a variável "rodando" for verdadeira, execute o seguinte bloco de código:
while (rodando) {
  // Solicite ao usuário a operação desejada (+, -, *, /) e converta o valor para número
  const operacao = Number(
    prompt(
      "Escolha uma operação:\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
    )
  );

  // Se a operação escolhida for inválida, exiba uma mensagem de erro e continue o loop
  if (operacao < 1 || operacao > 4) {
    alert("Operação inválida!");
    continue;
  }

  // Solicite ao usuário o primeiro número e converta o valor para número
  const num1 = Number(prompt("Digite o primeiro número:"));

  // Solicite ao usuário o segundo número e converta o valor para número
  const num2 = Number(prompt("Digite o segundo número:"));

  let resultado;

  // Execute a operação escolhida pelo usuário e armazene o resultado na variável "resultado"
  switch (operacao) {
    case 1:
      resultado = num1 + num2;
      break;
    case 2:
      resultado = num1 - num2;
      break;
    case 3:
      resultado = num1 * num2;
      break;
    case 4:
      resultado = num1 / num2;
      break;
  }

  // Exiba o resultado da operação
  alert(`O resultado da operação é ${resultado}`);

  // Pergunte ao usuário se ele deseja realizar outra operação e atualize a variável "rodando" de acordo com a resposta
  rodando = confirm("Deseja realizar outra operação?");
}
