import ShopSidebar from '@/components/Shop/ShopSidebar'
import UploadPrompt from '@/components/Shop/UploadPrompt'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='flex w-full'>
            <div className="h-screen flex p-2 bg-[#111142] md:w-[20%] 2xl:w-[17%]">
                <ShopSidebar active={1} />
            </div>

            <div className="md:w-[80%] 2xl:w-[83%]">
                <UploadPrompt />
            </div>
        </div>
    )
}

export default page