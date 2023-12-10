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
            percent: 18,
        },
    ];

    for(let i = 0; i<students.length; i++){
        students[i] = {
            name:students[i].name.t,
            percent: students[i].percent,
            cgpa:students[i].percent / 10,
        }
    }

    console.log(students);



