
import Header from '../Component/Header/Header';
import './pages.css';

const NotFound = () => {
  return (
    <div className="page-container">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <p>
              You might want to return to the{" "}
              <Link to="/Home" className="btn">
                Home Page
              </Link>
              .
            </p>
    </div>
  );
};

export default NotFound;
