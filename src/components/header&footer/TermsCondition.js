import React ,{useEffect} from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import graphs from "../assets/terms-page-hero-bg.png";

function TermsCondition() {


  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);


  return (
    <div className="terms-condition-main">
      <div
        className="terms-condition-banner"
        style={{
          width: "100%",
          height: "250px",
        }}
      >
        <img
          src={graphs}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          className="content-on-image"
          style={{
            position: "absolute",
            top: "32%",
            left: "38%",
            transform: "translate(-50% -50%),",
            textAlign: "center",
            // backgroundColor:"rgba(255, 255, 255, 0.7)"
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{ fontSize: "45px", fontWeight: 600, marginBottom: "20px" }}
          >
            Terms & Conditions
          </p>
          <div
            className="banner-content"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <HomeOutlinedIcon sx={{ cursor: "pointer" }} />
            <p
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onMouseEnter={(e) => (e.target.style.color = "#818181")}
              onMouseLeave={(e) => (e.target.style.color = "#000")}
            >
              Home
            </p>
            <NavigateNextIcon sx={{ margin: "0px 10px 0px 10px" }} />
            <p style={{ marginLeft: "10px", cursor: "pointer" }}>Terms</p>
          </div>
        </div>
      </div>

      <div
        className="terms-conditn-below-banner-main"
        style={{ padding: "65px 120px 65px 120px", textAlign: "justify" }}
      >
        <div
          className="terms-conditn-below-banner-1"
          style={{ marginBottom: "50px", lineHeight: "1.75rem" }}
        >
          <h2 style={{ marginBottom: "25px" }}>
            Last updated: February 18, 2021
          </h2>
          <p style={{ marginTop: "20px", color: "#818181" }}>
            “BoroBazar” is a trademark of BoroBazar Private Limited (“Company”),
            a company incorporated under the Companies Act, 2013 with its
            registered and corporate office at Plot 64H, Sector 18, Gudgeon
            122001 in the course of its business. The domain name grocers.com is
            owned by the Company.
          </p>
          <p style={{ marginTop: "20px", color: "#818181" }}>
            If you are a California resident, the information below also applies
            to you. Certain terms used in this section have the meanings given
            to them in the California Consumer Privacy Act of 2018 (“CCPA”).
          </p>
          <p style={{ marginTop: "20px", color: "#818181" }}>
            {" "}
            Customer are advised to read and understand our Privacy Policy
            carefully, as by accessing the website/app you agree to be bound by
            the terms and conditions of the Privacy Policy and consent to the
            collection, storage and use of information relating to you as
            provided herein.
          </p>
          <p style={{ marginTop: "20px", color: "#818181" }}>
            If you do not agree with the terms and conditions of our Privacy
            Policy, including in relation to the manner of collection or use of
            your information, please do not use or access the website/app.
          </p>
          <p style={{ marginTop: "20px", color: "#818181" }}>
            Our Privacy Policy is incorporated into the Terms and Conditions of
            Use of the website/app, and is subject to change from time to time
            without notice. It is strongly recommended that you periodically
            review our Privacy Policy as posted on the App/Web.
          </p>
          <p style={{ marginTop: "20px", color: "#818181" }}>
            Should you have any clarifications regarding this Privacy Policy,
            please do not hesitate to contact us at{" "}
            <a style={{ color: "#29028b" }}>info@borobazar.com .</a>
          </p>
        </div>

        <div
          className=" terms-conditn-below-banner-2"
          style={{ marginBottom: "50px", lineHeight: "1.75rem" }}
        >
          <h2 style={{ marginBottom: "25px" }}>
            The collection, Storage and Use of Information Related to You
          </h2>
          <p style={{ marginTop: "20px", color: "#818181" }}>
            We may automatically track certain information about you based upon
            your behavior on the website. We use this information to do internal
            research on our users’ demographics, interests, and behavior to
            better understand, protect and serve our users. This information is
            compiled and analyzed on an aggregated basis. This information may
            include the URL that you just came from (whether this URL is on the
            website or not), which URL you next go to (whether this URL is on
            the website or not), your computer browser information, your IP
            address, and other information associated with your interaction with
            the website.{" "}
            <strong>
              We may also share your Mobile IP/Device IP with third party(ies)
              and to the best of our knowledge, be-life and representations
              given to us by these third party(ies) this information is not
              stored.
            </strong>
          </p>
          <ol
            type={'1'}
            style={{ marginTop: "30px", marginLeft: "30px", color: "#818181" }}
          >
            <li style={{ marginTop: "6px" }}>
              Identifiers (e.g. name, mailing address, email address, phone
              number, credit/debit card number)
            </li>
            <li style={{ marginTop: "6px" }}>
              Characteristics of protected classifications (e.g. gender, age)
            </li>
            <li style={{ marginTop: "6px" }}>
              Commercial information (e.g. products or services purchased,
              purchase history)
            </li>
            <li style={{ marginTop: "6px" }}>
              Internet or other electronic network activity (e.g. browse or
              search history)
            </li>
            <li style={{ marginTop: "6px" }}>
              Geo location data (e.g. latitude or longitude)
            </li>
            <li style={{ marginTop: "6px" }}>
              Audio, electronic, visual, or similar information (e.g. recording
              of Guest service calls)
            </li>
            <li style={{ marginTop: "6px" }}>
              Inferences drawn from any of the above (e.g. preferences or
              characteristics)
            </li>
          </ol>
        </div>
        <div
          className="terms-condition-below-banner-3"
          style={{ marginBottom: "50px", lineHeight: "1.75rem" }}
        >
          <h2 style={{ marginBottom: "25px" }}>
            Choices Available Regarding Collection, Use and Distribution of
            Information
          </h2>
          <p style={{ marginTop: "20px", color: "#818181" }}>
            To protect against the loss, misuse and alteration of the
            information under its control, the Company has in place appropriate
            physical, electronic and managerial procedures. For example, the
            Company servers are accessible only to authorized personnel and your
            information is shared with employees and authorized personnel on a
            need to know basis to complete the transaction and to provide the
            services requested by you. Although the Company endeavour to
            safeguard the confidentiality of your personally identifiable
            information, transmissions made by means of the Internet cannot be
            made absolutely secure. By using the website, you agree that the
            Company will have no liability for disclosure of your information
            due to errors in transmission and/or unauthorized acts of third
            parties.
          </p>
          <p style={{ marginTop: "20px", color: "#818181" }}>
            Please note that the Company will not ask you to share any sensitive
            data or information via email or telephone. If you receive any such
            request by email or telephone, please do not respond/divulge any
            sensitive data or information and forward the information relating
            to the same to{" "}
            <a style={{ color: "#29028b" }}>info@borobazar.com</a> for necessary
            action.
          </p>
          <ol
            style={{ marginTop: "30px", marginLeft: "30px", color: "#818181" }}
          >
            <li style={{ marginTop: "10px" }}>
              Performing services, including maintaining or servicing accounts,
              providing customer service, processing or fulfilling orders and
              transactions, verifying customer information, processing payments,
              providing advertising or marketing services, providing analytics
              services, or providing similar services;
            </li>
            <li style={{ marginTop: "10px" }}>
              Auditing related to a current interaction with you and concurrent
              transactions, including, but not limited to, counting ad
              impressions to unique visitors, verifying positioning and quality
              of ad impressions, and auditing compliance;
            </li>
            <li style={{ marginTop: "10px" }}>
              Short-term, transient use, including, but not limited to, the
              contextual customization of ads shown as part of the same
              interaction;
            </li>
            <li style={{ marginTop: "10px" }}>
              Detecting security incidents, protecting against malicious,
              deceptive, fraudulent, or illegal activity, and prosecuting those
              responsible for that activity;
            </li>
            <li style={{ marginTop: "20px" }}>
              Debugging to identify and repair errors that impair existing
              intended functionality;
            </li>
            <li style={{ marginTop: "20px" }}>
              Undertaking internal research for technological development and
              demonstration; and
            </li>
            <li style={{ marginTop: "20px" }}>
              Undertaking activities to verify or maintain the quality or safety
              of a service or device that is owned, manufactured, manufactured
              for, or controlled by us, and to improve, upgrade, or enhance the
              service or device that is owned, manufactured, manufactured for,
              or controlled by us.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TermsCondition;
