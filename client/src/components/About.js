import React, { useState } from 'react';
import Navbar from "./Navbar";
import "./About.css";
import 'bootstrap/dist/css/bootstrap.css';
import { FaGithub,FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import bibhab from "./img/bibhab.jpeg"
import ritam from "./img/ritam.jpeg"
const AboutUsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: 'Q: What are your membership options?',
      answer: 'A: We offer flexible membership plans, including monthly and annual subscriptions. You can choose the plan that best fits your fitness needs.',
    },
    {
      question: 'Q: Are there any age restrictions for joining?',
      answer: 'A: Our fitness programs are suitable for individuals of all ages. Whether you\'re a teenager or a senior citizen, you\'re welcome to join us and improve your fitness.',
    },
    {
      question: 'Q: Do you provide personalized training?',
      answer: 'A: Yes, we have certified personal trainers who can create customized workout plans tailored to your specific goals and requirements.',
    },
    {
      question: 'Q: What safety measures do you have in place?',
      answer: 'A: Your safety is our top priority. We maintain a clean and sanitized environment, follow social distancing guidelines, and provide equipment with proper maintenance and hygiene protocols.',
    },
    {
      question: 'Q: Can I try a class before becoming a member?',
      answer: 'A: Absolutely! We offer trial classes so you can experience our fitness programs before making a commitment.',
    },
  ];

  return (
    <>
    <div className='About_bg'>
      <Navbar/>
      <div className="whole_about">
      <div className="about_card_details">
        <ul>
        <li>Welcome to our website! We are a passionate team dedicated to providing high-quality fitness services and promoting a healthy lifestyle.</li>
        <li>Our mission is to help individuals achieve their fitness goals and improve their overall well-being. We offer a wide range of fitness programs, including gym workouts, yoga classes, personal training, and more.</li>
        <li>With our experienced trainers and state-of-the-art facilities, we strive to create a supportive and motivating environment for our clients. Whether you're a beginner or an advanced fitness enthusiast, we have something for everyone.</li>
        <li>Join us today and embark on a journey towards a healthier and happier you. We are here to guide and support you every step of the way.</li>
        <li>Feel free to explore our website and learn more about the services we offer. If you have any questions or need assistance, don't hesitate to reach out to our friendly team.</li>
        <li>Thank you for choosing us as your fitness partner!</li>
        </ul>
      </div>

      

      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index}>
          <h3 onClick={() => handleQuestionClick(index)}>{faq.question}</h3>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
    <div className="bot_about">
      <h1>Contact Us - Crerator of this Site</h1>
        <div className="contact">
          <section className='ritam'> 
              <h1 className='name_con'>Ritam Majumder</h1>
              <img src={ritam} alt="" />
              <div className="link_con">
              <a href="https://github.com/Ritam0" className="github" target='_blank'><FaGithub/></a>
              <a href="https://www.linkedin.com/in/ritam-majumder-a0795122b/" className="linkdin" target='_blank'><FaLinkedin/></a>
              <a href="mailto:ritammajumder0@gmail.com" className="email" target='_blank'><BiLogoGmail/></a>
              </div>
          </section>
          <section className='bibhab'> 
              <h1 className='name_con'>Bibhab  Mukhopadhyay</h1>
              <img src={bibhab} alt="" />
              <div className="link_con">
                <a href="https://github.com/BIBHAB22" className="github" target='_blank'><FaGithub/></a>
                <a href="https://www.linkedin.com/in/bibhab-mukhopadhyay-898303241/" className="linkdin" target='_blank'><FaLinkedin/></a>
                <a href="mailto:bibhabindia@gmail.com" className="email" target='_blank'><BiLogoGmail/></a>
              </div>
              
          </section>
        </div>
    </div>
        
        

    </div>
    </>
  );
};

export default AboutUsPage;