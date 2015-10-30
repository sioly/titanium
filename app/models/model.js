exports.definition = {
	config : {
		columns : {
			"title" : "TEXT",
			"description" : "TEXT",
			"category" : "TEXT",
			"price" : "INTEGER"
		},
		adapter : {
			type : "sql",
			collection_name : "model"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
		});

		return Collection;
	}
}; 