var workmate1={
    name:'JSPang',
    age:33,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        SkillTwo:'JavaScript',
        SkillThree:'PHP'
    },
    regeditTime:new Date()
}
var workmate2={
    name:'ShengLei',
    age:30,
    sex:1,
    job:'JAVA后端',
    skill:{
        skillOne:'HTML+CSS',
        SkillTwo:'J2EE',
        SkillThree:'PPT'
    },
    regeditTime:new Date()
}
var workmate3={
    name:'MinJie',
    age:20,
    sex:0,
    job:'UI设计',
    skill:{
        skillOne:'PhotoShop',
        SkillTwo:'UI',
        SkillThree:'Word+Excel+PPT'
    },
    regeditTime:new Date()
}
var db=connect('jsdong')
var workmateArray=[workmate1,workmate2,workmate3]
db.workmate.drop()
db.workmate.insert(workmateArray)
// db.workmate.update({"name":"MinJie"},{"$set":{"sex":1,"age":21}})
// db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":"vue+react"}})
// db.workmate.update({"name":"MinJie"},{"$unset":{"skill.skillThree":""}})
// db.workmate.update({"name":"MinJie"},{"$inc":{"age":+2}})
// db.workmate.update({},{"$set":{"interest":[]}})
// db.workmate.update({},{"$set":{"interest":[]}},{multi:true})
// db.workmate.update({"name":"xiaozhang"},{"$set":{"age": 25}},{upsert:true})
// db.workmate.update({"name":"MinJie"},{"$push":{"interest":"study"}})
// db.workmate.update({"name":"MinJie"},{"$set":{"skill.skilfour":"game"}})
// db.workmate.update({"name":"MinJie"},{"$push":{"skill.skilfour":"sport"}})
// db.workmate.update({"name":"MinJie","skill.skilfour":{"$ne":"game"}},{"$push":{"skill.skilfour":"game"}})
// db.workmate.update({"name":"MinJie"},{"$addToSet":{"interest":"game"}})
var newInterest = ["sing","dance","code"];
// db.workmate.update({"name":"MinJie"},{"$addToSet":{"interest":{"$each":newInterest}}})
db.workmate.update({"name":"MinJie"},{"$addToSet":{"interest":{"$each":newInterest}}})
// db.workmate.update({"name":"MinJie"},{"$pop":{"interest": 1}})
// db.workmate.update({"name":"MinJie"},{"$addToSet":{"interest":"code"}})
db.workmate.update({"name":"MinJie"},{"$set":{"interest.1":"run"}})
print('[SUCCESS]: The data was inserted successfully.');