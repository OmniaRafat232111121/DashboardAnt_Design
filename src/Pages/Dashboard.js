import { Card, Space, Statistic, Table } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React,{useEffect, useState} from 'react'
import { getCustomers, getInventory, getOrders, getRevenue } from '../API';

import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

const Dashboard = () => {
    const [orders,setOrders]=useState(0);
    const [inventory,setInventory]=useState(0);
    const [revenu,setRevenu]=useState(0);
    const [customers,setCustomers]=useState(0);
   useEffect(()=>{
    getOrders().then((res)=>{
      setOrders(res.total);
      setRevenu(res.discountedTotal)
    });
    getInventory().then((res)=>{
      setInventory(res.total)
    })
    getCustomers().then((res)=>{
      setCustomers(res.total)
    })
   })
  return (
    <div className='type'>
        <Space size={20} direction="vertical">
        <Typography.Title level={4}>
            Dashboard
        </Typography.Title>
        <div>
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
          title={"Inventory"}
          value={inventory}
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
          title={"Revenu"}
          value={revenu}
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
          value={orders}
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
          value={customers}
        />
        

      </Space>
      </div>
      <Space  size={40} direction="horizontal" style={{
       
      }}>
        <RecentOrders/>
       <DashboardChart/>

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

function DashboardChart() {
    const [reveneuData, setReveneuData] = useState({
      labels: [],
      datasets: [],
    });
  
    useEffect(() => {
      getRevenue().then((res) => {
        const labels = res.carts.map((cart) => {
          return `User-${cart.userId}`;
        });
        const data = res.carts.map((cart) => {
          return cart.discountedTotal;
        });
  
        const dataSource = {
          labels,
          datasets: [
            {
              label: "Revenue",
              data: data,
              backgroundColor: "rgba(40, 34,255, 1)",
            },
          ],
        };
  
        setReveneuData(dataSource);
      });
    }, []);
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Order Revenue",
        },
      },
    };

return(
    <Card style={{ width: 400, height: 200 }}>
    <Bar options={options} data={reveneuData} />
  </Card>
)
}
export default Dashboard;

