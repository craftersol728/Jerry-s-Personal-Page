import NextLink from 'next/link'
import { 
    Container , 
    Box, 
    Heading ,
    Image, 
    List,
    ListItem,
    useColorModeValue,
    Link, 
    Button} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout   from '../components/layouts/article.js'
import { IoLogoGithub,IoLogoDiscord ,IoLogoLinkedin,IoMailSharp } from 'react-icons/io5'
import { BioSection,BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
    <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} mb={6} p={3} align="center">
            Hello, I&apos;m  full-stack developer. 
        </Box>

        <Box display={{md: "flex"}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Jerry Wan
                </Heading>
                <p>Just me ( Developer / Fast Learner / Quick Thinker / Problem Solver)</p>
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
                Returned to America after mastering the Chinese language and embraced the culture
            </BioSection>
            <BioSection>
                <BioYear>2016</BioYear>
                Graduated from Albany High School
            </BioSection>
            <BioSection>
                <BioYear>2019</BioYear>
                Required Associate's Degree from Berkeley Community Code
            </BioSection>
            <BioSection>
                <BioYear>2020</BioYear>
                Required Sales Licence and Certification from online course.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Started his own business and became a top % seller on ebay within the US 1 year later
            </BioSection>
            <BioSection>
                <BioYear>2023</BioYear>
                Completed the UC Berkeley Full Stack Coding Bootcamp and became a full-stack developer 
            </BioSection>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Technical Skills
            </Heading>
            <BioSection>
            <BioYear>Programming languages</BioYear>
            TypeScript, Javascript
            </BioSection>

            <BioSection>
            <BioYear>Front End</BioYear>
            React, NextJS, HTML, CSS,Bootstrap, jQuery,APIs
            </BioSection>

            <BioSection>
            <BioYear>Back End</BioYear>
            Express, GraphQL,NoSQL,APIs,Model-View-Controller 
            </BioSection>
            <BioSection>
            <BioYear>Programming Concepts</BioYear>
            Object-Oriented Programming ,Object-Relational Mapping
            </BioSection>
            <BioSection>
            <BioYear>Programming strategy </BioYear>
            Progressive Web Applications
            </BioSection>

            
            

            <BioSection>
            <BioYear>Database</BioYear>
            MySQL, Mongo
            </BioSection>

            <BioSection>
            <BioYear>Tools or FrameWork</BioYear>
            NodeJS
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

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Socials
            </Heading>

            <List>
                <ListItem>
                     <Link href="https://github.com/craftersol728" target="_blank">
                        <Button variant="ghost" colorScheme="blue" leftIcon={<IoLogoGithub />}>
                            @craftersol728
                        </Button>
                    </Link>
                </ListItem>
            </List>

            <List>
                <ListItem>
                     
                        <Button variant="ghost" colorScheme="blue" leftIcon={<IoLogoDiscord />}>
                            @Jun hh#1613
                        </Button>
                    
                </ListItem>
            </List>

            <List>
                <ListItem>
                     <Link href="https://www.linkedin.com/in/jerry-wan-878944152/" target="_blank">
                        <Button variant="ghost" colorScheme="blue" leftIcon={<IoLogoLinkedin />}>
                            @Jerry Wan
                        </Button>
                    </Link>
                </ListItem>
            </List>

            <List>
                <ListItem>
                <Link href="mailto:jp4eva15@gmail.com" target="_blank">
                        <Button variant="ghost" colorScheme="blue" leftIcon={<IoMailSharp />}>
                            @jp4eva15@gmail.com
                        </Button>
                </Link>
                </ListItem>
            </List>

          </Section>
          

    </Container>
    </Layout>
  )
}

export default Page