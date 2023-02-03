const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Wheels',
  path: '/wheels',
  component: Layout,
  redirect: '/wheels/statistics',
  meta: {
    title: '轮子库相关统计',
    customIcon: 'logo',
    role: ['admin'],
    requireAuth: true,
    order: 3,
  },
  children: [
    {
      name: 'Statistics',
      path: 'statistics',
      component: () => import('./statistics/index.vue'),
      meta: {
        title: '统计',
        icon: 'ic:baseline-table-view',
        role: ['admin'],
        requireAuth: true,
        keepAlive: true,
      },
    },
    {
        name: 'Use',
        path: 'use',
        component: () => import('./statistics/index.vue'),
        meta: {
          title: '组件使用情况',
          icon: 'ic:baseline-table-view',
          role: ['admin'],
          requireAuth: true,
          keepAlive: true,
        },
      }
  ],
}
