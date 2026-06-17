import { useState, useMemo } from 'react';
import { LEADS, TICKETS } from '../../data/dummyData';
import { QUOTATIONS, PERFORMANCE_CHART } from '../../data/extraDummyData';
import { useApp } from '../../context/useApp';
import { usePrototypeActions } from '../../hooks/usePrototypeActions';
import SearchBox from '../../components/SearchBox';
import { statusBadge, priorityClass } from '../../utils/helpers';

const STAGES = ['New', 'Qualified', 'Proposal', 'Negotiation', 'Won'];

export function UserDashboard() {
  const { currentUser } = useApp();
  const myLeads = LEADS.filter((l) => l.owner === 'Rahul Kumar');

  return (
    <>
      <div className="page-header">
        <div><div className="page-title">My Dashboard</div><div className="page-sub">Welcome back, {currentUser.name}</div></div>
      </div>
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--blue-s)' }}>🎯</div><div className="stat-label">My Leads</div><div className="stat-val">3</div><div className="stat-change up">↑ 1 today</div></div>
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--green-s)' }}>💼</div><div className="stat-label">Won This Month</div><div className="stat-val">₹1.2L</div><div className="stat-change up">↑ 2 deals</div></div>
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--orange-s)' }}>🎫</div><div className="stat-label">My Tickets</div><div className="stat-val">3</div></div>
        <div className="stat-card"><div className="stat-icon" style={{ background: 'var(--purple-s)' }}>📋</div><div className="stat-label">Quotations</div><div className="stat-val">{QUOTATIONS.length}</div></div>
      </div>
      <div className="two-col">
        <div className="card"><div className="card-title">My Leads</div>
          {myLeads.map((l) => (
            <div key={l.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <div><div style={{ fontSize: 13.5, fontWeight: 600 }}>{l.name}</div><div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{l.company}</div></div>
              <div style={{ textAlign: 'right' }}><div style={{ fontSize: 13, fontWeight: 700 }}>{l.value}</div><span className="badge badge-orange" style={{ fontSize: 10 }}>{l.stage}</span></div>
            </div>
          ))}
        </div>
        <div className="card"><div className="card-title">My Tickets</div>
          {TICKETS.slice(0, 3).map((t) => (
            <div key={t.id} className="ticket-item">
              <div className={`ticket-priority ${priorityClass(t.priority)}`} />
              <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 500 }}>{t.subject}</div><div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{t.date}</div></div>
              <span className={`badge ${statusBadge(t.status)}`} style={{ fontSize: 10 }}>{t.status}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function UserLeads() {
  const actions = usePrototypeActions();
  const myLeads = LEADS.filter((l) => l.owner === 'Rahul Kumar');
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return myLeads;
    return myLeads.filter((l) => l.name.toLowerCase().includes(q) || l.company.toLowerCase().includes(q));
  }, [myLeads, search]);

  return (
    <>
      <div className="page-header">
        <div><div className="page-title">My Leads</div><div className="page-sub">Leads assigned to you</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddLead}>+ Add Lead</button>
      </div>
      <div className="table-wrap">
        <div className="table-header">
          <div className="table-title">My Lead List</div>
          <SearchBox value={search} onChange={setSearch} placeholder="Search my leads..." />
        </div>
        <table>
          <thead><tr><th>Lead</th><th>Company</th><th>Value</th><th>Stage</th><th>Source</th><th>Date</th></tr></thead>
          <tbody>{filtered.map((l) => (
            <tr key={l.id}>
              <td style={{ fontWeight: 600 }}>{l.name}</td>
              <td>{l.company}</td>
              <td style={{ fontWeight: 700, color: 'var(--blue)' }}>{l.value}</td>
              <td><span className="badge badge-orange">{l.stage}</span></td>
              <td>{l.source}</td>
              <td>{l.date}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </>
  );
}

export function UserPipeline() {
  const actions = usePrototypeActions();
  return (
    <>
      <div className="page-header"><div className="page-title">Sales Pipeline</div></div>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 10 }}>
        {STAGES.map((stage) => {
          const leads = LEADS.filter((l) => l.stage === stage);
          return (
            <div key={stage} style={{ minWidth: 200, background: 'var(--bg)', borderRadius: 12, padding: 14, border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>{stage} <span style={{ color: 'var(--blue)' }}>({leads.length})</span></div>
              {leads.map((l) => (
                <div key={l.id} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: 12, marginBottom: 8, cursor: 'pointer' }} onClick={() => actions.showToast(`${l.name} — ${l.value} (${l.stage})`)}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{l.name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{l.company}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--blue)', marginTop: 6 }}>{l.value}</div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function UserTickets() {
  const actions = usePrototypeActions();
  return (
    <>
      <div className="page-header">
        <div><div className="page-title">My Tickets</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddTicket}>+ Raise Ticket</button>
      </div>
      <div className="card">
        {TICKETS.map((t) => (
          <div key={t.id} className="ticket-item" style={{ cursor: 'pointer' }} onClick={() => actions.showToast(`${t.id}: ${t.subject} — ${t.status}`)}>
            <div className={`ticket-priority ${priorityClass(t.priority)}`} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 500 }}>{t.subject}</div>
              <div style={{ fontSize: 11.5, color: 'var(--t3)' }}>{t.id} · {t.date}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className={`badge ${statusBadge(t.priority)}`}>{t.priority}</span>
              <span className={`badge ${statusBadge(t.status)}`}>{t.status}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function UserQuotations() {
  const actions = usePrototypeActions();
  const myQuotes = QUOTATIONS.filter((q) => q.customer === 'Deepak Nair' || q.customer === 'Meena Gupta' || q.id === 'QT003');

  return (
    <>
      <div className="page-header">
        <div><div className="page-title">Quotations</div><div className="page-sub">{myQuotes.length} quotes</div></div>
        <button type="button" className="btn btn-blue btn-sm" onClick={actions.openAddQuote}>+ New Quote</button>
      </div>
      <div className="table-wrap"><table>
        <thead><tr><th>Quote ID</th><th>Customer</th><th>Amount</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          {myQuotes.map((q) => (
            <tr key={q.id}>
              <td style={{ fontWeight: 600 }}>{q.id}</td>
              <td>{q.customer} / {q.company}</td>
              <td style={{ fontWeight: 700 }}>{q.amount}</td>
              <td>{q.date}</td>
              <td><span className={`badge ${statusBadge(q.status)}`}>{q.status}</span></td>
              <td><button type="button" className="link-btn" onClick={() => actions.viewQuote(q)}>View →</button></td>
            </tr>
          ))}
        </tbody>
      </table></div>
    </>
  );
}

export function UserReports() {
  return (
    <>
      <div className="page-title" style={{ marginBottom: 20 }}>My Reports</div>
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-label">Leads This Month</div><div className="stat-val">3</div></div>
        <div className="stat-card"><div className="stat-label">Deals Won</div><div className="stat-val">1</div></div>
        <div className="stat-card"><div className="stat-label">Revenue Generated</div><div className="stat-val">₹1.2L</div></div>
        <div className="stat-card"><div className="stat-label">Conversion Rate</div><div className="stat-val">33%</div></div>
      </div>
      <div className="card"><div className="card-title">Monthly Performance</div>
        <div className="mini-bars">
          {PERFORMANCE_CHART.map((h, i) => (
            <div key={i} className="mini-bar" style={{ height: `${h}%`, background: i === 11 ? 'var(--blue)' : 'var(--blue-s)' }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, color: 'var(--t3)' }}><span>Jan</span><span>Jun</span><span>Dec</span></div>
      </div>
    </>
  );
}
