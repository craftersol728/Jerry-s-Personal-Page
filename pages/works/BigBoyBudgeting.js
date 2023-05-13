import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'

  const Work = () => (
    <Layout title="bbb">
      <Container>
        <Title>
          BigBoyBudgeting <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/nown.png" alt="icon" />
        </Center>
        <P>
          A passive aggressive budgeting app that helps you keep track of your expenses
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Project built with 3 people from my coding bootcamp</ListItem>
          <ListItem>A budgeting application that allows the user to create a budget that they want to work with, and progressively add expenses and will let you know if you are spending too much money</ListItem>
          <ExternalLinkIcon mx="2px" />
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web browser</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="https://github.com/Dantallope/BigBoiBudgeting">
              BBB
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2023/03/23</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
        <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/BBB.jpg" alt="BBB" />
      </SimpleGrid>

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'