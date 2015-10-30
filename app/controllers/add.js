var listAd = Alloy.Collections.model;

function addToCollection() {
    var ad = Alloy.createModel('model', {
        title : $.titleInput.value,
        description : $.descriptionInput.value,
        category : $.categoryInput.value,
        price : $.priceInput.value
    });
    listAd.add(ad);
    ad.save();
    $.add.close();
} 