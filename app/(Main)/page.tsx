import React from "react";
import RoutePage from "./_page";
import { getUser } from "@/actions/user/getUser";
import { getAllPrompts } from "@/actions/prompts/getAllPrompts";
import {  topSeller } from "@/actions/topSeller/topSeller";



const Page = async () => {
  const data = await getUser();
     const TopSeller =await topSeller()
   const allPrompts=await getAllPrompts()
 


  

  return (
    <div>
      <RoutePage
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
        TopSeller={TopSeller}
        allPrompts={allPrompts}
      />
    </div>
  );
};

export default Page;
