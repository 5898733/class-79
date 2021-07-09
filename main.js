name_array=[];
function submit(){
    var name_1=document.getElementById("Nameofthestudent_1").value;
    var name_2=document.getElementById("Nameofthestudent_2").value;
    var name_3=document.getElementById("Nameofthestudent_3").value;
    var name_4=document.getElementById("Nameofthestudent_4").value;
    
    name_array.push(name_1);
    name_array.push(name_2);
    name_array.push(name_3);
    name_array.push(name_4);

    document.getElementById("display_name").innerHTML=name_array;
}
