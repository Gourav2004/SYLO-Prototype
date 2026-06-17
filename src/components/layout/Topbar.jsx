import { useApp } from '../../context/useApp';
import { usePrototypeActions } from '../../hooks/usePrototypeActions';

export default function Topbar() {
  const { currentUser, logout } = useApp();
  const actions = usePrototypeActions();
  const { role, name, av } = currentUser;

  const portalLabel =
    role === 'superadmin' ? '🔴 Super Admin' : role === 'admin' ? '🟡 Admin Portal' : '🟢 User Portal';
  const portalClass =
    role === 'superadmin' ? 'portal-sa' : role === 'admin' ? 'portal-admin' : 'portal-user';

  return (
    <div className="topbar">
      <div className="topbar-logo">
        <div className="topbar-mark">SC</div>
        <div className="topbar-name">
          SYLO <span>CRM</span>
        </div>
      </div>
      <div className="topbar-right" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span className={`topbar-portal ${portalClass}`}>{portalLabel}</span>
        <div className="topbar-notif" onClick={actions.openNotifications} title="Notifications">
          <svg width="15" height="15" fill="none" stroke="var(--t2)" strokeWidth="2" viewBox="0 0 16 16">
            <path d="M8 1a5 5 0 0 1 5 5v3l1.5 2h-13L3 9V6a5 5 0 0 1 5-5zm-1 13a1 1 0 0 0 2 0" />
          </svg>
          <div className="notif-dot" />
        </div>
        <div className="topbar-avatar">{av}</div>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--t2)' }}>{name}</span>
        <button type="button" className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
