import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from "./Firebase";

export default function Contact() {

    const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Mobile, setMobile] = useState('')
  const [Message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (Name === '' || Email === '' || Mobile === '' || Message === ''){
      return
    }
  const scholarCollRef = collection(db, 'TestContact')
  addDoc(scholarCollRef, {Name, Email, Mobile, Message})
  .then(response => {
    console.log(response)
    alert("Submitted Successfully ! We will Contact You Soon")
    window.location.href = "/";
  })
  .catch(error => {
    console.log(error.message)
  })
  }

  return (
    <div className='contact'>
      <form onSubmit={handleSubmit}>
        <h1 style={{textAlign: 'center'}}>Contact Form</h1>
            <div className="application">
              <div className="apply">
                <label>Enter Your Full Name *</label>
                <input id='Name' type='Text' value={Name} required onChange={e => setName (e.target.value)} />
              </div>
              <div className="apply">
                <label>Enter Your Email-id *</label>
                <input id='Email' type='email' value={Email} required onChange={e => setEmail (e.target.value)} />
              </div>
              <div className="apply">
                <label>Enter Your Phone No *</label>
                <input id='Mobile' type='number' value={Mobile} required onChange={e => setMobile (e.target.value)} />
              </div>
              <div className="apply">
                <label>Message *</label>
                <input id='Message' type='text' value={Message} required onChange={e => setMessage (e.target.value)} />
              </div>

              <button className='button' type='submit'>Continue</button>
            </div>
          </form>
    </div>
  )
}
