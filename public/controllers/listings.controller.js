app.controller('ListingsController', ['ListingService', function (ListingService) {
    var self = this;

    // Listings from the GET request in ListingService
    self.listings = ListingService.listings;

    // This will be the listing that was clicked on to edit
    self.listingToUpdate = {};

    // Set the initial order by 
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

        // Create object to send to the PUT route in the ListingService
        self.currentListing = {
            cost: cost,
            sqft: sqft,
            city: city
        };

        // Call the updateListing function in Listening Service
        ListingService.updateListing(id, self.currentListing);

        // After update, set the editing mode to false
        self.editingMode = false;
    };

    // Cancel editing mode
    self.cancelUpdate = function () {
        self.editingMode = false;
        ListingService.getListings();
    };

}]);