import "./Home.css";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  const styles = {
    logo: {
      maxWidth: "25%",
      padding: "2% 3%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: "0",
    },
    head_container: {
      backgroundImage:
        "url('https://voosh.in/static/media/landing_bg.da8497cd24d321282c0d.webp')",
      backgroundSize: "100% 80%",
      backgroundRepeat: "no-repeat",
    },
    left_head_container: {
      flexBasis: "0",
      flexGrow: "1",
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
      position: "relative",
    },
    left_second_container: {
      width: "92%",
      float: "right",
      fontSize: "0.9rem",
      marginTop: "20%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    h1: { fontSize: "1.9rem", letterSpacing: "1px", fontWeight: "600" },
    P: {
      fontWeight: "600",
      fontSize: "0.9rem",
      letterSpacing: "0.1px",
    },
    button: {
      backgroundColor: "#2d66f5",
      border: "none",
      borderRadius: "4px",
      color: "white",
      padding: "3%",
      fontSize: "0.8rem",
      fontWeight: "600",
      cursor: "pointer",
    },
  };
  const {
    logo,
    head_container,
    left_head_container,
    left_second_container,
    h1,
    P,
    button,
  } = styles;
  return (
    <div>
      <div className="head_container" style={head_container}>
        <div className="head_main_container" style={{ display: "flex" }}>
          <div className="left_head_container" style={left_head_container}>
            <div className="logo_container" style={logo}>
              <img
                src="https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp"
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
            <div
              className="left_second_container"
              style={left_second_container}
            >
              <div className="heading_container">
                <h1 style={h1}>
                  Consolidate your restaurants' insights in one place. Unlock
                  growth.
                </h1>
              </div>
              <div className="para_container">
                <p style={P}>
                  Your one stop solution to view mission-critical data and
                  insights from all your locations in one place.
                </p>
              </div>
              <div className="button_container">
                <button style={button}>
                  <Link smooth to="/#book">
                    Book Demo
                  </Link>
                </button>
                <div
                  className="arrow_sign_container"
                  styles={{ maxWidth: "100%" }}
                >
                  <img
                    src="https://voosh.in/static/media/arrow.ff14f58c77374c33f8e8.webp"
                    alt="arrow_sign"
                    style={{ width: "25%", marginLeft: "10%", marginTop: "2%" }}
                  />
                </div>
              </div>
              <div
                className="Partner_container"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                }}
              >
                <div
                  className="Partner_img_container"
                  style={{
                    position: "relative",
                    bottom: "250px",
                    left: "570px",
                  }}
                >
                  <img
                    src="https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp"
                    alt="image_1"
                  />
                </div>
                <div
                  className="Partner_img_container"
                  style={{
                    position: "relative",
                    bottom: "200px",
                    left: "50px",
                  }}
                >
                  <img
                    src="https://voosh.in/static/media/page1_2.4bfc2d124bbd2e50da2d.webp"
                    alt="image_2"
                  />
                </div>
                <div
                  className="Partner_img_container"
                  style={{
                    position: "relative",
                    left: "100px",
                  }}
                >
                  <img
                    src="https://voosh.in/static/media/page1_3.1d108925b5e5156bb2d4.webp"
                    alt="image_3"
                  />
                </div>
                <div
                  className="Partner_img_container"
                  style={{
                    position: "relative",
                    bottom: "83vh",
                    left: "75vw",
                  }}
                >
                  <img
                    src="https://voosh.in/static/media/page1_4.a2a22e7f5e42a50552ae.webp"
                    alt="image_4"
                  />
                </div>
                <div
                  className="Partner_img_container"
                  style={{
                    position: "relative",
                    top: "8vh",
                    right: "10vw",
                  }}
                >
                  <img
                    src="https://voosh.in/static/media/page1_5.f505a37d3e86d1a571da.webp"
                    alt="image_5"
                  />
                </div>
                <div
                  className="Partner_img_container"
                  style={{
                    position: "relative",
                    bottom: "85vh",
                    left: "25vw",
                  }}
                >
                  <img
                    src="https://voosh.in/static/media/page1_6.2213ad7f35bd24758114.webp"
                    alt="image_6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="right_head_container"
            style={{ display: "flex", flexBasis: "0", flexGrow: "1" }}
          >
            <div className="svg_container" style={{ width: "10%" }}>
              <img
                src="https://voosh.in/static/media/three_lines.cb3005e94acb8877cb80.webp"
                alt="svg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="right_img_container" style={{ padding: "2%" }}>
              <img
                src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp"
                alt="advertisement"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
