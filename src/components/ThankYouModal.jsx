import ListIcon from "../../public/assets/images/icon-list.svg";

export function ThankYouModal({ email, setShowThankYouModal }) {
  return (
    <div className="thank-you | container">
      <img src={ListIcon} alt="" />
      <div className="thank-you__details | content-flow">
        <h1 className="thank-you__title">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button
          className="button modal-button"
          onClick={() => setShowThankYouModal(false)}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}
