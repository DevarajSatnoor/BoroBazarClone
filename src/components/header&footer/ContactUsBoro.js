import React, { useState } from "react";
import styles from "../../styles/contact.module.css";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [nameError, setNameError]=useState(false);
  // const [emailError, setEmailError]=useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0) {
      setError(true);
    }
  };

  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.bgcontent}>
          {" "}
          <h1>
            Do you need support? <br /> Our team is ready to help
          </h1>
          <p>
            We are passionate about building carefully thought <br />
            out products that will improve your design workflow.
          </p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.description}>
          <h3>Support is our main priority</h3>
          <p>
            We created reusable react components, and modern mono repo
            architecture, so you can build multiple apps with common components.
            You can use these landing for your react app. It’s super easy to
            deploy, we have provided complete firebase integration it.
          </p>
        </div>

        <form onSubmit={handleChange} className={styles.info}>
          <div className="">
            <label htmlFor="">Full Name (required)</label> <br />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Full Name"
            />
            {error && name.length <= 0 ? (
              <p className={styles.error}>Please enter a valid name</p>
            ) : (
              ""
            )}
          </div>

          <div style={{ marginTop: "10px" }} className="">
            <label htmlFor=" ">Email Address (required)</label> <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && email.length <= 0 ? (
              <p className={styles.error}>Please enter a valid email</p>
            ) : (
              ""
            )}
          </div>

          <div style={{ marginTop: "10px" }} className="">
            <label htmlFor="">Mobile Number (optional)</label> <br />
            <input type="tel" placeholder="Enter Your Mobile Number" />
          </div>
          <div style={{ marginTop: "20px" }} className="">
            <label htmlFor="">Message (optional)</label> <br />
            <textarea
              name=""
              placeholder="Breifly Describe..."
              id=""
              cols="51"
              rows="5"
            ></textarea>
          </div>
          <div className="">
            <button className={styles.formbtnbtn1} type="Submit"> Send Message</button>
          </div>
        </form>
      </div>

      <div className={styles.contact}>
        <div className={styles.card1}>
          <div className="">
            <i
              class="fa-solid fa-location-crosshairs fa-4x"
              style={{ color: "rgb(181, 176, 176)", font: "100" }}
            ></i>
          </div>
          <div className="">
            <h5>Office Location</h5>
            <p>2756 Quiet Valley Lane, Reseda, California, United Stats</p>
          </div>
        </div>

        <div className={styles.card1}>
          <div className="">
            <i
              class="fa-brands fa-whatsapp fa-4x"
              style={{ color: "rgb(181, 176, 176)", font: "100" }}
            ></i>
          </div>
          <div className="">
            <h5>Call us anytime</h5>
            <p>Change the design through a range +89 5631 564 +88 5321 036</p>
          </div>
        </div>

        <div className={styles.card1}>
          <div className="">
            <i
              class="fa-solid fa-at fa-4x"
              style={{ color: "rgb(181, 176, 176)", font: "100" }}
            ></i>
          </div>
          <div className="">
            <h5>Send Mail</h5>
            <p>support@demoagency.com hire.us@demoteam.io</p>
          </div>
        </div>
      </div>

      <div className={styles.googleMap}>
        <iframe
          src="https://g.co/kgs/ptzsNvn"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen="allowFullScreen"
          loading="lazy"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
