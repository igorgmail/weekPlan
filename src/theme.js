import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({

  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  colors: {
    custom: {
      red: {
        100: "#FFA69E",
      },
      blue: {
        100: "#AED9E0",
      },
      green: {
        100: "#B8F2E6",
      },
      yellow: {
        // 100: "#FAF3DD",
        100: "#c69f2f",
      },
      grey: {
        100: "#5E6472",
      },

    },
  }
});

// // 1. import `extendTheme` function
// import { extendTheme } from '@chakra-ui/react'

// // 2. Add your color mode config
// const config = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// }

// // 3. extend the theme
// const theme = extendTheme({ config })

// colors: {
//   custom: {
//     red: {
//       100: "#b008a0",
//       // ...
//       900: "#1a202c",
//     }

//   },
// }
export default theme