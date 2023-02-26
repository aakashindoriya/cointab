import { Box, Button } from '@chakra-ui/react'
import React from 'react'

export default function Pagination({page,handlepage}) {
    let arr=new Array(5).fill(0).map((e,index)=>e=index+1)
  return (
    <Box  display={"flex"} justifyContent="center" gap="2" >
        <Button
        isDisabled={page<=1?true:false}
        variant={"outline"}
        colorScheme="linkedin"
        size={"lg"}
        onClick={()=>handlepage(page=>page-1)}
        >Prev</Button>
        {arr.map((e)=><Button
        isActive={page===e?true:false}
        size={"lg"}
        variant={"outline"}
        colorScheme="linkedin"
        onClick={()=>handlepage(e)}
        >{e}</Button>)}
        <Button
        variant={"outline"}
        colorScheme="linkedin"
        size={"lg"}
        onClick={()=>handlepage(page=>page+1)}
        >Next</Button>
    </Box>
  )
}
