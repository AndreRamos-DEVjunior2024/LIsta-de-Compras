    const alertBox = document.getElementById("alert");
    const removeAlertButton = document.getElementById("remove-alert");
    const add_item = document.getElementById("btn");
    let number = 4;


    // Função para exibir a mensagem de alerta
    function showAlert() {
        alertBox.classList.remove("hide");

        // Oculta o alerta automaticamente após 3 segundos
        setTimeout(() => {
            alertBox.classList.add("hide");
        }, 3000);
    }


    // Função para adicionar item a lista
    function addItem() {
        const inputElement = document.getElementById("register_item");
        const listProducts = document.getElementById("list_products")
        const listItem = document.createElement("li")
        const nameItem = inputElement.value

        number++;

        listItem.className = ("flex");
        listItem.innerHTML=`
                <input type="checkbox" id="item-${number}">
                <label for="item-${number}">${nameItem}</label>
                <div class="delete">
                    <img src="assets/icons/Lixeira.svg" alt="Deletar item">
                </div>
            `;
        listProducts.append(listItem);

        const deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {

        // Remove o item do DOM
            listItem.remove();

        // Exibe a mensagem de alerta
            showAlert();
    });
    }


    // adiciona o item na lista ao clicar no botão.
    add_item.onclick = (event) => {
        event.preventDefault();

        addItem();
    }


    // Fecha o alerta ao clicar no botão de remover alerta
    removeAlertButton.addEventListener("click", () => {
        alertBox.classList.add("hide");
    });



// Esse trecho foi mantido para que os itens ja existentes na pagina como exemplo possam ser apagados.
const deleteButtons = document.querySelectorAll(".delete");


        // Adiciona evento de click a cada botão de delete já existente por config de exemplo da pagina.
        deleteButtons.forEach((button) => {
            button.addEventListener("click", function () {
                
                // Seleciona o item e remove do DOM
                const listItem = button.closest("li");
                listItem.remove();
    
                // Exibe a mensagem de alerta
                showAlert();
            });
        });