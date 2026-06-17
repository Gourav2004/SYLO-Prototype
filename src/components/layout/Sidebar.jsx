import { SIDEBARS } from '../../data/dummyData';
import { useApp } from '../../context/useApp';

export default function Sidebar() {
  const { currentUser, activeNav, navigate } = useApp();
  const items = SIDEBARS[currentUser.role] || [];

  return (
    <div className="sidebar">
      {items.map((item, i) => {
        if (item.section) {
          return (
            <div key={`section-${item.section}-${i}`} className="sidebar-section">
              {item.section}
            </div>
          );
        }
        return (
          <div
            key={item.key}
            className={`sidebar-item${activeNav === item.key ? ' active' : ''}`}
            onClick={() => navigate(item.key)}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 16 16" dangerouslySetInnerHTML={{ __html: item.icon }} />
            {item.label}
            {item.badge && <span className="sidebar-badge">{item.badge}</span>}
          </div>
        );
      })}
    </div>
  );
}
