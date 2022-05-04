const app = new Vue({

  el: '#app',

  data:{

    newTodo: '',

    todoList: []
  },

  methods:{
    addTodo(){
      if(this.newTodo.length > 1 && isNaN(this.newTodo)){

        const todoObj = {
          text: this.newTodo,
          done: false
        }

        this.todoList.push(todoObj);
      }
      this.newTodo = '';
    },

    removeTodo(index){
      if(confirm('sei sicuro di voler eliminare questo todo?')){
        this.todoList.splice(index, 1);
      }
     
    },
  }

});