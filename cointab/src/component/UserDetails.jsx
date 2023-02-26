import { Box, Img, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filters from './Filters'
import Pagination from './pagination'

let getdata=(page=1,gender="all",nat="null")=>{
    return axios.get(`http://localhost:8080/users?page=${page}&gender=${gender}&nat=${nat}`)
}
export default function UserDetails() {
    let [data,setdata]=useState([])
    let [page,setpage]=useState(1)
    let [gender,setGender]=useState("all")
    let [nat,setnat]=useState(null)

    useEffect(()=>{
        getdata(page,gender,nat).then((res)=>setdata([...res.data]))
    },[page,gender,nat])
  return (
    <Box bgGradient='linear(to-r, blue.900, teal.500)' color={"white"}>  
        <Box>
            <Filters setGender={setGender} setnat={setnat} />
        </Box> 
        <Box >
            <Table colorScheme="twitter">
                <Thead fontSize={"30px"} fontWeight="extrabold" backgroundColor={"facebook.100"}>
                    <Th>Picture</Th>
                    <Th>Name</Th>
                    <Th>Gender</Th>
                    <Th>Phone</Th>
                    <Th>Age</Th>
                    <Th>City</Th>
                    <Th>Country Code</Th>
                </Thead>
                <Tbody>
                    {data?.map((e)=><Tr key={e._id}>
                        <Td><Img borderEndRadius={"full"} w="80px" h="80px" src={e.picture.medium} /></Td>
                        <Td>{e.name.title} {e.name.first} {e.name.last}</Td>
                        <Td>{e.gender}</Td>
                        <Td>{e.cell}</Td>
                        <Td>{e.dob.age} years</Td>
                        <Td>{e.location.city}</Td>
                        <Td>{e.nat}</Td>
                        
                    </Tr>)}
                </Tbody>
            </Table>
        </Box>
        <Box w="100%" p="2%" >
            <Pagination page={page} handlepage={setpage}/>
        </Box>

    </Box>
  )
}
