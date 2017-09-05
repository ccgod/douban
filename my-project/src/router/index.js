import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import nusicnt from '../components/navigation/nusicnt'
import heat from '../components/heat/heat'
import top from '../components/top/top'
import booknvg from '../components/booknavigation/navaigation'
import moviedetail from '../components/movieDetail/movieDetail'
import headers from '../components/Header/Headers'
import music from '../components/music/music'
import vogue from '../components/musics/vogue/vogue'
import musics from '../components/musics/musics'
import euramerican from '../components/musics/euramerican/euramerican'
import tops from '../components/musics/top/top'
import book from '../components/booknavigation/navaigation'
import synthesise from '../components/book/synthesise'
Vue.use(Router)


//   路由的注册

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'nusicnt',
    //   component: heat,
    // },
    {
      path: '/nusicnt/heat',
      name: 'nusicnt',
      component: nusicnt,
      children:[{
          path:'/nusicnt/heat',
          name: 'heat',
          component: heat,
        },{
          path:'/nusicnt/top',
          name:'nusicntTop',
          component:top
        }
      ]
    },{
      path:'/book',
      name:'book',
      component:book,
      children:[{
          path:'/book/synthesise',
          name:'synthesise',
          component:synthesise
        }
      ]
    },
    {
      path: '/nusicnt',
      name: 'nusicnt',
      component: nusicnt
    },
    {
      path:'/book',
      name:'book',
      component:booknvg
    },
    {
      path:'/moviedetail/:id',
      name:'moviedetail',
      component:moviedetail
    },{
      path: '/music',
      name: 'music',
      component: music,
      children:[{
        path:'/music/vogue',
        name:'vogue',
        component:vogue
      },{
        path:'/music/musics',
        name:'musics',
        component:musics
      },
      ,{
        path:'/music/euramerican',
        name:'euramerican',
        component:euramerican
      },
      ,{
        path:'/music/tops',
        name:'tops',
        component:tops
      },

    ]

    }

  ]

})


