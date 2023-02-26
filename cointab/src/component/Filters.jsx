import { Box, Button, Input, Select } from '@chakra-ui/react'

import React, { useState } from 'react'

export default function Filters({setnat,setGender}) {
    let [data,setdata]=useState("")
  return (
    <Box display="flex" alignItems={"center"} textAlign="center" p="2%" gap="10" color={"black"} fontWeight="bold">
        <Select color={"black"} w="50%" onChange={(e)=>setGender(e.target.value)}>
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </Select>
        <Box display="flex" w="50%" textAlign={"center"} gap="2">
             filter by Contry-Code
            <Input color={"black"} 
            w="50%"
            placeholder='filter by Contry-Code' value={data} onChange={(e)=>setdata(e.target.value)}/>
            
            <Button variant={'outline'} onClick={(e)=>setnat(data)}>Filter</Button>
        </Box>
    </Box>
  )
}
