import ReactDOM from 'react-dom';
// 载入默认全局样式 normalize
import '@alifd/next/reset.scss';
// import router from './router';
import HomePage from './pages/HomePage/index';

const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(HomePage(),ICE_CONTAINER);
