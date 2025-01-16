import { getUserOrders } from '@/actions/orders/getUserOrders';
import React from 'react'
import UserAllOrders from './_page';

type Props = {}

const Page =async (props: Props) => {
const orderData=await getUserOrders();

  return (
    <div>
< UserAllOrders orderData={orderData}/>
    </div>
  )
}

export default Page