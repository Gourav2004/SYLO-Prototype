import { useState, useMemo } from 'react';
import { CUSTOMERS, ALL_MODULES, TICKETS, INVOICES, LEADS, TEAM } from '../../data/dummyData';
import { useApp } from '../../context/useApp';
import { usePrototypeActions } from '../../hooks/usePrototypeActions';
import SearchBox from '../../components/SearchBox';
import { statusBadge, priorityClass } from '../../utils/helpers';
import Toggle from '../../components/Toggle';

const PIPELINE = [
  { stage: 'New', count: 1, pct: 20 },
  { stage: 'Qualified', count: 1, pct: 40 },
  { stage: 'Proposal', count: 1, pct: 60 },
  { stage: 'Negotiation', count: 1, pct: 80 },
  { stage: 'Won', count: 1, pct: 100 },
];

export function AdminDashboard() {
  const { currentUser, enabledModules } = useApp();
  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Dashboard</div><div className="page-sub">{currentUser.company} — Welcome back, {currentUser.name}</div></div>
        <div style={{ fontSize: 13, color: 'var(--t2)' }}>Today: {new Date().toDateString()}</div>
      </div>
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--blue-s)' }}>🎯</div><div className="stat-label">Total Leads</div><div className="stat-val">5</div><div className="stat-change up">↑ 2 this week</div></div>
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--green-s)' }}>💰</div><div className="stat-label">Revenue MTD</div><div className="stat-val">₹2.75L</div><div className="stat-change up">↑ 18%</div></div>
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--orange-s)' }}>🎫</div><div className="stat-label">Open Tickets</div><div className="stat-val">2</div><div className="stat-change down">↑ 1 today</div></div>
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--purple-s)' }}>👥</div><div className="stat-label">Team Members</div><div className="stat-val">4</div><div className="stat-change">3 active</div></div>
      </div>
      <div className="two-col">
        <div className="card"><div className="card-title">Sales Pipeline</div>
          {PIPELINE.map((s) => (
            <div key={s.stage} style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}><span>{s.stage}</span><span style={{ fontWeight: 600 }}>{s.count} lead</span></div>
              <div className="progress"><div className="progress-fill" style={{ width: `${s.pct}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="card"><div className="card-title">Recent Leads</div>
          {LEADS.slice(0, 4).map((l) => (
            <div key={l.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <div><div style={{ fontSize: 13.5, fontWeight: 600 }}>{l.name}</div><div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{l.company}</div></div>
              <div style={{ textAlign: 'right' }}><div style={{ fontSize: 13, fontWeight: 700 }}>{l.value}</div><span className={`badge ${statusBadge(l.stage)}`} style={{ fontSize: 10 }}>{l.stage}</span></div>
            </div>
          ))}
        </div>
      </div>
      <div className="card"><div className="card-title">Active Modules</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[...enabledModules].map((id) => {
            const m = ALL_MODULES.find((x) => x.id === id);
            return m ? <div key={id} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 8, background: 'var(--blue-s)', fontSize: 13, fontWeight: 500 }}>{m.icon} {m.name}</div> : null;
          })}
        </div>
      </div>
    </>
  );
}

export function AdminLeads() {
  const actions = usePrototypeActions();
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return LEADS;
    return LEADS.filter((l) => l.name.toLowerCase().includes(q) || l.company.toLowerCase().includes(q));
  }, [search]);

  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Leads</div><div className="page-sub">{LEADS.length} total leads</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddLead}>+ Add Lead</button>
      </div>
      <div className="table-wrap">
        <div className="table-header">
          <div className="table-title">Lead List</div>
          <SearchBox value={search} onChange={setSearch} placeholder="Search leads..." />
        </div>
        <table>
          <thead><tr><th>Lead</th><th>Company</th><th>Value</th><th>Stage</th><th>Source</th><th>Owner</th><th>Date</th></tr></thead>
          <tbody>{filtered.map((l) => (
            <tr key={l.id}>
              <td style={{ fontWeight: 600 }}>{l.name}</td>
              <td>{l.company}</td>
              <td style={{ fontWeight: 700, color: 'var(--blue)' }}>{l.value}</td>
              <td><span className={`badge ${statusBadge(l.stage)}`}>{l.stage}</span></td>
              <td>{l.source}</td>
              <td>{l.owner}</td>
              <td>{l.date}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </>
  );
}

export function AdminCustomers() {
  const actions = usePrototypeActions();
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return CUSTOMERS;
    return CUSTOMERS.filter((c) => c.name.toLowerCase().includes(q) || c.company.toLowerCase().includes(q) || c.city.toLowerCase().includes(q));
  }, [search]);

  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Customers</div><div className="page-sub">Your customer database</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddCustomer}>+ Add Customer</button>
      </div>
      <div className="table-wrap">
        <div className="table-header">
          <div className="table-title">Customer List</div>
          <SearchBox value={search} onChange={setSearch} placeholder="Search customers..." />
        </div>
        <table>
          <thead><tr><th>Name</th><th>Company</th><th>Mobile</th><th>City</th><th>Balance</th><th>Status</th></tr></thead>
          <tbody>{filtered.map((c) => (
            <tr key={c.id}>
              <td><div className="avatar-name"><div className="av-sm" style={{ background: 'var(--blue)' }}>{c.name[0]}</div>{c.name}</div></td>
              <td>{c.company}</td>
              <td>{c.mobile}</td>
              <td>{c.city}</td>
              <td style={{ fontWeight: 600 }}>{c.balance}</td>
              <td><span className={`badge ${statusBadge(c.status)}`}>{c.status}</span></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </>
  );
}

export function AdminBilling() {
  const actions = usePrototypeActions();
  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Billing</div><div className="page-sub">Invoices and payment history</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddInvoice}>+ New Invoice</button>
      </div>
      <div className="table-wrap"><table>
        <thead><tr><th>Invoice</th><th>Amount</th><th>Date</th><th>Due</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>{INVOICES.map((inv) => (
          <tr key={inv.id}>
            <td style={{ fontWeight: 600 }}>{inv.id}</td>
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

export function AdminSupport() {
  const actions = usePrototypeActions();
  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Support Tickets</div><div className="page-sub">Raise and track support requests</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddTicket}>+ Raise Ticket</button>
      </div>
      <div className="card">
        {TICKETS.slice(0, 4).map((t) => (
          <div key={t.id} className="ticket-item">
            <div className={`ticket-priority ${priorityClass(t.priority)}`} />
            <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 500 }}>{t.subject}</div><div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{t.id} · {t.date} · Assigned to: {t.assignee}</div></div>
            <span className={`badge ${statusBadge(t.status)}`}>{t.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export function AdminTeam() {
  const actions = usePrototypeActions();
  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Team Members</div><div className="page-sub">{TEAM.length} members</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddUser}>+ Add User</button>
      </div>
      <div className="table-wrap"><table>
        <thead><tr><th>Member</th><th>Role</th><th>Modules Access</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>{TEAM.map((u) => (
          <tr key={u.id}>
            <td><div className="avatar-name"><div className="av-sm" style={{ background: 'var(--purple)' }}>{u.name[0]}</div><div><div style={{ fontWeight: 600 }}>{u.name}</div><div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{u.email}</div></div></div></td>
            <td>{u.role}</td>
            <td><div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>{u.modules.map((m) => <span key={m} className="badge badge-blue" style={{ fontSize: 10 }}>{m}</span>)}</div></td>
            <td><span className={`badge ${statusBadge(u.status)}`}>{u.status}</span></td>
            <td><button type="button" className="link-btn" onClick={() => actions.openEditUser(u)}>Edit</button></td>
          </tr>
        ))}</tbody>
      </table></div>
    </>
  );
}

export function AdminModules() {
  const { enabledModules, toggleMod } = useApp();
  return (
    <>
      <div className="page-header">
        <div><div className="page-title">My Modules</div><div className="page-sub">Modules active on your plan</div></div>
      </div>
      <div className="alert alert-blue">You are on the <strong>Growth Plan</strong>. You can activate up to 8 modules. Contact support to upgrade.</div>
      <div className="modules-grid">
        {ALL_MODULES.map((m) => {
          const on = enabledModules.has(m.id);
          return (
            <div key={m.id} className={`module-card${on ? ' active-mod' : ''}`}>
              <div className="mod-top"><div className="mod-icon">{m.icon}</div><Toggle on={on} onToggle={() => toggleMod(m.id)} /></div>
              <div className="mod-name">{m.name}</div>
              <div className="mod-desc">{m.desc}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function AdminMyPlan() {
  const actions = usePrototypeActions();
  const features = ['Up to 8 modules', '25 team members', 'Razorpay & GST built-in', 'WhatsApp integration', 'Priority support'];
  return (
    <>
      <div className="page-title" style={{ marginBottom: 20 }}>My Subscription Plan</div>
      <div className="two-col">
        <div className="card"><div className="card-title">Current Plan</div>
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 13, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: 1 }}>Active Plan</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--blue)', margin: '8px 0' }}>Growth</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>₹2,499<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--t3)' }}>/month</span></div>
            <div style={{ marginTop: 16, fontSize: 13, color: 'var(--t2)' }}>Renewal: <strong>31 Dec 2024</strong></div>
          </div>
          <button type="button" className="btn btn-blue" style={{ width: '100%' }} onClick={actions.openUpgradePlan}>Upgrade to Scale →</button>
        </div>
        <div className="card"><div className="card-title">Plan Features</div>
          {features.map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 13.5 }}><span style={{ color: 'var(--green)' }}>✓</span>{f}</div>
          ))}
        </div>
      </div>
    </>
  );
}
