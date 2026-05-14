export const services = [
  { key: 'extensions',  label: 'Extensions',  to: '/extensions' },
  { key: 'conversions', label: 'Conversions', to: '/conversions' },
  { key: 'new-builds',  label: 'New Builds',  to: '/new-builds' },
  { key: 'other',       label: 'Other',       to: '/other' },
]

export const servicesData = {
  extensions: [
    { label: 'Rear & Side Extensions',   to: '/extensions' },
    { label: 'Single-Storey Extensions', to: '/extensions' },
    { label: 'Double-Storey Extensions', to: '/extensions' },
  ],
  conversions: [
    { label: 'Loft Conversions',     to: '/conversions' },
    { label: 'Garage Conversions',   to: '/conversions' },
    { label: 'Basement Conversions', to: '/conversions' },
  ],
  'new-builds': [
    { label: 'Residential New Builds', to: '/new-builds' },
    { label: 'Custom Home Design',     to: '/new-builds' },
  ],
  other: [
    { label: 'Planning & Compliance', to: '/other' },
    { label: 'Interior Design',       to: '/other' },
  ],
}