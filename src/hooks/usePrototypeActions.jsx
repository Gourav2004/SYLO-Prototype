import { useMemo } from 'react';
import { useApp } from '../context/useApp';
import { statusBadge } from '../utils/helpers';
import {
  DUMMY_FORM_DEFAULTS,
  DOCUMENT_PREVIEWS,
  EXPORT_PREVIEW,
  NOTIFICATIONS,
  PLAN_UPGRADE,
} from '../data/extraDummyData';

function modalFooter(closeModal, onSave, saveLabel = 'Save') {
  return (
    <>
      <button type="button" className="btn btn-outline" onClick={closeModal}>Cancel</button>
      <button type="button" className="btn btn-blue" onClick={onSave}>{saveLabel}</button>
    </>
  );
}

function field(label, value, type = 'text') {
  return (
    <div className="fg">
      <label>{label}</label>
      <div className="iw">
        <input type={type} defaultValue={value} style={{ paddingLeft: 12 }} />
      </div>
    </div>
  );
}

export function usePrototypeActions() {
  const { openModal, closeModal, showToast } = useApp();

  return useMemo(() => {
    const save = (msg) => {
      closeModal();
      showToast(msg);
    };

    return {
      showToast,
      downloadInvoice: (inv) => showToast(`Downloading ${inv.id}.pdf — ${inv.amount}`),
      downloadExport: () => {
        openModal(
          'Export Preview',
          <>
            <div className="alert alert-blue">File: <strong>{EXPORT_PREVIEW.filename}</strong> · {EXPORT_PREVIEW.rows} records</div>
            <div className="table-wrap">
              <table>
                <thead><tr>{EXPORT_PREVIEW.columns.map((c) => <th key={c}>{c}</th>)}</tr></thead>
                <tbody>
                  {EXPORT_PREVIEW.sample.map((row, i) => (
                    <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>,
          modalFooter(closeModal, () => save(`Export downloaded: ${EXPORT_PREVIEW.filename}`), 'Download CSV'),
        );
      },
      openNotifications: () => {
        openModal(
          'Notifications',
          <>
            {NOTIFICATIONS.map((n) => (
              <div key={n.id} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                {n.unread && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)', marginTop: 6, flexShrink: 0 }} />}
                <div style={{ flex: 1, marginLeft: n.unread ? 0 : 20 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{n.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--t2)', marginTop: 2 }}>{n.desc}</div>
                  <div style={{ fontSize: 11, color: 'var(--t3)', marginTop: 4 }}>{n.time}</div>
                </div>
              </div>
            ))}
          </>,
          <button type="button" className="btn btn-blue" onClick={closeModal}>Mark all read</button>,
        );
      },
      openAddCustomer: (defaults = DUMMY_FORM_DEFAULTS.customer) => {
        const d = defaults;
        openModal(
          'Add Customer',
          <>
            <div className="two-col">
              {field('Customer Name', d.name)}
              {field('Company Name', d.company)}
            </div>
            <div className="two-col">
              {field('Email', d.email, 'email')}
              {field('Mobile', d.mobile, 'tel')}
            </div>
            <div className="two-col">
              <div className="fg"><label>Plan</label><select defaultValue={d.plan}><option>Starter</option><option>Growth</option><option>Scale</option></select></div>
              <div className="fg"><label>Customer Type</label><select defaultValue={d.type}><option>Business</option><option>Individual</option></select></div>
            </div>
          </>,
          modalFooter(closeModal, () => save(`Customer "${d.name}" added successfully (CUS006)`)),
        );
      },
      openEditCustomer: (c) => {
        openModal(
          'Edit Customer',
          <>
            <div className="two-col">
              {field('Customer Name', c.name)}
              {field('Company', c.company)}
            </div>
            <div className="two-col">
              {field('Email', c.email, 'email')}
              {field('Mobile', c.mobile, 'tel')}
            </div>
            <div className="two-col">
              {field('City', c.city)}
              {field('GST Number', c.gst)}
            </div>
          </>,
          modalFooter(closeModal, () => save(`Customer "${c.name}" updated successfully`)),
        );
      },
      suspendCustomer: (c) => {
        openModal(
          'Suspend Customer',
          <p style={{ fontSize: 13.5, color: 'var(--t2)' }}>Suspend <strong>{c.company}</strong>? They will lose portal access until reactivated.</p>,
          <>
            <button type="button" className="btn btn-outline" onClick={closeModal}>Cancel</button>
            <button type="button" className="btn btn-red" onClick={() => save(`${c.company} suspended (demo)`)}>Suspend</button>
          </>,
        );
      },
      openAddLead: () => {
        const d = DUMMY_FORM_DEFAULTS.lead;
        openModal(
          'Add Lead',
          <>
            <div className="two-col">
              {field('Lead Name', d.name)}
              {field('Company', d.company)}
            </div>
            <div className="two-col">
              {field('Deal Value', d.value)}
              {field('Lead Source', d.source)}
            </div>
            <div className="two-col">
              <div className="fg"><label>Stage</label><select defaultValue={d.stage}><option>New</option><option>Qualified</option><option>Proposal</option><option>Negotiation</option><option>Won</option></select></div>
              {field('Owner', d.owner)}
            </div>
          </>,
          modalFooter(closeModal, () => save(`Lead "${d.name}" added (L006)`)),
        );
      },
      openAddTicket: () => {
        const d = DUMMY_FORM_DEFAULTS.ticket;
        openModal(
          'Raise Support Ticket',
          <>
            {field('Subject', d.subject)}
            {field('Customer', d.customer)}
            <div className="two-col">
              <div className="fg"><label>Priority</label><select defaultValue={d.priority}><option>High</option><option>Medium</option><option>Low</option></select></div>
              {field('Assignee', d.assignee)}
            </div>
          </>,
          modalFooter(closeModal, () => save('Ticket TKT006 created successfully')),
        );
      },
      openAddInvoice: () => {
        const d = DUMMY_FORM_DEFAULTS.invoice;
        openModal(
          'Generate Invoice',
          <>
            {field('Customer', d.customer)}
            <div className="two-col">
              {field('Amount', d.amount)}
              {field('Due Date', d.due, 'date')}
            </div>
            <div className="fg"><label>Line Items</label><textarea defaultValue={d.items} style={{ padding: '10px 12px' }} /></div>
          </>,
          modalFooter(closeModal, () => save('Invoice INV006 generated successfully')),
        );
      },
      openAddQuote: () => {
        const d = DUMMY_FORM_DEFAULTS.quote;
        openModal(
          'New Quotation',
          <>
            <div className="two-col">
              {field('Customer', d.customer)}
              {field('Company', d.company)}
            </div>
            <div className="two-col">
              {field('Amount', d.amount)}
              {field('Valid Till', d.validTill)}
            </div>
            <div className="fg"><label>Items</label><textarea defaultValue={d.items} style={{ padding: '10px 12px' }} /></div>
          </>,
          modalFooter(closeModal, () => save('Quotation QT004 sent to customer')),
        );
      },
      openAddUser: () => {
        const d = DUMMY_FORM_DEFAULTS.user;
        openModal(
          'Add Team Member',
          <>
            <div className="two-col">
              {field('Full Name', d.name)}
              {field('Email', d.email, 'email')}
            </div>
            <div className="two-col">
              {field('Role', d.role)}
              {field('Module Access', d.modules)}
            </div>
          </>,
          modalFooter(closeModal, () => save(`User "${d.name}" invited successfully`)),
        );
      },
      openEditUser: (u) => {
        openModal(
          'Edit Team Member',
          <>
            <div className="two-col">
              {field('Full Name', u.name)}
              {field('Email', u.email, 'email')}
            </div>
            {field('Role', u.role)}
            <div className="fg"><label>Status</label><select defaultValue={u.status}><option>Active</option><option>Inactive</option></select></div>
          </>,
          modalFooter(closeModal, () => save(`User "${u.name}" updated successfully`)),
        );
      },
      openAddModule: () => {
        const d = DUMMY_FORM_DEFAULTS.module;
        openModal(
          'New Module',
          <>
            <div className="two-col">
              {field('Module Name', d.name)}
              {field('Monthly Price (₹)', d.price, 'number')}
            </div>
            <div className="fg"><label>Description</label><textarea defaultValue={d.desc} style={{ padding: '10px 12px' }} /></div>
            {field('Icon (emoji)', d.icon)}
          </>,
          modalFooter(closeModal, () => save(`Module "${d.name}" created successfully`)),
        );
      },
      openAssignModule: (company) => {
        openModal(
          'Assign Module',
          <>
            <div className="alert alert-blue">Assign a module to <strong>{company}</strong></div>
            <div className="fg"><label>Select Module</label><select><option>Marketing Mgmt — ₹499/mo</option><option>Project Management — ₹699/mo</option><option>HR & Employee Mgmt — ₹699/mo</option></select></div>
            <div className="fg"><label>Start Date</label><div className="iw"><input type="date" defaultValue="2024-06-15" style={{ paddingLeft: 12 }} /></div></div>
          </>,
          modalFooter(closeModal, () => save('Module assigned successfully')),
        );
      },
      openViewDocument: (docName) => {
        const preview = DOCUMENT_PREVIEWS[docName] || { ref: 'DOC/001', uploaded: '01 Jun 2024', verified: 'Yes', note: 'Document preview.' };
        openModal(
          docName,
          <>
            <div className="info-grid">
              <div className="info-item"><label>Reference</label><span>{preview.ref}</span></div>
              <div className="info-item"><label>Uploaded</label><span>{preview.uploaded}</span></div>
              <div className="info-item"><label>Verified</label><span className="badge badge-green">{preview.verified}</span></div>
            </div>
            <div className="card" style={{ marginTop: 12, marginBottom: 0 }}>
              <div style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6 }}>{preview.note}</div>
            </div>
          </>,
          <>
            <button type="button" className="btn btn-outline" onClick={closeModal}>Close</button>
            <button type="button" className="btn btn-blue" onClick={() => save(`Downloading ${docName}.pdf`)}>Download</button>
          </>,
        );
      },
      uploadDocument: () => save('Document uploaded successfully (demo)'),
      saveSettings: (label = 'Settings') => showToast(`${label} saved successfully`),
      openUpgradePlan: () => {
        const { current, upgrade } = PLAN_UPGRADE;
        openModal(
          'Upgrade to Scale',
          <>
            <div className="two-col">
              <div className="card" style={{ marginBottom: 0 }}>
                <div style={{ fontSize: 12, color: 'var(--t3)', marginBottom: 4 }}>Current — {current.name}</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{current.price}</div>
                <div style={{ fontSize: 12, color: 'var(--t2)', marginTop: 8 }}>{current.modules} modules · {current.users} users</div>
              </div>
              <div className="card active-mod" style={{ marginBottom: 0 }}>
                <div style={{ fontSize: 12, color: 'var(--green)', marginBottom: 4 }}>Upgrade — {upgrade.name}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--blue)' }}>{upgrade.price}</div>
                <div style={{ fontSize: 12, color: 'var(--t2)', marginTop: 8 }}>{upgrade.modules} modules · {upgrade.users} users</div>
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              {upgrade.features.map((f) => (
                <div key={f} style={{ fontSize: 13, padding: '6px 0' }}><span style={{ color: 'var(--green)' }}>✓</span> {f}</div>
              ))}
            </div>
          </>,
          modalFooter(closeModal, () => save('Upgrade request submitted — team will contact you'), 'Request Upgrade'),
        );
      },
      viewQuote: (q) => {
        openModal(
          `Quotation ${q.id}`,
          <>
            <div className="info-grid">
              <div className="info-item"><label>Customer</label><span>{q.customer}</span></div>
              <div className="info-item"><label>Company</label><span>{q.company}</span></div>
              <div className="info-item"><label>Amount</label><span style={{ fontWeight: 700, color: 'var(--blue)' }}>{q.amount}</span></div>
              <div className="info-item"><label>Valid Till</label><span>{q.validTill}</span></div>
              <div className="info-item"><label>Status</label><span className={`badge ${statusBadge(q.status)}`}>{q.status}</span></div>
              <div className="info-item"><label>Date</label><span>{q.date}</span></div>
            </div>
            <div className="fg" style={{ marginTop: 12 }}><label>Items</label><div style={{ fontSize: 13.5 }}>{q.items}</div></div>
          </>,
          <>
            <button type="button" className="btn btn-outline" onClick={closeModal}>Close</button>
            <button type="button" className="btn btn-blue" onClick={() => save(`Quote ${q.id} downloaded`)}>Download PDF</button>
          </>,
        );
      },
    };
  }, [openModal, closeModal, showToast]);
}
