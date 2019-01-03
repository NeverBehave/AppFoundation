export default [{
  path: '/user/profile',
  name: 'Profile',
  component: () => import(/* webpackChunkName: "login" */ './views/Profile')
}]
