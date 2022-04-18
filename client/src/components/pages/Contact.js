import React, {useState} from 'react';

function validateEmail(email) {
  const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return checkEmail.test(String(email).toLowerCase());
}

function Contact() {
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMsg(inputValue);
      setSubject(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email needs to be valid');
      return;
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMsg('');
    setEmail('');
  };

  return (
    <div>
      <section>
      <h1>Contact Me</h1>
      <p>Shoot me an email at <a href="mailto:zachobbawebdev@gmail.com">zachobbawebdev@gmail.com</a> or find me on <a href='https://www.linkedin.com/in/zachary-hobba-52aaa182/'>LinkedIn</a></p>
      </section>
      <form className="form">
        
        <label>Name:</label><br></br>
        <input className='formField'
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required={true}
        />

        <label>Email:</label><br></br>
        <input className='formField'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          required={true}
        />

        <label>Subject:</label><br></br>
        <select className='formField'
        value={subject}
        required={true}
        name="subject"
        onChange={handleInputChange}
        >
        <option value="1">Make a General Enquiry</option>
        <option value="2">Make a Complaint</option>
        <option value="3">Talk About a Project or Idea</option>
        </select>

        <label>Message:</label><br></br>
        <textarea className='formField textArea'
          value={msg}
          name="msg"
          onChange={handleInputChange}
          placeholder="message"
          required={true}
        />

        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
