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
import { FaRegCalendarAlt, FaRegCommentDots } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { BiRepost, BiWorld } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPostData,
  deleteLinkedPost,
  getLinkedinPost,
  updatePostData,
} from "../../redux/linkedin/action";

const Home = () => {
  const dispatch = useDispatch();

  const { linkedin } = useSelector((state) => state.linkedin);

  // Modal Handle State
  const [modal, setModal] = useState(false);

  const handleModalShow = () => {
    setModal(true);
  };

  const handleModalOff = () => {
    setModal(false);
  };

  // Handle Input Data
  const [input, setInput] = useState({
    profile: "",
    prfname: "",
    prftitle: "",
    post: "",
    photo: "",
  });

  // Edit Mode
  const [editMode, setEditMode] = useState(false);

  // Handle Input Value
  const handleInputValue = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Update Data
  const handlePostUpdate = (item) => {
    setEditMode(true);
    setInput(item);
    handleModalShow();
  };

  // Delete Data
  const handleDeletePost = (id) => {
    dispatch(deleteLinkedPost(id));
  };

  // Create Data
  const handlePostCrate = (e) => {
    e.preventDefault();

    if (editMode) {
      dispatch(updatePostData({ id: input.id, data: input }));
      setEditMode(false);
    } else {
      dispatch(createPostData(input));
    }

    setInput({
      profile: "",
      prfname: "",
      prftitle: "",
      post: "",
      photo: "",
    });
  };

  useEffect(() => {
    dispatch(getLinkedinPost());
  }, []);

  // Handle Create Post

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
                <button className="post-button" onClick={handleModalShow}>
                  Start a post
                </button>
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
            {linkedin && linkedin.length > 0
              ? linkedin.map((item, index) => {
                  return (
                    <div className="post-content-card" key={index}>
                      {/* Profile Block */}
                      <div className="post-profile">
                        <div className="display-content">
                          <div className="prf-head">
                            <div className="prf-image">
                              <img src={item.profile} alt="" />
                            </div>
                            <div className="prf-content">
                              <h2>{item.prfname}</h2>
                              <p>{item.prftitle}</p>
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
                              <li onClick={() => handlePostUpdate(item)}>
                                Edit
                              </li>
                              <li onClick={() => handleDeletePost(item.id)}>
                                Delete
                              </li>
                              <li>Save</li>
                              <li>Report</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Post Content */}
                      <div className="post-body">
                        <p>{item.post}</p>
                        <img src={item.photo} alt="" />
                      </div>
                      {/* Post Reaction */}
                      <div className="post-react">
                        <div className="like">
                          <AiOutlineLike />
                          <p>Like</p>
                        </div>
                        <div className="like">
                          <FaRegCommentDots />
                          <p>Comments</p>
                        </div>
                        <div className="like">
                          <BiRepost />
                          <p>Repost</p>
                        </div>
                        <div className="like">
                          <RiSendPlaneFill />
                          <p>Send</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "No Post Yet"}
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

      {/* Modal Create Post */}
      <Modal show={modal} centered onHide={handleModalOff}>
        <Modal.Body>
          <div className="posting-profile">
            <img
              src="https://res.cloudinary.com/dwcmsxchv/image/upload/v1706022021/linkedin_images/esr4x0otqn4ustzbemwg.jpg"
              alt=""
            />
            <div className="prof-cont">
              <h4>Iftiar Hossain</h4>
              <p>post to anyone</p>
            </div>
          </div>

          {/* Post Input Fields */}
          <div className="input-fileds-area">
            <form onSubmit={handlePostCrate}>
              <div className="mb-3">
                <input
                  className="form-control"
                  name="profile"
                  placeholder="Profile Photo"
                  value={input.profile}
                  onChange={handleInputValue}
                ></input>
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  name="prfname"
                  placeholder="Profile Name"
                  value={input.prfname}
                  onChange={handleInputValue}
                ></input>
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  name="prftitle"
                  placeholder="Designation"
                  value={input.prftitle}
                  onChange={handleInputValue}
                ></input>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="post"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="What do you want to talk about?"
                  value={input.post}
                  onChange={handleInputValue}
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Post a photo"
                  className="form-control"
                  name="photo"
                  value={input.photo}
                  onChange={handleInputValue}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-md btn-primary">Post</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
