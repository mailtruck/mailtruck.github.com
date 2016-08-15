import React from 'react';

class ContactForm extends React.Component {
  handleSubmit(e){
    // e.preventDefault()
  }
  render(){
    return(
      <div>
        <h2><a name="contact">Get in touch</a></h2>
        <form onSubmit={this.handleSubmit()} action="https://formspree.io/briandanowski@gmail.com" method="POST">
          <div className="contact-fields">
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="_replyto" />
            <input type="tel" placeholder="Phone (optional)" name="Phone" />
          </div>

            <textarea  placeholder="Message" name="message" />
            <input type="submit" className="submit" value="Send" />


        </form>
      </div>

    )
  }
}

export default ContactForm;
