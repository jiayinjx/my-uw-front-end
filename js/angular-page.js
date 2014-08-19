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

    this.getClass = function getClass(index, notifications) {
      return {
        unread : notifications[index].unread
      };
    }

    this.markRead = function markRead(index, notifications) {
      notifications[index].unread = false;
    }
  });



  var notes = [
    {notificationId: 1, text: "test text", unread : true},
    {notificationId: 2, text: "test text 2", unread : false},
  ];
})();
