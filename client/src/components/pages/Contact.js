import React, {useState} from 'react';

// Here we import a helper function that will check if the email is valid
//import { checkPassword, validateEmail } from '../../utils/helpers';

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

    // Based on the input type, we set the state of either email, username, and password
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

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMsg('');
    setEmail('');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Drop me a line at <a href="mailto:zachobba@gmail.com">zachobba@gmail.com</a> or find me on <a href='https://www.linkedin.com/in/zachary-hobba-52aaa182/'>LinkedIn</a></p>
      <form className="form">
        
        <label>Name:
        <input
          value={userName}
          
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        /></label>

        <label>Email:
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        /></label>

        <label>Subject:
        <input
          value={subject}
          name="subject"
          onChange={handleInputChange}
          type="text"
          placeholder="Subject"
        /></label>

        <label>Message:
        <input
          value={msg}
          name="msg"
          onChange={handleInputChange}
          type="textarea"
          placeholder="message"
        /></label>

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
