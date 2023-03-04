import { Badge, Image, Space, Typography } from 'antd'
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { useEffect,useState } from 'react';
import { getComments, getOrders } from '../../API';
const AppHeader = () => {
const [comments,setComments]=useState(0);
const [orders,setOrders]=useState(0)
    useEffect(()=>{
        getComments().then(res=>{
            setComments(res.total)

        })
        getOrders().then((res)=>{
            setOrders(res.total)
        })
    },[])
  return (
    <div className='AppHeader'>
      <Image 
      width={40}
       src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"></Image>
   <Typography.Title style={{fontSize:20,fontFamily:'Poppins'}}>Dashboard</Typography.Title>
   <Space>
    <Badge count={comments}>
    <MailOutlined style={{fontSize:24}}/>
    </Badge>
    <Badge count={orders} >
        <BellFilled style={{fontSize:24}}/>
    </Badge>
    
   </Space>
   
    </div>
  )
}

export default AppHeader
