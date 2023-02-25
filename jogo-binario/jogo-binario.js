let jogando = true;
while (jogando) {
  // Pede ao usuário que escolha o nível de dificuldade
  let nivel = Number(prompt("Escolha o nível de dificuldade: 1, 2 ou 3."));
  // Valida a escolha do usuário
  while (nivel < 1 || nivel > 3) {
    nivel = Number(prompt("Escolha o nível de dificuldade: 1, 2 ou 3."));
  }
  // Define o número máximo de tentativas baseado no nível de dificuldade escolhido
  let numeroTentativas = nivel === 1 ? 7 : nivel === 2 ? 5 : 3;
  // Gera um número aleatório entre 1 e 100
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  // Inicia o loop de tentativas
  for (let i = 0; i < numeroTentativas; i++) {
    // Pedimos ao usuário para adivinhar o número e informamos quantas tentativas restam
    const chute = Number(
      prompt(
        `Adivinhe o número entre 1 e 100! Você tem ${
          numeroTentativas - i
        } tentativas restantes.`
      )
    );
    // Verifica se o usuário acertou o número e informa o resultado
    if (chute === numeroAleatorio) {
      alert(`Parabéns, você acertou o número em ${i + 1} tentativa(s)!`);
      break;
    } else if (chute < numeroAleatorio) {
      alert("O número é maior!");
    } else {
      alert("O número é menor!");
    }
    // Se o número de tentativas acabou e o usuário ainda não acertou, informa o número secreto
    if (i === numeroTentativas - 1) {
      alert(
        `Suas ${numeroTentativas} tentativas acabaram. O número era ${numeroAleatorio}.`
      );
    }
  }
  // Pergunta ao usuário se ele deseja jogar novamente
  jogando = confirm("Deseja jogar novamente?");
}