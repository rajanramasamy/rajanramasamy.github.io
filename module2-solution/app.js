(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ToBuyController(ShoppingListCheckOffService) {
  var tbc = this;
  tbc.items = ShoppingListCheckOffService.availableItems();
  tbc.buyItem = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  };

};

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var abc = this;
  abc.items = ShoppingListCheckOffService.alreadyBoughtItems();
};

function ShoppingListCheckOffService() {
  var service = this;

  var alreadyBoughtItems = [];
  var availableItems = [
    {name: "Cookies", quantity: 10},
    {name: "Milk Bottles", quantity: 2},
    {name: "Apples", quantity: 5},
    {name: "Banana", quantity: 6},
    {name: "Pears", quantity: 2}
  ];

  service.availableItems = function () {
    return availableItems;
  };

  service.alreadyBoughtItems = function() {
    return alreadyBoughtItems;
  };

  service.buyItem = function(index) {
    var item = availableItems[index];
    availableItems.splice(index, 1);
    console.log(item);
    alreadyBoughtItems.push(item);
  };
};

})();
