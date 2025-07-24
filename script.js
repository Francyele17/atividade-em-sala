const userForm = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const tableBody = document.getElementById("user-list-body");

userForm.addEventListener("submit", function (event){
    //Desativa o funcionamento do formulário
    event.preventDefault();

    // Verifica se os dados foram preenchidos
    const name = nameInput.value.trim(); 
    const email = emailInput.value.trim();

    if(name === "" || email === ""){
        alert("Por favor, preencha todos os campos.")
        return;
    }

    // Criar uma nova linha na tabela
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td> <button class="delete-btn">Excluir</button> </td>
    `

    tableBody.appendChild(newRow);
})
tableBody.addEventListener("click", function(event){
    // Verificar se o botão de exclusão foi criado
        if(event.target.classList.contains("delete-btn")){
            const rowToDelete = event.target.closest("tr");
            rowToDelete.remove();
        }
    })