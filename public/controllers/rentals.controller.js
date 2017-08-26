app.controller('RentalsController', ['$http', function ($http) {
    var self = this;

    self.rentals = {
        list: []
    }

    self.getRentals = function () {
        $http.get('/rentals').then(function (response) {
            self.rentals.list = response.data;
            console.log('get rentals response: ', self.rentals);
        });
    };

    self.deleteRental = function (rentalId) {
        $http.delete('/rentals/' + rentalId).then(function (response) {
            self.getRentals();
        })
    };

    self.getRentals();

}]);