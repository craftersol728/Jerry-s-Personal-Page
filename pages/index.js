import NextLink from 'next/link'
import { Container , Box, Heading ,Image, useColorModeValue,Link, Button} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection,BioYear } from '../components/bio'

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
            <Box align="center" my={4}>
                <NextLink href="/works" passHref>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                        My Portfolio
                    </Button>
                </NextLink>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>1998</BioYear>
                Born in America
            </BioSection>
            <BioSection>
                <BioYear>2004</BioYear>
                Migrated to China to study Mandarin
            </BioSection>

            <BioSection>
                <BioYear>2011</BioYear>
                Returned to America after mastering teh Chinese language and embraced the culture
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Started his own business and became a top seller on ebay 1 year later
            </BioSection>
            <BioSection>
                <BioYear>2023</BioYear>
                Completed the UC Berkeley Full Stack Coding Bootcamp and became a full-stack developer 
            </BioSection>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I ❤
            </Heading>
            <Paragraph>
                Helping People,Music, Playing and Developing Video Games, Anime, Manga, Movies, Playing Guitar,Pets and learning new coding languages. 
            </Paragraph>
        </Section>










    </Container>
  )
}

export default Page