
import { useRef } from 'react';
import './App.css'
import emailjs from '@emailjs/browser';

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rpymu2j',
       'template_b8sgd1t',
        form.current, {
        publicKey: 'esKVzo5wzVfapMj31',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    }
 
  return (
    <div >
    
      <h1 >email Js</h1>

      <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" /> <br />
      <label >Email</label>
      <input type="email" name="user_email" /> <br />
      <label>Message</label>
      <textarea name="message" /> <br />
      <input type="submit" value="Send" />
    </form>
      
    </div>
  )
}

export default App
