// Ionic Starter App


angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','facebook'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('tab.perfil', {
    url: '/perfil',
    views: {
      'tab-perfil': {
        templateUrl: 'templates/tab-perfil.html',
        controller: 'PerfilCtrl'
      }
    }
  })

  .state('tab.Funcoes', {
      url: '/funcoes',
      views: {
        'tab-funcoes': {
          templateUrl: 'templates/tab-funcoes.html',
          controller: 'FuncaoCtrl'
        }
      }
    })
    .state('tab.funcoes-detail', {
      url: '/funcoes/:funcaoId',
      views: {
        'tab-funcoes': {
          templateUrl: 'templates/funcao-detail.html',
          controller: 'FuncaoDetailCtrl'
        }
      }
    })

  .state('tab.historico', {
    url: '/historico',
    views: {
      'tab-historico': {
        templateUrl: 'templates/tab-historico.html',
        controller: 'HistoricoCtrl'
      }
    }
  })

  .state('tab.config', {
    url: '/config',
    views: {
      'tab-config': {
        templateUrl: 'templates/tab-config.html',
        controller: 'ConfigCtrl'
      }
    }
  })

  .state('tab.resetSenha', {
   url: '/resetSenha',
   views: {
      'tab-config': {
        templateUrl: 'templates/resetSenha.html',
        controller: 'ResetSenhaCtrl'
      }
   }
 })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})

.config(function(FacebookProvider) {
    // Set your appId through the setAppId method or
    // use the shortcut in the initialize method directly.
    FacebookProvider.init('1494682577262879');
});
