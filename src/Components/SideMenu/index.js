import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  
  
  function SideMenu() {
    
  
    
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
           
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