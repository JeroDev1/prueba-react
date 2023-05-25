import { Flex, Button, Box } from "@chakra-ui/react"
import { useState } from 'react';

export const SectionBox3 = () => {

    //heredado del componente anterior
    const [idTareasCompletas4_3, setIdTareasCompletadas4_3]  = useState(window.localStorage.getItem('idTareasCompletas4_3'))
    console.log(idTareasCompletas4_3=='TareaB4_3')

    const [idTareasCompletas5_1, setIdTareasCompletadas5_1]  = useState(window.localStorage.getItem('idTareasCompletas5_1'))
    console.log(idTareasCompletas5_1=='TareaB5_1')

    const [idTareasCompletas5_2, setIdTareasCompletadas5_2]  = useState(window.localStorage.getItem('idTareasCompletas5_2'))
    console.log(idTareasCompletas5_2=='TareaB5_2')

    const [idTareasCompletas6, setIdTareasCompletadas6]  = useState(window.localStorage.getItem('idTareasCompletas6'))
    console.log(idTareasCompletas6=='TareaB6')

    const Validacion7 = () => {
        if (idTareasCompletas4_3 == 'TareaB4_3'){
            window.location.href='/ruta/tarea5_1'
        } else { 
        alert ('no ha completado tarea 4.3')
        }
    }

    const Validacion8 = () => {
        if (idTareasCompletas5_1 == 'TareaB5_1'){
            window.location.href='/ruta/tarea5_2'
        } else { 
        alert ('no ha completado tarea 5.1')
        }
    }

    const Validacion9 = () => {
        if (idTareasCompletas5_2 == 'TareaB5_2'){
            window.location.href='/ruta/tarea6'
        } else { 
        alert ('no ha completado tarea 5.2')
        }
    }

    const Validacion10 = () => {
        if (idTareasCompletas6 == 'Tarea6'){
            window.location.href='/ruta/tarea6'
        } else { 
        alert ('no ha completado tarea 6')
        }
    }

    return (
        <Flex
            direction='row'
            justify='space-evenly'
            align='center'
            w='60vw'
            h='30vh'
        >
            <Flex
                direction='column'
                border='2px solid blue'
                w='300px'
                h='250px'
                textAlign='center'
                borderRadius='20px'
            >
                    <Box
                    borderBottom='5px solid blue'
                >
                    <h1>TAREA #5</h1>
                </Box>
                <Button
                    id='TareaB5_1'
                    marginLeft='50px'
                    marginTop='3rem'
                    as='button'
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
                      boxShadow:
                        '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                    }}
                >
                    <button
                        disabled={idTareasCompletas5_1 == 'TareaB5_1' ? true:false}
                        onClick={()=>Validacion7()}>
                        Hacer tarea #5.1
                    </button>                        
                </Button>
                    <p>{idTareasCompletas5_1 == 'TareaB5_1' && 'tarea ya completada'}</p>
                <Button
                    id='TareaB5_2'
                    marginLeft='50px'
                    marginTop='1rem'
                    as='button'
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
                      boxShadow:
                        '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                    }}
                >
                    <button
                        disabled={idTareasCompletas5_2 == 'TareaB5_2' ? true:false}
                        onClick={()=>Validacion8()}>
                        Hacer tarea #5.2
                    </button>                        
                </Button>
                    <p>{idTareasCompletas5_2 == 'TareaB5_2' && 'tarea ya completada'}</p>
            </Flex>
            <Flex
                direction='column'
                border='2px solid blue'
                w='300px'
                h='250px'
                textAlign='center'
                borderRadius='20px'
            >
                <Box
                    borderBottom='5px solid blue'
                >
                    <h1>TAREA #6</h1>
                </Box>
                <Button
                    id='TareaB6'
                    marginLeft='50px'
                    marginTop='4rem'
                    as='button'
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
                      boxShadow:
                        '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                    }}
                >
                    <button
                        disabled={idTareasCompletas6 == 'TareaB6' ? true:false}
                        onClick={()=>Validacion9()}>
                        Hacer tarea #6
                    </button>                        
                </Button>
                    <p>{idTareasCompletas6 == 'TareaB6' && 'tarea ya completada'}</p>
            </Flex>
        </Flex>
    )
}