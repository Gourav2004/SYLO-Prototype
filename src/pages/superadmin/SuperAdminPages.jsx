import { useState, useMemo } from 'react';
import {
  CUSTOMERS,
  ALL_MODULES,
  TICKETS,
  INVOICES,
} from '../../data/dummyData';
import { useApp } from '../../context/useApp';
import { usePrototypeActions } from '../../hooks/usePrototypeActions';
import SearchBox from '../../components/SearchBox';
import { statusBadge, priorityClass } from '../../utils/helpers';
import Toggle from '../../components/Toggle';

const REVENUE_BARS = [60, 75, 50, 90, 80, 100, 85, 95, 70, 88, 92, 100];

export function SADashboard() {
  const actions = usePrototypeActions();

  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Platform Dashboard</div><div className="page-sub">Overview of all activity on SYLO CRM</div></div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" className="btn btn-outline btn-sm" onClick={actions.downloadExport}>Export</button>
          <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddCustomer}>+ Add Customer</button>
        </div>
      </div>
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--blue-s)' }}>👥</div><div className="stat-label">Total Customers</div><div className="stat-val">5</div><div className="stat-change up">↑ 2 this month</div></div>
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--green-s)' }}>💰</div><div className="stat-label">Monthly Revenue</div><div className="stat-val">₹1.18L</div><div className="stat-change up">↑ 12% vs last month</div></div>
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--orange-s)' }}>🧩</div><div className="stat-label">Active Modules</div><div className="stat-val">31</div><div className="stat-change up">↑ 5 this month</div></div>
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--red-s)' }}>🎫</div><div className="stat-label">Open Tickets</div><div className="stat-val">3</div><div className="stat-change down">↑ 1 since yesterday</div></div>
      </div>
      <div className="two-col">
        <div className="card">
          <div className="card-title">Revenue by Month</div>
          <div className="mini-bars">
            {REVENUE_BARS.map((h, i) => (
              <div key={i} className="mini-bar" style={{ height: `${h}%`, background: i === 11 ? 'var(--blue)' : 'var(--blue-s)' }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, color: 'var(--t3)' }}><span>Jan</span><span>Jun</span><span>Dec</span></div>
        </div>
        <div className="card">
          <div className="card-title">Recent Customers</div>
          {CUSTOMERS.slice(0, 3).map((c) => (
            <div key={c.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <div className="avatar-name">
                <div className="av-sm" style={{ background: 'var(--blue)' }}>{c.name[0]}</div>
                <div><div style={{ fontSize: 13, fontWeight: 600 }}>{c.company}</div><div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{c.plan} Plan</div></div>
              </div>
              <span className={`badge ${statusBadge(c.status)}`}>{c.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="two-col">
        <div className="card">
          <div className="card-title">Recent Tickets</div>
          {TICKETS.slice(0, 3).map((t) => (
            <div key={t.id} className="ticket-item">
              <div className={`ticket-priority ${priorityClass(t.priority)}`} />
              <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 500 }}>{t.subject}</div><div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{t.customer} · {t.date}</div></div>
              <span className={`badge ${statusBadge(t.status)}`}>{t.status}</span>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-title">Recent Invoices</div>
          {INVOICES.slice(0, 3).map((inv) => (
            <div key={inv.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <div><div style={{ fontSize: 13, fontWeight: 600 }}>{inv.id}</div><div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{inv.customer}</div></div>
              <div style={{ textAlign: 'right' }}><div style={{ fontSize: 13, fontWeight: 700 }}>{inv.amount}</div><span className={`badge ${statusBadge(inv.status)}`} style={{ fontSize: 10 }}>{inv.status}</span></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function SACustomers() {
  const { navigate } = useApp();
  const actions = usePrototypeActions();
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return CUSTOMERS;
    return CUSTOMERS.filter((c) =>
      c.name.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q),
    );
  }, [search]);

  return (
    <>
      <div className="page-header">
        <div><div className="page-title">All Customers</div><div className="page-sub">{CUSTOMERS.length} registered businesses</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddCustomer}>+ Add Customer</button>
      </div>
      <div className="table-wrap">
        <div className="table-header">
          <div className="table-title">Customer List</div>
          <SearchBox value={search} onChange={setSearch} placeholder="Search customers..." />
        </div>
        <table>
          <thead><tr><th>Customer</th><th>Plan</th><th>Modules</th><th>Balance</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td><div className="avatar-name"><div className="av-sm" style={{ background: 'var(--blue)' }}>{c.name[0]}</div><div><div style={{ fontWeight: 600 }}>{c.name}</div><div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{c.company} · {c.id}</div></div></div></td>
                <td><span className="badge badge-blue">{c.plan}</span></td>
                <td>{c.modules} Active</td>
                <td style={{ fontWeight: 600 }}>{c.balance}</td>
                <td><span className={`badge ${statusBadge(c.status)}`}>{c.status}</span></td>
                <td><button type="button" className="link-btn" onClick={() => navigate('customer_detail', c)}>View →</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function SACustomerDetail({ customer }) {
  const { navigate } = useApp();
  const actions = usePrototypeActions();
  const [tab, setTab] = useState('overview');
  const [moduleStates, setModuleStates] = useState({});
  const c = customer;
  if (!c) return null;

  const outColor = c.outstanding === '₹0' ? 'var(--green)' : 'var(--red)';
  const docs = [
    { name: 'GST Certificate', icon: '📄', size: '245 KB' },
    { name: 'KYC Document', icon: '🪪', size: '1.2 MB' },
    { name: 'PAN Copy', icon: '📋', size: '180 KB' },
    { name: 'Bank Details', icon: '🏦', size: '320 KB' },
    { name: 'Cancelled Cheque', icon: '💳', size: '210 KB' },
    { name: 'Contract Agreement', icon: '📜', size: '890 KB' },
  ];

  return (
    <>
      <button type="button" className="back-btn" onClick={() => navigate('customers')}>
        <svg viewBox="0 0 16 16"><path d="M10 3L5 8l5 5" /></svg> Back to Customers
      </button>
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="av-sm" style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--blue)', fontSize: 18 }}>{c.name[0]}</div>
          <div>
            <div className="page-title">{c.name}</div>
            <div className="page-sub">{c.company} · {c.id} · <span className={`badge ${statusBadge(c.status)}`}>{c.status}</span></div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" className="btn btn-outline btn-sm" onClick={() => actions.openEditCustomer(c)}>Edit</button>
          <button type="button" className="btn btn-red btn-sm" onClick={() => actions.suspendCustomer(c)}>Suspend</button>
        </div>
      </div>
      <div className="tabs">
        {[['overview', 'Overview'], ['billing', 'Billing'], ['support', 'Support'], ['modules', 'Modules'], ['docs', 'Documents']].map(([key, label]) => (
          <div key={key} className={`tab${tab === key ? ' active' : ''}`} onClick={() => setTab(key)}>{label}</div>
        ))}
      </div>
      {tab === 'overview' && (
        <div className="two-col">
          <div>
            <div className="card"><div className="card-title">Basic Information</div>
              <div className="info-grid">
                <div className="info-item"><label>Customer Name</label><span>{c.name}</span></div>
                <div className="info-item"><label>Company</label><span>{c.company}</span></div>
                <div className="info-item"><label>Customer ID</label><span>{c.id}</span></div>
                <div className="info-item"><label>Type</label><span>{c.type}</span></div>
                <div className="info-item"><label>GST Number</label><span>{c.gst}</span></div>
                <div className="info-item"><label>PAN Number</label><span>{c.pan}</span></div>
              </div>
            </div>
            <div className="card"><div className="card-title">Contact Details</div>
              <div className="info-grid">
                <div className="info-item"><label>Email</label><span>{c.email}</span></div>
                <div className="info-item"><label>Mobile</label><span>{c.mobile}</span></div>
                <div className="info-item"><label>Website</label><span>{c.website || '—'}</span></div>
                <div className="info-item"><label>Landline</label><span>{c.landline || '—'}</span></div>
              </div>
            </div>
            <div className="card"><div className="card-title">Address</div>
              <div className="info-grid">
                <div className="info-item"><label>Address</label><span>{c.address1}, {c.address2}</span></div>
                <div className="info-item"><label>City / State</label><span>{c.city}, {c.state}</span></div>
                <div className="info-item"><label>PIN Code</label><span>{c.pin}</span></div>
                <div className="info-item"><label>Country</label><span>{c.country}</span></div>
              </div>
            </div>
          </div>
          <div>
            <div className="card"><div className="card-title">Payment Information</div>
              <div className="info-grid">
                <div className="info-item"><label>Payment Terms</label><span>{c.paymentTerms}</span></div>
                <div className="info-item"><label>Credit Limit</label><span>{c.credit}</span></div>
                <div className="info-item"><label>Currency</label><span>{c.currency}</span></div>
                <div className="info-item"><label>Outstanding</label><span style={{ color: outColor }}>{c.outstanding}</span></div>
              </div>
            </div>
            <div className="card"><div className="card-title">Subscription</div>
              <div className="info-grid">
                <div className="info-item"><label>Active Plan</label><span className="badge badge-blue">{c.plan}</span></div>
                <div className="info-item"><label>Active Modules</label><span>{c.modules}</span></div>
                <div className="info-item"><label>Start Date</label><span>{c.subStart}</span></div>
                <div className="info-item"><label>Renewal Date</label><span>{c.renewal}</span></div>
                <div className="info-item"><label>Contract</label><span>{c.contract}</span></div>
              </div>
            </div>
            <div className="card"><div className="card-title">Sales Information</div>
              <div className="info-grid">
                <div className="info-item"><label>Salesperson</label><span>{c.salesperson}</span></div>
                <div className="info-item"><label>Lead Source</label><span>{c.source}</span></div>
                <div className="info-item"><label>Industry</label><span>{c.industry}</span></div>
                <div className="info-item"><label>Category</label><span>{c.category}</span></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {tab === 'billing' && (
        <>
          <div className="alert alert-blue">Showing billing history for {c.company}</div>
          <div className="table-wrap"><table>
            <thead><tr><th>Invoice ID</th><th>Amount</th><th>Date</th><th>Due Date</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>{INVOICES.map((inv) => (
              <tr key={inv.id}><td style={{ fontWeight: 600 }}>{inv.id}</td><td style={{ fontWeight: 700 }}>{inv.amount}</td><td>{inv.date}</td><td>{inv.due}</td><td><span className={`badge ${statusBadge(inv.status)}`}>{inv.status}</span></td><td><button type="button" className="link-btn" onClick={() => actions.downloadInvoice(inv)}>Download</button></td></tr>
            ))}</tbody>
          </table></div>
        </>
      )}
      {tab === 'support' && (
        <div className="card"><div className="card-title">Support Tickets — {c.company}</div>
          {TICKETS.map((t) => (
            <div key={t.id} className="ticket-item">
              <div className={`ticket-priority ${priorityClass(t.priority)}`} />
              <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 500 }}>{t.subject}</div><div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{t.id} · {t.date} · {t.assignee}</div></div>
              <span className={`badge ${statusBadge(t.status)}`}>{t.status}</span>
            </div>
          ))}
        </div>
      )}
      {tab === 'modules' && (
        <>
          <div className="page-header" style={{ marginBottom: 16 }}><div className="page-title" style={{ fontSize: 16 }}>Assigned Modules</div><button type="button" className="btn btn-blue btn-sm" onClick={() => actions.openAssignModule(c.company)}>+ Assign Module</button></div>
          <div className="modules-grid">
            {ALL_MODULES.map((m, i) => {
              const defaultOn = i < c.modules;
              const on = moduleStates[m.id] ?? defaultOn;
              return (
                <div key={m.id} className={`module-card${on ? ' active-mod' : ''}`}>
                  <div className="mod-top"><div className="mod-icon">{m.icon}</div><Toggle on={on} onToggle={() => setModuleStates((s) => ({ ...s, [m.id]: !on }))} /></div>
                  <div className="mod-name">{m.name}</div>
                  <div className="mod-desc">{m.desc}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', marginTop: 8 }}>₹{m.price}/mo</div>
                </div>
              );
            })}
          </div>
        </>
      )}
      {tab === 'docs' && (
        <div className="card"><div className="card-title">Documents & Attachments</div>
          {docs.map((d) => (
            <div key={d.name} className="doc-item">
              <div className="doc-left"><div className="doc-icon">{d.icon}</div><div><div className="doc-name">{d.name}</div><div className="doc-size">{d.size}</div></div></div>
              <button type="button" className="btn btn-outline btn-sm" onClick={() => actions.openViewDocument(d.name)}>View</button>
            </div>
          ))}
          <button type="button" className="btn btn-blue" style={{ marginTop: 14 }} onClick={actions.uploadDocument}>+ Upload Document</button>
        </div>
      )}
    </>
  );
}

export function SAModules() {
  const { enabledModules, toggleMod } = useApp();
  const actions = usePrototypeActions();
  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Module Management</div><div className="page-sub">18 modules available on platform</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddModule}>+ New Module</button>
      </div>
      <div className="modules-grid">
        {ALL_MODULES.map((m) => {
          const on = enabledModules.has(m.id);
          return (
            <div key={m.id} className={`module-card${on ? ' active-mod' : ''}`}>
              <div className="mod-top">
                <div className="mod-icon">{m.icon}</div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--blue)' }}>₹{m.price}/mo</div>
                  <Toggle on={on} onToggle={() => toggleMod(m.id)} />
                </div>
              </div>
              <div className="mod-name">{m.name}</div>
              <div className="mod-desc">{m.desc}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function SABilling() {
  const actions = usePrototypeActions();
  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Billing & Payments</div><div className="page-sub">All invoices across platform</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddInvoice}>+ Generate Invoice</button>
      </div>
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-label">Total Revenue</div><div className="stat-val">₹1.18L</div><div className="stat-change up">↑ This month</div></div>
        <div className="stat-card"><div className="stat-label">Paid</div><div className="stat-val">₹49,900</div><div className="stat-change up">1 invoice</div></div>
        <div className="stat-card"><div className="stat-label">Pending</div><div className="stat-val">₹19,800</div><div className="stat-change">2 invoices</div></div>
        <div className="stat-card"><div className="stat-label">Overdue</div><div className="stat-val">₹74,800</div><div className="stat-change down">2 invoices</div></div>
      </div>
      <div className="table-wrap"><table>
        <thead><tr><th>Invoice</th><th>Customer</th><th>Amount</th><th>Date</th><th>Due</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>{INVOICES.map((inv) => (
          <tr key={inv.id}>
            <td style={{ fontWeight: 600 }}>{inv.id}</td>
            <td>{inv.customer}</td>
            <td style={{ fontWeight: 700 }}>{inv.amount}</td>
            <td>{inv.date}</td>
            <td>{inv.due}</td>
            <td><span className={`badge ${statusBadge(inv.status)}`}>{inv.status}</span></td>
            <td><button type="button" className="link-btn" onClick={() => actions.downloadInvoice(inv)}>Download</button></td>
          </tr>
        ))}</tbody>
      </table></div>
    </>
  );
}

export function SASupport() {
  const actions = usePrototypeActions();
  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Support Tickets</div><div className="page-sub">All tickets across all customers</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddTicket}>+ New Ticket</button>
      </div>
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-label">Total Tickets</div><div className="stat-val">5</div></div>
        <div className="stat-card"><div className="stat-label">Open</div><div className="stat-val">2</div><div className="stat-change down">Needs attention</div></div>
        <div className="stat-card"><div className="stat-label">In Progress</div><div className="stat-val">2</div></div>
        <div className="stat-card"><div className="stat-label">Resolved</div><div className="stat-val">1</div><div className="stat-change up">This week</div></div>
      </div>
      <div className="table-wrap"><table>
        <thead><tr><th>Ticket ID</th><th>Subject</th><th>Customer</th><th>Priority</th><th>Assignee</th><th>Date</th><th>Status</th></tr></thead>
        <tbody>{TICKETS.map((t) => (
          <tr key={t.id}>
            <td style={{ fontWeight: 600 }}>{t.id}</td>
            <td>{t.subject}</td>
            <td>{t.customer}</td>
            <td><span className={`badge ${statusBadge(t.priority)}`}>{t.priority}</span></td>
            <td>{t.assignee}</td>
            <td>{t.date}</td>
            <td><span className={`badge ${statusBadge(t.status)}`}>{t.status}</span></td>
          </tr>
        ))}</tbody>
      </table></div>
    </>
  );
}

export function SASettings() {
  const actions = usePrototypeActions();
  return (
    <>
      <div className="page-title" style={{ marginBottom: 20 }}>Platform Settings</div>
      <div className="two-col">
        <div className="card"><div className="card-title">General Settings</div>
          <div className="fg"><label>Platform Name</label><div className="iw"><input type="text" defaultValue="SYLO CRM" style={{ paddingLeft: 12 }} /></div></div>
          <div className="fg"><label>Support Email</label><div className="iw"><input type="email" defaultValue="support@sylocrm.com" style={{ paddingLeft: 12 }} /></div></div>
          <div className="fg"><label>Default Currency</label><select style={{ paddingLeft: 10 }} defaultValue="INR"><option>INR</option><option>USD</option></select></div>
          <button type="button" className="btn btn-blue" style={{ marginTop: 8 }} onClick={() => actions.saveSettings('General settings')}>Save Settings</button>
        </div>
        <div className="card"><div className="card-title">Tax Settings</div>
          <div className="fg"><label>Default GST Rate</label><select style={{ paddingLeft: 10 }} defaultValue="18%"><option>18%</option><option>12%</option><option>5%</option></select></div>
          <div className="fg"><label>Company GSTIN</label><div className="iw"><input type="text" defaultValue="29AABCS1234N1Z5" style={{ paddingLeft: 12 }} /></div></div>
          <button type="button" className="btn btn-blue" style={{ marginTop: 8 }} onClick={() => actions.saveSettings('Tax settings')}>Save</button>
        </div>
      </div>
    </>
  );
}

