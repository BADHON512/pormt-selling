import { Styles } from '@/Utils/style'
import React from 'react'
import SellerCard from './SellerCard'

type Props = {}

const BestSeller = (props: Props) => {
  return (
    <div className='mb-10 cursor-pointer'>
        <h1 className={`${Styles.heading} p-2 font-montserrat mb-5`}>
            Top Sellers
        </h1>
        <div className="flex flex-wrap">
        <SellerCard/>
        <SellerCard/>
        <SellerCard/>
        <SellerCard/>
        </div>
    </div>
  )
}

export default BestSeller