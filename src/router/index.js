const home = r => require.ensure([], () => r(require('../pages/Home')), 'home');
const minePrize = r => require.ensure([], () => r(require('../pages/mine-prize')), 'minePrize');
const prizeDetail = r => require.ensure([], () => r(require('../pages/prize-detail')), 'prizeDetail');
export default [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/mine-prize',
        name: 'minePrize',
        component: minePrize
    },
    {
        path: '/prize-detail',
        name: 'prizeDetail',
        component: prizeDetail
    }
]
