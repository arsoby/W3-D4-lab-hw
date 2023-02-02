import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
        <Text fontFamily={ 'Lobster '} fontSize={'2rem'}>Live Saudi</Text>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={10}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.900'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={useColorModeValue('#B2F5EA  ', '#1D4044')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'4*2'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text> </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={"Contact With Us on What's Up "}   href={'#' }>
                <a title={"Contact With Us On What's Up "} href="https://wa.me/966562502568" target={'_blank'}><Image borderRadius={15} src='https://cdn-icons-png.flaticon.com/512/124/124034.png'></Image></a>
            </SocialButton> 
            <SocialButton label={'visit Our Channel on YouTube'} href={'#'}>
            <a title={'Visit Our Channel on YouTube'} href="https://www.youtube.com" target={'_blank'}><Image borderRadius={15} src='https://www.vectorico.com/download/social_media/youtube-icon.png' ></Image></a>
            </SocialButton>
            <SocialButton label={'Share Your Experince on twitter'} href={'#'}>
            <a title={'Share Your Experince on twitter'} href="https://twitter.com" target={'_blank'}><Image borderRadius={15} src='https://cdn-icons-png.flaticon.com/512/124/124021.png'></Image></a>
            </SocialButton>
            <SocialButton label={'Share Your Experince on Email'} href={'#'}>
            <a title={'Share Your Experince on Email'} href="mailto:a.r.soby@gmail.com" target={'_blank'}><Image borderRadius={15} src='https://icones.pro/wp-content/uploads/2021/05/icones-de-messagerie-jaune.png' minHeight={'15'}></Image></a>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }