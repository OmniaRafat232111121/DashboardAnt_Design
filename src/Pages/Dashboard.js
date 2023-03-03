import { Card, Space, Statistic, Table } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React,{useEffect, useState} from 'react'

import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
  } from "@ant-design/icons";
import { getOrders } from '../API';

const Dashboard = () => {
    const [orders,setOrders]=useState(0);
   
  return (
    <div>
        <Space size={20} direction="vertical">
        <Typography.Title level={4}>
            Dashboard
        </Typography.Title>
        <div className='type'>
        <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={100}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={200}
        />
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "brown",
                backgroundColor: "rgba(200, 20 ,20,0.4)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={100}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customer"}
          value={300}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={150}
        />

      </Space>
      </div>
      <Space>
        <RecentOrders/>
      </Space>
        </Space>
    
        
    
    </div>
  )
}
function DashboardCard({title,value,icon}){
    return(
        <>
        <Card>
            
            <Space direction="horizontal">
               {icon}
                <Statistic title={title} value={value} />

            </Space>
        </Card>
        </>
    )
}
function RecentOrders()
{
const [loading,setLoading]=useState(false);
const [dataSource,setDataSource]=useState([])
    useEffect(()=>{
        setLoading(true);
        getOrders().then((res)=>{
           setDataSource(res.products.splice(0,7));
           setLoading(false)
        })
    },[])

    return(
        <Table
        style={{
           
        }}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    )
}
export default Dashboard
