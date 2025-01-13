"use client";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/Utils/Loader";


type PromptsDataTypes = {
  id: string;
  name: string;
  price: string;
  rating: number;
  purchased?: number;
  orders?: any[];
  status: string;
};

// const promptsData = [
//     {
//       id: "1",
//       name: "Prompt One",
//       price: 29.99,
//       rating: 4.5,
//       orders: [{ id: "o1" }, { id: "o2" }],
//       status: "Live",
//     },
//     {
//       id: "2",
//       name: "Prompt Two",
//       price: 49.99,
//       rating: 4.8,
//       orders: [{ id: "o3" }],
//       status: "Pending",
//     },
//     {
//       id: "3",
//       name: "Prompt Three",
//       price: 19.99,
//       rating: 3.9,
//       orders: [],
//       status: "Declined",
//     },
//     {
//       id: "4",
//       name: "Prompt Four",
//       price: 99.99,
//       rating: 5.0,
//       orders: [{ id: "o4" }, { id: "o5" }, { id: "o6" }],
//       status: "Live",
//     },
//   ];
  
const AllPrompts = ({

}) => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Prompts Title", flex: 0.8 },
    { field: "price", headerName: "Prompts Price", flex: 0.5 },
    { field: "rating", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
    },
  ];
  const [promptsData,setPromptsData]=useState([])
  const [loging, setLoading] = useState(true)
  console.log(promptsData)
  useEffect(() => {
    axios.get('/api/get-prompts').then((res)=>{
 setPromptsData(res.data)
 setLoading(false)
    }).catch((error)=>{
        setLoading(false)
        console.log(error)
    })
  
  
  }, [])
  

  const rows: Array<PromptsDataTypes> = [];

  promptsData?.forEach((item:any) => {
    rows.push({
      id: item.id,
      name: item.name,
      price: "$US" + item.price,
      rating: item.rating,
      purchased: item.orders?.length,
      status: item.status,
    });
  });

  const isDashboard: boolean = true;
  return (
    <>
{
    loging?(<Loader/>):(      <Box m="20px">
        <Box
          m="40px 0 0 0"
          height={isDashboard ? "35vh" : "90vh"}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              outline: "none",
            },
            "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
              color: "",
            },
            "& .MuiDataGrid-sortIcon": {
              color: "",
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
              color: "#fff",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#3e4396",
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
      </Box>)
}
    </>
  );
};

export default AllPrompts;
