import City from '../../components/City'
import NowPlaying from '../../components/NowPlaying'
import ComingSoon from '../../components/ComingSoon'
import Search from '../../components/Search'

export default {
  path: '/movie',
  component: () => import('../../views/Movie'),
  children: [
    { path: 'city', component: City },
    { path: 'search', component: Search },
    { path: 'nowPlaying', component: NowPlaying },
    { path: 'comingSoon', component: ComingSoon }
  ]
}
