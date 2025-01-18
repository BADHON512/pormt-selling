import { getShopOrders } from '@/actions/orders/getShopOrders'
import { getUser } from '@/actions/user/getUser'
import ShopAllOrders from '@/components/Shop/ShopAllOrders'
import ShopSidebar from '@/components/Shop/ShopSidebar'
import React from 'react'

type Props = {}

const page =async (props: Props) => {
  const sellerId:any=await getUser()
  const ordersData=await getShopOrders({sellerId:sellerId?.user?.id})

  return (
    <div className='flex w-full'>
      <div className="h-screen flex p-2 bg-[#111142] md:w-[20%] 2xl:w-[17%]">
        <ShopSidebar active={3} />
      </div>

      <div className="md:w-[80%] 2xl:w-[83%]">
        <ShopAllOrders isDashboard={false} ordersData={ordersData} />
      </div>
    </div>
  )
}

export default page