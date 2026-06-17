import { useApp } from '../context/useApp';

export default function Toast() {
  const { toast } = useApp();
  if (!toast) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 300,
        background: 'var(--text)',
        color: '#fff',
        padding: '12px 18px',
        borderRadius: 10,
        fontSize: 13,
        fontWeight: 500,
        boxShadow: '0 8px 24px rgba(0,0,0,.15)',
        animation: 'mIn .2s ease',
        maxWidth: 360,
      }}
    >
      {toast}
    </div>
  );
}
