'use strict';
var _tagyCmsClientAppDependencies=((!(typeof _tagyCmsClientAppExtraModules === 'undefined')) && _tagyCmsClientAppExtraModules.length>0)?_tagyCmsClientAppExtraModules.concat(['ngRoute','uuid','tagyComponents']):['ngRoute','uuid','tagyComponents']

angular.module('tagyCmsClientApp', _tagyCmsClientAppDependencies)
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function(CrossFrameEditableService){
        //console.log("IFRAME app INIT",$rootScope)
        CrossFrameEditableService.init(true)
    })
