
// CONTACT FORM
// browser script from gmailjs
        (function(){
        emailjs.init( "wRIBvlc6NkkcrRmi1");
        })();
//  mainFunction      
    function sendMail(){
        var forms = {
        name: document.getElementById("inptName").value,
        email: document.getElementById("inptGmail").value,
        title: document.getElementById("inptSubject").value,
        address: document.getElementById("inptAdd").value,
        message: document.getElementById("textArea").value
        };
// access ID
        let srvID = 'service_0y0wlle'
        let tempID = 'template_husnajl'

    function check(){
        let nameError = document.querySelector(".nameError")
        let gmailError = document.querySelector(".gmailError")
        let addError = document.querySelector(".addError")
        let numberError= document.querySelector(".numberError")
        let textArea = document.getElementById("textArea") 
// access regex
        let pattern = /^[a-zA-Z0-9.+_-]+@gmail\.com$/;
        let x = pattern.test(forms.email)

        let patternA = /^[A-Za-z .-]{2,40}$/
        let y = patternA.test(forms.name)

        let patternB = /^[A-Za-z0-9 .,_@!?#$%&()-]{3,100}$/;
        let z = patternB.test(forms.title)

        let patternC = /^[A-Za-z0-9\s,.-]{5,150}$/;
        let j = patternC.test(forms.address)

// CHECK CONDITIONS
        if(x == true){
            console.log("gmail true")
            gmailError.textContent = ""
        } else{
            gmailError.textContent = "invalid user@gmail.com"
            console.log(gmailError.value)
        }

        if(y === true){
            console.log("name true")
            nameError.textContent = ""
        } else{
            nameError.textContent = "invalid"
        }

         if(z === true){
            console.log("subject true")
            numberError.textContent = ""
        } else{
            numberError.textContent = "invalid"
        }
        if(j === true){
            console.log("address true")
            addError.textContent = ""
        }
        else{
            addError.textContent = "invalid"
        }
// check input is empety or not 
        if(forms.name===""||forms.email==""||forms.title===""||forms.address==""||textArea.value==""){
                    alert("Fill Full Details")
                    addError.textContent = "enter your address"
                    numberError.textContent = "empty"
                    nameError.textContent = "enter your full name"
                    gmailError.textContent = "enter your gmail"
                }
// check input ofter fillup is true or not (match from regex)
                else{
                    if(x === true && z === true && y === true && j === true){
                     alert("Message Sent")   
                      emailjs.send(srvID,tempID,forms)                 
                        document.getElementById("inptName").value = "";
                        document.getElementById("inptGmail").value = "";
                        document.getElementById("inptSubject").value = "";
                        document.getElementById("inptAdd").value = "";
                        document.getElementById("textArea").value = "";
                    }
                    else{
                        alert("Something Went Wrong")
                    }
                }    

        }check()
    }  
    let cbutton = document.querySelector(".cButton")
    cbutton.addEventListener("click",()=>{
        sendMail();
    })

// barIcon toggling
function toggling(){
  let bar = document.querySelector(".barIcon")
let barOpt = document.querySelector(".toggle")
bar.addEventListener("click",()=>{
    console.log("cick")
    barOpt.classList.toggle("barOption")
})  
  
// after clicking hide
    let BarHomeB = document.querySelector(".H-home")
    let BarEduB = document.querySelector(".H-educations")
    let BarProB = document.querySelector(".H-projects")
    let BarContact = document.querySelector(".HBr-contact")
    let BarAboutMe = document.querySelector(".H-about-me")
    let BarHireMe = document.querySelector(".H-hire")
    BarHomeB.addEventListener("click",()=>{
      barOpt.classList.toggle("barOption")
    }) 
    BarEduB.addEventListener("click",()=>{
     barOpt.classList.toggle("barOption")
    }) 
    BarProB.addEventListener("click",()=>{
        barOpt.classList.toggle("barOption")
    })   
    BarContact.addEventListener("click",()=>{
        barOpt.classList.toggle("barOption")
    })   
    BarAboutMe.addEventListener("click",()=>{
     barOpt.classList.toggle("barOption")
    })   
    BarHireMe.addEventListener("click",()=>{
     barOpt.classList.toggle("barOption")
    })   
}toggling()


window.addEventListener("scroll",()=>{
    let current = "";
   let sections = document.querySelectorAll("section")
    sections.forEach(sect=>{  
        let sectionTop = sect.offsetTop;
        let sectionHeight = sect.clientHeight;
        console.log(scrollY)
        if(scrollY >= sectionTop-sectionHeight/3){
            current = sect.getAttribute("id")
            console.log(current)
        }
    let navSect = document.querySelectorAll(".opts")
    navSect.forEach(section=>{
        console.log(section)
        section.classList.remove("active")
        if(section.getAttribute("href")===`#${current}`){
            section.classList.add("active")
            // animations
            if(section.getAttribute("href")==="#"){
                let skillBox = document.querySelector(".skillBox")
                skillBox.classList.add("skillBx")
            }
            if(section.getAttribute("href")==="#sect3"){
            let edusect2 = document.querySelector(".eduSect2")
            edusect2.classList.add("eds") 
            }
            if(section.getAttribute("href")==="#sect6"){
                let aboutSect = document.querySelector(".aboutSect1")
                let eduBox = document.querySelector(".eduBox")
                aboutSect.classList.add("aboutSct")
                eduBox.classList.add("eduBx")
            }
            if(section.getAttribute("href")==="#sect4"){
                let projectBox = document.querySelector(".proContainer")
                projectBox.classList.add("proAnimBox")
            }
        }
        })
    })   
})

// for refresh and load page
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
location.hash = "top";
