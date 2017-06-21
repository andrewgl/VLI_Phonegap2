var mainApp = angular.module('mainApp', ['ngRoute', 'ngResource']);

mainApp.config(function ($routeProvider) {
    $routeProvider
        .when('/title', {
            // templateUrl: 'title.html',
            templateUrl: 'views/title.html',
            controller: 'MainCtrl'
        })
        .when('/login', {
            templateUrl: './views/login.html',
            controller: 'MainCtrl'
        })
        .when('/studentdetails', {
            templateUrl: './views/studentdetails.html',
            controller: 'StudentCtrl'
        })
        .when('/test1', {
            templateUrl: './views/test1.html',
            controller: 'Test1Ctrl'
        })
        .when('/test2', {
            templateUrl: './views/test2.html',
            controller: 'Test2Ctrl'
        })
        .when('/review', {
            templateUrl: './views/review.html',
            controller: 'ReviewCtrl'
        })
        .when('/end', {
            templateUrl: './views/end.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/title',
            controller: 'MainCtrl'
        });
});

mainApp.controller('MainCtrl', function ($scope, $location) {
    $scope.go = function (path) {
        $location.path(path);
    }
});

mainApp.factory('savedata', function () {

    var allresults = {};
    allresults["empty"]=true;

    return {
        saveResults: function (key, value) {
            allresults[key] = value;
        },

        getResults: function () {
            return allresults;
        }
    };

});

mainApp.controller('StudentCtrl', function ($scope, $location, savedata) {
    $scope.go = function (path) {
        savedata.saveResults("Details", angular.copy(this.results));
        $location.path(path);
    };

    $scope.allresults = savedata.getResults();
    $scope.results= {
        "name": "",
        "id": "",
        "age": "",
        "other": ""
        }
});

mainApp.controller('Test1Ctrl', function ($scope, $location, savedata) {
    $scope.go = function (path) {
        savedata.saveResults("test1", angular.copy(this.results));
        $location.path(path);
    };
    $scope.allresults = savedata.getResults();
    $scope.results= {
        "letter": {
            "left": {
                'fail': {
                    '1': {id: 1, value: false},
                    '2': {id: 2, value: false},
                    '3': {id: 3, value: false},
                    '4': {id: 4, value: false},
                    '5': {id: 5, value: false}
                },
                'pass': {
                    '6': {id: 6, value: false},
                    '7': {id: 7, value: false},
                    '8': {id: 8, value: false}
                }
            },
            "right": {
                'fail': {
                    '1': {id: 1, value: false},
                    '2': {id: 2, value: false},
                    '3': {id: 3, value: false},
                    '4': {id: 4, value: false},
                    '5': {id: 5, value: false}
                },
                'pass': {
                    '6': {id: 6, value: false},
                    '7': {id: 7, value: false},
                    '8': {id: 8, value: false}
                }
            }
        },
        "shape": {
            "left": {
                'fail': {
                    '1': {id: 1, value: false},
                    '2': {id: 2, value: false},
                    '3': {id: 3, value: false},
                    '4': {id: 4, value: false},
                    '5': {id: 5, value: false}
                },
                'pass': {
                    '6': {id: 6, value: false},
                    '7': {id: 7, value: false},
                    '8': {id: 8, value: false}
                }
            },
            "right": {
                'fail': {
                    '1': {id: 1, value: false},
                    '2': {id: 2, value: false},
                    '3': {id: 3, value: false},
                    '4': {id: 4, value: false},
                    '5': {id: 5, value: false}
                },
                'pass': {
                    '6': {id: 6, value: false},
                    '7': {id: 7, value: false},
                    '8': {id: 8, value: false}
                }
            }
        }
    }
});

mainApp.controller('Test2Ctrl', function ($scope, $location, savedata) {
    $scope.go = function (path) {
        savedata.saveResults("test2", angular.copy(this.results));
        $location.path(path);
    }
    $scope.allresults = savedata.getResults();
    $scope.results= {
        "left": {
            'fail': {
                '1': {id: 1, value: false},
                '2': {id: 2, value: false},
                '3': {id: 3, value: false},
                '4': {id: 4, value: false},
                '5': {id: 5, value: false}
            },
            'pass': {
                '6': {id: 6, value: false},
                '7': {id: 7, value: false},
                '8': {id: 8, value: false}
            }
        },
        "right": {
            'fail': {
                '1': {id: 1, value: false},
                '2': {id: 2, value: false},
                '3': {id: 3, value: false},
                '4': {id: 4, value: false},
                '5': {id: 5, value: false}
            },
            'pass': {
                '6': {id: 6, value: false},
                '7': {id: 7, value: false},
                '8': {id: 8, value: false}
            }
        }
    }
})

mainApp.controller('ReviewCtrl', function ($scope, $location, savedata) {
    $scope.go = function (path) {
        // savedata.saveResults("test2", angular.copy(this.results));
        $location.path(path);
    }
    $scope.allresults = savedata.getResults();

});

