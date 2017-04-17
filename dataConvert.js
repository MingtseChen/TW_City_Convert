var fs = require('fs');
var jsonfile = require('jsonfile');
var file = 'newData.json';

var obj = JSON.parse(fs.readFileSync('AllData.json', 'utf8'));
// var jTable = {
// 	data: []
// }
var json = [];

for (var i = 0; i < obj.length; ++i) {
	json.push({
		"CityName": obj[i].CityName,
		"AreaList": []
	});
	for (var j = 0; j < obj[i].AreaList.length; j++)
		json[i].AreaList.push({
			"AreaName": obj[i].AreaList[j].AreaName
		});
}

jsonfile.writeFile(file, json, function(err) {
	console.error(err);
});

// var nObj = JSON.parse(fs.readFileSync('newData.json', 'utf8'));

// for (var i = 0; i < nObj.length; ++i)
// 	console.log(nObj[i])
// 	//for (var j = 0; j < obj[i].AreaList.length; j++)
