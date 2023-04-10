
import { Container , Box, Heading ,Image, useColorModeValue,} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"

const Page = () => {
  return (
    <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} mb={6} p={3} align="center">
            Hello, I&apos;m a full-stack developer. 
        </Box>

        <Box display={{md: "flex"}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Jerry Wan
                </Heading>
                <p>Just me ( Developer / Gamer / Toatally Amazing Person)</p>
            </Box>
            <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align="center">
                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth ="100px" display="inline-block" borderRadius="full" src="/images/unknown.png" alt="Profile Image"/>

            </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>

                Jerry is a freelance and a full-stack developer based in California with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his friends and playing video games. Currently, he is working full time at a private tax preparation office, but he wishes he can work for a company that will need his skill to help people/useres have a better life.

            </Paragraph>
        </Section>
    </Container>
  )
}

export default Page