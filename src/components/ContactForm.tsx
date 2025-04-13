import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  margin: 2.5rem auto 0;
  max-width: 600px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--dark);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondary);
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const PopupButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: var(--secondary);
  }
`;

interface ContactFormProps {
  source: string;
  successMessage?: string;
  buttonText?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  source, 
  successMessage = 'Thank you for your message! We will be in touch soon.',
  buttonText = 'Send Message'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const scriptURL = "https://script.google.com/macros/s/AKfycbyk4_yOHVYDHDJ3fPMG8EUV4_qJCXd51p6KdApD2HdIbdNclbomErnuIonl-b4lw988lA/exec";
    
    try {
      console.log('Submitting form with data:', { name, email, message, source });
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          source
        })
      });

      // Log the response for debugging
      console.log('Form submission response:', response);
      
      // Since we're using no-cors mode, we can't check response.ok
      // Instead, we'll assume success if we get here
      console.log('Form submitted successfully');
      setShowPopup(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea 
            id="message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required 
          />
        </FormGroup>
        <SubmitButton type="submit">{buttonText}</SubmitButton>
      </FormContainer>

      {showPopup && (
        <>
          <PopupOverlay onClick={() => setShowPopup(false)} />
          <Popup>
            <h3>Thank You!</h3>
            <p>{successMessage}</p>
            <PopupButton onClick={() => setShowPopup(false)}>Close</PopupButton>
          </Popup>
        </>
      )}
    </>
  );
};

export default ContactForm; 