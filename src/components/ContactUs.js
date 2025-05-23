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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d526.9783812299521!2d80.22715100700825!3d13.059852120762622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAzJzM1LjAiTiA4MMKwMTMnMzguMSJF!5e0!3m2!1sen!2sin!4v1747991197199!5m2!1sen!2sin"
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
