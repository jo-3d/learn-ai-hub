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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text);
  
  &:hover {
    color: var(--primary);
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: var(--dark);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: var(--text);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
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
  color: var(--dark);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RequiredText = styled.span`
  color: var(--text);
  font-size: 0.9rem;
  font-weight: normal;
  font-style: italic;
`;

const OptionalText = styled.span`
  color: var(--text);
  font-size: 0.9rem;
  font-weight: normal;
  font-style: italic;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  font-size: 1rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    organization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz7hRPTR40hR7nYJUtfW5G9k_xX7-xr-5EnwqCN2GHiOHj7ONZKhFUm9Liz1Zbm3_oS/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Since we're using no-cors mode, we can't read the response directly
      // We'll assume success if we get here
      setSubmitStatus('success');
      setFormData({ name: '', email: '', role: '', organization: '' });
      alert('Thank you for subscribing!');
      onClose();
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
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Join the Hub</Title>
        <Subtitle>
          Get exclusive access to AI insights, resources, and opportunities in healthcare
        </Subtitle>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
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
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="role">Role</Label>
            <Select
              id="role"
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
            >
              <option value="">Select your role</option>
              <option value="healthcare-professional">Healthcare Professional</option>
              <option value="it-professional">IT Professional</option>
              <option value="executive">Healthcare Executive</option>
              <option value="researcher">Researcher</option>
              <option value="vendor">Technology Vendor</option>
              <option value="other">Other</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              type="text"
              value={formData.organization}
              onChange={e => setFormData({ ...formData, organization: e.target.value })}
            />
          </InputGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Joining...' : 'Join Now'}
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SubscriptionModal; 