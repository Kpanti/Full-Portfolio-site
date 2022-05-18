var typed = new Typed(".typing",{
    strings:[ " a Gamer", " a Web Developer", " a Graphic Designer"," an Ethical Hacker"," a Server Administrator", " a Researcher"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username :" kabandakpantimichael@gmail.com",
        Password: "Kpanti@1724",
        To: 'kabandakpantimichael@gmail.com',
        From: document.getElementById("email").value,
        Subject:"This is the Subject",
        Body: "And this is the body",
    }) .then(
       message => alert(message) 
    );
}