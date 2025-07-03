import React, { useState, useEffect } from 'react';
import './Headertop.css';
import Modal from 'react-modal';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';

Modal.setAppElement('#root');

function Headertop() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [authType, setAuthType] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const openModal = (type) => {
    setAuthType(type);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Logged in with Google!');
      closeModal();
    } catch (error) {
      console.error('Google login failed:', error.message);
      alert('Google login failed: ' + error.message);
    }
  };

  const handleSubmit = async () => {
    if (!email || !password || (authType === 'signup' && (!fullName || !confirmPassword))) {
      alert('Please fill all fields.');
      return;
    }
    if (authType === 'signup' && password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      if (authType === 'signup') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });
        alert('Sign up successful!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
      }
      closeModal();
    } catch (error) {
      console.error(`${authType} failed:`, error.message);
      alert(`${authType === 'signup' ? 'Sign up' : 'Login'} failed: ${error.message}`);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert('Please enter your email to reset password');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent!');
    } catch (error) {
      console.error('Reset failed:', error.message);
      alert('Reset failed: ' + error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    alert('Logged out');
  };

  return (
    <div className='Headertop animate__animated animate__fadeInDown'>
      <div className="headertop-title">
        <h1 className="main-title">INYAS Symposium 2025</h1>
        <p className="subtitle">Advances in Science and Technology for Sustainable Future (ASTSF)</p>
      </div>

      <div className="headertop-right">
        {user ? (
          <div className="user-info">
            <span className="user-name">{user.displayName || user.email}</span>
            <button className="auth-button" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <button className="auth-button" onClick={() => openModal('login')}>Login</button>
            <button className="auth-button" onClick={() => openModal('signup')}>Sign Up</button>
          </>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-header">
          <h2>{authType === 'login' ? 'Login' : 'Sign Up'}</h2>
          <button onClick={closeModal} className="close-button">&times;</button>
        </div>

        <div className="modal-content">
          {authType === 'signup' && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button className="submit-button" onClick={handleSubmit}>Sign Up</button>
              <div className="switch-auth">
                Already have an account?{' '}
                <span onClick={() => setAuthType('login')} className="auth-link">Login</span>
              </div>
            </>
          )}

          {authType === 'login' && (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div style={{ textAlign: 'right', fontSize: '0.85rem', marginTop: '4px' }}>
                <button
                  onClick={handleForgotPassword}
                  style={{ border: 'none', background: 'none', color: '#007BFF', cursor: 'pointer' }}
                >
                  Forgot Password?
                </button>
              </div>
              <button className="submit-button" onClick={handleSubmit}>Login</button>
              <div className="or-divider">OR</div>
              <button className="google-button" onClick={handleGoogleLogin}>
                <FcGoogle size={20} style={{ marginRight: '8px' }} />
                Continue with Google
              </button>
              <div className="switch-auth">
                New here?{' '}
                <span onClick={() => setAuthType('signup')} className="auth-link">Create an account</span>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default Headertop;
