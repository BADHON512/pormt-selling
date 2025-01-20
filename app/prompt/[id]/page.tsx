import React from 'react'
import PromptDetailsPage from './_page'
import { getUser } from '@/actions/user/getUser'
import { getPromptById } from '@/actions/prompts/getPromptById'
import { getPromptsByCategories } from '@/actions/prompts/getPromptsByCategory'
import { stripePublishableKey } from '@/actions/payment/paymentAction'



const page =async ({params}:{params:any}) => {

  const data =await getUser()
  const promptData =await getPromptById(params.id)
  const relatedPromptsData=await getPromptsByCategories(promptData? promptData.category:'')

  const relatedPrompts= relatedPromptsData&& relatedPromptsData.filter((item:any)=>item.id !== promptData?.id)


  const publishableKey=await stripePublishableKey()

  return (
    <div>
      <PromptDetailsPage
      user={data?.user}
      isSellerExist={data?.shop?true:false}
      promptData={promptData}
      relatedPrompts={relatedPrompts}
      publishableKey={publishableKey}
      />
    </div>
  )
}

export default page