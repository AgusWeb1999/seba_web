import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      const templateParams = { name, email, subject, message };
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className="contact-form">
      <div className="container">
        <div className="form-wrapper">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  {...register('name', {
                    required: { value: true, message: 'Please enter your name' },
                    maxLength: { value: 30, message: 'Use 30 characters or less' },
                  })}
                  className="form-input"
                  placeholder="Name"
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  {...register('email', {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="form-input"
                  placeholder="Email address"
                />
                {errors.email && <span className="error-message">Please enter a valid email address</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  {...register('subject', {
                    required: { value: true, message: 'Please enter a subject' },
                    maxLength: { value: 75, message: 'Subject cannot exceed 75 characters' },
                  })}
                  className="form-input"
                  placeholder="Subject"
                />
                {errors.subject && <span className="error-message">{errors.subject.message}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <textarea
                  rows={3}
                  name="message"
                  {...register('message', { required: true })}
                  className="form-input"
                  placeholder="Message"
                ></textarea>
                {errors.message && <span className="error-message">Please enter a message</span>}
              </div>
            </div>
            <button className="submit-btn" disabled={disabled} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      {alertInfo.display && (
        <div className={`alert ${alertInfo.type}`}>
          {alertInfo.message}
          <button
            type="button"
            className="alert-close"
            onClick={() => setAlertInfo({ display: false, message: '', type: '' })}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;