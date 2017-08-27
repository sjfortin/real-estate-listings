app.controller('ListingsController', ['ListingService', function (ListingService) {
    var self = this;

    self.listings = ListingService.listings;
    self.listingToUpdate = {};
    self.orderByColumn = 'city';

    // Initial GET request
    ListingService.getListings();

    // DELETE call to Listing Service
    self.deleteListing = function (listingId) {
        ListingService.deleteListing(listingId);
    };

    // PUT call to Listing Service
    self.editListing = function (listing) {
        self.editingMode = true;
        self.listingToUpdate = listing;
        self.searchText = '';        
    };

    // POST call to Listing Service
    self.updateListing = function (id, city, cost, sqft) {

        self.currentListing = {
            cost: cost,
            sqft: sqft,
            city: city
        };

        ListingService.updateListing(id, self.currentListing);
        self.editingMode = false;
    };

    // Cancel editing mode
    self.cancelUpdate = function () {
        self.editingMode = false;
        ListingService.getListings();
    };

}]);