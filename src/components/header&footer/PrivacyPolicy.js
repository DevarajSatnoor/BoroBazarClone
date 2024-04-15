import React, { useEffect,useState } from "react";
import styles from "../../styles/privacy.module.css";


function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState(null);



  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setActiveSection(id)
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);

  return (
    <div>
      <div className={styles.mainContainer}>
        <nav className={styles.sideNav}>
          <ol className={styles.fixed}>
            <li onClick={() => scrollToSection("personal")}
             className={activeSection === 'personal' ? styles.activeLink : ''}
            >
              Personal Information
            </li>
            <li onClick={() => scrollToSection("snap")}  className={activeSection === 'snap' ? styles.activeLink : ''}>Snap</li>
            <li onClick={() => scrollToSection("info")}   className={activeSection === 'info' ? styles.activeLink : ''}>Other Information</li>
            <li onClick={() => scrollToSection("link")}   className={activeSection === 'link' ? styles.activeLink : ''}>Links</li>
            <li onClick={() => scrollToSection("adt")}   className={activeSection === 'adt' ? styles.activeLink : ''}>
              Third Party Advertisers
            </li>
            <li onClick={() => scrollToSection("sec")}   className={activeSection === 'sec' ? styles.activeLink : ''}>Security</li>
          </ol>
        </nav>
        <div className={styles.mainContent}>
          <div id="personal" className="">
            <h2 style={{ marginTop: "25px" }}>Personal Information</h2>
            <p>
              “BoroBazar” is a trademark of BoroBazar Private Limited
              (“Company”), a company incorporated under the Companies Act, 2013
              with its registered and corporate office at Plot 64H, Sector 18,
              Gudgeon 122001 in the course of its business. The domain name
              grocers.com is owned by the Company.
            </p>
            <p>
              If you are a California resident, the information below also
              applies to you. Certain terms used in this section have the
              meanings given to them in the California Consumer Privacy Act of
              2018 (“CCPA”).
            </p>
          </div>
          <div id="snap" className="">
            <h2>Snap</h2>
            <p>
              Customer are advised to read and understand our Privacy Policy
              carefully, as by accessing the website/app you agree to be bound
              by the terms and conditions of the Privacy Policy and consent to
              the collection, storage and use of information relating to you as
              provided herein.
            </p>
            <p>
              If you do not agree with the terms and conditions of our Privacy
              Policy, including in relation to the manner of collection or use
              of your information, please do not use or access the website/app.
            </p>
            <p>
              Our Privacy Policy is incorporated into the Terms and Conditions
              of Use of the website/app, and is subject to change from time to
              time without notice. It is strongly recommended that you
              periodically review our Privacy Policy as posted on the App/Web.
            </p>
          </div>
          <div id="info" className="">
            <h2>Other Information</h2>
            <p>
              We may automatically track certain information about you based
              upon your behavior on the website. We use this information to do
              internal research on our users’ demographics, interests, and
              behavior to better understand, protect and serve our users. This
              information is compiled and analyzed on an aggregated basis. This
              information may include the URL that you just came from (whether
              this URL is on the website or not), which URL you next go to
              (whether this URL is on the website or not), your computer browser
              information, your IP address, and other information associated
              with your interaction with the website.{" "}
              <strong style={{ fontWeight: "600", color: "rgb(54, 54, 54)" }}>
                We may also share your Mobile IP/Device IP with third party(ies)
                and to the best of our knowledge, be-life and representations
                given to us by these third party(ies) this information is not
                stored.
              </strong>
            </p>
          </div>

          <div id="link" className="">
            <h2>Link</h2>
            <p>
              We use this information to do internal research on our users’
              demographics, interests, and behavior to better understand,
              protect and serve our users. This information is compiled and
              analyzed on an aggregated basis. This information may include the
              URL that you just came from (whether this URL is on the website or
              not), which URL you next go to (whether this URL is on the website
              or not), your computer browser information, your IP address
            </p>
            <div className={styles.list}>
              <ol>
                <li>
                  Identifiers (e.g. name, mailing address, email address, phone
                  number, credit/debit card number)
                </li>
                <li>
                  Characteristics of protected classifications (e.g. gender,
                  age)
                </li>
                <li>
                  Commercial information (e.g. products or services purchased,
                  purchase history)
                </li>
                <li>
                  Internet or other electronic network activity (e.g. browse or
                  search history)
                </li>
                <li>Geo location data (e.g. latitude or longitude)</li>
                <li>
                  Audio, electronic, visual, or similar information (e.g.
                  recording of Guest service calls)
                </li>
                <li>
                  Inferences drawn from any of the above (e.g. preferences or
                  characteristics)
                </li>
              </ol>
            </div>
          </div>

          <div id="adt" className="">
            <h2>Third Party Advertisers</h2>

            <p>
              To protect against the loss, misuse and alteration of the
              information under its control, the Company has in place
              appropriate physical, electronic and managerial procedures. For
              example, the Company servers are accessible only to authorized
              personnel and your information is shared with employees and
              authorized personnel on a need to know basis to complete the
              transaction and to provide the services requested by you. Although
              the Company endeavour to safeguard the confidentiality of your
              personally identifiable information, transmissions made by means
              of the Internet cannot be made absolutely secure. By using the
              website, you agree that the Company will have no liability for
              disclosure of your information due to errors in transmission
              and/or unauthorized acts of third parties.
            </p>
          </div>

          <div id="sec" className="">
            <h2>Security</h2>
            <p>
              Please note that the Company will not ask you to share any
              sensitive data or information via email or telephone. If you
              receive any such request by email or telephone, please do not
              respond/divulge any sensitive data or information and forward the
              information relating to the same to info@borobazar.com for
              necessary action.
            </p>

            <div className={styles.list}>
              <ol>
                <li>
                  Performing services, including maintaining or servicing
                  accounts, providing customer service, processing or fulfilling
                  orders and transactions, verifying customer information,
                  processing payments, providing advertising or marketing
                  services, providing analytics services, or providing similar
                  services;
                </li>
                <li>
                  Auditing related to a current interaction with you and
                  concurrent transactions, including, but not limited to,
                  counting ad impressions to unique visitors, verifying
                  positioning and quality of ad impressions, and auditing
                  compliance;
                </li>
                <li>
                  Short-term, transient use, including, but not limited to, the
                  contextual customization of ads shown as part of the same
                  interaction;
                </li>
                <li>
                  Detecting security incidents, protecting against malicious,
                  deceptive, fraudulent, or illegal activity, and prosecuting
                  those responsible for that activity;
                </li>
                <li>
                  Debugging to identify and repair errors that impair existing
                  intended functionality;
                </li>
                <li>
                  Undertaking internal research for technological development
                  and demonstration; and
                </li>
                <li>
                  Undertaking activities to verify or maintain the quality or
                  safety of a service or device that is owned, manufactured,
                  manufactured for, or controlled by us, and to improve,
                  upgrade, or enhance the service or device that is owned,
                  manufactured, manufactured for, or controlled by us.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
