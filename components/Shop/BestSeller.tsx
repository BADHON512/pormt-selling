import { Styles } from '@/Utils/style'
import React from 'react'
import SellerCard from './SellerCard'

type Props = {
  TopSeller:any
}

const BestSeller = ({TopSeller}: Props) => {
  return (
    <div className='mb-10 cursor-pointer'>
        <h1 className={`${Styles.heading} p-2 font-montserrat mb-5`}>
            Top Sellers
        </h1>
        <div className="flex flex-wrap">
          {
            TopSeller&& TopSeller.map((item:any)=>(
              <SellerCard seller={item} key={item.id}/>
            ))
          }
      
    
        </div>
    </div>
  )
}

export default BestSeller