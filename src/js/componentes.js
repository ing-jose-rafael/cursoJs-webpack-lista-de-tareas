import {Todo} from '../classes'
import { todoList } from '../index';

// Referencia en el HTML
const divTodoList = document.querySelector('.todo-list');
const inpuTxt = document.querySelector('.new-todo');


export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${todo.completado?"completed":''}" data-id=${todo.id}>
		<div class="view">
			<input class="toggle" type="checkbox" ${todo.completado?"checked":''} >
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li> `;  
    
    // creando un div para agragar li con todo sus nodo
    const div = document.createElement('div');
	div.innerHTML = htmlTodo;


    divTodoList.append(div.firstElementChild);

	return div.firstElementChild;
}

// Evento
inpuTxt.addEventListener('keyup',(event)=>{
	//console.log(event);
	if (event.keyCode === 13 && inpuTxt.value.length > 0 ) {
		const nuevoTodo = new Todo(inpuTxt.value);
		// como los objetos se pasan por referencia puedo obtener el arreglo
		todoList.nuevoTodo(nuevoTodo);
		
		crearTodoHtml(nuevoTodo); // para marcar completado o no
		inpuTxt.value = '';
	}
});
// captural el click en la lista de tareas
divTodoList.addEventListener('click',(event)=>{
	const nombreElemento = event.target.localName; // tres opciones input, label, button (para saber a cual elemento se le hizo click)
	const todoElemento = event.target.parentElement.parentElement; // obteniendo el li para marcarlo completado o no
	// obteniendo el id de la lista de tarea
	const todoId = todoElemento.getAttribute('data-id');
	
	if (nombreElemento.includes('input')) {
		todoList.marcarCompletado(todoId);
		// referencia al elemento html todoElemento, para hacer referencia a todas las clases  classList
		// con .toggle('nombreClase') para agregar o quitar una clase
		// Cambia el DOM porque el "totoElemento" mantiene la referencia al DOM, si lo manipulas, manipularás ese elemento porque en JavaScript todos los objetos se pasan por referencia.
		todoElemento.classList.toggle('completed');
		
	}else if (nombreElemento.includes('button')){
		todoList.eliminarTodo(todoId);
		// removiendo del html el ul
		divTodoList.removeChild(todoElemento);
	}

	console.log(todoList);
	// console.log(nombreElemento);
	// console.log(todoElemento);
	// console.log(todoId);
});