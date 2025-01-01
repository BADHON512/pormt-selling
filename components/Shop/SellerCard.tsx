import Ratings from '@/Utils/Ratings'
import { Styles } from '@/Utils/style'
import { Avatar, Card } from '@nextui-org/react'
import React from 'react'

type Props = {}

const SellerCard = (props: Props) => {
  return (
  <Card className="py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22]">
     <Avatar src='https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-1/471258664_2255659494814304_2573653259977591654_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=2TdEd4K5Tm0Q7kNvgFrJKG3&_nc_zt=24&_nc_ht=scontent.fdac24-4.fna&_nc_gid=A2ePAAvR_LhscNFk6yhTGet&oh=00_AYCAgOj6PeGbq8Hrd_n0r5wq0QS77-q4nS8Rug_GBoXK_Q&oe=677ADD08' className='w-[80px] h-[80px]'/>
     <span className={`${Styles.label} py-2 text-xl`}>Muhammad badhon</span>
     <div className="flex items-center">
     <span className={`${Styles.label} pr-2`}>4.5-5</span>
     < Ratings rating={5}/>
     </div>
     <span className={`${Styles.label} py-2`}>Total Sales: 512</span>
  </Card>
  )
}

export default SellerCard