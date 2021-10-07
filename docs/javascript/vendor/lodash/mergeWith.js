#!/usr/bin/env node
let _ = require("lodash");

let aas = [
	{ k: 1, t: "a" },
	{ k: 4, t: "a" },
];

let bbs = [
	{ k: 4, t: "b" },
	{ k: 3, t: "b" },
];

// _.mergeWith(aas, bbs, function (objValue, srcValue) {
// 	console.log(objValue, "------");
// 	console.log(srcValue, "======");
// });
let cloneaa = _.clone(aas);
	_.map(bbs, function (bt) {
		// console.log(bt);
		let contain = _.find(aas, { k: bt.k });
		if (!contain) {
            cloneaa.push(bt);
		}
		console.log(bt, contain);
		// console.log(contain);
	});
    console.log(cloneaa);
// var merge = _.map(aas, function (item) {
	// console.log(item);

	// return _.merge(item, _.find(bbs, { k: item.k }));
// });

// console.log(merge);
