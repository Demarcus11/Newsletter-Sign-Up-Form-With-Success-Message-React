import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ThankYouModal } from "./components/ThankYouModal";
import { Form } from "./components/Form";
import { List } from "./components/List";

export default function App() {
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [email, setEmail] = useState("");

  const form = useForm();
  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const onSubmit = () => {
    setShowThankYouModal(true);
  };

  const handleGetEmail = () => {
    setEmail(getValues("email"));
  };

  useEffect(() => {
    if (showThankYouModal) {
      document.body.classList.add("overlay");
    } else {
      document.body.classList.remove("overlay");
    }
  });

  return (
    <>
      <main>
        <div className="news-signup">
          <div className="news-signup__hero"></div>
          <div className="news-signup__details | content-flow">
            <div className="content-flow">
              <h1 className="details__title">Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <List />
            </div>

            <div className="details__form | content-flow">
              <Form
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
                register={register}
                handleGetEmail={handleGetEmail}
              />
            </div>
          </div>
        </div>
        {showThankYouModal && (
          <ThankYouModal
            email={email}
            setShowThankYouModal={setShowThankYouModal}
          />
        )}
      </main>
    </>
  );
}
