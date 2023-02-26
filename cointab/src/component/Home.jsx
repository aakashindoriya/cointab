import { Box, Button, Heading, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import AlertLoading from './Lodeing'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Home() {
    let navigate=useNavigate()
    let toast=useToast()
    let [loading,setLoading]=useState(false)
    const handleFetch=async()=>{
        try{
        setLoading(true)
        let res=await axios("http://localhost:8080/users/fetch")
        toast({
            title: 'Fetching Data Successfull',
            description: "We've Stored 50 new user data into database",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top',
            containerStyle: {
                width: '800px',
                maxWidth: '100%',
                height:"80px"
              },
          })
        setLoading(false)
        }catch(e){
            toast({
                title: 'Somthing Went Wrorng',
                description: e,
                status: 'eroor',
                duration: 5000,
                isClosable: true,
              })
        }
        }
        function handleLoading(){
            toast({
                title: 'please be patient',
                description: "we are faching users for you",
                status: 'warning',
                duration: 5000,
                isClosable: true,
              })
        }
        console.log(loading)
  return (
    <Box  w='100%' h="100vh" bgGradient='linear(to-r, teal.100, blue.900)'  
    textAlign={"center"}
   
    >
        <Heading size={"2xl"} marginBottom="10" color={"white"}>Cointab</Heading>
        <Box w="80%" h="50vh" bgGradient='linear(to-r, blue.900, teal.100)'
        borderRadius={'2xl'}
        p="2%"
        m="auto"
        display={"flex"} 
        alignItems="center"
        justifyContent={"space-evenly"}
        gap="10"
        fontFamily={"body"} color="ActiveBorder"
        fontSize={"2xl"}
        >
            <Button  variant={"outline"} width={"full"} onClick={loading?handleLoading:handleFetch}>Fetch Users</Button>
            <AlertLoading />
            {/* <Button variant={"outline"} width={"full"}>Delete Users</Button> */}
           
            <Button variant={"outline"} width={"full"} onClick={()=>navigate("/userdetails")}>User Details</Button>
        </Box>
       
    </Box>
  )
}
