export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [{ path: '', component: () => import('pages/index') }],
  },
  {
    path: '/system/information',
    component: () => import('layouts/default'),
    children: [{ path: '', component: () => import('pages/system') }],
  },
  // Always leave this as last one
  {
    path: '*',
    component: () => import('pages/404'),
  },
];
