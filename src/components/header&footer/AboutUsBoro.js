import React ,{useEffect} from 'react'
import styles from "../../styles/aboutUs.module.css"
import pic1 from "../assets/1.png"
import pic2 from "../assets/2.png"
import pic3 from "../assets/3.png"
import pic4 from "../assets/4.png"
import pic5 from "../assets/5.png"

function AboutUsBoro() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);

  return (
    <div>
        <div className={styles.bg}></div>

        <div className={styles.aboutus}>
            <h2>About Us </h2>
            <div className={styles.content}>
                <p>
We may automatically track certain information about you based upon your behavior on the website. We use this information to do internal research on our users’ demographics, interests, and behavior to better understand, protect and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on the website or not), which URL you next go to (whether this URL is on the website or not), your computer browser information, your IP address, and other information associated with your interaction with the website. <strong> We may also share your Mobile IP/Device IP with third party(ies) and to the best of our knowledge, be-life and representations given to us by these third party(ies) this information is not stored.</strong></p>

<p>Our Privacy Policy is incorporated into the Terms and Conditions of Use of the website/app, and is subject to change from time to time without notice. It is strongly recommended that you periodically review our Privacy Policy as posted on the App/Web.</p>
<p>Should you have any clarifications regarding this Privacy Policy, please do not hesitate to contact us at <a href="">info@borobazar.com.</a></p>
            </div>
        </div>

        <div className={styles.imageBox1}>
          <img src={pic1} alt="" />
          <img src={pic2} alt="" />

        </div>
        <div className={styles.content2}>
        <p>
        To protect against the loss, misuse and alteration of the information under its control, the Company has in place appropriate physical, electronic and managerial procedures. For example, the Company servers are accessible only to authorized personnel and your information is shared with employees and authorized personnel on a need to know basis to complete the transaction and to provide the services requested by you. Although the Company endeavour to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using the website, you agree that the Company will have no liability for disclosure of your information due to errors in transmission and/or unauthorized acts of third parties.
        </p>
        <p>
        Please note that the Company will not ask you to share any sensitive data or information via email or telephone. If you receive any such request by email or telephone, please do not respond/divulge any sensitive data or information and forward the information relating to the same to  <a href="">info@borobazar.com</a>  for necessary action.
        </p>
        </div>
        <div className={styles.imageBox2}>
          <img src={pic3} alt="" />
          <img src={pic4} alt="" />
          <img src={pic5} alt="" />
        </div>

        <div className={styles.content3}>
          <p>
          Built on a proprietary technology stack, the Grocers platform serves as a convergence of consumers looking for everyday essentials, partner stores who serve their needs efficiently, and manufacturers looking for a channel to reach a nation of consumers. While our technology caters to the burgeoning population of urban India, it is ready and poised to serve the next 100+ million Indians who are yet to start shopping online.
          </p>
          <p>
          We believe the ecosystem we power can transform the lives of a billion Indians significantly over the coming decade. They will have access to everyday essentials like groceries at the best value, be able to discover products that improve their health and wellbeing, and spend more meaningful time with their families – with the assurance that their essential needs are being looked after by us. On the other side of this virtuous cycle are the millions of local businesses catering to a nation’s needs, helping create more opportunities for employment, growth, and above all, a better life.
          </p>
        </div>

        <div className={styles.bg2}></div>

        <div className={styles.content4}>
          <h2>Be safe, be secure!!</h2>
         
          <p>BoroBazar is leading the charge in transforming India’s vast, unorganized grocery landscape through cutting-edge technology and innovation. We believe every Indian deserves the opportunity to continually improve their life – a process that often begins at home. As part of our mission of helping consumers make healthier, better choices when buying everyday products, we make a wide range of high-quality grocery and household products accessible, affordable, and available right at their doorsteps.</p>
          <h3>For media enquiries please contact us at:  <a href="">press@borobazar.com</a>.</h3>
          <p>For all other inquiries, visit our  <a href="">Contact Us</a>  page.</p>
        </div>


       


    </div>
  )
}

export default AboutUsBoro