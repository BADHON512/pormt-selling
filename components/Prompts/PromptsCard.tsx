import { Avatar, Card, Divider } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import coverPhoto from "@/public/Assets/marquee/Loathsome Humanoids in the style of Bernie Wrights.webp";
import chatGpt from "@/public/Assets/chat.png";
import badhon from "@/public/Assets/badhon.jpg";
import { Styles } from '@/Utils/style';
import Ratings from '@/Utils/Ratings';
import Link from 'next/link';

type Props = {}

const PromptsCard = (props: Props) => {
  return (
    <Card radius='lg'
      className='w-full md:w-[30%] 2xl:w-[23%] max-h-[410px] p-4 bg-[#130f23] m-3'>
      <div className="relative">
        <Image src={coverPhoto} alt='img not found' className='w-full max-h-[200px] object-cover' width={300} height={300}/>
        <div className="absolute  bottom-2 left-2">
          <div className="w-max bg-black hover:bg-[#16252] duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl">
            <Image src={chatGpt} alt='img not found' height={25} width={25}/>
             <span className={`${Styles.label} pl-2 text-white`}>Chatgpt</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between py-2">
        <h1 className={`${Styles.label} text-[18px]  text-white`}> Animal Prompts</h1>
        <p className={`${Styles.paragraph}`}>${2.99}</p>
      </div>
       <Divider className="bg-[#ffffff18] my-3"/>
       <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
             <Avatar src={`${badhon}`} alt='img not found'/>
             <span className={`${Styles.label} pl-3`}>@{'badhon'}</span>
             
        </div>
        <Ratings rating={2.3}/>
       </div>
       <br />
       <Link href='/get-prompt' className='w-full'>
       <div
          className={`${Styles.button} !py-2 !px-3 text-center mb-3 w-full text-white bg-transparent border border-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]`}
        >
          Get Prompts
        </div>
       </Link>
    </Card>
  )
}

export default PromptsCard