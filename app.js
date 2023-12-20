angular.module('todoApp', [])
  .controller('TodoController', function() {
    var todoCtrl = this;

    todoCtrl.todos = [
     // { task: 'Learn AngularJS', editing: false },
     // { task: 'Build a To-Do app', editing: false },
      //{ task: 'Eat lunch', editing: false }
    ];

    todoCtrl.addTodo = function() {
      if (todoCtrl.newTodo) {
        todoCtrl.todos.push({ task: todoCtrl.newTodo, editing: false });
        todoCtrl.newTodo = '';
        
      }
    };

    todoCtrl.deleteTodo = function(index) {
      todoCtrl.todos.splice(index, 1);
    };

    todoCtrl.editMode = function(index) {
      todoCtrl.todos[index].editing = !todoCtrl.todos[index].editing;
      todoCtrl.todos[index].updatedTask = todoCtrl.todos[index].task;
    };

    todoCtrl.updateTodo = function(index) {
      todoCtrl.todos[index].task = todoCtrl.todos[index].updatedTask;
      todoCtrl.todos[index].editing = false;
    };
  });
