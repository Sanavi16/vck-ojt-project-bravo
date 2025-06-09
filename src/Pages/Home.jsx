import Header from '../Component/Header/Header';
import './pages.css';

const Home = () => {
  return (
    <div>
      <Header/>
    <div className="page-container about-background">
      <div className="scroll-box">

        {/* Header Section with Button */}
        <div className="header-image-container">
          <img
            src="/public/img/vck-img.jpg"
            alt="Welcome Banner"
            className="header-img"
          />
          <div className="header-overlay">
            <h1>Welcome to Vivekanand College!</h1>
            <a href="#apply" className="apply-button">Apply Now!</a>
          </div>
        </div>

        {/* About Section */}
        <h1 className="page-title">About Vivekanand College</h1>

        <p>
          <strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic
          excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of
          students, empowering them to achieve their full potential.
        </p>

        <p>
          At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our
          state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem
          where curiosity thrives and future leaders are shaped.
        </p>

        <h2>Why Choose Vivekanand College?</h2>
        <hr />
        <ul>
          <li>Legacy of Excellence: Decades of commitment to quality education.</li>
          <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
          <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
          <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
          <li>Strong Placements: Excellent career opportunities with leading companies.</li>
        </ul>

        <h2>Our Values</h2>
        <hr />
        <ul>
          <li>Excellence in Education</li>
          <li>Integrity and Accountability</li>
          <li>Respect for Diversity</li>
          <li>Community Engagement</li>
        </ul>

        <h2>Campus Life & Facilities</h2>
        <hr />

        <img
          src="http://www.vivekanandcollege.org/images/header_top.jpg"
          alt="Campus Life"
          className="campus-img"
          style={{ borderRadius: '16px' }}
        />
        <p className="caption">
          A vibrant, green, and modern campus designed to inspire learning and collaboration.
        </p>
      </div>
    </div>
    
</div>
  );
};

export default Home;
