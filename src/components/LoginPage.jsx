import { useState } from 'react';
import { useApp } from '../context/useApp';

export default function LoginPage() {
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e?.preventDefault();
    const err = login(email, password);
    setError(err || '');
  };

  return (
    <div id="login-page">
      <div className="login-card">
        <div className="login-logo">
          <div className="login-logo-mark">SC</div>
          <div className="login-logo-name">
            SYLO <span>CRM</span>
          </div>
        </div>
        <div className="login-title">Welcome back</div>
        <div className="login-sub">Sign in to your portal</div>
        <form style={{ marginTop: 20 }} onSubmit={handleLogin} noValidate>
          <div className="fg">
            <label htmlFor="login-email">Email Address</label>
            <div className="iw">
              <svg className="ic" viewBox="0 0 16 16">
                <rect x="1" y="3" width="14" height="10" rx="1.5" />
                <path d="M1 4l7 5 7-5" />
              </svg>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="fg">
            <label htmlFor="login-pwd">Password</label>
            <div className="iw">
              <svg className="ic" viewBox="0 0 16 16">
                <rect x="3" y="7" width="10" height="7" rx="1.5" />
                <path d="M5 7V5a3 3 0 0 1 6 0v2" />
              </svg>
              <input
                id="login-pwd"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="err-msg">{error}</div>
          <button type="submit" className="login-btn">
            Sign In →
          </button>
        </form>
        <div className="login-hint">
          <p>Demo Credentials:</p>
          <code>superadmin@sylocrm.com / Sylo@Super123</code>
          <code>admin@techcorp.com / Admin@123</code>
          <code>admin@freshmart.com / Admin@123</code>
          <code>user@techcorp.com / User@123</code>
        </div>
      </div>
    </div>
  );
}
