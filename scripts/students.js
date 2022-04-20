var studentObject = [
    {   
        name: "Camila Lordelo",
        color: "#95D6E8"
    },
    {   
        name: "Heloisa Feitosa",
        color: "#E4B7E2"
    },
    {   
        name: "Thiago Gregio",
        color: "#3A0032"
    }
]

var student = document.getElementById("students");

for (var i2 = 0; i2 <= studentObject.length; i2++) {
    student.innerHTML += 
    `<div class="d-flex align-items-center justify-content-center flex-wrap justify-content-center">
        <div class=""> 
            <div style="background-color: ${studentObject[i2].color};" class="circle d-flex align-items-center justify-content-center"> <i style="color: white;" class="bi bi-person-fill"></i> </div> 
        </div>
        <div class="ms-3">
            <h5 class="fw-light mr-0 ml-0 mt-2 text-center"> ${studentObject[i2].name} </h5>
        </div>
    </div>
`};



