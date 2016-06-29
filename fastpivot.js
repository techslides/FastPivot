function fastpivot(arr){ 
	"use strict";
	var obj={};
	if(typeof arr!="string" && arr.length>0){

		//get columns
		var thekeys = Object.keys(arr[0]);

		var temp={};

		//loop through columns
		thekeys.forEach(function(f){ 
			temp[f]={}; 
			temp[f]["_labels"]=[];
			temp[f]["_labelsdata"]=[]; 
			temp[f]["_data"]={}; 
		});

		//loop all rows and for each column, store values
		arr.forEach(function(f,i){
		    thekeys.forEach(function(a){
		        var value=f[a];
		        temp[a]["_data"][value]=(temp[a]["_data"][value] || 0)+1;
		        temp[a]["_labels"][value]=null;
		    });
		});

		//now reloop the columns to store unique values
		thekeys.forEach(function(f){
			for(var i in temp[f]["_data"]){
				temp[f]["_labelsdata"].push(temp[f]["_data"][i]);
			}
			temp[f]["_labels"]=Object.keys(temp[f]["_labels"]);
		});

		obj._total=temp.length;
		obj=temp;
	}
	return obj;
}