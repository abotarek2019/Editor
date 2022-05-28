let codes=document.getElementById('codes');
let run=document.getElementById('run');
let remove=document.getElementById('remove')
let result=document.getElementById('result');

run.onclick=()=>{
    result.innerHTML=codes.value;
    localStorage.setItem("Result",codes.value);//here we can save all data in storge its name is "result" //by set item
}
remove.onclick=()=>{

    if(codes.value==="" || codes.value===null)
    {
        result.innerHTML="<p>result</p>";
    }
    else{ result.innerHTML=null;}

// codes.value=null; //optional
}

//here we can call our storge 
/*
onload=()=>{
    codes.value=localStorage.getItem("result");
    result.innerHTML=codes.value;
}
*/

