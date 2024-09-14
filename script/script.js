var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
} 

function createToDoElement() {
	var li = document.createElement("li"); // Cria o elemento
	li.appendChild(document.createTextNode(input.value)); //Pega o texto do input e insere no elemento
	ul.appendChild(li); //Adiciona o elemento na lista
	input.value = ""; //Limpa o input

	//Cria a classe CSS para estilizar o marcar como concluído
	function markAsConcluded() {
		li.classList.toggle("done");
	}

	//Chama a função de conclusão no evento de clique
	li.addEventListener("click",markAsConcluded);

	// Criação do botão de remoção dentro dos elementos da lista
	var removeButton = document.createElement("button");
	removeButton.appendChild(document.createTextNode("X"));
	li.appendChild(removeButton);
	removeButton.addEventListener("click", deleteToDo);

	//Função para criar a classe CSS de deletar a tarefa
	function deleteToDo(){
		li.classList.add("delete")
	}
}

function addToListAfterClick(){
	if (inputLength() > 0) { //Valida tamanho do input antes de adicionar na lista
		createToDoElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //Validação também caso o usuário aperte enter, 13 é o número do evento.
		createToDoElement();
	} 
}

enterButton.addEventListener("click",addToListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

