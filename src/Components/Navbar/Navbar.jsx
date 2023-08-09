import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
export default function Navbar() {
  return (
    <Flex w='100%' h='2rem' backgroundColor={'#e6838b'} mb={'2rem'} justifyContent={'center'}>
      <Heading as='h3' size='md' color={'white'}>
        Todo
      </Heading>
    </Flex>
  )
}