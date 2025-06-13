import React from 'react';
import Header from '../Component/Header/Header';
import './About.css';
import Footer from '../Component/Footer/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="scroll-box">

          {/* About Section */}
          <h1 className="page-title">Our Academic Programs</h1>

          <p>
            Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
          </p>

          <h2>Our Academic Programs</h2>
          <p>
            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our
            state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem
            where curiosity thrives and future leaders are shaped.
          </p>

          <h2>Discover Campus Life</h2>
          <video width="100%" height="auto" controls>
            <source src="/video/college-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <hr />

          <h2 className='text1'>Undergraduate Programs (UG)</h2>
          <hr />
          <ul className='text2'>
            <li>Bachelor of Science (B.Sc.)</li>
            <ul>
              <li>Computer Science (3 years)</li>
              <li>Information Technology (3 years)</li>
              <li>Biotechnology (3 years)</li>
            </ul>
            <li>Bachelor of Commerce (B.Com)</li>
            <ul>
              <li>Accounting & Finance (3 years)</li>
              <li>Banking & Insurance (3 years)</li>
            </ul>
            <li>Bachelor of Arts (B.A.)</li>
            <ul>
              <li>English Literature (3 years)</li>
              <li>Psychology (3 years)</li>
            </ul>
          </ul>

          <h2 className='text1'>Postgraduate Programs (PG)</h2>
          <hr />
          <ul className='text2'>
            <li>Master of Science (M.Sc.)</li>
            <ul>
              <li>Computer Science (2 years)</li>
              <li>Information Technology (2 years)</li>
            </ul>
            <li>Master of Commerce (M.Com) (2 years)</li>
            <li>Master of Arts (M.A.) (2 years)</li>
          </ul>

          <h2>Program Details & Fee Structure (Annual)</h2>
          <hr />

          <h2>Specialized & Vocational Courses</h2>
          <hr />
          <p>
            In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
          </p>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
