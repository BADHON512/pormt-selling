import { Styles } from '@/Utils/style'
import { Button } from '@nextui-org/react'
import React from 'react'
import { useRouter } from "next/navigation";

type Props = {}

const SellerBanner = (props: Props) => {
  const router = useRouter();
  return (
    <div className="w-full 2xl:w-[80%] 2xl:m-auto h-[30vh] flex items-center justify-center sellers-banner rounded-xl md:m-2">
      <div className="text-center">
        <h1 className={`${Styles.heading} !text-indigo-950 font-montserrat`}>
          Start to selling with us
        </h1>
        <br />
        <br />
        <Button
          className="mb-3 p-6 rounded-md text-xl bg-black text-white font-Inter" 
          onClick={() => router.push("/create-shop")}
        >
          <span>Get Started</span>
        </Button>
      </div>
    </div>
  )
}

export default SellerBanner