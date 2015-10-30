var List = Alloy.Collections.model;
var ad = Alloy.createModel('model', {
});
List.add(ad);
ad.save();

function show(event) {
	var selectedAd = event.source;
	var args = {
		title : selectedAd.title,
		description : selectedAd.description,
		category : selectedAd.category,
		price : selectedAd.price
	};
	var view = Alloy.createController("details", args).getView();

    if (OS_IOS) {
        $.index.openWindow(view);
    }
    if (OS_ANDROID) {
        view.open();
    }
}

function add(){
    var addAd = Alloy.createController("add",{}).getView();
    if (OS_IOS) {
        $.index.openWindow(addAd);
    }
    if (OS_ANDROID) {
        addAd.open();
    }
}

$.index.open()