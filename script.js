function mostrarEscolha() {
  const materia = document.getElementById("materia").value;
  const resultado = document.getElementById("resultado");

  if (materia) {
    resultado.innerText = "Você escolheu: " + materia + ". Redirecionando...";
    // Aqui você pode adicionar redirecionamento:
    // Por exemplo: window.location.href = materia.toLowerCase() + ".html";
  } else {
    resultado.innerText = "Por favor, selecione uma matéria.";
  }
}
