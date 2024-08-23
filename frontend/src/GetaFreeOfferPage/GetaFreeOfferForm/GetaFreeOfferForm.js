import React, { useState } from "react";
import "./../GetaFreeOfferForm/GetaFreeOfferForm.css";
import Loader from "../../Homepage/Loader/Loader";
import NotificationDisplay from "../../Homepage/NotificationDisplay/NotificationDisplay";
import axios from "axios";
import { Link } from "react-router-dom";

function GetaFreeOfferForm() {
  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [formData, setFormData] = useState({
    full_address: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    best_time_to_contact: "",
    hear_about_us: "",
    agree: false,
    agree1: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleChange1 = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const resetForm = () => {
    console.log("Resetting form"); // Add this line
    setFormData({
      full_address: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      best_time_to_contact: "",
      hear_about_us: "",
      agree: false,
      agree1: false,
    });
  };

  const postToWebhook = (data) => {
    const requestOptions = {
      method: "POST",
      mode: "no-cors", // Setting mode to "no-cors"
      headers: {
        "Content-Type": "application/json", // Required header for POST request
      },
      body: JSON.stringify(data), // Convert data to JSON string
    };

    fetch(
      "https://hooks.zapier.com/hooks/catch/15275761/3ptgbev/",
      requestOptions
    )
      .then((response) => {
        console.log("Request sent successfully");
      })
      .catch((error) => {
        console.error("Error sending request:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("api/free-offers", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
        postToWebhook(formData);
        setLoading(false);
        setNotificationMessage("Form submitted successfully!");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
        resetForm();
        // Handle success response
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        setNotificationMessage("Error submitting form.");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);

        // Handle error
      });
  };

  return (
    <div className="main_div_form_getaoffer">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row m-0 p-0">
            <p className="para_require_field">* required fields</p>

            <div className="col-lg-12 col-md-12 col-12">
              <p className="youraddress_para">Property Address*</p>
              <input
                required
                className="input_your_address"
                placeholder="123 Main Street"
                name="full_address"
                value={formData.full_address}
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <p className="youraddress_para">First Name</p>
              <input
                required
                className="input_your_address"
                placeholder="Johnny"
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <p className="youraddress_para">Last Name</p>
              <input
                required
                className="input_your_address"
                placeholder="Apple"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <p className="youraddress_para">Email Address*</p>
              <input
                required
                className="input_your_address"
                placeholder="johnnyapple@gmail.com"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <p className="youraddress_para">Phone Number*</p>
              <input
                required
                type="phone"
                className="input_your_address"
                placeholder="123-456-7890"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <p className="youraddress_para">Best Time to Contact?</p>
              <select
                required
                className="input_your_address"
                name="best_time_to_contact"
                onChange={handleChange}
                value={formData.best_time_to_contact}
              >
                <option value="">Select a Time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <p className="youraddress_para">How Did You Hear About Us?</p>
              <select
                required
                className="input_your_address"
                name="hear_about_us"
                onChange={handleChange}
                value={formData.hear_about_us}
              >
                <option value="">Select an Option</option>
                <option value="friend">From a Friend</option>
                <option value="internet">Internet Search</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-lg-12 col-md-12 col-12">
              <div className="d-flex flex-row">
                <input
                  required
                  type="checkbox"
                  id="agree"
                  className="checkbox_input_formgetoffer"
                  name="agree"
                  onChange={handleChange}
                  checked={formData.agree} // Ensure the checked state matches formData
                />
                <label htmlFor="agree" className="checkbox_label_formgetoffer">
                  Opt in to receive special offers and promotions from us.
                </label>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
              <div className="d-flex flex-row">
                <input
                  required
                  type="checkbox"
                  id="agree1"
                  className="checkbox_input_formgetoffer"
                  name="agree1"
                  onChange={handleChange}
                  checked={formData.agree1} // Ensure the checked state matches formData
                />
                <label htmlFor="agree1" className="checkbox_label_formgetoffer">
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
                type="submit"
                className="getmyfreeoffer_submit_btn"
                disabled={loading}
              >
                {loading ? <Loader /> : "GET MY FREE OFFER"}
              </button>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
              <p className="para_belowsubmitbtn_getoffer">
                By submitting this form and signing up for texts, you consent to
                receive marketing text messages from 247 cash offer at the
                number provided, including messages sent by auto-dialer. Consent
                is not a condition of purchase. Msg & data rates may apply.
                Unsubscribed at any time by replying STOP or clicking the
                unsubscribe link (where available).
              </p>
            </div>
          </div>
        </form>
      </div>

      <NotificationDisplay message={notificationMessage} />
    </div>
  );
}

export default GetaFreeOfferForm;
