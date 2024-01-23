import "./Home.scss";

const Home = () => {
  return (
    <>
      {/* Linked In HomePage Design */}

      {/* layout */}

      <div className="container my-4">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-lg-3">
            {/* First Coloumn */}
            <div className="profile-card">
              <div className="profile-area">
                <img
                  src="https://res.cloudinary.com/dwcmsxchv/image/upload/v1706022051/linkedin_images/bmodd6q64hnlvqe504vb.jpg"
                  alt=""
                />
                <div className="profile-photo">
                  <img
                    src="https://res.cloudinary.com/dwcmsxchv/image/upload/v1706022021/linkedin_images/esr4x0otqn4ustzbemwg.jpg"
                    alt=""
                  />
                </div>
                <div className="profile-info">
                  <h2>Md. Iftiar Hossain</h2>
                  <p>
                    Professional Web Developer @ bdCalling IT Ltd | Specializing
                    in JavaScript, React, Express, MongoDB, and WordPress |
                    Let's Build Your Vision Together!
                  </p>
                </div>
              </div>
              {/* Impression area */}
              <div className="impression-area">
                <div className="prf-view">
                  <ul>
                    <li>Profile Viewers</li>
                    <li>20</li>
                  </ul>
                </div>
                <div className="pst-imp">
                  <ul>
                    <li>Post Impression</li>
                    <li>100</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Timeline Posts */}
          <div className="col-lg-6"></div>
          {/* Righ Sidebar */}
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
