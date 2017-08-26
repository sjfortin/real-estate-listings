app.controller('RentalsController', ['$http', function ($http) {
    var self = this;

    self.rentals = {
        list: []
    }

    self.editingMode = false;
    self.rentalToUpdate = {};

    self.orderByColumn = 'city';

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

    self.editProperty = function (rentalId) {
        self.editingMode = true;
        self.rentalToUpdate.id = rentalId;
        self.searchText = '';
    }

    self.updateRental = function (id, city, rent, sqft) {

        console.log('this is the rental to update', id, city, rent, sqft);

        currentRental = {
            rent: rent,
            sqft: sqft,
            city: city
        }

        console.log('this is what it should update to', currentRental);


        $http.put('/rentals/' + id, currentRental)
            .then(function (response) {
                currentRental = {};
                self.editingMode = false;
                self.getRentals();
            });
    }

    self.cancelUpdate = function () {
        self.editingMode = false;
        self.getRentals();
    }

    self.getRentals();

}]);