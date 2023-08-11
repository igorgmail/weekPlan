import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import StyleColorMode from '../StyleColorMode/StyleColorMode';
export default function Navbar() {
  return (
    <Flex w='100%' h='3rem' backgroundColor={'#e6838b'} mb={['1rem', '2rem']} justifyContent={'center'} alignItems={'center'}>
      <StyleColorMode></StyleColorMode>
      <Heading as='h3' size='md' color={'white'}>
        Todo
      </Heading>
    </Flex>
  )
}