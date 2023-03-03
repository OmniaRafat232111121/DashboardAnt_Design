import Typography from 'antd/es/typography/Typography'
import React from 'react'

const AppFooter = () => {
  return (
    <div className='AppFooter'>
     <Typography.Link href="tel:+1234556">
        +123456
     </Typography.Link>
     <Typography.Link 
     href="https://www.google.com"
      target={"_blank"}>
        PrivacyPolicy
     </Typography.Link>
     <Typography.Link href="https://www.google.com" 
     target={"_blank"}>
        Terms to use
     </Typography.Link>
    </div>
  )
}

export default AppFooter
