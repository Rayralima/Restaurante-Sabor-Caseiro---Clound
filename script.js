document.getElementById("reservaForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const mesa = document.getElementById("mesa").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const pedido = document.getElementById("pedido").value;
  
    const reserva = {
      nome,
      mesa,
      data,
      hora,
      pedido
    };
  
    // Exibe no resumo
    adicionarReservaNoResumo(reserva);
  
    // TODO: Enviar os dados para a nuvem(Codigo aqui!)
    // Aqui é o ponto onde a integração com a nuvem será feita futuramente
  
    document.getElementById("reservaForm").reset();
  });
  
  function adicionarReservaNoResumo(reserva) {
    const container = document.getElementById("resumoReservas");
    const div = document.createElement("div");
    div.classList.add("reserva-item");
    div.innerHTML = `
      <strong>${reserva.nome}</strong> reservou a mesa <strong>#${reserva.mesa}</strong><br>
      <em>${reserva.data} às ${reserva.hora}</em><br>
      Pedido: ${reserva.pedido}
      <hr />
    `;
    container.prepend(div);
  }

  

