app.service('RentalService', ['$http', function ($http) {
    var self = this;

    self.rentals = {
        list: []
    };

    self.addProperty = function (newProperty) {
        $http.post('/rentals', newProperty).then(function (response) {
            console.log('post rental response:', response);
            swal({
                title: 'Success!',
                text: 'The rental has been added',
                type: 'success'
            })
        });
    };

    self.getRentals = function () {
        $http.get('/rentals').then(function (response) {
            self.rentals.list = response.data;
        });
    };

    self.deleteRental = function (rentalId) {
        $http.delete('/rentals/' + rentalId).then(function (response) {
            self.getRentals();
        });
    };

    self.updateRental = function (id, currentRental) {
        $http.put('/rentals/' + id, currentRental)
            .then(function (response) {
                self.getRentals();
            });
    };

}]);

