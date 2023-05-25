import { Box, Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Tarea3_2 = () => {

    const handleButtonClick = () => {
        window.localStorage.setItem('idTareasCompletas3_2','TareaB3_2')
    };

    return (
        <Flex direction='column' justify='center' alignItems='center' alignContent='center' w='100vw' h='100vh'>
            <Box p='1rem' border='2px solid white' borderRadius='20px'>
                <h2>Aquí completarás la tarea</h2>
            </Box>
            <Button
                marginTop='1.5rem'
                height='40px'
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                border='1px'
                px='8px'
                borderRadius='20px'
                fontSize='14px'
                fontWeight='semibold'
                bg='#f5f6f7'
                w='200px'
                borderColor='#ccd0d5'
                color='#4b4f56'
                _hover={{ bg: '#ebedf0' }}
                _active={{
                    bg: '#dddfe2',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                }}
                _focus={{
                    boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                }}
                onClick={handleButtonClick}
                >
                Completar tarea #3.2
            </Button>
            <Button
                marginTop='1.5rem'
                height='40px'
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                border='1px'
                px='8px'
                borderRadius='20px'
                fontSize='14px'
                fontWeight='semibold'
                bg='#f5f6f7'
                w='200px'
                borderColor='#ccd0d5'
                color='#4b4f56'
                _hover={{ bg: '#ebedf0' }}
                _active={{
                    bg: '#dddfe2',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                }}
                _focus={{
                    boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                }}
            >
                <Link to='/'>Ir atrás</Link>
            </Button>
        </Flex>
    );
};