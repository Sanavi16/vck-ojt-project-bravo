import Header from '../Component/Header/Header';
import './pages.css';

const Home = () => {
  return (
    <div>
      <Header/>
     <div className='root'>
    <div className="page-container">
    

      

        {/* Header Section with Button */}
        <div className="header-image-container">
          <img
            src="/public/img/vck-img.jpg"
            alt="Welcome Banner"
            className="header-img"
          />
          <div className="header-overlay">
            <h2> Welcome to Vivekanand College!</h2>
            <p> Your journey to excellence starts here.</p>
            <a className='apply' href='/Admission' data-discover='true'>Apply Now!</a>
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
        <ul className='nav-list'>
          <li>Legacy of Excellence: Decades of commitment to quality education.</li>
          <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
          <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
          <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
          <li>Strong Placements: Excellent career opportunities with leading companies.</li>
        </ul>

        <h2>Our Values</h2>
        <hr />
        <ul className='nav-list2'>
          <li>Excellence in Education</li>
          <li>Integrity and Accountability</li>
          <li>Respect for Diversity</li>
          <li>Community Engagement</li>
        </ul>

        <h2>Campus Life & Facilities</h2>
        <hr />

        
        <p className="caption">
          A vibrant, green, and modern campus designed to inspire learning and collaboration.
        </p>
      </div> 
    </div>
    </div>
  
  );
};

export default Home;
