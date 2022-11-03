//document.getElementById("test-home");
var list_area = document.getElementById('all-tasks');
var grave = document.getElementById('graveyard');
let ttinput = document.getElementById('task-entry');


// creation via Enter key
ttinput.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
      numade();
      console.log('enter create');
      }
  
  }); 
  

// create test 
function numade(){

    //exit clause, prevents from passing nothing
    if(!ttinput.value){
        alert("Please add task");
        return
    }


    //test junk
    var corpse_brain = ttinput.value;
    //creates new div, appares empty on html
    const ghost = document.createElement('div');
    ghost.classList.add("task-item");

    //adds text input
    const nutext = document.createElement('input');
    nutext.type="text";
    nutext.value=corpse_brain;
    nutext.setAttribute("readOnly", "readOnly");
    ghost.appendChild(nutext);

    //adds delete button
    const nudeath = document.createElement('button');
    nudeath.innerHTML="Delete";
    ghost.appendChild(nudeath);
        nudeath.addEventListener("click", () =>{
        //console.log("working?");
        list_area.removeChild(ghost);

        //trasnfers task to graveyard
        const deaddummy = document.createElement('input');
        deaddummy.type="text";
        deaddummy.value =corpse_brain;
        deaddummy.setAttribute("readOnly", "readOnly");
        const finaldie = document.createElement('button')
            finaldie.innerHTML = "X"
            finaldie.addEventListener("click", () =>{
                grave.removeChild(deaddummy);
                grave.removeChild(finaldie);
                console.log('task memory removed');
            });
            
            grave.appendChild(deaddummy);
            grave.appendChild(finaldie);
        });

    //appends new creation onto our main htmls
    list_area.appendChild(ghost);

    //console.log(ttinput.value);
    ttinput.value = "";
    return

}
