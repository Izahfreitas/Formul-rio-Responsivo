function updateList() {
   const listaItens = document.getElementById("listaItens");
   listaItens.innerHTML = "";

   const items = JSON.parse(localStorage.getItem("items")) || [];

   items.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = `Nome: ${item.nome} Sobrenome: ${item.sobrenome} Descrição: ${item.descricao}`;
      listaItens.appendChild(li);
   });
}
function limparHistorico() {
   localStorage.removeItem("items");
   updateList();
}

document.addEventListener("DOMContentLoaded", function () {
   const formCadastro = document.getElementById("formCadastro");

   if (formCadastro) {
      formCadastro.addEventListener("submit", function (event) {
         event.preventDefault();
         const nome = document.getElementById("nome").value;
         const sobrenome = document.getElementById("sobrenome").value;
         const descricao = document.getElementById("descricao").value;

         if (nome && sobrenome && descricao) {
            const newItem = { nome, sobrenome, descricao };
            let items = JSON.parse(localStorage.getItem("items")) || [];
            items.push(newItem);
            localStorage.setItem("items", JSON.stringify(items));
            formCadastro.reset();
            alert("Cadastrado com sucesso!");
         } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
         }
      });
   }

   updateList();

   const btnLimparHistorico = document.getElementById("limparHistorico");
   if (btnLimparHistorico) {
      btnLimparHistorico.addEventListener("click", function () {
         limparHistorico();
         alert("Histórico de itens removido.");
      });
   }
});
