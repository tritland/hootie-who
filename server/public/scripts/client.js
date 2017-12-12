var app = angular.module('HootieApp', []);

app.controller('PeopleController', ['$http', function ($http) {
    var self = this;
    self.people = [];

self.postPerson = function(){
    console.log('button clicked');
    $http({
        method: 'POST',
        url: '/people',
        data: self.newPerson,
    });
};

}]);