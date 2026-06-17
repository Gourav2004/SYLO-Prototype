export const QUOTATIONS = [
  { id: 'QT001', customer: 'Deepak Nair', company: 'AutoHub Ltd', amount: '₹85,000', date: '10 Jun 2024', status: 'Sent', items: 'Growth Plan + 5 Modules', validTill: '25 Jun 2024' },
  { id: 'QT002', customer: 'Meena Gupta', company: 'StarTextiles', amount: '₹42,000', date: '08 Jun 2024', status: 'Accepted', items: 'Starter Plan + 3 Modules', validTill: '22 Jun 2024' },
  { id: 'QT003', customer: 'Mohit Arora', company: 'QuickBuild', amount: '₹55,000', date: '13 Jun 2024', status: 'Draft', items: 'Scale Plan + 10 Modules', validTill: '28 Jun 2024' },
];

export const NOTIFICATIONS = [
  { id: 'N1', title: 'New customer registered', desc: 'HealthFirst Clinic signed up for Starter plan', time: '2 hours ago', unread: true },
  { id: 'N2', title: 'Invoice overdue', desc: 'INV002 — Logistica Express ₹49,900', time: '5 hours ago', unread: true },
  { id: 'N3', title: 'Support ticket assigned', desc: 'TKT002 assigned to Rahul K', time: 'Yesterday', unread: false },
  { id: 'N4', title: 'Module activated', desc: 'WhatsApp & Email enabled for TechCorp', time: '2 days ago', unread: false },
  { id: 'N5', title: 'Payment received', desc: 'INV001 paid by TechCorp Solutions', time: '3 days ago', unread: false },
];

export const EXPORT_PREVIEW = {
  filename: 'sylo-crm-export-15-jun-2024.csv',
  rows: 5,
  columns: ['Customer', 'Plan', 'Status', 'Balance', 'Renewal'],
  sample: [
    ['TechCorp Solutions', 'Growth', 'Active', '₹12,500', '31 Dec 2024'],
    ['FreshMart India', 'Starter', 'Active', '₹0', '14 Mar 2025'],
    ['Logistica Express', 'Scale', 'Active', '₹45,000', '30 Sep 2024'],
  ],
};

export const DOCUMENT_PREVIEWS = {
  'GST Certificate': { ref: 'GST/TC/2024/001', uploaded: '12 Jan 2024', verified: 'Yes', note: 'Valid GST registration certificate for TechCorp Solutions.' },
  'KYC Document': { ref: 'KYC/TC/2024/002', uploaded: '12 Jan 2024', verified: 'Yes', note: 'Aadhaar and address proof on file.' },
  'PAN Copy': { ref: 'PAN/AABCT1332L', uploaded: '10 Jan 2024', verified: 'Yes', note: 'Company PAN card copy.' },
  'Bank Details': { ref: 'BNK/HDFC/4521', uploaded: '15 Jan 2024', verified: 'Yes', note: 'HDFC Bank — A/C ****4521, IFSC HDFC0001234' },
  'Cancelled Cheque': { ref: 'CHQ/001', uploaded: '15 Jan 2024', verified: 'Yes', note: 'Cancelled cheque for payout verification.' },
  'Contract Agreement': { ref: 'CTR/2024/TC/001', uploaded: '01 Jan 2024', verified: 'Yes', note: '12-month Growth plan agreement signed.' },
};

export const DUMMY_FORM_DEFAULTS = {
  customer: { name: 'Neha Kapoor', company: 'Skyline Retail', email: 'neha@skyline.com', mobile: '9988776655', plan: 'Growth', type: 'Business' },
  lead: { name: 'Arun Malhotra', company: 'BuildRight Infra', value: '₹65,000', stage: 'New', source: 'Website', owner: 'Rahul Kumar' },
  ticket: { subject: 'Dashboard loading slow', customer: 'TechCorp Solutions', priority: 'Medium', assignee: 'Support Team' },
  invoice: { customer: 'TechCorp Solutions', amount: '₹24,900', due: '30 Jul 2024', items: 'Monthly subscription — Growth Plan' },
  quote: { customer: 'Deepak Nair', company: 'AutoHub Ltd', amount: '₹85,000', items: 'Growth Plan + Lead Management + Billing', validTill: '30 Jun 2024' },
  user: { name: 'Karan Mehta', email: 'karan@techcorp.com', role: 'Sales Executive', modules: 'Lead Management, Sales Pipeline' },
  module: { name: 'Inventory Alerts', desc: 'Low stock and reorder notifications', price: '449', icon: '🔔' },
};

export const PERFORMANCE_CHART = [45, 52, 38, 60, 55, 72, 68, 80, 58, 75, 82, 90];

export const PLAN_UPGRADE = {
  current: { name: 'Growth', price: '₹2,499/mo', modules: 8, users: 25 },
  upgrade: { name: 'Scale', price: '₹4,999/mo', modules: 15, users: 50, features: ['Unlimited reports', 'API access', 'Dedicated manager', 'Custom integrations'] },
};
