app.controller('AddPropertyController', ['ListingService', 'RentalService',  function (ListingService, RentalService) {
    var self = this;

    self.newProperty = {};

    self.addProperty = function () {
        if (self.newProperty.saleOrRental === 'sale') {
            ListingService.addProperty(self.newProperty);
            self.newProperty = {};
        } else {
            RentalService.addProperty(self.newProperty);
            self.newProperty = {};
        }
    }

}]);