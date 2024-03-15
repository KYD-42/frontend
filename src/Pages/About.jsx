import React from "react";
import SERVER from "../../data/server";
import TNT_icon_white from "../../src/assets/TNT_icon_white.svg";
const server = SERVER;

function About() {
  return (
    <section className="about">
      <div>
        <h1
          style={{ textAlign: "left", fontSize: "50px", marginBottom: "20px" }}
        >
          About Tails and Tables
        </h1>
        <p
          style={{
            textAlign: "left",
            inlineSize: "900px",
            fontSize: "20px",
            lineHeight: "1.5", // Adjust this value as needed for spacing between lines
            marginRight: "100px",
            marginBottom: "20px",
          }}
        >
          Introducing Tails & Tables: the app set to revolutionize your
          pet-friendly adventures! Say goodbye to stuffy establishments and
          hello to a world of tail-wagging possibilities! With Tails & Tables,
          discover pet-friendly restaurants, parks, cafes, and boutiques
          specialized in gourmet treats.{" "}
        </p>
        <p
          style={{
            textAlign: "left",
            inlineSize: "900px",
            fontSize: "20px",
            lineHeight: "1.5", // Adjust this value as needed for spacing between lines
            marginRight: "100px",
            marginBottom: "20px",
          }}
        >
          No more guessing games! But that's not all! It's more than a
          directory—it's a virtual playground where you can rate, review, and
          share tips with fellow pet parents. Create your personalized favorites
          page for easy access to your furry friend's top spots.
        </p>
        <p
          style={{
            textAlign: "left",
            inlineSize: "900px",
            fontSize: "20px",
            lineHeight: "1.5", // Adjust this value as needed for spacing between lines
            marginRight: "100px",
            marginBottom: "20px",
          }}
        >
          Whether you're a proud pet parent or a business owner, Tails & Tables
          has you covered. Simply create your profile, customize your page, and
          watch the pet-loving community flock to your door. Download Tails &
          Tables today and embark on paw-tastic adventures with your best furry
          friend!
        </p>

        <p
          style={{
            textAlign: "left",
            inlineSize: "900px",
            fontSize: "20px",
            lineHeight: "1.5", // Adjust this value as needed for spacing between lines
            marginRight: "100px",
            marginTop: "20px",
          }}
        >
          Developed & Designed by:
        </p>
        <section>
          <div>
            <p
              style={{
                textAlign: "left",
                inlineSize: "900px",
                fontSize: "20px",
                lineHeight: "1.5", // Adjust this value as needed for spacing between lines
                marginRight: "100px",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              Daniel Costa
            </p>
            <div className="social-card">
              <a href="https://github.com/dannielcosta">
                <button className="Btn github">
                  <span className="svgContainer">
                    <svg height="1.6em" viewBox="0 0 496 512" fill="white">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </span>
                  <span className="BG"></span>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/daniel-costa-144924153/">
              <button className="Btn linkdin">
                <span className="svgContainer">
                  <svg
                    fill="white"
                    className="svgIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.6em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                  </svg>
                </span>
                <span className="BG"></span>
              </button>
              </a>
            </div>
          </div>
          <div>
            <p
              style={{
                textAlign: "left",
                inlineSize: "900px",
                fontSize: "20px",
                lineHeight: "1.5", // Adjust this value as needed for spacing between lines
                marginRight: "100px",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              Filipe Vieira
            </p>
            <div class="social-card">
              <a href="https://github.com/KYD-42">
              <button class="Btn github">
                <span class="svgContainer">
                  <svg height="1.6em" viewBox="0 0 496 512" fill="white">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </span>
                <span class="BG"></span>
              </button>
              </a>
              <a href="https://www.linkedin.com/in/filipe-santiago-956a4218a/">
              <button class="Btn linkdin">
                <span class="svgContainer">
                  <svg
                    fill="white"
                    class="svgIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.6em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                  </svg>
                </span>
                <span class="BG"></span>
              </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div>
        <img
          style={{
            width: "300px",
            borderRadius: "30px",
            boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)",
          }}
          src={TNT_icon_white}
          alt="Tails and Tables"
        />
      </div>
    </section>
  );
}

export default About;