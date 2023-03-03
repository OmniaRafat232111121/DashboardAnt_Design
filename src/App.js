import './App.css';
import 'antd/dist/reset.css';
import { Button, Space } from 'antd';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';


function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Space className='SideMenuAnPageContent'>
       <SideMenu/>
       <PageContent/>
      </Space>
      <AppFooter/>

    </div>
  );
}

export default App;
