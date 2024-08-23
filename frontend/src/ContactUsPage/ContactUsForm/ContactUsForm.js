import React, { useState } from "react";
import "./../ContactUsForm/ContactUsForm.css";
import Loader from "../../Homepage/Loader/Loader";
import NotificationDisplay from "../../Homepage/NotificationDisplay/NotificationDisplay";
import axios from "axios";
import { Link } from "react-router-dom";
function ContactUsForm() {
  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange1 = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
  
    axios.post(
      "/api/contact-us",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log("Success:", response.data);
      setLoading(false);
      setNotificationMessage("Form submitted successfully!");
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      // Handle success response
    })
    .catch((error) => {
      setLoading(false);
      setNotificationMessage("Failed to submit form!");
      setTimeout(() => {
        setNotificationMessage("");
      }, 4000);
     
      console.error("Error:", error);
      // Handle error
    });
  };
  return (
    <div className="main_div_form_contactus">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="form_main_div">
            <p className="send_message_para">Send us a Message</p>
            <p className="send_message_desp">
              We're available 9:00 AM – 5:00 PM EST
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row p-0 m-0">
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    required
                    className="input_firstname_contactus"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    required
                    className="input_firstname_contactus"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <textarea
                    required
                    className="textarea_contactus_form"
                    placeholder="New Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-lg-12 col-md-12 col-12">
                <div className="d-flex flex-row">
                <input
                  required
                  type="checkbox"
                  id="agree"
                  className="checkbox_input_formgetoffer"
                  name="agree"
                  onChange={handleChange1}
                />
                <label htmlFor="agree" className="checkbox_label_formgetoffer">
                  I agree to{" "}
                  <Link to="/termsandcondition">terms & conditions</Link> /{" "}
                  <Link to="/privacypolicy">privacy policy</Link> provided by
                  the company. By providing my phone number, I agree to receive
                  text messages from the business.
                </label>
              </div>
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <button
                    className="btn_contactus_form"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? <Loader /> : "SEND MESSAGE"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NotificationDisplay message={notificationMessage} />
    </div>
  );
}

export default ContactUsForm;
