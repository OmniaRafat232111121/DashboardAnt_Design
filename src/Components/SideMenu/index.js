import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    PieChartOutlined
  } from "@ant-design/icons";
  import { Menu } from "antd";
  
  import {useNavigate} from 'react-router-dom'
  function SideMenu() {
    const navigate=useNavigate();
    
  
    
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key)
          }}
          
          items={[
            {
              label: "Dashbaord",
              icon: <AppstoreOutlined />,
              key: "/",
            },
            {
              label: "Inventory",
              key: "/inventory",
              icon: <ShopOutlined />,
            },
            {
              label: "Orders",
              key: "/orders",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Customers",
              key: "/customers",
              icon: <UserOutlined />,
            },
          
           
          ]}
        ></Menu>
      </div>
    );
  }
  export default SideMenu;