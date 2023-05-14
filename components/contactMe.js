import NextLink from 'next/link'
import { Heading, Box, Link, } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const CMTitle = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/works">
      Contact Me
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>

)