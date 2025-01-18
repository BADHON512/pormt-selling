import React from "react";
import RoutePage from "./_page";
import { getUser } from "@/actions/user/getUser";
import { getAllPrompts } from "@/actions/prompts/getAllPrompts";



const Page = async () => {
  const data = await getUser();
   const allprompts=await getAllPrompts()
   console.log(allprompts)
 
  return (
    <div>
      <RoutePage
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
      />
    </div>
  );
};

export default Page;
