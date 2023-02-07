const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles', 
        position: 'Marketing', 
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, modi ullam. Dolorum eos nam rem recusandae qui pariatur exercitationem vero, aliquid suscipit voluptate! Nobis fugiat quibusdam cupiditate sequi earum sunt? Ratione aliquid corporis alias minus, odio rerum ad a ipsum sapiente voluptatibus non earum, porro harum? Debitis et nostrum quaerat natus? A esse ullam earum aliquam eos quo! Eaque, adipisci? Mollitia nesciunt ducimus reprehenderit omnis ipsa illum voluptas a labore animi nihil ullam error sint, aliquam ea deleniti? Voluptatibus perferendis in tempore distinctio eligendi eius eveniet! Iure earum dicta rerum." 
    }, 
    {
        name: 'June Cha', 
        position: 'Development', 
        photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80', 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, modi ullam. Dolorum eos nam rem recusandae qui pariatur exercitationem vero, aliquid suscipit voluptate! Nobis fugiat quibusdam cupiditate sequi earum sunt? Ratione aliquid corporis alias minus, odio rerum ad a ipsum sapiente voluptatibus non earum, porro harum? Debitis et nostrum quaerat natus?"  
    }, 
    {
        name: 'Johnny Simpson', 
        position: 'QA', 
        photo: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80', 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, modi ullam. Dolorum eos nam rem recusandae qui pariatur exercitationem vero, aliquid suscipit voluptate!" 
    }, 
    {
        name: 'Sasha Tyler', 
        position: 'Designer', 
        photo: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, modi ullam. Dolorum eos nam rem recusandae qui pariatur exercitationem vero, aliquid suscipit voluptate! Nobis fugiat quibusdam cupiditate sequi earum sunt? Ratione aliquid corporis alias minus, odio rerum ad a ipsum sapiente voluptatibus non earum, porro harum? Debitis et nostrum quaerat natus? A esse ullam earum aliquam eos quo! Eaque, adipisci? Mollitia nesciunt ducimus reprehenderit omnis ipsa illum voluptas a labore animi nihil ullam error sint, aliquam ea deleniti? Voluptatibus perferendis in tempore distinctio eligendi eius eveniet! Iure earum dicta rerum." 
    }, 
    {
        name: 'Erick Hunt', 
        position: 'Software Engineer', 
        photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, modi ullam. Dolorum eos nam rem recusandae qui pariatur exercitationem vero, aliquid suscipit voluptate! Nobis fugiat quibusdam cupiditate sequi earum sunt? Ratione aliquid corporis alias minus, odio rerum ad a ipsum sapiente voluptatibus non earum, porro harum? Debitis et nostrum quaerat natus?"
    }, 

]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text} = testimonials[idx]
    
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1){
        idx = 0
    
    }
}

setInterval(updateTestimonial, 10000)