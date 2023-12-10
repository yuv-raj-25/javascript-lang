        const students = [
        {
            name: "Lokie",
            percent: 99,
        },
        {
            name: "Yuvraj",
            percent: 29,
        },
        {
            name: "Komal",
            percent: 56,
        },
        {
            name: "Anmol",
            percent: 9,
        },
        {
            name: "Ritik",
            percent: 98,
        },
    ];

    for(let i = 0; i<students.length; i++){
        students[i] = {
            name:students[i].name.toUpperCase(),
            percent: students[i].percent,
            cgpa:students[i].percent / 10,
        }
    }
    
    let passed = [];
    for(let i = 0; i<students.length; i++){
        if(students[i].cgpa > 4){
         passed.push(students[i])
        }
    }
    console.log(passed);



