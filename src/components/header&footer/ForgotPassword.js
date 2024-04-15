import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import graphs from '../assets/logoboro.svg'
import Signin from "./signpages/Signin";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
//   p: "4px",
  border: "none",
  borderRadius: 2,
};

function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        style={{
          fontWeight: 500,
          color: "#02b290",
          fontSize: "15px",
          textTransform: "capitalize",
          display: "flex",
          gap: "5px",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        Forgot Password
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div
      className="boro-forgot-password-main"
      style={{
       
       
        border: "1px solid #e5e7eb",
        boxShadow:'1px 1px 3px #e5e7eb',
        borderRadius: "5px",
        display: "flex",
        width: "420px",
        height: "450px",
        padding: "30px 20px 30px 20px ",
        justifyContent: "center",
        alignItems:'center'
       
      }}
    >
      <div className="forgot-paswrd-sub-MAIN" >
        <img src={graphs} style={{ margin: "0px 0px 30px 0px" }} />
        <p style={{ margin: "0px 0px 30px 0px" , color:'#818181'}}>
          We will send you a link to reset your password
        </p>
 
        <div
          className="forgot-paswrd-email-label"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label style={{ textAlign: "left", marginBottom: "15px" , color:'#818181'}}>
            Emain Address
          </label>
          <input
            type="email"
            style={{
              padding: "10px 15px 10px 15px",
              marginBottom: "20px",
              borderRadius: "5px",
              borderColor: "#e5e7eb",
            }}
          />
        </div>
 
        <button
          style={{
            padding: "10px 15px 10px 15px",
            marginBottom: "20px",
            background: "#02b290",
            color: "white",  
            borderColor: "white",
            borderRadius: "5px",
            width: "350px",
            fontWeight:600
          }}
        >
          Reset your password
        </button>
 
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <hr
            className="line"
            style={{
              flex: "1",
              height: "1px",
              border: "none",
              backgroundColor: "black",
              margin: "0 10px",
              borderColor:'grey'
            }}                                                
          />
          <div className="content" style={{ color: "#818181" }}>
            Continue with
          </div>
          <hr
            className="line"
            style={{
              flex: "1",
              height: "1px",
              border: "none",
              backgroundColor: "black",
              margin: "0 10px",
              color:'#818181'
            }}
 
          />
        </div>
        <div
          className="forgot-pswrd-back-to-login"
        >
          Back to{" "}
          <button
            style={{
              fontWeight: 600,
              fontSize: "16px",
              border: "none",
              background: "none",
            //   textDecoration: "underline",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => (e.target.style.color = "#818181")}
           onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            <Signin  />
          </button>
        </div>            
      </div>
    </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ForgotPassword;
