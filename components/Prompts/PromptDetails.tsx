import React from 'react'
import PromptDetailsCard from './PromptDetailsCard'
import { p, style } from 'framer-motion/m'
import { Styles } from '@/Utils/style'
import PromptsCard from './PromptsCard'
import SellerBanner from '../Shop/SellerBanner'
import PromptInformation from './PromptInformation'

type Props = {
    promptData: any
    relatedPrompts: any
    stripePromise:any
    clientSecret:string
}

const PromptDetails = ({promptData,relatedPrompts,clientSecret,stripePromise}: Props) => {
    return (
        <div>
            <PromptDetailsCard promptData={promptData} clientSecret={clientSecret} stripePromise={stripePromise}  />
            <br />
            <br />
           <PromptInformation promptData={promptData}/>
            <h1 className={`${Styles.heading} px-2 pb-2 `}>Related Prompts</h1>
            <div className="flex flex-wrap">
                {
                    relatedPrompts?.map((prompt: any, index: number) => (
                        <PromptsCard prompt={prompt} key={index} />
                    ))
                }
            </div>
            <br />
            {
                relatedPrompts?.length ===0 &&(
                    <p className={`${Styles.label} text-center my-5`}>
                        No related prompts found with this category
                    </p>
                )
            }
            <br />
            <br />
             {/* <SellerBanner/> */}
             <br />
        </div>
    )
}

export default PromptDetails