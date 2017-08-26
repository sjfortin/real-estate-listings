app.controller('ListingsController', ['$http', function ($http) {
    var self = this;

    self.listings = {
        list: []
    }

    self.getListings = function () {
        $http.get('/listings').then(function (response) {
            self.listings.list = response.data;
            console.log('get listings response: ', self.listings);
        });
    };

    self.deleteListing = function (listingId) {
        $http.delete('/listings/' + listingId).then(function (response) {
            self.getListings();
        })
    };

    self.getListings();

}]);