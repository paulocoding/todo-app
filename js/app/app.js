angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    this.list = [{name:'do stuff', done:false},
                 {name:'do more stuff', done:true}];
  });
