app.controller('ListingsController', ['$http', function ($http) {
    var self = this;

    self.listings = {
        list: []
    }

    self.editingMode = false;
    self.listingToUpdate = {};

    self.orderByColumn = 'city';

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

    self.editListing = function (listingId) {
        self.editingMode = true;
        self.listingToUpdate.id = listingId;
        self.searchText = '';
    }

    self.updateListing = function (id, city, cost, sqft) {

        console.log('this is the listing to update', id, city, cost, sqft);

        currentListing = {
            cost: cost,
            sqft: sqft,
            city: city
        }

        console.log('this is what it should update to', currentListing);


        $http.put('/listings/' + id, currentListing)
            .then(function (response) {
                currentListing = {};
                self.editingMode = false;
                self.getListings();
            });
    }

    self.cancelUpdate = function () {
        self.editingMode = false;
        self.getListings();
    }

    self.getListings();

}]);