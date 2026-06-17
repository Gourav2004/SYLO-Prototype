export function statusBadge(status) {
  if (status === 'Active' || status === 'Paid' || status === 'Resolved' || status === 'Won' || status === 'Accepted') return 'badge-green';
  if (status === 'Open' || status === 'Overdue' || status === 'Suspended' || status === 'High') return 'badge-red';
  if (status === 'In Progress' || status === 'Pending' || status === 'Medium' || status === 'Sent' || status === 'Negotiation' || status === 'Proposal' || status === 'Qualified') return 'badge-orange';
  if (status === 'New' || status === 'Draft') return 'badge-blue';
  if (status === 'Low') return 'badge-green';
  return 'badge-blue';
}

export function priorityClass(priority) {
  if (priority === 'High') return 'priority-high';
  if (priority === 'Medium') return 'priority-med';
  return 'priority-low';
}
