import icon from "../../images/perfume.png"
import "./Footer.css"
export default function Footer() {
    const date = new Date().getFullYear()
    return (
        <div className="main-div">
            <div className="footer-div">
                      <img src={icon} alt="logo"  width="60px" height="60px"/>
                      <span className="logo">eFragrance Store</span>
                      <div className="contact-details">
                      <h4>Contact Details</h4>
                      <h6>North Nazimabad, Karachi</h6>
                      <h6>0310-3477737</h6>
                      <h6>order@efragrance.pk</h6>
                      <h6>www.efragrance.com</h6>
                      <h6>Mon-Sat / 9:00 AM - 8:00 PM</h6>

                      </div>
                      <p>© 2020-{date} eFragrance All Rights Reserved.</p>
                      </div>
                      

                      


        </div>
    )
}
