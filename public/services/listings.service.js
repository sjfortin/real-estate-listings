app.service('ListingService', ['$http', function ($http) {
    var self = this;

    self.listings = {
        list: []
    };

    self.addProperty = function (newProperty) {
        $http.post('/listings', newProperty).then(function (response) {
            console.log('post listing response:', response);
        });
    };

    self.getListings = function () {
        $http.get('/listings').then(function (response) {
            self.listings.list = response.data;
        });
    };

    self.deleteListing = function (listingId) {
        $http.delete('/listings/' + listingId).then(function (response) {
            self.getListings();
        });
    };

    self.updateListing = function (id, currentListing) {
        $http.put('/listings/' + id, currentListing)
            .then(function (response) {
                self.getListings();
            });
    };

}]);