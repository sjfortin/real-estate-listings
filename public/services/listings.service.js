app.service('ListingService', ['$http', '$location', function ($http, $location) {
    
    var self = this;

    // Init the sale listings as an empty object with a list property
    self.listings = {
        list: []
    };

    // POST 
    self.addProperty = function (newProperty) {
        $http.post('/listings', newProperty).then(function (response) {
            console.log('post listing response:', response);
            swal({
                title: 'Success!',
                text: response.config.data.city + ' has been added',
                type: 'success'
            })
        }).then(function () {
            $location.path('/listings');
        });
    };

    self.getListings = function () {
        $http.get('/listings').then(function (response) {
            self.listings.list = response.data;
            console.log('service listings', self.listings);
            
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