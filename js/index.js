function openMenu() {
    document.getElementById("mineMenu").style.width= "10%"
}

function closeMenu() {
    document.getElementById("mineMenu").style.width= "0%"
}

function openNewMenu() {
    document.getElementById("theNewMenu").style.width= "200px"
}

function closeNewMenu() {
    document.getElementById("theNewMenu").style.width= "0px"
}


async function NewMenu(){
    var currentvalue = document.getElementById('newButtonMenu').value;
    if(currentvalue == "v"){
      document.getElementById("newButtonMenu").value="V";
      document.getElementById("newButtonMenu").style.fontSize="1em";
      document.getElementById("newButtonMenu").style.transform = "rotate(180deg)";
      document.getElementById("theNewMenuLine").style.width= "200px";
      document.getElementById("theNewMenuLine").style.height= "100px";
      document.getElementById("theNewMenu").style.display = "block";
      await new Promise(r => setTimeout(r, 100));
      document.getElementById("theNewMenu").style.opacity = "100%";
    }else{
      document.getElementById("newButtonMenu").value="v";
      document.getElementById("newButtonMenu").style.transform = "rotate(0deg)";
      document.getElementById("theNewMenu").style.opacity = "0%";
      await new Promise(r => setTimeout(r, 100));
      document.getElementById("theNewMenuLine").style.width= "125px";
      document.getElementById("theNewMenuLine").style.height= "50px";
      document.getElementById("newButtonMenu").style.fontSize="1.5em";
      document.getElementById("theNewMenu").style.display = "none";
    }
}
