import angular from 'angular';

var $injector;

let app = angular.module('app', [])
  .directive('testDirective', function() {
    return {
      restrict: 'E',
      scope: {
        title: '<',
        onTitleChange: '&',
      },
      templateUrl: 'static/directive-fragment.html',
      controller: ['$scope', '$timeout', function($scope, $timeout) {
        $scope.value = 0;
        $scope.add = function() {
          $scope.value++;
          $scope.onTitleChange({ newTitle: "Isso ainda é uma diretiva: " + $scope.value });
          $scope.title = "Isso ainda é uma diretiva: " + $scope.value;
        };
      }]
    };
  })
  .component('anotherComponent', {
    template: `
      <div>
        {{ $ctrl.title }}<br>
        <input ng-model="$ctrl.title" />
      </div>
    `,
    bindings: {
      title: '<',
    }
  })
  .run(['$injector', function(_$injector) {
    $injector = _$injector;
  }])

angular.bootstrap(document, ['app']);

export { app, $injector };
