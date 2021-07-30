//For the given JSON iterate over all for loops (for, for in, for of, forEach)
var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ]

//console.log('For')
for(let i=0;i<obj.length;i++)
    console.log(obj[i]);

//console.log('For in')
for(let info in obj)
    console.log(obj[info]);

//console.log('For each')
obj.forEach(persons=>console.log(persons));

//console.log('For of')
for(let persons of obj)
    console.log(persons);

//Create your own resume data in JSON format
let resume={
      personalDetails:{
        name: 'Siva chidambaram',
        DOB: '01/01/0001',
        email:'demo@example.com',
        phone: '9999999999'
    },
    qualification:{
        qualification:'MCA',
        cgpa:'6.9',
        institution:'College',
        yearofpassing:'2018'
    },
    skillSet:{
        languages:['Javascript'], ['PHP'], ['Java for Android'],
        web:['HTML'], ['CSS'], ['BOOTSTRAP'],
        database: ['MySQL'], ['SQLite'],
        os:['Windows'], ['Android,Linux'],
        tools:['Visual Studio Code'], ['Android Studio'], ['WordPress']
    },
    projects:{
        ug:'Online shopping web application',
        pgminiproject:'Responsive web design for computer applications department',
        pgminiproject2:'Responsive web design for computer applications department',
        pgmainproject:'Automatic wisher for events',
    }
};

//Examples
//To print personal details
console.log(resume.personalDetails);
//To print projects
console.log(resume.projects);
//To print pg main project
console.log(resume.projects.pgmainproject);
//To print complete resume
console.log(resume);
