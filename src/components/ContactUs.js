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
          <img
            src="./img/contact-image.jpg"
            alt="miriyam teaching student"
            className="contact-img"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
