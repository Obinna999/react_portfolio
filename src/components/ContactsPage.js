import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactsPage.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjnrpnn");

  if (state.succeeded) {
    return <p>Thanks for the message,I'll be back to you!</p>;
  }

  return (
    <div className="big-container">
    <div className="contact-form">
    <form onSubmit={handleSubmit} >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          placeholder="name@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Example textarea
        </label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          rows="3"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting} className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
    </div>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
