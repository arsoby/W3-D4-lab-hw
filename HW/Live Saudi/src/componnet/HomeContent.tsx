import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  SimpleGrid,
  VStack,
  Divider,
  AccordionPanel,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";

export default function SocialProfileWithImage() {
  return (
    //  Frist Part
    <Box>
        <Heading>Our Places</Heading> 

    <SimpleGrid pt={5} columns={3} spacing={20}>
    
        
          <Box height={'470'}
              maxW={"350px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
          >
              <Image
                  h={"200px"}
                  w={'100%'}
                  src={"https://ik.imgkit.net/3vlqs5axxjf/TAW/uploadedImages/All_Destinations/AFME/Africa_-_Middle_East/AlulaSaudiArabia_Hero.jpg?"}
                  objectFit={'cover'} />

              <Box p={0}>
                  <Stack spacing={0} align={"center"} mb={5}>
                      <Heading fontSize={"3xl"} fontWeight={500} mb={2} fontFamily={'Lobster, cursive'}>
                      AlUla
                      </Heading>
                      <Text color={"gray.500"}></Text>
                  </Stack>

                  <Stack direction={"column"} justify={"center"} spacing={6}>
                      <Stack textAlign={'center'} >
                          
                          <Text fontSize={"sm"} color={"gray.500"}  px={2} >
                          There are few places in the world where you can still feel like a true explorer charting the unknown. In many historic destinations, the illusion of discovery is promptly shattered by a jungle of selfie sticks. 
                          </Text>
                      </Stack>
                      <Stack spacing={0} align={"center"}>
                          <Text fontWeight={600}></Text>
                          <Text fontSize={"sm"} color={"gray.500"}>
                              
                          </Text>
                      </Stack>
                  </Stack>

                  <Button
                      w={"full"}
                      mt={4}
                      bg={useColorModeValue("#151f21", "gray.900")}
                      color={"white"}
                      rounded={"md"}
                      _hover={{
                          transform: "translateY(-2px)",
                          boxShadow: "lg",
                      }}
                  >
                      Read More
                  </Button>
              </Box>
          </Box>
      

 {/* Secend Card */}


      
          <Box
          height={'470'}
              maxW={"350px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
          >
              <Image
                  h={"200px"}
                  w={'100%'}
                  src={"https://pbs.twimg.com/media/Drkej1xXcAABZ9n.jpg"}
                  objectFit={'cover'} />

              <Box p={0}>
                  <Stack spacing={0} align={"center"} mb={5}>
                      <Heading fontSize={"3xl"} fontWeight={500} mb={2} fontFamily={'Lobster, cursive'}>
                          Riyadh
                      </Heading>
                      <Text color={"gray.500"}></Text>
                  </Stack>

                   
                      <Stack textAlign={'center'} >
                          
                          <Text fontSize={"sm"} color={"gray.500"}  px={2} >
                          In the ever-growing and flourishing city of Riyadh, you will discover the birthplace of the Kingdom of Saudi Arabia.
                          </Text>

                      </Stack>

                  
                <VStack align={'end'} mt={'83px'}>

                
                  <Button 
                    
                      w={"full"}
                      mt={0}
                      bg={useColorModeValue("#151f21", "gray.900")}
                      color={"white"}
                      rounded={"md"}
                      _hover={{
                          transform: "translateY(-px)",
                          boxShadow: "lg",
                      }}
                  >
                      Read More
                  </Button>
                  </VStack>
              </Box>
          </Box>
      
 {/* Secend Card */}

      
          <Box
              maxW={"350px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
          >
              <Image
                  h={"200px"}
                  w={'100%'}
                  src={"https://mediaim.expedia.com/destination/1/aa781601101e51fb784c4e8221ecf633.jpg"}
                  objectFit={'cover'} />

              <Box p={0}>
                  <Stack spacing={0} align={"center"} mb={5}>
                      <Heading fontSize={"3xl"} fontWeight={500} mb={2} fontFamily={'Lobster, cursive'}>
                      Al jubail
                      </Heading>
                      <Text color={"gray.500"}></Text>
                  </Stack>

                  <Stack direction={"column"} justify={"center"} spacing={6}>
                      <Stack textAlign={'center'} >
                          
                          <Text fontSize={"sm"} color={"gray.500"}  px={2} >
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit, corporis accusamus quam facere quos corrupti quibusdam dolores excepturi. At in quam labore quibusdam iure sequi eum molestias voluptatibus quod!
                          </Text>
                      </Stack>
                      <Stack spacing={0} align={"center"}>
                          <Text fontWeight={600}></Text>
                          <Text fontSize={"sm"} color={"gray.500"}>
                              
                          </Text>
                      </Stack>
                  </Stack>

                  <Button
                      w={"full"}
                      mt={4}
                      bg={useColorModeValue("#151f21", "gray.900")}
                      color={"white"}
                      rounded={"md"}
                      _hover={{
                          transform: "translateY(-2px)",
                          boxShadow: "lg",
                      }}
                  >
                      Read More
                  </Button>
              </Box>
          </Box>
      

      </SimpleGrid>
      <Center height='50px'>
    <Divider orientation='vertical' />
</Center>
    <Heading >necessary Info</Heading>

    <Accordion mt={10} allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton bg={'#B2F5EA'}>
        <Box as="span" flex='1' textAlign='left' >
          Importent Numbers
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
     <Stack direction='row' h='50px' p={2} bg={'#E6FFFA'}>
  
<Text><a href="tel:+">Kingdom Emergency(without the SIM card) 112</a>  </Text><Divider orientation='vertical' />
<Text><a href="tel:998">Civil Defense 998</a> </Text><Divider orientation='vertical' />
<Text><a href="tel:997">Ambulance 997</a> </Text><Divider orientation='vertical' />
<Text><a href="tel:966">Roads Security 966</a> </Text><Divider orientation='vertical' />
<Text><a href="tel:999">Police </a> </Text><Divider orientation='vertical' />
<Text><a href="tel:966">Natural Disasters </a> </Text><Divider orientation='vertical' />
<Text><a href="tel:123">Flying Ambulance</a> </Text>
</Stack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton bg={'#B2F5EA'}>
        <Box as="span" flex='1' textAlign='left' >
          Some Tips
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
     <Stack direction='row' h='50px' p={2} bg={'#E6FFFA'}>
  
<Text><a href="tel:+">Kingdom Emergency(without the SIM card) 112</a>  </Text><Divider orientation='vertical' />
<Text><a href="tel:998">Civil Defense 998</a> </Text><Divider orientation='vertical' />
<Text><a href="tel:997">Ambulance 997</a> </Text><Divider orientation='vertical' />
<Text><a href="tel:966">Roads Security 966</a> </Text><Divider orientation='vertical' />
<Text><a href="tel:999">Police </a> </Text><Divider orientation='vertical' />
<Text><a href="tel:966">Natural Disasters </a> </Text><Divider orientation='vertical' />
<Text><a href="tel:123">Flying Ambulance</a> </Text>
</Stack>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>

  );
}


