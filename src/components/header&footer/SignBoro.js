import React ,{useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import boro4 from "../assets/boro4.svg";
import "../../styles/signin.css";
import boro5 from "../../components/assets/boro5.webp";
import Switch from "@mui/material/Switch";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CreateAccount from "./CreateAccount";
import ForgotPassword from "./ForgotPassword";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: '4px',
  border: "none",
  borderRadius: 2,
};

export default function SignBoro() {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };

  const [opens, setOpens] = React.useState(false);
  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);

  return (
    <div>
      <Button
        onClick={handleOpens}
        sx={{ fontWeight: 500, color: "#000", fontSize: "15px",textTransform:'capitalize',display:'flex',gap:'5px',alignItems:'center', }}
      >
        {" "}
        <AccountCircleOutlinedIcon
          sx={{ color: "#bebfc1", fontSize: "25px" }}
        />{" "}
        signin
      </Button>
      <Modal
        open={opens}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="sign-boro-main">
            <div className="sign-boro-main-leftside-image">
              <img src={boro5} style={{ width: "536px" }} />
            </div>
            <div className="sign-boro-main-right-content">
              <img
                src={boro4}
              />
              <h4
                style={{
                  padding: "12px 0px 0px",
                  fontSize: "24px",
                  margin: "0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Welcome Back
              </h4>
              <div
                className="login-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ margin: "12px 0px 20px", fontSize: "15px" }}>
                  don't have an accountt?{" "}
                  <button
                    style={{
                      color: "green",
                      fontSize: "15px",
                      color: "#02b290",
                      fontSize: "15px",
                      border: "none",
                      background: "none",
                      fontWeight: 600,
                    }}
                  >
                <CreateAccount setOpens={setOpens}/> 
                  </button>
                </p>
              </div>
              <div
                className="email-address"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label style={{ margin: "0px 0px 12px" }}>Email Address:</label>
                <input
                  type="email"
                  style={{
                    padding: "12px 20px",
                    borderColor: "#e5e7eb",
                    borderRadius: "5px",
                    width:'310px'
                  }}
                />
              </div>
              <div
                className="pasword"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "14px 0px 0px",
                }}
              >
                <label style={{ margin: "0px 0px 12px" }}>Password:</label>
                <input
                  type="password"
                  style={{
                    padding: "12px 20px",
                    borderColor: "#e5e7eb",
                    borderRadius: "5px",
                    width:'310px'
                  }}
                />
              </div>
              <div
                className="button-password "
                style={{ display: "flex", justifyContent: "space-between",gap:'50px' }}
              >
                <div>
                <Switch   color="default"   onChange={handleChange} />
                  remember me
                </div>
                <button className="signin-boro-forgot"><ForgotPassword/></button>
              </div>{" "}
              <br /> <br />
              <button
                style={{
                  padding: "16px 24px",
                  margin: "8px 0px 0px",
                  background: "#02b290",
                  color: "#ffffff",
                  borderRadius: "7px",
                  border: "none",
                  width: "370px",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
