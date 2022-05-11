var mongoose = require("mongoose");
var Roles = require("./models/roles");
var Status = require("./models/userstatus");
var subjectcat = require("./models/subjectcat");
var studycat = require("./models/studycat");
var sitecat = require("./models/sitecat");
var phasecat = require("./models/phasecat");
var visitcat = require("./models/visitcat");
var studyfield = require("./models/studyfield");
var sitefield = require("./models/sitefield");
var subjectfield = require("./models/subjectfield");
var phasefield = require("./models/phasefield");
let user = require("./models/user");

var roledata = [
    {role: "Admin"},
    {role: "User"}
];

var userstatusdata = [
    {status: "Active"},
    {status: "Inactive"}
];

let userdata = [
    {username: 'root', password: 'root', fullname: 'Tryals Admin', role: 'Admin', status: 'Active'}
]

var subjectcatdata = [
    {subjectcatname: 'General', subjectcatorder: 10}
];

var studycatdata = [
    {studycatname: 'General', studycatorder: 10}
];

var sitecatdata = [
    {sitecatname: 'General', sitecatorder: 10}
];

var visitcatdata = [
    {visitcatname: 'General', visitcatorder: 10}
];

var phasecatdata = [
    {phasecatname: 'General', phasecatorder: 10}
];

var studyfielddata = [
    {studycatname: 'General', fieldname: 'Study_short_name', fieldinputtype: "Text Box", fieldorder: 10},
    {studycatname: 'General', fieldname: 'Study_name', fieldinputtype: "Text Box", fieldorder: 20}
];

var sitefielddata = [
    {sitecatname: 'General', fieldname: 'Site_short_name', fieldinputtype: "Text Box", fieldorder: 10},
    {sitecatname: 'General', fieldname: 'Site_name', fieldinputtype: "Text Box", fieldorder: 20}
];

var subjectfielddata = [
    {subjectcatname: 'General', fieldname: 'Subject_Name',  fieldinputtype: "Text Box", fieldorder: 10},
    {subjectcatname: 'General', fieldname: 'Subject_DOB', fieldinputtype: "Date", fieldorder: 20},
    {subjectcatname: 'General', fieldname: 'Subject_Address', fieldinputtype: "Text Box", fieldorder: 30},
    {subjectcatname: 'General', fieldname: 'Subject_City', fieldinputtype: "Text Box", fieldorder: 40},
    {subjectcatname: 'General', fieldname: 'Subject_Prov', fieldinputtype: "Text Box", fieldorder: 50},
    {subjectcatname: 'General', fieldname: 'Subject_zip', fieldinputtype: "Text Box", fieldorder: 60},
    {subjectcatname: 'General', fieldname: 'Subject_Country', fieldinputtype: "Text Box", fieldorder: 70}
]

var phasefielddata = [
    {phasecatname: 'General', fieldname: 'Phase_number',  fieldinputtype: "Text Box", fieldorder: 10}
];


// function seedrole(){
//     Roles.deleteMany({}, function(err){
//         if(err) {
//             console.log(err);
//         }
//         console.log("Deleted all roles");
//                 //x represent each data in the data array
//                 Roles.insertMany(roledata, function(err,data){
//                     if (err){
//                         console.log(err);
//                     }else{
//                         console.log("Added a role");
//                     }
//                 });
//     });
// }

async function seedrole() {
    try {
        await Roles.deleteMany({});
        await Roles.insertMany(roledata);
        console.log("Added a role");
    }
    catch (e)
    {
        console.log(e);
    }
}



// function seedDBstatus(){
//     Status.deleteMany({}, function(err){
//         if(err) {
//             console.log(err);
//         }
//         console.log("Deleted all user status");
//                 Status.insertMany(userstatusdata, function(err,data){
//                     if(err){
//                         console.log(err);
//                     }else{
//                         console.log("Added a status");
//                     }
//                 });
//     });
// }

async function seedDBstatus(){
    try {
        await Status.deleteMany({});
        await Status.insertMany(userstatusdata);
        console.log("Added a status");
    }
    catch (e) {
        console.log(e)
    }
}


function seedcat(){
    subjectcat.deleteOne({subjectcatname: 'General'}, function(err){
        if(err) {
            
            console.log(err);
        }
        console.log("Deleted SUBJECT cat General");
                subjectcat.insertMany(subjectcatdata, function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Added SUBJECT cat General");
                    }
                });
    });
    studycat.deleteOne({studycatname: 'General'}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("Deleted STUDY cat General");
                studycat.insertMany(studycatdata, function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Added STUDY cat General");
                    }
                });
    });
    sitecat.deleteOne({sitecatname: 'General'}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("Deleted SITE cat General");
                sitecat.insertMany(sitecatdata, function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Added SITE cat General");
                    }
                });
    });
    visitcat.deleteOne({visitcatname: 'General'}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("Deleted VISIT cat General");
                visitcat.insertMany(visitcatdata, function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Added VISIT cat General");
                    }
                });
    });
    phasecat.deleteOne({phasecatname: 'General'}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("Deleted PHASE cat General");
                phasecat.insertMany(phasecatdata, function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Added PHASE cat General");
                    }
                });
    });
}


async function seedstudyfields(){
    try {
        const countDocs = await studyfield.countDocuments();
        if (countDocs === 0){

            await studyfield.insertMany(studyfielddata);
            console.log("Added the default STUDY fields");
        }
        else {
            console.log ("There are user created Study Fields. We can't delete them");
        }
    }
    catch (e) {
            console.log(e);
    }
      
}


async function seedsitefields(){
   try {
        const count = await sitefield.countDocuments();
        if (count === 0) {
                await sitefield.insertMany(sitefielddata);
                console.log("Added the default SITE fields data")
        }
        else {
            console.log ("There are user created Site Fields. We can't delete them");
        }
   }
   catch (e){
       console.log(e);
   }
}

async function seedsubjectfields(){
    try {
        const count = await subjectfield.countDocuments();
        if (count === 0){
            await subjectfield.insertMany(subjectfielddata);
            console.log("Added the default SUBJECT fields data")
        }
        else {
            console.log ("There are user created Subject Fields. We can't delete them");
        }
    }
    catch (e) {
        console.log(e);
    }
}

async function seedphasefields() {
    try {
        const count = await phasefield.countDocuments();
        if (count === 0){
            console.log("we have some phase fields");
            await phasefield.insertMany(phasefielddata);
            console.log("Added the default PHASE fields");
        }
        else {
            console.log ("There are user created PHASE Fields. We can't delete them");
        }
    }
    catch (e) {
        console.log(e);
    }
}

function seedUsers(){
    user.countDocuments(function(err,count){
        if (count === 0){
            userdata.forEach(function(x){
                let newUser = new user({username: x.username, role: x.role, fullname: x.fullname})
                user.register(newUser, x.password, function(err,user){
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("Created the root Admin user")
                    }
                });
            });
        } else {
            console.log (`There are ${count} users in the system`)
        }
    })
}

module.exports = {
    seedDBstatus,
    seedrole,
    seedcat,
    seedstudyfields,
    seedsitefields,
    seedsubjectfields,
    seedphasefields,
    seedUsers
}
