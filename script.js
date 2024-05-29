let userscore=0;
let comscore=0;
let para=document.querySelector("#ka1");
let para1=document.querySelector("#ka2");
let user=document.querySelector("#user");
let comr=document.querySelector("#computer");
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const clr=document.querySelector(".msg-container");

const gencompchoice=()=>{
    const comchoice=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return comchoice[idx];
}

const playGame=(userchoice)=>{
console.log("User Choice= ",userchoice);
const com=gencompchoice();
console.log("computer Choice= ",com);
if(userchoice==com)
    {
      msg.innerText="Draw. play again";  
      msg.style.backgroundColor="aqua";
      msg.style.color="black";
      para1.innerText= "choice:"+com;
      para.innerText="choice:"+ userchoice;
    }
     else if(userchoice=="rock"&&com=="paper"){
msg.innerText="You lost";
msg.style.backgroundColor="red";
comscore++;
comr.innerText=comscore;
para1.innerText= "choice:"+com;
      para.innerText="choice:"+ userchoice;
    }
     else if(userchoice=="rock"&&com=="scissors"){
        msg.innerText="You won";
        msg.style.backgroundColor="green";
        userscore++;
        user.innerText=userscore;
        para1.innerText= "choice:"+com;
      para.innerText="choice:"+ userchoice;
            }
            else if(userchoice=="paper" && com=="scissors")
                {
                    msg.innerText="You lost";
                    msg.style.backgroundColor="red";
                    comscore++;
                    comr.innerText=comscore;
                    para1.innerText= "choice:"+com;
      para.innerText="choice:"+ userchoice;
                }
                else if(userchoice=="paper"&& com=="rock")
                    {
                        msg.innerText="You Won";
                        msg.style.backgroundColor="green";
                        userscore++;
                        user.innerText=userscore;
                        para1.innerText= "choice:"+com;
      para.innerText="choice:"+ userchoice;
                    }
                    else if(userchoice=="scissors"&&com=="paper")
                        {
                            msg.innerText="you Won";
                            msg.style.backgroundColor="green";
                            userscore++;
                            user.innerText=userscore;
                            para1.innerText= "choice:"+com;
      para.innerText="choice:"+ userchoice;
                           
                        }
                        else if(userchoice=="scissors"&&com=="rock")
                            {
                                msg.innerText="You Lost";
                                msg.style.backgroundColor="red";
                                comscore++;
                                comr.innerText=comscore;
                                para1.innerText= "choice:"+com;
      para.innerText="choice:"+ userchoice;
                                
                            }


    
    
}



choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playGame(userchoice);
})
})