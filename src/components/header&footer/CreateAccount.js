import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import graphs from "../assets/sliderboro.img3.png";
import graphs1 from "../assets/logoboro.svg";
import Switch from "@mui/material/Switch";
import SignBoro from "./SignBoro";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 860,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  border: "none",
  borderRadius: 2,
};

function CreateAccount() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <button
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
          padding:0,
          margin:0
        }}
        onClick={handleOpen}
      >
        Create account
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // sx={{background:'none'}}
      >
        <Box sx={style}>
          <div
            className="signup-for-free-MAIN"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className="signup-for-free-left-image"
              style={{
                width: "510px",
                maxWidth: "520px",
                height: "600px",
                display: "flex",
                borderRadius: "5px",
              }}
            >
              <img
                src={graphs}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                  objectPosition: "center",
                }}
              />
            </div>

            <div
              className="signup-free-right"
              style={{
                border: "0.4px solid #e5e7eb",
                borderRadius: "5px",
                width: "350px",
                padding: "30px 25px 25px 30px",
                justifyContent: "center",
                position: "relative",
                zIndex: "1",
              }}
            >
              <img src={graphs1} />
              <h1 style={{ paddingTop: "10px", margin: "0%" }}>
                Sign Up For Free
              </h1>
              <p style={{ marginTop: "13px", marginBottom: "10px" }}>
                Already Registered?{" "}
                <button
                  style={{
                    color: "#02b290",
                    border: "none",
                    background: "none",
                    fontWeight: 600,
                    fontSize: "16px",
                    marginLeft: "5px",
                    padding: "0%",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  <SignBoro name={"signin"}/>
                </button>
              </p>

              <div
                className="label-input-form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#818181",
                }}
              >
                <label style={{ marginBottom: "10px", textAlign: "left" }}>
                  Name
                </label>
                <input
                  style={{
                    padding: "12px 12px 12px 12px",
                    borderColor: "#e5e7eb",
                    borderRadius: "5px",
                  }}
                />

                <label
                  style={{
                    marginBottom: "10px",
                    marginTop: "15px",
                    textAlign: "left",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  style={{
                    padding: "12px 12px 12px 12px",
                    borderColor: "#e5e7eb",
                    borderRadius: "5px",
                  }}
                />

                <label
                  style={{
                    marginBottom: "10px",
                    marginTop: "15px",
                    textAlign: "left",
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  style={{
                    padding: "12px 12px 12px 12px",
                    borderColor: "#e5e7eb",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div
                className="signup-for-free-right-switch-div"
                style={{
                  display: "flex",
                  marginTop: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#818181",
                  fontSize: "15px",
                }}
              >
                <label>
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    size="large"
                  />
                </label>
                <label> Remember me</label>
                <a
                  style={{
                    marginLeft: "auto",
                    cursor: "pointer",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.6";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                  }}
                >
                  privacy and policy
                </a>
              </div>

              <button
                style={{
                  marginTop: "15px",
                  padding: "14px 30px 14px 30px",
                  width: "100% ",
                  borderColor: "#e5e7eb",
                  background: "#02b290",
                  color: "white",
                  fontWeight: 600,
                  borderRadius: "5px",
                }}
              >
                Register
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateAccount;
