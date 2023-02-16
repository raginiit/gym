import React from 'react';
import './join.css';
// import emailjs from '@ emailjs/browser';
const join=()=> {
    //  const form=useRef()

     const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return (
        <div className='join' id='join-us'>
            <hr/>
            <div className='left-j'></div>
            <div className='right-j'>

            </div>
            <div>
                <span className="stroke-text"> READY TO  </span>
                <span>LEVEL UP </span>
            </div>
            <div>
                <span> YOUR  BODY </span>
                <span className="stroke-text"> WITH US? </span>
                <div className='right-j'>
                {/* <form ref={form} className='email-container'> */}
                    <input type="email" name="username"placeholder='Enter your email id'/>
                   <button className='btn btn-j'>join now</button>
                {/* </form> */}
               </div>
            </div>


        </div>
    );
}

export default join;