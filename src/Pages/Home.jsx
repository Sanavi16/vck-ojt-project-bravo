import Header from '../Component/Header/Header';
import './home.css';

const Home = () => {
  return (
    <div className='main-container'>
     <Header/>
       <div className="content"><div className="scroll-box">
         
<div className="hero-section">
<img alt="Vivekanand College Campus" className="hero-banner-image" src="/img/vck-img.jpg"/>
<div className="hero-overlay-text">
<h1>Welcome to Vivekanand College!</h1>
<p>Your journey to excellence starts here.</p>
<a className="btn hero-btn" href="/Admissions" data-discover="true">Apply Now!</a>
 </div>
</div>
<p>**Vivekanand College<b></b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>

<p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
<h2>Why Choose Vivekanand College?</h2>
<ul>
<li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
<li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
<li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
<li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li><li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
</ul>
<h2>Campus Life &amp; Facilities</h2>
<div class="image-gallery">
<img alt="Students studying in library" src="/img/campus-life.jpg"/>
<img alt="Students on campus ground" src="/img/students-studying.jpeg"/>
</div>
<p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
<div className="call-to-action">
<p>Ready to explore our courses?</p>
<a className="btn" href="/Courses" data-discover="true">Explore Courses</a>
 </div>
</div>
</div> 
    </div>
  
  );
};

export default Home;
