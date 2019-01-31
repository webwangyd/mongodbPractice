// var startTime = (new Date()).getTime();
// var db = connect("jsdong");
// for(let i = 0;i< 1000;i++){
//     db.test.insert({"num":i});
// }
// var runTime = (new Date()).getTime() - startTime;
// print("this run is:"+runTime+"ms")
let startTime = (new Date()).getTime();
let insertDate = [];
for(let i = 0;i<1000;i++){
    insertDate.push({"num":i})
}
let db = connect("jsdong");
db.test.insert(insertDate);
var runTime = (new Date()).getTime() - startTime;
print("this run is:"+runTime+"ms")