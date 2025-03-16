const obj = [
    {
        name: 'Talha G',
            photo : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
                text : "In this project, you will learn how to build a testimonial slider using HTML, CSS and JavaScript. We use a timer to change the sliders automatically and also we have added a bountiful animation showing the slides."
    },
    {
        name: 'Chaudry Khan T.',
            photo :"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
                text : "In this project, our aim is to build a modern tip calculator. The project's primary interface comprises a container labeled with two input fields: one for the bill amount and the other for the tip percentage."
    },
    {
        name: 'Huzaifa Ali J.',
            photo :"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
                text : "In this project, we are going to create an age calculator. As you can see from the final version of the project, we have a container here with the title age calculator with an input of a date."
    }

];

const Photo = document.querySelector('img');
const Para = document.querySelector('.text');
const Sign = document.querySelector('.sign');


let idx = 0;

update();

function update() {
const{name, photo ,text} = obj[idx];
Photo.src = photo;
Para.innerText = text;
Sign.innerText = name;
idx++;

if (idx === obj.length) {
    idx=0;
} 
setTimeout(update ,1000);
}
