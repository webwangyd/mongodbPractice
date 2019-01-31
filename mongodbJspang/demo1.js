var userName = 'ydwnag';
var timeStart = Date.parse(new Date());
var jsonDate = {"name":userName,"loginTime":timeStart};
var db = connect("jsdong");
db.jsdong.insert(jsonDate);
print('[demo] jsdong is successful')