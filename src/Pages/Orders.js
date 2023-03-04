import { Typography,Space,Table, Avatar,Rate } from 'antd'
import React, { useEffect, useState } from 'react'
import {  getOrders } from '../API';

const Inventory = () => {
    const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <div>
         <Typography.Title level={4}>
        Inventory
      </Typography.Title>
    <Space size={20}>
   
      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
           
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          
          {
            title: "Total",
            dataIndex: "total",
          },

          
          
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    </div>
  )
}

export default Inventory
