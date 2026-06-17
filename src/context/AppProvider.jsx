import { useState, useCallback, useEffect } from 'react';
import { USERS, DEFAULT_ENABLED_MODULES } from '../data/dummyData';
import { AppContext } from './appContext';

export default function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeNav, setActiveNav] = useState('dashboard');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [enabledModules, setEnabledModules] = useState(() => new Set(DEFAULT_ENABLED_MODULES));
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast(message);
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const login = useCallback((email, password) => {
    const u = USERS[email.trim()];
    if (!u || u.pwd !== password) return 'Invalid email or password.';
    setCurrentUser({ ...u, email: email.trim() });
    setActiveNav('dashboard');
    setSelectedCustomer(null);
    return null;
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    setActiveNav('dashboard');
    setSelectedCustomer(null);
    setModal(null);
    setToast(null);
  }, []);

  const navigate = useCallback((key, customer = null) => {
    setActiveNav(key);
    if (customer) setSelectedCustomer(customer);
    else if (key !== 'customer_detail') setSelectedCustomer(null);
  }, []);

  const toggleMod = useCallback((id) => {
    setEnabledModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const openModal = useCallback((title, body, footer = null) => {
    setModal({ title, body, footer });
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        activeNav,
        selectedCustomer,
        enabledModules,
        modal,
        toast,
        login,
        logout,
        navigate,
        toggleMod,
        openModal,
        closeModal,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
