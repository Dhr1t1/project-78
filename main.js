var image =["family-vector-png-10.jpg","grandpa.jpg","grandna.jpg","grandma.jpg","dad.jpg","mom.jpg","me.jpg","sister.jpg"];
var names=["Family Book","Raghu Meda","Bujjamma Meda","Jhansi Ailuri","Harsha Meda","Vasanthi Ailuri","Dhriti Meda","Nethri Meda"]
var i= 0;
function update()
{
    i++;
    var number_of_members=7
    if(i>number_of_members)
    {
        i=0;
    }
    var updatedimage= image[i];
    var updatedname= names[i];
    document.getElementById("family_member_image").src=updatedimage;
    document.getElementById("family_member_name").innerHTML=updatedname;
}