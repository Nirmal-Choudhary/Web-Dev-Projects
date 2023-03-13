// 1 second = 1000 ms



let hr=0;
let min=0;
let sec=0;
let count=0; //100 th part show of second
// this variable decide --is time running--or stopped
// false=timer stopped
let timer=false;

// jb koi START krega to TIMER ko TRUE krna hai
function start(){
    timer=true;
    stopwatch();
}
// jb koi STOP krega to TIMER ko TRUE krna hai
function stop(){
    timer=false;
    
    
}
function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById('hr').innerHTML="00";//here we give 00 not variable bcoz hr =0
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('count').innerHTML="00";
}

function stopwatch()
{   
    count=count+1; //after every 10 ms
    

    if(count==100){
        sec=sec+1;
        count=0;    //after 100 ms it reset to 0 but not added in second
    }
    if(sec==60){
        min=min+1;
        sec=0;
    }
    if(min==60)
    {
        hr=hr+1;
        min=0;
        sec=0;
    }

    //logic for 00 jb tk wo single digit rhega
    let hrstring=hr;
    let minstring=min;
    let secstring=sec;
    let countstring=count;

    //convert in string when it is a single digit=(digit < 10)
    if(hr<10)
    {
        hrstring="0"+hrstring;
    }
    if(min<10)
    {
        minstring="0"+minstring;
    }
    if(sec<10)
    {
        secstring="0"+secstring;
    }
    if(count<10)
    {
        countstring="0"+countstring;
    }


    document.getElementById('hr').innerHTML=hrstring;
    document.getElementById('min').innerHTML=minstring;
    document.getElementById('sec').innerHTML=secstring; //after this 100ms=1sec
    document.getElementById('count').innerHTML=countstring;
    //check if timer is true then start time
    if(timer==true){
        setTimeout("stopwatch()",10);     //wait for every 10 miliseconds
    }
}