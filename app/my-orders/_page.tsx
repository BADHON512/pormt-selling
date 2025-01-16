"use client"
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { MdPreview } from "react-icons/md";
import { Box } from "@mui/material";
import { MdCloudDownload } from "react-icons/md";
import { Styles } from '@/Utils/style';
import { format} from 'timeago.js';

type Props = {
    orderData:any
}

const UserAllOrders = ({orderData}: Props) => {
  console.log(orderData)
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Prompt Title", flex: 0.8 },
        { field: "price", headerName: "Prompt Price", flex: 0.5 },
        {
          field: "download",
          headerName: "Download Source Code",
          flex: 0.5,
          renderCell: (params: any) => {
        
            return (
              <div className="w-[70%] flex justify-center">
             
                      <MdCloudDownload  className="text-2xl text-white cursor-pointer" />
                  
                
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
              <div className="w-[60%] flex justify-center">
                <MdPreview 
                  className="text-2xl text-white cursor-pointer mt-3"
                  onClick={() => {
                    // setOpen(!open);
                    // setPromptId(params.row.prompt.id);
                  }}
                />
              </div>
            );
          },
        },
      ];


      const rows: any = [];

      orderData&& orderData?.forEach((item: any) => {
        rows.push({
          id: item.id,
          name: item.prompt.name,
          price: item.prompt.price,
          download: item.prompt.download,
          OrderedAt: format(item.createdAt),
        });
      });
      
  return (
    <div>
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
    </div>
  )
}

export default UserAllOrders