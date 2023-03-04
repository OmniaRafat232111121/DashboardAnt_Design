import { Typography,Space,Table, Avatar,Rate } from 'antd'
import React, { useEffect, useState } from 'react'
import { getCustomers } from '../API';

const Inventory = () => {
    const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  return (
    <div>
         <Typography.Title level={4}>
        Customers
      </Typography.Title>
    <Space size={20}>
   
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
            
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },

          {
            title: "address",
            dataIndex: "address",
            render:(address)=>{
                return(
                    <span>
                        {address.address},{address.city}
                    </span>
                )
            }
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
