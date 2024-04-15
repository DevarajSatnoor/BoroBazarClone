import React , { useState,useEffect} from "react";
import graphs from "../assets/page-hero-bg-faq.png";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Accordion from "@mui/material/Accordion";
 
// import AccordionActions from "@mui/material/AccordionActions";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
 
// import Button from "@mui/material/Button";
 
function Faq() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);


    const [expanded, setExpanded] = useState(true);
 
    const handleChange = () => {
      setExpanded(!expanded);
    };
 
  return (
    <div className="freqnt-ask-qtn-MAIN">
      <div
        className="freqnt-ask-qtn-banner"
        style={{
          position: "relative",
          display: "inline-block",
          width: "100%",
          overflow: "hidden",
          height: "350px",
        }}
      >
        <img src={graphs} style={{objectFit:'cover'}} />
        <div
          className="content-on-image"
          style={{
            position: "absolute",
            top: "40%",
            left: "38%",
            transform: "translate(-50% -50%),",
            textAlign: "center",
 
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{fontSize:"30px"}}><b>Frequently Ask Question</b></span>
          <div  style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <HomeOutlinedIcon sx={{ cursor: "pointer" }}/>
            <p
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onMouseEnter={(e) => (e.target.style.color = "#818181")}
              onMouseLeave={(e) => (e.target.style.color = "#000")}
            >
              Home
            </p>
            <NavigateNextIcon sx={{ margin: "0px 10px 0px 10px" }} />
            <p style={{ marginLeft: "10px" , cursor:'pointer', fontWeight:600}}> Faq </p>
          </div>
        </div>
      </div>
 
      <div
        className="frqnt-ask-below-banner-MAIN"
        style={{ padding: "0px 40px" }}
      >
        <div
          style={{
            padding: "90px 0px 90px 0px",
            margin: "0px 218px 0px 218px",
          }}
        >
          <Accordion style={{ padding: "12px 0px", marginBottom: "20px" }}>
            <AccordionSummary
              style={{ fontWeight: 600, fontSize: "16px" }}
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How to Contact Customer Service?
            </AccordionSummary>
            <AccordionDetails style={{ textAlign: "left" }}>
              Our Customer Experience Team is available 7 days a week and we
              offer 2 ways to get in contact.Email and Chat . We try to reply
              quickly, so you need not to wait too long for a response!.
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ padding: "12px 0px", marginBottom: "20px" }}>
            <AccordionSummary
              style={{ fontWeight: 600, fontSize: "16px" }}
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              App Installement failed, How to Update System information?
            </AccordionSummary>
            <AccordionDetails style={{ textAlign: "left" }}>
              Please read the documentation carefully . We also have some online
              video tutorials regarding this issue . If the problem remains,
              Please Open a ticket in the support forum
            </AccordionDetails>
          </Accordion>
 
          <Accordion style={{ padding: "12px 0px", marginBottom: "20px" }}>
            <AccordionSummary
              style={{ fontWeight: 600, fontSize: "16px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Website response taking time , how to improve?
            </AccordionSummary>
            <AccordionDetails style={{ textAlign: "left" }}>
              At first, Please check your internet connection . We also have
              some online video tutorials regarding this issue . If the problem
              remains, Please Open a ticket in the support forum.
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ padding: "12px 0px", marginBottom: "20px" }}>
            <AccordionSummary
              style={{ fontWeight: 600, fontSize: "16px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              How do i create an account?
            </AccordionSummary>
            <AccordionDetails style={{ textAlign: "left" }}>
              If you want to open an account for personal use you can do it over
              the phone or online. Opening an account online should only take a
              few minutes.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
 
export default Faq;