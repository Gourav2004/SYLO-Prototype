import Topbar from './Topbar';
import Sidebar from './Sidebar';
import PageRouter from '../../pages/PageRouter';

export default function AppShell() {
  return (
    <div className="app-shell active">
      <Topbar />
      <div className="app-body">
        <Sidebar />
        <div className="main">
          <PageRouter />
        </div>
      </div>
    </div>
  );
}
