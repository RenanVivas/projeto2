angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, Facebook, $state) {
    $scope.login = function(){
        Facebook.login(function(response) {
            $state.go('tab.perfil');
        });
    }
})

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

.controller('HistoricoCtrl', function($scope,$ionicPopup,$http) {
  $scope.dados = {};
  $scope.posts = [];

  $http.get("http://174.138.68.25:3000/historico").then(function(resposta){
     $scope.posts = resposta.data;
  });

  $scope.showLike = function() {
  var alertPopup = $ionicPopup.alert({
    title: 'Likes',
    template: '1 like <br>2 like<br>3 like<br>4 like<br>5 like<br>6 like<br>7 like<br>8 like<br>9 like<br>10 like<br>11 like<br>12 like<br>13 like<br>14 like<br>15 like<br>16 like<br>17 like<br>18 like<br>19 like<br>20 like<br>21 like<br>22 like<br>23 like<br>24 like<br>25 like'
  });
  // alertPopup.then(function(res) {
  //   console.log('Thank you for not eating my delicious ice cream cone');
  // });
   };
  $scope.showComment = function() {
  var alertPopup = $ionicPopup.alert({
    title: 'Comments',
    template: '1 comment - Just Joined<br>2 comment - Love it!<br>3 comment - Facebook!!!<br>4 comment - Hated<br>5 comment -Blabla<br>6 comment - Olar<br>7 comment - Hello World<br>8 comment - Comentario<br>9 comment - first<br>10 comment - Hahahaa<br>11 comment - More adds<br>12 comment - THIS APP IS GREAT'
  });

   };
})

.controller('ConfigCtrl', function($scope, $ionicModal) {
  $scope.settings = {
    enableFriends: true
  };

  $ionicModal.fromTemplateUrl('templates/resetSenha.html', {
    $scope: $scope,
    animation: 'slide-in-up'


  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.abreModal = function() {
    $scope.modal.show();
  };
  $scope.fecharModal = function() {
    $scope.modal.hide();
  };
})

.controller('ResetSenhaCtrl', function($scope,$state) {

});
