(function(){
  var app = angular.module('portal', []);

  app.directive('portalHeader', function() {
    return {
      restrict : 'E',
      templateUrl : 'directive/header.html'
    }
  });

  app.directive('sideBarMenu', function(){

    return {
      restrict : 'E',
      templateUrl : 'directive/sidebar-left.html'
    }
  });

  app.directive('main', function(){

    return {
      restrict : 'E',
      templateUrl : 'directive/main.html'
    }
  });

  app.directive('notifications', function(){

    return {
      restrict : 'E',
      templateUrl : 'directive/notifications.html'
    }
  });

  app.controller('NotificationController', function(){
    this.notifications = notes;
    this.isRead = function(index){
      return notification[index].read;
    };

    this.getClass = function getClass(index, notifications) {
      return {
        read : notification[index].read
      };
    }
  });



  var notes = [
    {notificationId: 1, text: "test text", read : true},
    {notificationId: 2, text: "test text 2", read : false},
  ];
})();
