export class TodoList {

    constructor(){
        this.todos = [];
    }

    //Agregar tarea al arreglo
    /**
     * Agrega una nueva tarea
     * @param {String} tarea recibe la nueva tarea
     */
    nuevoTodo(tarea){
        this.todos.push(tarea)
    }
    /**
     * elimina una tarea
     * @param {String} id 
     */
    eliminarTodo(id){
        this.todos = this.todos.filter( elem =>
            elem.id != id
        );
    }
    /**
     * Marca el estado de una tarea como completado
     * @param {String} id 
     */
    marcarCompletado(id){
        this.todos.forEach((todo)=>{
            if (todo.id == id) {
                todo.completado = !todo.completado;
                console.log(todo.completado);
            }
        });
    }
    /**
     * Elimina todas las tareas completadas
     * @param {String} id 
     */
    eliminarCompletados(id){}
}