import React, { useState } from 'react';
import styled from 'styled-components';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: var(--bg-dark-alt);
  border: 1px solid var(--border-dark);
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);

  &:hover {
    color: var(--text-primary);
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-primary);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RequiredText = styled.span`
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: normal;
  font-style: italic;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid var(--border-dark);
  border-radius: 6px;
  font-size: 1rem;
  background: var(--bg-dark);
  color: var(--text-primary);

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: var(--primary);
    background: var(--bg-dark-hover);
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid var(--border-dark);
  border-radius: 6px;
  font-size: 1rem;
  background-color: var(--bg-dark);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  option {
    background: var(--bg-dark);
    color: var(--text-primary);
  }
`;

const SubmitButton = styled.button`
  background: var(--gradient);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--glow-cyan);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessNotification = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--bg-dark-alt);
  border: 1px solid var(--success);
  color: var(--text-primary);
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1100;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const CheckIcon = styled.span`
  color: var(--success);
  font-size: 1.5rem;
`;

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzWpVe3CiNFVv7VWPpdOo5O8_DSJu2hDsELfLjF6q7RdHhbbGNBRNnd2jeAYptCkWqgJw/exec';

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', role: '' });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Network or other error submitting form:', error);
      setSubmitStatus('error');
      alert('Submission failed due to a network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <Title>Join the Learning Journey</Title>
          <Subtitle>
            Get weekly AI tips, new video notifications, and practical automation guides delivered straight to your inbox.
          </Subtitle>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">
                Email Address
                <RequiredText>(required)</RequiredText>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="role">What brings you here?</Label>
              <Select
                id="role"
                value={formData.role}
                onChange={e => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="">Select one...</option>
                <option value="beginner">I'm new to AI tools</option>
                <option value="automation">I want to automate my workflow</option>
                <option value="tutorials">I love hands-on tutorials</option>
                <option value="all">All of the above!</option>
              </Select>
            </InputGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Joining...' : 'Join Free'}
            </SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
      {showNotification && (
        <SuccessNotification>
          <CheckIcon>✓</CheckIcon>
          <span>Welcome to the learning journey!</span>
        </SuccessNotification>
      )}
    </>
  );
};

export default SubscriptionModal;
