app.controller('RentalsController', ['RentalService', function (RentalService) {
    var self = this;

    self.rentals = RentalService.rentals;
    self.rentalToUpdate = {};
    self.orderByColumn = 'city';

    RentalService.getRentals();

    self.deleteRental = function (rentalId) {
        RentalService.deleteRental(rentalId);
    };

    self.editRental = function (rental) {
        self.editingMode = true;
        self.rentalToUpdate = rental;
        self.searchText = '';
    };

    self.updateRental = function (id, city, rent, sqft) {

        console.log('this is the rent', rent);
        
        self.currentRental = {
            rent: rent,
            sqft: sqft,
            city: city
        };

        RentalService.updateRental(id, self.currentRental);
        self.editingMode = false;
    };

    self.cancelUpdate = function () {
        self.editingMode = false;
        RentalService.getRentals();
    };

}]);