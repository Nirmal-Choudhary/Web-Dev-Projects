// images= 4  NOT -1(0,1,2,3)NOT 4


// flag indicates - abhi konsa slide chal  rha hai
let flag=0;

function controller(x){
    flag=flag+x;
    slideshow(flag);
    // left arrow click 
    // flag=2+(-1) =1 means slide no 2 

    // right arrow click 
    // flag=2+(1) =3 means slide no 4
}

slideshow(flag); //call



function slideshow(num){
    let slides=document.getElementsByClassName('slide'); /* ALL SLIDE SELECTED index=[0,1,2,3] */

//SLIDE SHOW FUNCTION MAI CHECK KREGE KI JO NO. PASS KIYA GYA HAI WO 3 SE BADA HO TO = 0 PE RESET KR DE OR VALUE 0 SE KM HAI TO RESET = 3(ACCORDING TO SLIDE THAT S WHY WE USE VARIABLE NOT NUMBER = ARR.LENGTH)
    if(num==slides.length)
    {
        flag=0;
        num=0;
    }
    if(num<0)
    {
        flag=slides.length-1;
        num=slides.length-1;

    }
    for(let y of slides)
    {
        y.style.display="none";  //hide all slides bcoz sari slide ekatthi ho jati hai screen par
    }
    console.log(num);
    slides[num].style.display="block";//flag=0 then 1slide will show
    //last slide prr arrow click krne par sab kuch gayab ho jata hai
    //kyuki hamra logic tha 3 rd par jaye to click krne par +1 slide par jaye but hamare index mai 4 hai hi nhi to vo blank dikhta hai  LEFT RIGHT DONO ARROW
    
}
//LOGIC== jo right arrow hai click krne par cureent image ke num mai  +1 kra de or left arrow click par -1