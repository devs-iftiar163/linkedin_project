import { Link } from "react-router-dom";
import "./Home.scss";
import {
  BsFillBoxFill,
  BsFillInfoSquareFill,
  BsThreeDots,
} from "react-icons/bs";
import { TbBadgeFilled } from "react-icons/tb";
import { FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { GoDotFill, GoFileMedia, GoTriangleDown } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";

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
            {/* Timeline Post Input */}
            <div className="timeline-post">
              <div className="prof-input">
                <img
                  src="https://res.cloudinary.com/dwcmsxchv/image/upload/v1706022021/linkedin_images/esr4x0otqn4ustzbemwg.jpg"
                  alt=""
                />
                <button className="post-button">Start a post</button>
              </div>
              <div className="event-icon-box my-2">
                <Link className="event-one">
                  <GoFileMedia />
                  <h4>Media</h4>
                </Link>
                <Link className="event-two">
                  <FaRegCalendarAlt />
                  <h4>Event</h4>
                </Link>
                <Link className="event-three">
                  <GrArticle />
                  <h4>Write Article</h4>
                </Link>
              </div>
            </div>
            {/* Sort By */}
            <div className="sort-by">
              <div className="border-line"></div>
              <div className="sort-item">
                <ul>
                  <li>
                    <p>Sort by:</p>
                  </li>
                  <li>
                    Top
                    <GoTriangleDown />
                  </li>
                </ul>
              </div>
            </div>
            {/* Post Content Card */}
            <div className="post-content-card">
              {/* Profile Block */}
              <div className="post-profile">
                <div className="display-content">
                  <div className="prf-head">
                    <div className="prf-image">
                      <img
                        src="https://media.licdn.com/dms/image/D5603AQEY9mpy15NrFA/profile-displayphoto-shrink_200_200/0/1703973138152?e=1711584000&v=beta&t=-a3DWnk9n7shHroMLrFb2HssBPqXPeYYBeiSfuo3-S0"
                        alt=""
                      />
                    </div>
                    <div className="prf-content">
                      <h2>Linda Le</h2>
                      <p>
                        Mental Health Advocate✨| Recruiter @ LM ✈️ | Founder
                      </p>
                    </div>
                  </div>
                  <div className="time-stamp">
                    <ul>
                      <li>1h</li>
                      <li>
                        <GoDotFill />
                      </li>
                      <li>Edited</li>
                      <li>
                        <GoDotFill />
                      </li>
                      <li>
                        <BiWorld />
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Edit Content Option */}
                <div className="post-feature">
                  <div className="feature-icon">
                    <Link>
                      <BsThreeDots />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <ul>
                      <li>Edit</li>
                      <li>Delete</li>
                      <li>Dave</li>
                      <li>Report</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Post Content */}
              <div className="post-body">
                <p>Paragraph</p>
                <img
                  src="https://media.licdn.com/dms/image/D5622AQH073l2XI8PJg/feedshare-shrink_800/0/1706200739622?e=1709164800&v=beta&t=__QS2ZtpmcQbvEVk6DaVAEkDH-ePHxxhwAYYysjqCWk"
                  alt=""
                />
              </div>
            </div>
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
              <div className="footer-label">
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
                  alt=""
                />
                <p>LinkedIn Corporation © 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
