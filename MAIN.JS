picture_array=["bobin.png","ethan.jpg"];
name_array=["my father :Bobin Angom","me :Ethan Angom"];
var i=0;
function update_image(){
    document.getElementById("fam").src=picture_array[i];
    document.getElementById("name").innerHTML=name_array[i];
    i++;
    if(i<1){i=0};
}