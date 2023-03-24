import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'gray.100',
          overflowY: "hidden"
        },
      },
    },
  })

  export default theme