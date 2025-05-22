import "../css/ContactUs.css";
function ContactUs() {
  return (
    <section className="section-contact-us section">
      <h1 className=" contact-us-heading">
        Contact Me
      </h1>
      <div className="container contact-us-grid">
        <div className="contact-content-box">
          <div className="item-box">
            <ion-icon name="location-outline"></ion-icon>
            <div>
              <p className="subheading">
                Address
              </p>
              <a
                className="footer-link"
                href="tel:+917338785700"
              >
                South Gangai Amman Koil street,
                Choolaimedu, Chennai 94
              </a>
            </div>
          </div>
          <div className="item-box">
            <ion-icon name="call-outline"></ion-icon>
            <div>
              <p className="subheading">Phone</p>
              <a
                className="footer-link"
                href="tel:+917338785700"
              >
                7338785700
              </a>
            </div>
          </div>
          <div className="item-box">
            <ion-icon name="mail-outline"></ion-icon>
            <div>
              <p className="subheading">Email</p>
              <a
                className="footer-link"
                href="mailto:miriyamraja@gmail.com"
              >
                miriyamraja@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="contact-img-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5620476595!2d80.22083967381192!3d13.063525412858748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a630fc5eff%3A0x4906f83b30cc56f4!2sPiano%20Lessons%20With%20Miriyam!5e0!3m2!1sen!2sin!4v1747949349982!5m2!1sen!2sin"
            style={{
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Piano Lessons With Miriyam"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
