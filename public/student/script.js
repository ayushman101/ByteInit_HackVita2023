
document.addEventListener('DOMContentLoaded',()=>{
    console.log("File 2");

    // console.log(JSON.parse(localStorage.getItem('myData')));
    var data= JSON.parse(localStorage.getItem('myData'));
    
    var Name=document.querySelector('.Name');
    Name.innerHTML=`Name: ${data.FirstName} ${data.LastName}`;
    console.log(Name);

    var Department=document.querySelector('.Department');
    Department.innerHTML+=`${data.department}`;

    var Roll=document.querySelector('.Roll');
    Roll.innerHTML+=` ${data.roll_number}`;

    var Total=document.querySelector('.Total');
    Total.innerHTML+=` ${data.total}`;


    var attended=document.querySelector('.attended');
    attended.innerHTML+=` ${data.present}`;

    var percent=document.querySelector('.percent');
    if(data.present>0)
        percent.innerHTML+=` ${(data.present/data.total)*100} % `;

    else
       percent.innerHTML+=` ${data.present} %`;

})