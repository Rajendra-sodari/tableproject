var tbody=document.getElementById('tdata')

fetch("https://api.github.com/users/rajendra-sodari/repos")
.then(res=> res.json())
.then(data => {
data.map((val,index)=>{
    var tr=tbody.insertRow(index);
    var code=tr.insertCell(0);
    var name=tr.insertCell(1);
    var description=tr.insertCell(2);
    var url=tr.insertCell(3);
code.innerHTML=val.id;
name.innerHTML=val.name;
description.innerHTML=val.description;
url.innerHTML=`<a href=${val.html_url} target="_blank">REPO LINK</a>`; 
     
}
)
});

