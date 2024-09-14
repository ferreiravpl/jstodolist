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

	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function markAsConcluded() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",markAsConcluded);
	//END STRIKETHROUGH

	// Criação do botão de remoção dentro dos elementos da lista
	var removeButton = document.createElement("button");
	removeButton.appendChild(document.createTextNode("X"));
	li.appendChild(removeButton);
	removeButton.addEventListener("click", deleteToDo);


	//Função para criar a classe de deletar a tarefa
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

