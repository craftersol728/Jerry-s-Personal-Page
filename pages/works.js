import { Container, Heading,SumpleGrid,Divider} from "@chakra-ui/react"; 
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-items";

const Works = () => {
    return (
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="BigBoyBudgeting" title="BigBoyBudgeting" thumbnail="/images/bigboybudgeting.png">
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;