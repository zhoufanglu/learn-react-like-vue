import {lazy} from 'react'

const Home = lazy(()=> import ('../App'))
const feiyanDemo = lazy(()=> import ('../study/feiyanDemo/feiyanDemo'))


//编写基本的路由路线，path为路径，component为对应渲染的组件，exact属性决定是否精准匹配
const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/feiyanDemo",
    component: feiyanDemo,
    exact: true,
  },
];

//将路由表数组导出
export default routes
