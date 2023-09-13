import React from 'react'

import { Box, Stack, Image, Link, Text } from '@chakra-ui/react'

const Contact = () => {
  return (
    <Box h = '250px' id = 'contact'>



    <Stack align = 'center' borderRadius = '10px' p = '20px'  py = '30px' m = 'auto' bg = 'blue.800' w = '270px' justify={'space-between'}>


         <Box display = 'flex'> 

              <Text>Linked In :</Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          
              <Link id="contact-linkedin" isExternal href = 'https://www.linkedin.com/in/ravi-shukla-883b771b2/'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '30px' src = 'linkedin.png'></Image> </Link>

          </Box>

          <Box display = 'flex'>

              <Text>Github :</Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <Link id="contact-github" isExternal href = 'https://github.com/ravishukla21'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '40px' src = 'github.png'></Image> </Link>

          </Box>


          <Box display = 'flex'>

                <Text>Email :</Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Link  id="contact-email" isExternal href = 'mailto:ravi21.434@gmail.com'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '35px' src = 'gmail.png'></Image>  </Link>

          </Box>

          <Box display = 'flex'>

              <Text>Whatsapp :</Text>&nbsp;&nbsp;&nbsp;

              <Link isExternal href = 'https://wa.me/+919773942736'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '35px' src = 'whatsapp.png'></Image>  </Link>

          </Box>

          <Box display = 'flex'>

              <Text>Phone No :</Text>&nbsp;&nbsp;&nbsp;

              <Link  id="contact-phone" isExternal href = 'tel:9773942736'>  <Image _hover = {{cursor : 'pointer', transform:'scale(1.1)',transition : 'all 0.4s'}} w = '35px' src = 'Phone.png'></Image>  </Link>

         
          </Box>
    
          <Link  id="contact-phone" isExternal href = 'tel:9773942736'> <Text>+91 9773942736</Text></Link>


    </Stack>
      



    </Box>
  )
}

export default Contact