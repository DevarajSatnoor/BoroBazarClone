import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import "../../styles/checkout.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import { CartContext } from "../../redux/CartContext";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { FlashOnSharp } from "@mui/icons-material";

export default function CheckoutPage() {
  const {
    cartItems,
    calculateSubtotal,
    calculateShippingCharge,
    calculateTotal,
  } = useContext(CartContext);
  const [expandedStep, setExpandedStep] = React.useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditing1, setIsEditing1] = useState(false);
  const [homeAddress, setHomeAddress] = useState(
    "123 Main Street, City, Country"
  );
  const [officeAddress, setOfficeAddress] = useState(
    "456 Office Lane, City, Country"
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAddress, setModalAddress] = useState("");
  const [modalNo, setModalNo] = useState("00000000000");
  const [emaill, setEmaill] = useState("sat@gmail.com");
  const [pincode, setPincode] = useState("560082");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false); // State variable to track order placement
  const [orderConfirmationModalOpen, setOrderConfirmationModalOpen] =
    useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
    console.log("Cart Items:", cartItems);
    console.log("Subtotal:", calculateSubtotal());
    console.log("Shipping Charge:", calculateShippingCharge());
    console.log("Total:", calculateTotal());
  }, [cartItems]);

  const handleChange = (panel) => (event, newExpandedStep) => {
    setExpandedStep(newExpandedStep ? panel : false);
  };

  const handleNext = () => {
    setExpandedStep((prevExpandedStep) => prevExpandedStep + 1);
  };

  const handleBack = () => {
    setExpandedStep((prevExpandedStep) => prevExpandedStep - 1);
  };

  const handleReset = () => {
    setExpandedStep(0);
  };

  const handleFinish = () => {
    handleReset(); // Reset step back to 0
  };

  const handleEditClick = (box) => {
    if (box === "home") {
      setIsEditing(true);
    } else if (box === "office") {
      setIsEditing1(true);
    }
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setIsEditing1(false);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleModalSave = () => {
    console.log("Save button clicked");
    setModalOpen(false);
    if (expandedStep === 0) {
      setHomeAddress(modalAddress);
      setModalNo(modalNo);
      setEmaill(emaill);
    } else if (expandedStep === 1) {
      setOfficeAddress(modalAddress);
      setModalNo(modalNo);
      setEmaill(emaill);
    }
  };

  const handlePaymentOptionChange = (event) => {
    setSelectedPaymentOption(event.target.value);
  };

  const toggleOrderConfirmationModal = () => {
    setOrderConfirmationModalOpen(!orderConfirmationModalOpen);
    // setOrderNumber(generatedOrderNumber);
  };
  const handlePlaceOrder = () => {
    const generatedOrderNumber = "XRQ" + Math.floor(Math.random() * 10000);
    setOrderPlaced(true);
    toggleOrderConfirmationModal(generatedOrderNumber);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        display: "flex",
        gap: "20px",
      }}
    >
      <div className="checkout-left-main">
        <Accordion expanded={expandedStep === 0} onChange={handleChange(0)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="h4">Delivery Address</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="address-boxes">
              <div
                className={`edit-adres-box1 ${isEditing ? "active" : ""}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <label htmlFor="">Home</label>
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="5"
                  value={`Area:${homeAddress} \n  Phone: ${modalNo} \n email:${emaill} \n pincode:${pincode} `}
                  value1={`${modalNo}`}
                  disabled={!isEditing}
                  style={{
                    padding: "10px",
                    width: "380px",
                    borderColor: isEditing ? "#02b290" : "",
                  }}
                  onChange={(e) => setHomeAddress(e.target.value)}
                ></textarea>
                {isHovered && !isEditing && (
                  <EditIcon
                    style={{
                      position: "absolute",
                      top: "30px",
                      right: "20px",
                      cursor: "pointer",
                      border: "1px solid #818181",
                      borderRadius: "50%",
                      padding: "3px",
                      backgroundColor: "#02b290",
                      color: "white",
                    }}
                    onClick={() => handleEditClick("home")}
                  />
                )}
              </div>

              <div
                className="edit-adres-box2"
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                <label htmlFor="">Office</label>
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="5"
                  value={officeAddress} // Use officeAddress state variable here
                  disabled={!isEditing1}
                  style={{
                    padding: "10px",
                    width: "380px",
                    borderColor: isEditing1 ? "#02b290" : "",
                  }}
                  onChange={(e) => setOfficeAddress(e.target.value)}
                ></textarea>
                {isHovered1 && !isEditing1 && (
                  <EditIcon
                    style={{
                      position: "absolute",
                      top: "30px",
                      right: "20px",
                      cursor: "pointer",
                      border: "1px solid #818181",
                      borderRadius: "50%",
                      padding: "3px",
                      backgroundColor: "#02b290",
                      color: "white",
                    }}
                    onClick={() => handleEditClick("office")}
                  />
                )}
              </div>
              <div className="add-adress">
                <span onClick={toggleModal}>
                  <AddIcon /> Add Address
                </span>
              </div>
            </div>
          </AccordionDetails>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "16px",
            }}
          >
            {isEditing ? (
              <Button
                variant="contained"
                onClick={handleSaveClick}
                sx={{ mt: 1, mr: 1 }}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                disabled={expandedStep !== 0}
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                Continue
              </Button>
            )}
          </Box>
        </Accordion>
        {/* </div> */}
        <Modal
          open={modalOpen}
          onClose={toggleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              borderRadius: 4,
              outline: "none",
              border: "none",
              margin: "auto",
            }}
          >
            <form action="">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: 600,
                    margin: "20px 0px",
                  }}
                >
                  Details
                </p>
                <label htmlFor="">Area/Locality</label>
                <textarea
                  id="address-input"
                  variant="outlined"
                  value={modalAddress}
                  onChange={(e) => {
                    console.log("Address input:", e.target.value);
                    setModalAddress(e.target.value);
                  }}
                  style={{
                    // marginTop: "10px",
                    height: "100px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <label htmlFor="">Phone No:</label>
                  <input
                    type="text"
                    maxLength={10}
                    required
                    onChange={(e) => {
                      // Ensure only numbers are entered
                      const phoneNumber = e.target.value.replace(/\D/g, "");
                      // Limit input to a maximum length of 10 characters
                      // const truncatedPhoneNumber = phoneNumber.slice(0, 10);
                      // console.log("Phone number input:", truncatedPhoneNumber);
                      setModalNo(phoneNumber); // Update modalNo with the validated phone number
                    }}
                    value={modalNo} // Use modalNo state variable here
                    // disabled={!isEditing}
                  />
                  <label htmlFor="">email:</label>{" "}
                  <input
                    type="email"
                    required
                    value={emaill}
                    onChange={(e) => setEmaill(e.target.value)}
                  />
                  <label htmlFor="">Pincode:</label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={pincode}
                    onChange={(e) => {
                      const pincodeArea = e.target.value.replace(/\D/g, "");
                      setPincode(pincodeArea);
                    }}
                  />
                </div>

                <button
                  variant="contained"
                  onClick={handleModalSave}
                  sx={{ mt: 2 }}
                >
                  Save Address
                </button>
              </div>
            </form>
          </Box>
        </Modal>
        {/* {.....................} */}

        <Accordion expanded={expandedStep === 1} onChange={handleChange(1)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography variant="h4">Delivery Schedule</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="body1" gutterBottom>
                Your delivery schedule:
              </Typography>
              <Typography variant="body2" gutterBottom>
                Monday: 9:00 AM - 5:00 PM
              </Typography>
              <Typography variant="body2" gutterBottom>
                Tuesday: 9:00 AM - 5:00 PM
              </Typography>
              <Typography variant="body2" gutterBottom>
                Wednesday: 9:00 AM - 5:00 PM
              </Typography>
              <Typography variant="body2" gutterBottom>
                Thursday: 9:00 AM - 5:00 PM
              </Typography>
              <Typography variant="body2" gutterBottom>
                Friday: 9:00 AM - 5:00 PM
              </Typography>
            </div>
          </AccordionDetails>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "16px",
            }}
          >
            <Button
              variant="contained"
              disabled={expandedStep !== 1}
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              Continue
            </Button>
            <Button
              disabled={expandedStep !== 1 || expandedStep === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
          </Box>
        </Accordion>

        {/* {...............................} */}
        <Accordion expanded={expandedStep === 2} onChange={handleChange(2)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography variant="h4">Payment Options</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <Typography variant="body1" gutterBottom>
                Choose your preferred payment option:
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentOption"
                    value="creditCard"
                    onChange={handlePaymentOptionChange}
                  />
                  <label htmlFor="creditCard">Credit Card</label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentOption"
                    value="paypal"
                    onChange={handlePaymentOptionChange}
                  />
                  <label htmlFor="paypal">PayPal</label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="radio"
                    id="bankTransfer"
                    name="paymentOption"
                    value="bankTransfer"
                    onChange={handlePaymentOptionChange}
                  />
                  <label htmlFor="bankTransfer">Bank Transfer</label>
                </div>
              </div>
              {selectedPaymentOption === "creditCard" && (
                <div style={{ marginTop: "20px" }}>
                  <Typography variant="body1" gutterBottom>
                    Enter your credit card information:
                  </Typography>
                  <TextField
                    label="Card Number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Expiration Date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="CVV"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                </div>
              )}
            </div>
          </AccordionDetails>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "16px",
            }}
          >
            <Button
              variant="contained"
              disabled={expandedStep !== 2}
              sx={{ mt: 1, mr: 1 }}
              onClick={handleFinish}
            >
              {expandedStep === 2 ? "Finish" : "Continue"}
            </Button>
          </Box>
        </Accordion>

        {expandedStep === 3 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              All steps completed - you're finished
            </Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Box>
        )}
      </div>
      <div className="checkout-right-main">
        <div className="checkout-right-main-headings">
          <p>Product</p>
          <p>Sub total</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">Your cart is empty</div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <img
                  src={item?.imageUrl}
                  alt=""
                  width={100}
                  style={{ border: "1px solid #aaa", borderRadius: "20px" }}
                />
                <p style={{ color: "#02b290" }}>{item?.title}</p>
                <p>{item?.price}</p>
              </div>
            ))}

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {" "}
              <div className="checkout-right-main-below-headings">
                <p>Sub Total</p>
                <p>{calculateSubtotal()}</p>
              </div>
              {/* <hr />  */}
              <div className="checkout-right-main-below-headings">
                <p>Shipping charge</p>
                <p>{calculateShippingCharge()}</p>
              </div>
              {/* <hr />  */}
              <div className="checkout-right-main-below-headings">
                <p>Total</p>
                <p>{calculateTotal()}</p>
              </div>
              {/* <hr />  */}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <button
                onClick={handlePlaceOrder}
                style={{
                  marginTop: "20px",
                  width: "140px",
                  padding: "20px",
                  background: "#02b290",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "28px",
                }}
              >
                {" "}
                order
              </button>
            </div>
          </>
        )}
      </div>

      <Modal
        open={orderConfirmationModalOpen}
        onClose={toggleOrderConfirmationModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 4,
            outline: "none",
            border: "none",
            margin: "auto",
          }}
        >
          {/* Order confirmation content here */}
          <p className="order-confirm-notification">
            <VerifiedOutlinedIcon
              sx={{ background: "#02b290", borderRadius: "50%", color: "#fff" }}
            />
            Thank you. Your order has been received.
          </p>{" "}
          <br />
          <table border={"borderCollapse"} cellPadding={1} cellSpacing={0}>
            <tr>
              <td style={{ borderBottom: "1px solid #aaa" }}>
                ORDER NUMBER: {orderNumber}
              </td>
              <td style={{ borderBottom: "1px solid #aaa" }}>
                DATE: {new Date().toDateString()}
              </td>
              <td style={{ borderBottom: "1px solid #aaa" }}>
                SEND MAIL: {emaill}
              </td>
              <td style={{ borderBottom: "1px solid #aaa" }}>
                TOTAL: {calculateTotal()}
              </td>
              <td style={{ borderBottom: "1px solid #aaa" }}>
                PAYMENT METHOD: cash on delivery
              </td>
            </tr>
          </table>{" "}
          <br />
          <Typography variant="body1">
            Pay with cash upon delivery.
          </Typography>{" "}
          <br />
          <table
            cellSpacing={0}
            cellPadding={1}
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <caption
              style={{
                textAlign: "left",
                paddingLeft: "20px",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Order details:
            </caption>{" "}
            <br />
            <tr>
              <th
                style={{
                  backgroundColor: "#f2f2f2",
                  borderBottom: "1px solid #aaa",
                  borderRadius: "5px",
                }}
              >
                Product
              </th>
              <th
                style={{
                  backgroundColor: "#f2f2f2",
                  borderBottom: "1px solid #aaa",
                }}
              >
                Total
              </th>
            </tr>
            {/* <tr> */}
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ borderBottom: "1px solid #aaa" }}>
                    {item.title}({cartItems.filter((cartItem) => cartItem.id === item.id).length} items)
                  </td>
                  <td style={{ borderBottom: "1px solid #aaa" }}>
                    {item.price}
                  </td>
                </tr>
              ))}
            {/* </tr> */}
        
            <tr>
              <td
                style={{
                  borderBottom: "1px solid #aaa",
                  backgroundColor: "#f2f2f2",
                }}
              >
                 Subtotal
              </td>
              <td
                style={{
                  borderBottom: "1px solid #aaa",
                  backgroundColor: "#f2f2f2",
                }}
              >
                {calculateSubtotal()}
              </td>
            </tr>
            <tr>
              <td style={{ borderBottom: "1px solid #aaa" }}>Shipping</td>
              <td style={{ borderBottom: "1px solid #aaa" }}>
                {calculateShippingCharge()}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: "1px solid #aaa",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Payment method
              </td>
              <td
                style={{
                  borderBottom: "1px solid #aaa",
                  backgroundColor: "#f2f2f2",
                }}
              >
                cash on delivery
              </td>
            </tr>
            <tr>
              <td style={{ borderBottom: "1px solid #aaa" }}>Total</td>
              <td style={{ borderBottom: "1px solid #aaa" }}>
                {calculateTotal()}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: "1px solid #aaa",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Payment method
              </td>
              <td
                style={{
                  borderBottom: "1px solid #aaa",
                  backgroundColor: "#f2f2f2",
                }}
              >
                new order
              </td>
            </tr>
          </table>
        </Box>
      </Modal>
    </Box>
  );
}
