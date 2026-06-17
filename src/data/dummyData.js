export const USERS = {
  'superadmin@sylocrm.com': { pwd: 'Sylo@Super123', role: 'superadmin', name: 'Super Admin', av: 'SA' },
  'admin@techcorp.com': { pwd: 'Admin@123', role: 'admin', name: 'TechCorp Admin', av: 'TC', company: 'TechCorp Solutions' },
  'admin@freshmart.com': { pwd: 'Admin@123', role: 'admin', name: 'FreshMart Admin', av: 'FM', company: 'FreshMart India' },
  'user@techcorp.com': { pwd: 'User@123', role: 'user', name: 'Rahul Kumar', av: 'RK', company: 'TechCorp Solutions' },
};

export const CUSTOMERS = [
  { id: 'CUS001', name: 'Amit Sharma', company: 'TechCorp Solutions', type: 'Business', email: 'amit@techcorp.com', mobile: '9876543210', city: 'Mumbai', state: 'Maharashtra', plan: 'Growth', status: 'Active', modules: 8, balance: '₹12,500', gst: '27AABCT1332L1ZF', pan: 'AABCT1332L', website: 'techcorp.com', landline: '02212345678', address1: '401 Tech Park', address2: 'Andheri East', pin: '400069', country: 'India', salesperson: 'Vikram Singh', industry: 'Technology', category: 'Enterprise', source: 'Direct', credit: '₹50,000', paymentTerms: '30 Days', currency: 'INR', subStart: '01 Jan 2024', renewal: '31 Dec 2024', contract: '12 Months', outstanding: '₹12,500' },
  { id: 'CUS002', name: 'Priya Mehta', company: 'FreshMart India', type: 'Business', email: 'priya@freshmart.com', mobile: '9845123456', city: 'Pune', state: 'Maharashtra', plan: 'Starter', status: 'Active', modules: 3, balance: '₹0', gst: '27AABCF2221K1ZA', pan: 'AABCF2221K', website: 'freshmart.in', landline: '', address1: '12 Market Road', address2: 'Camp', pin: '411001', country: 'India', salesperson: 'Sneha Joshi', industry: 'Retail', category: 'SMB', source: 'Referral', credit: '₹20,000', paymentTerms: '15 Days', currency: 'INR', subStart: '15 Mar 2024', renewal: '14 Mar 2025', contract: '12 Months', outstanding: '₹0' },
  { id: 'CUS003', name: 'Rajesh Verma', company: 'Logistica Express', type: 'Business', email: 'rajesh@logistica.com', mobile: '9912345678', city: 'Delhi', state: 'Delhi', plan: 'Scale', status: 'Active', modules: 12, balance: '₹45,000', gst: '07AABCL1234M1ZP', pan: 'AABCL1234M', website: 'logistica.in', landline: '01123456789', address1: 'Sector 18', address2: 'Noida', pin: '201301', country: 'India', salesperson: 'Arjun Patel', industry: 'Logistics', category: 'Enterprise', source: 'Campaign', credit: '₹1,00,000', paymentTerms: '45 Days', currency: 'INR', subStart: '01 Oct 2023', renewal: '30 Sep 2024', contract: '24 Months', outstanding: '₹45,000' },
  { id: 'CUS004', name: 'Sunita Rao', company: 'BrightEdu Academy', type: 'Business', email: 'sunita@brightedu.com', mobile: '9765432198', city: 'Bengaluru', state: 'Karnataka', plan: 'Growth', status: 'Suspended', modules: 6, balance: '₹8,200', gst: '29AABCB3456N1ZT', pan: 'AABCB3456N', website: 'brightedu.com', landline: '', address1: 'HSR Layout', address2: 'Sector 4', pin: '560102', country: 'India', salesperson: 'Vikram Singh', industry: 'Education', category: 'SMB', source: 'Website', credit: '₹30,000', paymentTerms: '30 Days', currency: 'INR', subStart: '01 Jun 2024', renewal: '31 May 2025', contract: '12 Months', outstanding: '₹8,200' },
  { id: 'CUS005', name: 'Kiran Desai', company: 'HealthFirst Clinic', type: 'Individual', email: 'kiran@healthfirst.com', mobile: '9823456712', city: 'Chennai', state: 'Tamil Nadu', plan: 'Starter', status: 'Active', modules: 2, balance: '₹0', gst: '33AABCH5678O1ZQ', pan: 'AABCH5678O', website: '', landline: '04423456789', address1: 'Anna Nagar', address2: 'West', pin: '600040', country: 'India', salesperson: 'Sneha Joshi', industry: 'Healthcare', category: 'Individual', source: 'Google Ads', credit: '₹10,000', paymentTerms: 'Immediate', currency: 'INR', subStart: '20 Aug 2024', renewal: '19 Aug 2025', contract: '12 Months', outstanding: '₹0' },
];

