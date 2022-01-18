import React from 'react';

//Change year automatically
function year() {
    let date = new Date();
    return date.getFullYear();
}

const Footer = () => {
  return (
    <footer>
        <h4>Zachary Hobba, {year()} </h4>
        {/*add GitHub, LinkedIn, Email icons*/}
            <a href="https://www.linkedin.com/in/zachary-hobba-52aaa182/"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:zachobbawebdev@gmail.com"><i className="fas fa-envelope-square"></i></a>
            <a href="https://github.com/HobbaZ?tab=repositories"><i className="fab fa-github"></i></a>

    </footer>
  );
};

export default Footer;