export default [
  {
    path: '/',
    component: 'layout/layout',
    meta: { label: '框框1' },
    children: [
      {
        path: '',
        name: 'Home1',
        component: 'views/home1/home1',
        meta: { label: '首页' }
      },
      {
        path: 'home2',
        name: 'Home2',
        component: 'views/home2/home2',
        meta: { label: '首页2' }

      },
      {
        path: 'home3',
        meta: { label: '首页3' },
        children: [
          {
            path: 'home3C',
            name: 'home3C',
            component: 'views/home2/home2',
            meta: { label: '首页3-1' }
          }
        ]
      }
    ]
  },
  {
    path: '/index',
    component: 'layout/layout',
    meta: { label: '框框2' },
    children: [
      {
        path: '',
        name: 'index1',
        component: 'views/home1/home1',
        meta: { label: '框框2首页' }
      },
      {
        path: 'index2',
        name: 'index2',
        component: 'views/home2/home2',
        meta: { label: '框框2首页2' }

      },
      {
        path: 'index3',
        meta: { label: '框框2首页3' },

        children: [
          {
            path: 'index3C',
            name: 'index3C',
            component: 'views/home2/home2',
            meta: { label: '框框2首页3-1' }

          }
        ]
      }
    ]
  }
]