export const ALL_MODULES = [
  { id: 'm1', name: 'Lead Management', icon: '🎯', desc: 'Track and manage all incoming leads', price: 499 },
  { id: 'm2', name: 'Sales Pipeline', icon: '📈', desc: 'Visual sales funnel management', price: 599 },
  { id: 'm3', name: 'Quotation Management', icon: '📋', desc: 'Create and send professional quotes', price: 299 },
  { id: 'm4', name: 'Customer Management', icon: '👥', desc: 'Complete customer database', price: 399 },
  { id: 'm5', name: 'Contract/AMC Management', icon: '📜', desc: 'Manage contracts and AMC renewals', price: 449 },
  { id: 'm6', name: 'Rental Management', icon: '🏠', desc: 'Asset rental tracking', price: 499 },
  { id: 'm7', name: 'Asset & Inventory', icon: '📦', desc: 'Inventory and asset tracking', price: 549 },
  { id: 'm8', name: 'Project Management', icon: '🗂️', desc: 'Plan and track projects', price: 699 },
  { id: 'm9', name: 'Service Ticket', icon: '🎫', desc: 'Customer support ticketing', price: 349 },
  { id: 'm10', name: 'Billing & Invoicing', icon: '🧾', desc: 'GST invoicing and billing', price: 499 },
  { id: 'm11', name: 'Payment Follow-up', icon: '💳', desc: 'Automated payment reminders', price: 399 },
  { id: 'm12', name: 'Purchase Management', icon: '🛒', desc: 'Purchase orders and vendors', price: 449 },
  { id: 'm13', name: 'Vendor Management', icon: '🤝', desc: 'Vendor database and tracking', price: 349 },
  { id: 'm14', name: 'HR & Employee Mgmt', icon: '👔', desc: 'Employee records and HR', price: 699 },
  { id: 'm15', name: 'Reports & Dashboard', icon: '📊', desc: 'Advanced analytics', price: 299 },
  { id: 'm16', name: 'Mobile App', icon: '📱', desc: 'Native mobile application', price: 799 },
  { id: 'm17', name: 'WhatsApp & Email', icon: '💬', desc: 'Communication integrations', price: 599 },
  { id: 'm18', name: 'Marketing Mgmt', icon: '📣', desc: 'Campaigns and marketing tools', price: 499 },
];

export const TICKETS = [
  { id: 'TKT001', subject: 'Invoice not generating', customer: 'TechCorp Solutions', priority: 'High', status: 'Open', date: '12 Jun 2024', assignee: 'Support Team' },
  { id: 'TKT002', subject: 'Module access issue', customer: 'FreshMart India', priority: 'Medium', status: 'In Progress', date: '10 Jun 2024', assignee: 'Rahul K' },
  { id: 'TKT003', subject: 'GST report error', customer: 'Logistica Express', priority: 'High', status: 'Resolved', date: '08 Jun 2024', assignee: 'Support Team' },
  { id: 'TKT004', subject: 'Payment gateway timeout', customer: 'BrightEdu Academy', priority: 'Low', status: 'Open', date: '07 Jun 2024', assignee: 'Unassigned' },
  { id: 'TKT005', subject: 'User login blocked', customer: 'HealthFirst Clinic', priority: 'Medium', status: 'In Progress', date: '05 Jun 2024', assignee: 'Rahul K' },
];

export const INVOICES = [
  { id: 'INV001', customer: 'TechCorp Solutions', amount: '₹24,900', date: '01 Jun 2024', due: '30 Jun 2024', status: 'Paid' },
  { id: 'INV002', customer: 'Logistica Express', amount: '₹49,900', date: '01 Jun 2024', due: '14 Jun 2024', status: 'Overdue' },
  { id: 'INV003', customer: 'FreshMart India', amount: '₹9,900', date: '15 Jun 2024', due: '30 Jun 2024', status: 'Pending' },
  { id: 'INV004', customer: 'BrightEdu Academy', amount: '₹24,900', date: '01 May 2024', due: '31 May 2024', status: 'Overdue' },
  { id: 'INV005', customer: 'HealthFirst Clinic', amount: '₹9,900', date: '20 Jun 2024', due: '05 Jul 2024', status: 'Pending' },
];

export const LEADS = [
  { id: 'L001', name: 'Deepak Nair', company: 'AutoHub Ltd', value: '₹85,000', stage: 'Proposal', source: 'Website', date: '10 Jun 2024', owner: 'Rahul Kumar' },
  { id: 'L002', name: 'Meena Gupta', company: 'StarTextiles', value: '₹42,000', stage: 'Negotiation', source: 'Referral', date: '08 Jun 2024', owner: 'Rahul Kumar' },
  { id: 'L003', name: 'Suresh Pillai', company: 'GreenFarms', value: '₹28,000', stage: 'Qualified', source: 'Campaign', date: '05 Jun 2024', owner: 'Sneha Joshi' },
  { id: 'L004', name: 'Kavita Jain', company: 'JainExports', value: '₹1,20,000', stage: 'Won', source: 'Direct', date: '01 Jun 2024', owner: 'Vikram Singh' },
  { id: 'L005', name: 'Mohit Arora', company: 'QuickBuild', value: '₹55,000', stage: 'New', source: 'Google Ads', date: '13 Jun 2024', owner: 'Rahul Kumar' },
];

