import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure, useToast } from "@chakra-ui/react"
import axios from "axios"
import React from "react"

export default function AlertLoading() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let toast=useToast()
    const cancelRef = React.useRef()
    async function handleDelete(){
       let res= await axios.delete("http://localhost:8080/users/all")
        toast({
            title: 'All users data is deleted successfully',
            description: "We've removed all users data from the server",
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
          onClose()
    }
    return (
      <>
        <Button variant={"outline"} width={"full"} onClick={onOpen}>
          Delete Customer
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Customer
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red'  ml={3} onClick={handleDelete}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }