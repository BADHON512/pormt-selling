"use client"
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react'
import { MdPreview } from "react-icons/md";
import { Box } from "@mui/material";
import { MdCloudDownload } from "react-icons/md";
import { Styles } from '@/Utils/style';
import { format } from 'timeago.js';
import { Button } from '@nextui-org/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { newReviews } from '@/actions/Reviews/newReviews';
import toast from 'react-hot-toast';
import Header from '@/components/Header';

type Props = {
  orderData: any
  user:any
  isSellerExist:boolean|undefined
}

const UserAllOrders = ({ orderData,user ,isSellerExist }: Props) => {
  const [open, setOpen] = useState(false)
  const [orderId, setOrderId ]= useState<string>()
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Prompt Title", flex: 0.8 },
    { field: "price", headerName: "Prompt Price", flex: 0.5 },
    {
      field: "download",
      headerName: "Download Source Code",
      flex: 0.5,
      renderCell: (params: any) => {
        const sourchCodeFiles = params.row.download;

        return (
          <div key={params.row.prompt?.id} className="w-[70%] flex justify-center">
            {sourchCodeFiles &&
              sourchCodeFiles.map((file: any) => (
                <a
                  href={`${file.url.replace('/upload/', '/upload/fl_attachment/')}`}
                  key={file.key}
                  download
                  className="flex items-center"
                >
                  <MdCloudDownload className="text-2xl text-white cursor-pointer mt-3" />
                </a>
              ))}
          </div>
        );
      },
    },
    
    {
      field: "OrderedAt",
      headerName: "Ordered At",
      flex: 0.5,
    },
    {
      field: "Review",
      headerName: "Give one Review",
      flex: 0.5,
      renderCell: (params: any) => {
        return (
          <div key={params.row.prompt?.id} className="w-[60%] flex justify-center">
            <MdPreview
              className="text-2xl text-white cursor-pointer mt-3"
              onClick={() => {
                setOpen(!open);
                setOrderId(params.row.prompt?.id);
              }}
            />
          </div>
        );
      },
    },
  ];


  const rows: any = [];

  orderData?.forEach((item: any) => {
    rows.push({
      id: item.id,
      name: item.prompt.name,
      price: item.prompt.price,
      download: item.prompt.promptUrl,
      OrderedAt: format(item.createdAt),
      prompt: item.prompt,

    });
  });

  const reviewHandler =async()=>{
if(rating===0 || review===""){
  toast.error("Please give a rating and review")
}else{
  await newReviews({
    promptId: orderId,
    userId: user.id,
    rating,
    comment:review
  }
)
setReview('')
setRating(0)
setOpen(!open)
}

  console.log(orderId, user.id, rating,review)
  }

  return (
    <div>
      <Header user={user } isSellerExist={isSellerExist}/>
      <div className="w-[90%] m-auto">
        <h1 className={`${Styles.heading} text-center py-5`}>All Orders</h1>
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              outline: "none",
            },
            "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
              color: "#black",
            },
            "& .MuiDataGrid-sortIcon": {
              color: "#fff",
            },
            "& .MuiDataGrid-row": {
              color: "#fff",
              borderBottom: "1px solid #ffffff30!important",
            },
            "& .MuiTablePagination-root": {
              color: "#fff",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none!important",
            },
            "& .name-column--cell": {
              color: "black",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "black",
              borderBottom: "none",
              color: "black",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#1F2A40",
            },
            "& .MuiDataGrid-footerContainer": {
              color: "dark",
              borderTop: "none",
              backgroundColor: "#3e4396",
            },
            "& .MuiCheckbox-root": {
              color: `#b7ebde !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `#fff !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>
      </div>
      {open && (
            <div className="w-full fixed top-0 left-0 z-[9999999] h-screen bg-[#00000020] flex items-center justify-center">
              <div className="md:w-[70%] xl:w-[40%] w-[90%] bg-white shadow rounded p-5">
                <div className="w-full flex justify-end">
                  <RxCross1
                    className="text-2xl text-black cursor-pointer"
                    onClick={() => setOpen(!open)}
                  />
                </div>
                <div className="w-full">
                  <h1
                    className={`${Styles.label} text-black !text-3xl text-center`}
                  >
                    Give One Review
                  </h1>
                  <br />
                  <h5 className={`${Styles.label} !text-black pl-2 mb-1`}>
                    Give a Rating <span className="text-red-500 pl-1">*</span>
                  </h5>
                  <div className="flex w-full ml-2 pb-3">
                    {[1, 2, 3, 4, 5].map((i) =>
                      rating >= i ? (
                        <AiFillStar
                          key={i}
                          className="mr-1 cursor-pointer"
                          color="rgb(246,186,0)"
                          size={25}
                          onClick={() => setRating(i)}
                        />
                      ) : (
                        <AiOutlineStar
                          key={i}
                          className="mr-1 cursor-pointer"
                          color="rgb(246,186,0)"
                          size={25}
                          onClick={() => setRating(i)}
                        />
                      )
                    )}
                  </div>
                  <textarea
                    name="comment"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    id=""
                    cols={40}
                    rows={5}
                    placeholder="Write your comment..."
                    className="outline-none bg-transparent 800px:ml-3 text-black border border-[#00000027] w-[95%] 800px:w-full p-2 rounded text-[18px] font-Poppins"
                  ></textarea>
                  <br />
                  <Button
                    color="primary"
                    className={`${Styles.button} !bg-[#000] mt-5`}
                    onClick={reviewHandler}
                    disabled={orderData
                      ?.find((i: any) => i.promptId === orderId)
                      ?.prompt.reviews.some(
                        (review: any) => review.userId === user?.id
                      )}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          )}


    </div>
  )
}

export default UserAllOrders