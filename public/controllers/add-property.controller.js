app.controller('AddPropertyController', ['$http', function ($http) {
    var self = this;

    self.newProperty = {}

    self.addProperty = function () {
        if (self.newProperty.saleOrRental === 'sale') {
            $http.post('/listings', self.newProperty).then(function (response) {
                self.newProperty = {};
                console.log('post response:', response);
            });
        } else {
            $http.post('/rentals', self.newProperty).then(function (response) {
                self.newProperty = {};
                console.log('post response:', response);
            });
        }
    }

}]);