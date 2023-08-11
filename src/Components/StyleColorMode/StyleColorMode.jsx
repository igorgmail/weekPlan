// Here's the signature
import { useColorModeValue, useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';

// function StyleColorMode() {
//   const { toggleColorMode } = useColorMode()

//   const bg = useColorModeValue('red.500', 'red.200')
//   const color = useColorModeValue('white', 'gray.800')

//   return (
//     <>
//       <Box mb={4} bg={bg} color={color}>
//         This box's style will change based on the color mode.
//       </Box>
//       <Button size='sm' onClick={toggleColorMode}>
//         Toggle Mode
//       </Button>
//     </>
//   )
// }
export default function StyleColorMode() {
  // const value = useColorModeValue(lightModeValue, darkModeValue)
  const { colorMode, toggleColorMode } = useColorMode()



  const colorModeFromLocal = localStorage.getItem('wp_colorMode');

  if (!colorModeFromLocal) {
    localStorage.setItem('wp_colorMode', 'light');
  }

  useEffect(() => {

  }, [colorMode])

  console.log("----RENDER  colorMode:", colorMode);

  localStorage.setItem('wp_colorMode', colorMode);
  return (

    <Button onClick={toggleColorMode} variant={'ghost'} size='md'>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}