angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {})

.controller('PerfilCtrl', function($scope) {})

.controller('FuncaoCtrl', function($scope, Funcoes) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.funcoes = Funcoes.all();
  $scope.remove = function(funcao) {
    funcoes.remove(funcao);
  };
})

.controller('FuncaoDetailCtrl', function($scope, $stateParams, Funcoes) {
  $scope.funcao = Funcoes.get($stateParams.id);
})

.controller('HistoricoCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ConfigCtrl', function($scope, $ionicModal) {
  $scope.settings = {
    enableFriends: true
  };
  $ionicModal.fromTemplateUrl('resetSenha.html', {
    $scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });
  $scope.abreModal = function() {
    $scope.modal.show();
  };
});
