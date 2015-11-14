app.controller('HomeController', function ($rootScope, $scope,$location, UsuarioEntry) {
    $rootScope.location_path = $location.path();
    if( $rootScope.loggged != true){
      $location.path('/login');
    }
    /*
    var entry = UsuarioEntry.get({ id: $scope.id }, function() {
      console.log(entry);
    });
    */
    var entries = UsuarioEntry.query(function() {
      $scope.usuarios = entries;
      console.log(entries);
    });

    /*
    $scope.entry = new UsuarioEntry();
    $scope.entry.nome = 'Horácio Dias';
    $scope.entry.senha = '123';
    $scope.entry.email = 'horacio.dias92@gmail.com';
    */

    /*
    UsuarioEntry.save($scope.entry, function() {
      //data saved. do something here.
    });
    */
});

app.controller('LoginController', function ($rootScope, $scope,$location, LoginService) {
    $rootScope.location_path = $location.path();
    $scope.email = "";
    $scope.senha = "";
    $scope.logon = function(){
      LoginService.logon($scope.email, $scope.senha);
    }
});


app.controller('SobreController', function($rootScope, $location)
{
   $rootScope.location_path = $location.path();
});

app.controller('ContatoController', function($rootScope, $location)
{
   $rootScope.location_path = $location.path();
});
