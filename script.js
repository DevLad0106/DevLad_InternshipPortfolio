const textTitle = "Web Developer | Programmer | Learner | Tech Enthusiast";
const text1 = "I am a passionate web developer interested in";
const text2 = "building responsive and modern websites and";
const text3 = "building clean and responsive user interfaces.";

document.getElementById("typing-title").innerHTML = "";
document.getElementById("typing-text1").innerHTML = "";
document.getElementById("typing-text2").innerHTML = "";
document.getElementById("typing-text3").innerHTML = "";
let i = 0;
let j = 0;
let k = 0;
let l = 0;

function typeTitle(){
    if(i < textTitle.length){
        document.getElementById("typing-title").innerHTML += textTitle.charAt(i);
        i++;
        setTimeout(typeTitle,50);
    }else{
        typeText1();
    }
}

function typeText1(){
    if(j < text1.length){
        document.getElementById("typing-text1").innerHTML += text1.charAt(j);
        j++;
        setTimeout(typeText1,40);
    }else{
        typeText2();
    }
}

function typeText2(){
    if(k < text2.length){
        document.getElementById("typing-text2").innerHTML += text2.charAt(k);
        k++;
        setTimeout(typeText2,40);
    }else{
        typeText3();
    }
}

function typeText3(){
    if(l < text3.length){
        document.getElementById("typing-text3").innerHTML += text3.charAt(l);
        l++;
        setTimeout(typeText3,40);
    }
}

window.onload = typeTitle;