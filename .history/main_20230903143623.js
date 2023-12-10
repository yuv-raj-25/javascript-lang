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
        
    const passedStudents = students.map((student) => {
        return(
            {
                name:student.name.t
            }
        )
    })

    console.log(passedStudents);




