// ApplicationModal.tsx
import React, { useState } from 'react';
import { FaFileUpload, FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { primary } from '@react-monorepo/colors';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [cv, setCv] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<string>('');

  const handleSubmit = () => {
    console.log({ name, email, phone, cv, coverLetter });
    onClose();
    setTimeout(() => { alert('Hồ sơ của bạn đã được gửi đi!'); }, 100);
  };

  if (!isOpen) return null;

  return (
    <div style={modalOverlay}>
      <div style={modal}>
        <h2 style={modalTitle}>Ứng tuyển</h2>

        <div style={formGroup}>
          <label style={label}>
            <FaUser style={icon} />
            Họ và tên *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={input}
            required
          />
        </div>

        <div style={formGroup}>
          <label style={label}>
            <FaEnvelope style={icon} />
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
            required
          />
        </div>

        <div style={formGroup}>
          <label style={label}>
            <FaPhone style={icon} />
            Số điện thoại *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={input}
            required
          />
        </div>

        <div style={formGroup}>
          <label style={label}>
            <FaFileUpload style={icon} />
            Chọn CV *
          </label>
          <input
            type="file"
            onChange={(e) => setCv(e.target.files ? e.target.files[0] : null)}
            style={inputFile}
            required
          />
        </div>

        <div style={formGroup}>
          <label style={label}>Thư giới thiệu:</label>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            style={textarea}
          />
        </div>

        <div style={buttonGroup}>
          <button onClick={handleSubmit} style={submitButton}>
            <FaPaperPlane style={buttonIcon} />
            Nộp hồ sơ ứng tuyển
          </button>
          <button onClick={onClose} style={cancelButton}>
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

// modalts
const modalOverlay: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modal: React.CSSProperties = {
  background: 'white',
  padding: 20,
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  width: '90%', // Responsive width
  maxWidth: '400px', // Maximum width
  overflow: 'hidden', // Prevent content from overflowing
};

const modalTitle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: 20,
  fontSize: '20px',
  fontWeight: 'bold',
};

const formGroup: React.CSSProperties = {
  marginBottom: 15,
  width: '100%',
};

const label: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
};

const input: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: 4,
  marginTop: 5,
  boxSizing: 'border-box', // Ensure padding is included in width
};

const inputFile: React.CSSProperties = {
  display: 'block',
  marginTop: 5,
};

const textarea: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: 4,
  height: '80px',
  resize: 'none',
  marginTop: 5,
  boxSizing: 'border-box', // Ensure padding is included in height
};

const buttonGroup: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 20,
};

const submitButton: React.CSSProperties = {
  backgroundColor: primary,
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  borderRadius: 5,
  cursor: 'pointer',
  flex: 1,
  marginRight: 5,
};

const cancelButton: React.CSSProperties = {
  backgroundColor: 'lightgrey',
  color: '#333',
  border: 'none',
  padding: '10px 15px',
  borderRadius: 5,
  cursor: 'pointer',
  flex: 1,
};

const buttonIcon: React.CSSProperties = {
  marginRight: 8,
};

const icon: React.CSSProperties = {
  marginRight: 8,
  color: primary,
};

export default ApplicationModal;
