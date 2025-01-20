import Ratings from '@/Utils/Ratings'
import { Styles } from '@/Utils/style'
import { Avatar, Card } from '@nextui-org/react'
import React from 'react'

type Props = {
  seller:any
}

const SellerCard = ({seller}: Props) => {
  const randomNumber: number = Math.round( Math.random() * 10)
  const random: number = Math.round(Math.random() *5)

  return (
  <Card className="py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22]">
     <Avatar src={seller?.avatar} className='w-[80px] h-[80px]'/>
     <span className={`${Styles.label} py-2 text-xl`}>{seller?.name}</span>
     <div className="flex items-center">
     <span className={`${Styles.label} pr-2`}>Ratings {random}</span>
     < Ratings rating={random}/>
     </div>
     <span className={`${Styles.label} py-2`}>Total Sale {randomNumber}</span>
  </Card>
  )
}

export default SellerCard