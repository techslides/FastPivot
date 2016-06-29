# FastPivot
FastPivot.js is a simple, small, and fast JavaScript library to shift or pivot data, often needed for drawing JavaScript charts and graphs. It has no dependencies, can be used with really large JSON data.

##Usage
Pass an array to fastpivot which will return columns as objects with:
*_data* - contains frequency of any value in a column, used for lookup
*_labels* - contains unique values in an array, used to show labels in a chart
*_labelsdata* - frequency of values in an array, used to show data for each label in a graph

##Example
Consider some tabular data
<table style="width:100%"><tbody><tr><th>id</th><th>make</th><th>color</th><th>age</th></tr><tr><td>1</td><td>Audi</td><td></td><td>2015</td></tr><tr><td>2</td><td>Toyota</td><td>green</td><td>2010</td></tr><tr><td>3</td><td>Honda</td><td></td><td>2013</td></tr><tr><td>4</td><td>Audi</td><td>red</td><td>2011</td></tr><tr><td>5</td><td>BMW</td><td>blue</td><td>2012</td></tr><tr><td>6</td><td>Audi</td><td>red</td><td>2012</td></tr><tr><td>7</td><td>Honda</td><td></td><td>2013</td></tr><tr><td>8</td><td>BMW</td><td>blue</td><td>2011</td></tr><tr><td>9</td><td>Audi</td><td>red</td><td>2010</td></tr><tr><td>10</td><td>Toyota</td><td>red</td><td>2012</td></tr></tbody></table>

That you have in JSON:

`var mydata='[{"id":"1","make":"Audi","color":"","age":2015},{"id":"2","make":"Toyota","color":"green","age":2010},{"id":"3","make":"Honda","color":null,"age":2013},{"id":"4","make":"Audi","color":"red","age":2011},{"id":"5","make":"BMW","color":"blue","age":2012},{"id":"6","make":"Audi","color":"red","age":2012},{"id":"7","make":"Honda","color":null,"age":2013},{"id":"8","make":"BMW","color":"blue","age":2011},{"id":"9","make":"Audi","color":"red","age":2010},{"id":"10","make":"Toyota","color":"red","age":2012}]';`

Pass it to FastPivot:
`var json = JSON.parse(mydata);var data = fastpivot(json);`
~~~~
var json = JSON.parse(mydata);
var data = fastpivot(json);

data["color"]._labels //returns ["", "green", "null", "red", "blue"]
data["color"]._labelsdata //returns [1, 1, 2, 4, 2]
data["color"]._data["red"] //returns 4
~~~~

[JSFiddle](https://jsfiddle.net/3h3kuoz2/ "Drawing a pie chart with fastpivot and ChartJS")



