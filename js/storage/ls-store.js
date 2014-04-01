var LocalStorageStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var products = JSON.parse(window.localStorage.getItem("products"));
        var results = products.filter(function(element) {
            var fullName = element.name;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, results);
    }

    this.findById = function(id, callback) {
        var products = JSON.parse(window.localStorage.getItem("products"));
        var product = null;
        var l = products.length;
        for (var i=0; i < l; i++) {
            if (products[i].id === id) {
                product = products[i];
                break;
            }
        }
        callLater(callback, product);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    var products = [
            {"id": 1, "name": "Samsung Galaxy Tab 3 Lite (7-Inch, White)", "brand": "Samsung", "os": "Android 4.1 Jelly Bean", "features": "8 GB Flash Memory, 1 GB RAM Memory", "camera": "2MP rear-facing", "image": "Samsung-Galaxy-Tab-3.jpg", "call": "(888) 340-4647"},
			{"id": 2, "name": "Acer Iconia A3-A10-L879 10.1-Inch Tablet (White)", "brand": "Acer", "os": "Android 4.2 Jelly Bean", "features": "32 GB Flash Memory, 1 GB RAM Memory", "camera": "0.3MP Front Facing Camera, 5MP Rear Facing Camera", "image": "Acer-Iconia.jpg", "call": "(888) 340-4647"},
			{"id": 3, "name": "Kindle Fire 7\" Tablet", "brand": "Kindle", "os": "Fire OS 3.0", "features": "16 GB Flash Memory, 1 GB RAM Memory", "camera": "Front-facing HD camera", "image": "kindle-fire.jpg", "call": "(888) 340-4647"},
			{"id": 4, "name": "Samsung Galaxy Note Pro 12.2", "brand": "Samsung", "os": "Android 4.4 Kit Kat OS", "features": "32 GB Flash Memory, 3 GB RAM", "camera": "Rear (8MP) and front (2MP)", "image": "Samsung-Galaxy-NotePro.jpg", "call": "(888) 340-4647"},
          
        ];

    window.localStorage.setItem("products", JSON.stringify(products));

    callLater(successCallback);

}