export const TEAM = [
  { id: 'U001', name: 'Rahul Kumar', email: 'user@techcorp.com', role: 'Sales Executive', status: 'Active', modules: ['Lead Management', 'Sales Pipeline', 'Quotation Management'] },
  { id: 'U002', name: 'Sneha Joshi', email: 'sneha@techcorp.com', role: 'Support Agent', status: 'Active', modules: ['Service Ticket', 'Customer Management'] },
  { id: 'U003', name: 'Vikram Singh', email: 'vikram@techcorp.com', role: 'Account Manager', status: 'Active', modules: ['Lead Management', 'Customer Management', 'Billing & Invoicing'] },
  { id: 'U004', name: 'Anita Patel', email: 'anita@techcorp.com', role: 'HR Manager', status: 'Inactive', modules: ['HR & Employee Mgmt'] },
];

export const DEFAULT_ENABLED_MODULES = ['m1', 'm2', 'm4', 'm9', 'm10', 'm11', 'm15', 'm17'];

export const SIDEBARS = {
  superadmin: [
    { section: 'Main' },
    { key: 'dashboard', icon: '<path d="M2 9l6-6 4 4 4-5"/><rect x="2" y="12" width="3" height="4"/><rect x="7" y="10" width="3" height="6"/><rect x="12" y="8" width="3" height="8"/>', label: 'Dashboard' },
    { key: 'customers', icon: '<circle cx="9" cy="5" r="3"/><path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="5" r="2"/><path d="M19 19c0-2.2-1.3-4-3-5"/>', label: 'Customers' },
    { key: 'modules', icon: '<rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/>', label: 'Modules' },
    { key: 'billing', icon: '<rect x="1" y="4" width="14" height="10" rx="1.5"/><path d="M1 8h14"/><path d="M5 12h2"/>', label: 'Billing / Payment' },
    { key: 'support', icon: '<circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/>', label: 'Support', badge: '5' },
    { section: 'Settings' },
    { key: 'settings', icon: '<circle cx="8" cy="8" r="3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M10.6 10.6L12 12M3 13l1.4-1.4M10.6 5.4L12 4"/>', label: 'Settings' },
  ],
  admin: [
    { section: 'Main' },
    { key: 'dashboard', icon: '<path d="M2 9l6-6 4 4 4-5"/><rect x="2" y="12" width="3" height="4"/><rect x="7" y="10" width="3" height="6"/><rect x="12" y="8" width="3" height="8"/>', label: 'Dashboard' },
    { key: 'leads', icon: '<circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/>', label: 'Leads' },
    { key: 'customers', icon: '<circle cx="9" cy="5" r="3"/><path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6"/>', label: 'Customers' },
    { key: 'billing', icon: '<rect x="1" y="4" width="14" height="10" rx="1.5"/><path d="M1 8h14"/>', label: 'Billing' },
    { key: 'support', icon: '<path d="M2 4h12v9H2z"/><path d="M5 13v3l3-3"/>', label: 'Support', badge: '2' },
    { section: 'Team' },
    { key: 'team', icon: '<circle cx="6" cy="5" r="2.5"/><circle cx="11" cy="5" r="2.5"/><path d="M1 16c0-2.8 2.2-5 5-5h4c2.8 0 5 2.2 5 5"/>', label: 'Team / Users' },
    { key: 'modules', icon: '<rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/>', label: 'My Modules' },
    { section: 'Account' },
    { key: 'myplan', icon: '<path d="M3 6h10M3 10h7M3 14h4"/><rect x="1" y="3" width="14" height="12" rx="1.5"/>', label: 'My Plan' },
  ],
  user: [
    { section: 'My Work' },
    { key: 'dashboard', icon: '<path d="M2 9l6-6 4 4 4-5"/><rect x="2" y="12" width="3" height="4"/><rect x="7" y="10" width="3" height="6"/><rect x="12" y="8" width="3" height="8"/>', label: 'Dashboard' },
    { key: 'leads', icon: '<circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/>', label: 'My Leads' },
    { key: 'pipeline', icon: '<path d="M1 8h4v6H1zM6 5h4v9H6zM11 3h4v11h-4z"/>', label: 'Sales Pipeline' },
    { key: 'tickets', icon: '<path d="M2 4h12v9H2z"/><path d="M5 13v3l3-3"/>', label: 'My Tickets', badge: '3' },
    { section: 'Tools' },
    { key: 'quotations', icon: '<path d="M3 6h10M3 10h7M3 14h4"/><rect x="1" y="3" width="14" height="12" rx="1.5"/>', label: 'Quotations' },
    { key: 'reports', icon: '<path d="M2 14l4-4 3 3 4-6 3 4"/><rect x="1" y="1" width="14" height="14" rx="1"/>', label: 'My Reports' },
  ],
};
