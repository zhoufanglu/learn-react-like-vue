import {lazy} from 'react'
import {Redirect} from 'react-router-dom'

const Home = lazy(() => import ('../App'))
const feiyanDemo = lazy(() => import ('../study/feiyanDemo/feiyanDemo'))
const father = lazy(() => import ('@/study/father'))
const lifeCycle = lazy(() => import ('@/study/lifeCycle'))
const axiosTest = lazy(() => import ('@/study/axiosTest'))
const slotStudy = lazy(() => import ('@/study/slot/slotStudy'))
const routerStudy = lazy(() => import ('@/study/routerStudy/routerStudy'))
//子路由
const child1 = lazy(() => import ('@/study/routerStudy/child/child1'))
const child2 = lazy(() => import ('@/study/routerStudy/child/child2'))
//reduce
const redux = lazy(() => import ('@/study/redux/redux'))

//分享模块
const shareBefore = lazy(() => import ('@/share/shareBefore'))
const share = lazy(() => import ('@/share/index'))

//hooks学习
const hooks = lazy(() => import ('@/study/hooks/hooks'))

//console.log(21, window.location.hash)

//编写基本的路由路线，path为路径，component为对应渲染的组件，exact属性决定是否精准匹配
const routes = [
  {
    path: "/home",
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: "/",
    name: 'HomeRedirect',
    exact: true,
    render() {
      return <Redirect to="/home"/>
    },
  },
  /*{
    path: "/",
    name: 'HomeRedirect',
    exact: true,
    render(){
      return  <Redirect to="/home" />
    },
  },*/
  {
    path: "/feiyanDemo",
    name: 'feiyanDemo',
    component: feiyanDemo,
    exact: true,
  },
  {
    path: "/fatherChild",
    component: father,
    name: 'father',
    exact: true,
  },
  {
    path: "/lifeCycle",
    component: lifeCycle,
    name: '生命周期',
    exact: true,
  },
  {
    path: "/axiosTest",
    component: axiosTest,
    name: 'axios请求测试',
    exact: true,
  },
  {
    path: "/slotStudy",
    component: slotStudy,
    name: '插槽学习',
    exact: true,
  },
  {
    path: "/routerStudy",
    component: routerStudy,
    name: '路由学习',
    children: [
      {
        path: "/routerStudy",
        //component: routerStudy,
        name: '路由学习',
        exact: true,
        render() {
          return <Redirect to="/routerStudy/child1"/>
        },
      },
      {
        path: "/routerStudy/child1",
        component: child1,
        name: '子1',
      },
      {
        path: "/routerStudy/child2",
        component: child2,
        name: '子2',
      },
    ]
  },
  {
    path: "/redux",
    component: redux,
    name: 'redux学习',
    exact: true,
  },
  {
    path: "/shareBefore",
    component: shareBefore,
    name: 'shareBefore',
    exact: true,
  },
  {
    path: "/share",
    component: share,
    name: 'share',
    exact: true,
  },
  {
    path: "/hooks",
    component: hooks,
    name: 'hooks',
    exact: true,
  }

];

//将路由表数组导出
export default routes
