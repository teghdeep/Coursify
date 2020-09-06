import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// import "./AboutUs.css";

const TeamPage = () => {
  return (
    <>
      <Header currUser={null} />
      <section className="banner-area relative" id="home">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">About Us</h1>
              <p className="text-white link-nav">
                <a href="/">Home </a>{" "}
                <span className="lnr lnr-arrow-right"></span>{" "}
                <a href="/aboutus">About Us</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div className="column">
            <div className="card">
              <img src="img1.jpg" alt="Jane" style={{ width: "100%" }} />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="img2.jpg" alt="Mike" style={{ width: "100%" }} />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="img3.jpg" alt="John" style={{ width: "100%" }} />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TeamPage;
