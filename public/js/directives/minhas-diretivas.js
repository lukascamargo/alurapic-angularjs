var app = angular.module('minhasDiretivas', []);

app.directive('meuPainel', function(){
	
	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo : '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html'


	return ddo;
});

app.directive('minhaFoto', function(){

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo : '@',
		url: '@url'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/minha-foto.html';

	return ddo;
});

app.directive('testeChat', function(){
	var ddo={};

	ddo.restric = "AE";

	ddo.scope =  {
		titulo: '@',
		descricao: '@'
	};

	ddo.transclude = true;
	ddo.templateUrl = 'js/directives/teste-chat.html';

	return ddo;
})

app.directive('meuBotaoPerigo', function(){
	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		nome: '@',
		acao: '&'
	};

	ddo.transclude = true;

	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger">{{nome}}</button>';

	return ddo;
});

app.directive('meuFocus', function(){
	var ddo = {};

	ddo.restrict = "A";

	ddo.link = function(scope, element){
		scope.$on('fotoCadastrada',function(){
			element[0].focus();
		});
	};

	return ddo;
});