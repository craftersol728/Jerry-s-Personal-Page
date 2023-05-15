import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Regex Tutorial">
      <Container>
        <Title>
        Regex Tutorial <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/Regex.png" alt="icon" />
        </Center>
        <P>
        Developers write code, but they also write about code. Take a moment to search the web for tutorials about any of the subjects you’ve learned so far in this course. You’re likely to find thousands of tutorials written by developers of all skill levels, but especially by junior developers
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>
          Created a tutorial that explains how a specific regular expression, or regex, functions by breaking down each part of the expression and describing what it does. 
          </ListItem>

          
          <ExternalLinkIcon mx="2px" />
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>VS Code</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>regular expression</span>
          </ListItem>
          <ListItem>

            <Meta>Scource</Meta>
            <Link href="https://github.com/craftersol728/Regular-Expressions">
            Regular Expression
            </Link>


  
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2023/2</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  