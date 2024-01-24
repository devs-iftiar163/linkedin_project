import { Link } from "react-router-dom";
import "./Home.scss";
import { BsFillBoxFill, BsFillInfoSquareFill } from "react-icons/bs";
import { TbBadgeFilled } from "react-icons/tb";
import { FaArrowRightLong, FaPlus } from "react-icons/fa6";

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
              <div className="premium-ad">
                <p>Strengthen your profile with an AI writing assistant</p>
                <div className="box-ad">
                  <BsFillBoxFill />
                  <h4>Try Premium for BDT0</h4>
                </div>
              </div>
              <div className="badge-area">
                <Link>
                  <div className="box-item">
                    <TbBadgeFilled />
                    <h4>My items</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Timeline Posts */}
          <div className="col-lg-6">
            <h2>Timeline Post</h2>
          </div>
          {/* Righ Sidebar */}
          <div className="col-lg-3">
            <div className="right-bar">
              <div className="follow-card">
                <div className="add-to-feed">
                  <h2>Add to your feed</h2>
                  <Link>
                    <BsFillInfoSquareFill />
                  </Link>
                </div>
                <div className="do-follow">
                  <div className="follow-item">
                    <div className="follow-image">
                      <Link>
                        <img
                          src="https://media.licdn.com/dms/image/D4E03AQEfwO2tv6ef4A/profile-displayphoto-shrink_100_100/0/1686093441109?e=1711584000&v=beta&t=1_j7WItpNw-6MD48_v_atU6pga9ZPe-Csq9rcwelysE"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="follow-content">
                      <Link>
                        <h2>Stacey Deakins</h2>
                        <p>In-House Recruiter • Talent Acquisition</p>
                      </Link>

                      <button className="follow-button">
                        <FaPlus />
                        <p className="follow-me">Follow</p>
                      </button>
                    </div>
                  </div>
                  <div className="follow-item">
                    <div className="follow-image">
                      <Link>
                        <img
                          src="https://media.licdn.com/dms/image/D4E03AQEfwO2tv6ef4A/profile-displayphoto-shrink_100_100/0/1686093441109?e=1711584000&v=beta&t=1_j7WItpNw-6MD48_v_atU6pga9ZPe-Csq9rcwelysE"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="follow-content">
                      <Link>
                        <h2>Stacey Deakins</h2>
                        <p>In-House Recruiter • Talent Acquisition</p>
                      </Link>

                      <button className="follow-button">
                        <FaPlus />
                        <p className="follow-me">Follow</p>
                      </button>
                    </div>
                  </div>
                  <div className="follow-item">
                    <div className="follow-image">
                      <Link>
                        <img
                          src="https://media.licdn.com/dms/image/D4E03AQEfwO2tv6ef4A/profile-displayphoto-shrink_100_100/0/1686093441109?e=1711584000&v=beta&t=1_j7WItpNw-6MD48_v_atU6pga9ZPe-Csq9rcwelysE"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="follow-content">
                      <Link>
                        <h2>Stacey Deakins</h2>
                        <p>In-House Recruiter • Talent Acquisition</p>
                      </Link>

                      <button className="follow-button">
                        <FaPlus />
                        <p className="follow-me">Follow</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="recomendation">
                  <Link>
                    <h2>View all recommendations</h2>
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
              <div className="who-is-hiring">
                <Link>
                  <img
                    src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="linked-extra-features">
                <ul>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Accessibility</Link>
                  </li>
                  <li>
                    <Link>Help Center</Link>
                  </li>
                  <li>
                    <Link>Privacy & Terms</Link>
                  </li>
                  <li>
                    <Link>Ad Choices</Link>
                  </li>
                  <li>
                    <Link>Advertising</Link>
                  </li>
                  <li>
                    <Link>Business Services</Link>
                  </li>
                  <li>
                    <Link>Get the LinkedIn app</Link>
                  </li>
                  <li>
                    <Link>More</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
