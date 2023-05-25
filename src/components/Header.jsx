import { Heading, Box, Flex } from "@chakra-ui/react";
import { SectionBox1 } from "./SectionBox1";
import { SectionBox2 } from "./SectionBox2";
import { SectionBox3 } from "./SectionBox3";

export const Header = () => {
    
    return (
        <Heading
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            w='100vw'
        >
            <Box
                p='1rem'
            >
                <h1>PRUEBA DESARROLLADOR REACT JS</h1>
            </Box>
            <Flex
                direction='column'
            >
                    <SectionBox1 />
                    <SectionBox2 />
                    <SectionBox3 />
            </Flex>
        </Heading>
    )
}