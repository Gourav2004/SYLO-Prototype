import AppProvider from './context/AppProvider';
import { useApp } from './context/useApp';
import LoginPage from './components/LoginPage';
import AppShell from './components/layout/AppShell';
import Modal from './components/Modal';
import Toast from './components/Toast';

function AppContent() {
  const { currentUser } = useApp();
  return (
    <>
      {!currentUser ? <LoginPage /> : <AppShell />}
      <Modal />
      <Toast />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
