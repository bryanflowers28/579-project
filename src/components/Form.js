import './Form.css'


const Form = () => {

    return ( 
        <>
        <div class="subheading" id="contact">Contact Me</div>
          <form action="https://formspree.io/f/xzbovqlk" method="POST">
              <label>
                  Your First Name:
                  <input name="firstname" placeholder="First"></input>
                  <i class="fa-solid fa-f"></i>
              </label>
              <label>
                  Your Last Name:
                  <input name="lastname" placeholder="Last"></input>
                  <i class="fa-solid fa-l"></i>
              </label>
              <label>
                  Your Email:
                  <input type="email" name="email" placeholder="email@hotmail.com"></input>
                  <i class="fa-regular fa-envelope"></i>
              </label>
              <label>
                  Your Message:
                  <textarea name="message" placeholder="Hello!"></textarea>
                  <i class="fa-regular fa-paper-plane"></i>
              </label>
              
              <button type="submit">Send</button>
          </form>
          </>
    )

}

export default Form;