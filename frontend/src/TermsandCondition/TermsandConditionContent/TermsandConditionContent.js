import React from "react";
import "./../TermsandConditionContent/TermsandConditionContent.css";
import { Link } from "react-router-dom";
function TermsandConditionContent() {
  return (
    <div className="container">
      <div className="main_div_terms">
        <p className="heading_terms">247CashOffer</p>

        <p className="para_terms">
          by using any website of ” 247CashOffer“ you agree to abide by these
          terms of use between you and ” 247CashOffer“ which include the
          referenced privacy policy (“agreement”). if you do not agree to be
          bound by this agreement, you are not authorized to use any ”
          247CashOffer“ website or to obtain any services from ” 247CashOffer
          “.You can cancel the SMS service at any time. Simply text “STOP” to
          the shortcode. Upon sending “STOP,” we will confirm your unsubscribe
          status via SMS. Following this confirmation, you will no longer
          receive SMS messages from us. To rejoin, sign up as you did initially,
          and we will resume sending SMS messages to you. If you experience
          issues with the messaging program, reply with the keyword HELP for
          more assistance, or reach out directly to (support email address or
          toll-free number). Carriers are not liable for delayed or undelivered
          messages. As always, message and data rates may apply for messages
          sent to you from us and to us from you. You will receive (message
          frequency). For questions about your text plan or data plan, contact
          your wireless provider. For privacy-related inquiries, please refer to
          our <Link to="/privacypolicy">privacy policy</Link>.
        </p>
      </div>
    </div>
  );
}

export default TermsandConditionContent;
