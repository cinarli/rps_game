var choose=["r","p","s"]
var wins=0
var loses=0
var result=0
var general_result=0
document.onkeyup=function(e)
{
    var comp_choise=choose[Math.floor(Math.random()*choose.length)]
    var  user_chouse=e.key
    
    document.querySelector("#comp_choise").innerHTML="Computer's choose: "+comp_choise
    document.querySelector("#user_choise").innerHTML="Your's choose: "+user_chouse
 
    if(comp_choise=='s' && user_chouse=='p' ||comp_choise=='p'&&user_chouse=='r'||comp_choise=='r'&&user_chouse=='s')
    {
        loses++
        let html="<div class='alert alert-danger' role='alert'> You Lost</div>"
        document.querySelector("#result").innerHTML=html
    }
    else if(user_chouse=='s' && comp_choise=='p' ||user_chouse=='p'&&comp_choise=='r'||user_chouse=='r'&&comp_choise=='s')
    {
        wins++
        let html="<div class='alert alert-success' role='alert'> You Win</div>"
        document.querySelector("#result").innerHTML=html
    }
    else if(user_chouse==comp_choise)
    {
        let html="<div class='alert alert-secondary' role='alert'> Draw</div>"
        document.querySelector("#result").innerHTML=html
        
    }
    else
    {
        let html="<div class='alert alert-danger' role='alert'> Just you can choose r, p , s letters</div>"
        document.querySelector("#result").innerHTML=html
    }
    var result="Wins: "+wins+" - "+"Losses: "+loses
    document.querySelector("#general_result").innerHTML=result
}

