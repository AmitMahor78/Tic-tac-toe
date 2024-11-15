
let button = document.querySelectorAll(".A");
let reset = document.querySelectorAll(".B");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");


let turnO = true // playerx , playerO;

const winpattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];
// 
button.forEach((button) =>{
 button.addEventListener("click" , ()=>{

    console.log("button was clicked");
    if(turnO){
      button.innerText = "O";
      turnO = false;


    }
    else{
      button.innerText = "X";
      turnO = true;

    }button.disabled = true;
  
  checkWinner();
 });

});
const disabledButton = () =>{
  for(let box of button){
    box.disabled = true;
  }
}
const enableButton = () =>{
  for(let box of button){
    box.enabled = true;
    box.innerText = " ";
    

  }
}

const showwinner = (winner) =>{
  msg.innerText = `Congratulation ,winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledButton();

}


const checkWinner = () => {
  for(let Pattern of winpattern ){
    
    let pos1val = button[Pattern[0]].innerText;
    let pos2val = button[Pattern[1]].innerText;
    let pos3val = button[Pattern[2]].innerText;

    if(pos1val != "" && pos2val!=""&& pos3val!="" ){

      if(pos1val===pos2val&&pos2val===pos3val){

        
        console.log("winner",pos1val);
        showwinner(pos1val);



      }
      

    }
  }

};
const resetGame = () =>{

  turnO = true;
  enableButton();
  msgcontainer.classList.add("hide");

}
  reset.addEventListener("click", resetGame);


  