import { getUserOrders } from '@/actions/orders/getUserOrders';
import React from 'react'
import UserAllOrders from './_page';
import { getUser } from '@/actions/user/getUser';

type Props = {}

const Page = async (props: Props) => {
  const orderData = await getUserOrders();
  const userData= await getUser()

  return (
    <div>
      < UserAllOrders orderData={orderData} user={userData?.user}  isSellerExist={userData?.shop ? true : false} />
    </div>
  )
}

export default Page