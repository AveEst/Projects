const testimonials=[
    {
    name:"Mickie Q",
    photoUrl:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text:"Buy this now. I would be lost without apple. Apple was worth a fortune to my company. We can't understand how we've been living without apple."
},

{
    name:"Graeme W",
    photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text:"Apple is both attractive and highly adaptable. Apple was worth a fortune to my company. It's just amazing. Buy this now."

},
{
    name:"Rick E",
    photoUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text:"This is unbelievable. After using Testiminial Generator my buisness skyrocketed!"
}

];

const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const usernameEl=document.querySelector(".username");

let idx=0;

updateTestimonial()

function updateTestimonial(){
    const{name,photoUrl,text}= testimonials[idx];
    imgEl.src=photoUrl;
    textEl.innerText=text;
    usernameEl.innerText=name;
    idx++;
    if(idx===testimonials.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial();
    },10000);
}










