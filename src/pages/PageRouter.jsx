import { useApp } from '../context/useApp';
import {
  SADashboard, SACustomers, SACustomerDetail, SAModules, SABilling, SASupport, SASettings,
} from './superadmin/SuperAdminPages';
import {
  AdminDashboard, AdminLeads, AdminCustomers, AdminBilling, AdminSupport, AdminTeam, AdminModules, AdminMyPlan,
} from './admin/AdminPages';
import {
  UserDashboard, UserLeads, UserPipeline, UserTickets, UserQuotations, UserReports,
} from './user/UserPages';

const PAGES = {
  superadmin: {
    dashboard: SADashboard,
    customers: SACustomers,
    customer_detail: SACustomerDetail,
    modules: SAModules,
    billing: SABilling,
    support: SASupport,
    settings: SASettings,
  },
  admin: {
    dashboard: AdminDashboard,
    leads: AdminLeads,
    customers: AdminCustomers,
    billing: AdminBilling,
    support: AdminSupport,
    team: AdminTeam,
    modules: AdminModules,
    myplan: AdminMyPlan,
  },
  user: {
    dashboard: UserDashboard,
    leads: UserLeads,
    pipeline: UserPipeline,
    tickets: UserTickets,
    quotations: UserQuotations,
    reports: UserReports,
  },
};

export default function PageRouter() {
  const { currentUser, activeNav, selectedCustomer } = useApp();
  const rolePages = PAGES[currentUser.role] || {};
  const Page = rolePages[activeNav];

  if (Page) {
    if (activeNav === 'customer_detail') {
      return <Page customer={selectedCustomer} />;
    }
    return <Page />;
  }

  return <div style={{ padding: 40, textAlign: 'center', color: 'var(--t3)' }}>Page coming soon</div>;
}
