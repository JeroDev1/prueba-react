import { Flex, Button, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useState } from 'react';

export const SectionBox2 = () => {

    const [idTareasCompletas3_1, setIdTareasCompletadas3_1]  = useState(window.localStorage.getItem('idTareasCompletas3_1'))
    console.log(idTareasCompletas3_1=='TareaB3_1')

    const [idTareasCompletas3_2, setIdTareasCompletadas3_2]  = useState(window.localStorage.getItem('idTareasCompletas3_2'))
    console.log(idTareasCompletas3_2=='TareaB3_2')

    const [idTareasCompletas4_1, setIdTareasCompletadas4_1]  = useState(window.localStorage.getItem('idTareasCompletas4_1'))
    console.log(idTareasCompletas4_1=='TareaB4_1')

    const [idTareasCompletas4_2, setIdTareasCompletadas4_2]  = useState(window.localStorage.getItem('idTareasCompletas4_2'))
    console.log(idTareasCompletas4_2=='TareaB4_2')
    
    const [idTareasCompletas4_3, setIdTareasCompletadas4_3]  = useState(window.localStorage.getItem('idTareasCompletas4_3'))
    console.log(idTareasCompletas4_3=='TareaB4_3')

    //Heredado del componente anterior
    const [idTareasCompletas2, setIdTareasCompletadas2]  = useState(window.localStorage.getItem('idTareasCompletas2'))
    console.log(idTareasCompletas2=='TareaB2')

    const Validacion2 = () => {
        if (idTareasCompletas2 == 'TareaB2'){
            window.location.href='/ruta/tarea3_1'
        } else { 
        alert ('no ha completado tarea 2')
        }
    }
    const Validacion3 = () => {
        if (idTareasCompletas3_1 == 'TareaB3_1'){
            window.location.href='/ruta/tarea3_2'
        } else { 
        alert ('no ha completado tarea 3.1')
        }
    }

    const Validacion4 = () => {
        if (idTareasCompletas3_2 == 'TareaB3_2'){
            window.location.href='/ruta/tarea4_1'
        } else { 
        alert ('no ha completado tarea 3.2')
        }
    }

    const Validacion5 = () => {
        if (idTareasCompletas4_1 == 'TareaB4_1'){
            window.location.href='/ruta/tarea4_2'
        } else { 
        alert ('no ha completado tarea 4.1')
        }
    }

    const Validacion6 = () => {
        if (idTareasCompletas4_2 == 'TareaB4_2'){
            window.location.href='/ruta/tarea4_3'
        } else { 
        alert ('no ha completado tarea 4.2')
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
                border='2px solid white'
                w='300px'
                h='250px'
                textAlign='center'
                borderRadius='20px'
            >
                <Box
                    borderBottom='5px solid white'
                >
                    <h1>TAREA #3</h1>
                </Box>
                <Button
                    id='TareaB3_1'
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
                        disabled={idTareasCompletas3_1 == 'TareaB3_1' ? true:false}
                        onClick={()=>Validacion2()}>
                        Hacer tarea #3.1
                    </button>
                </Button>
                <p>{idTareasCompletas3_1 == 'TareaB3_1' && 'tarea ya completada'}</p>
                <Button
                    id='TareaB3_2'
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
                        disabled={idTareasCompletas3_2 == 'TareaB3_2' ? true:false}
                        onClick={()=>Validacion3()}>
                        Hacer tarea #3.2
                    </button>
                </Button>
                <p>{idTareasCompletas3_2 == 'TareaB3_2' && 'tarea ya completada'}</p>
            </Flex>
            <Flex
                direction='column'
                border='2px solid white'
                w='300px'
                h='250px'
                textAlign='center'
                borderRadius='20px'
            >
                <Box
                    borderBottom='5px solid white'
                >
                    <h1>TAREA #4</h1>
                </Box>
                <Button
                    id='TareaB4_1'
                    marginLeft='50px'
                    marginTop='1.5rem'
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
                        disabled={idTareasCompletas4_1 == 'TareaB4_1' ? true:false}
                        onClick={()=>Validacion4()}>
                        Hacer tarea #4.1
                    </button>                        
                </Button>
                <p>{idTareasCompletas4_1 == 'TareaB4_1' && 'tarea ya completada'}</p>
                <Button
                    id='TareaB4_2'
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
                        disabled={idTareasCompletas4_2 == 'TareaB4_2' ? true:false}
                        onClick={()=>Validacion5()}>
                        Hacer tarea #4.2
                    </button>                        
                </Button>
                    <p>{idTareasCompletas4_2 == 'TareaB4_2' && 'tarea ya completada'}</p>
                <Button
                    id='TareaB4_3'
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
                        disabled={idTareasCompletas4_3 == 'TareaB4_3' ? true:false}
                        onClick={()=>Validacion6()}>
                        Hacer tarea #4.3
                    </button>                        
                </Button>
                    <p>{idTareasCompletas4_3 == 'TareaB4_3' && 'tarea ya completada'}</p>
            </Flex>
        </Flex>
    )
}