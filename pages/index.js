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
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Side Projects
            </Heading>
            <BioSection>
                <BioYear>Taxplus</BioYear><br />
                Currently rebuilding the entire Taxplus website. Using React HTML Typescript and CSS to create a responsive website.
            </BioSection>
            <br />
            <BioSection>
                <BioYear>Professional Portfolio</BioYear>
                <br />
                Used HTML and CSS to create a responsive portfolio website with animations.
            </BioSection>
            <br />
            <BioSection>
                <BioYear>Password Generator</BioYear>
                <br />
                Built a dynamic web application that an employee can use to generate a random password based on criteria they've selected. powered by Javascript code!
            </BioSection>
            <br />
            <BioSection>
                <BioYear>Web APIs：Code Quiz</BioYear>
                <br />
                Built a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code. It has a clean, polished, and responsive user interface. 
            </BioSection>
            <br />
            <BioSection>
                <BioYear>Third-Party APIs : Work Day Scheduler</BioYear>
                <br />
                Created a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
            </BioSection>
            <br />
            <BioSection>
                <BioYear>Node.js: Professional README Generator</BioYear>
                <br />
                Created a Professional README Generator application that generates a READ ME.md file that includes what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions.
            </BioSection>
            <br />
            <BioSection>
                <BioYear>Object-Oriented Programming : Team Profile Generator</BioYear>
                <br />
                Created a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
            </BioSection>
            <br />
            <BioSection>
                <BioYear>Express.js : Note Taker</BioYear>
                <br />
                Created an application that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.
            </BioSection>
            <br />
            <BioSection>
                <BioYear>Object-Oriented Programming : Team Profile Generator</BioYear>
                <br />
                Created a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
            </BioSection>
            <br />





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