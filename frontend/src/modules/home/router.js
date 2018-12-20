export default [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "import" */ './views/Home')
}]
