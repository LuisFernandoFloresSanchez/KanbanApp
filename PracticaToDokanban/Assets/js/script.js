angular.module('kanbanApp', []).controller('KanbanController', function ($scope) { //Es el controlador que hace contacto con la Api para manejar la informacion de un lado al otro
 // la variable scope se usa para acceder del html al controlador
 //atraves del scope puedo acceder a cualquier elemento dado en el HTML
// los datos que no se van a guardar se pueden manejar atravez del scope, lo que es persistente o constante, va del lado del controlador
 var kanbanCtrl = this; // se crea para hacer referencia del controlador y poder acceder a sus datos apartir de esta variable
    kanbanCtrl.tasks = [];// se define un arreglo de forma estatica
    kanbanCtrl.demo = "one";
    var index = 0;
    kanbanCtrl.add = function () {
       
         var newObj = {
            index: index,
            name: $scope.obj.name,
            description: $scope.obj.description,
            status: 1
        }
        kanbanCtrl.tasks.push(newObj);
        index++;
        $scope.obj = {};
    }
    kanbanCtrl.aumentar = function(val){
        kanbanCtrl.tasks[val].status++;
       // $scope.obj.status++;
    }
    kanbanCtrl.disminuir = function(val){
        kanbanCtrl.tasks[val].status--;
       // $scope.obj.status++;
    }

});

// usamos $scope para que el html se muestre en el controlador
// usamos el controlador para mostrar de javascript al html
