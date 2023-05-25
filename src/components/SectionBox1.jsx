import { Flex, Button, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const SectionBox1 = () => {
  
  const [idTareasCompletas, setIdTareasCompletadas]  = useState(window.localStorage.getItem('idTareasCompletas'))
  console.log(idTareasCompletas=='TareaB1')
  
  const [idTareasCompletas2, setIdTareasCompletadas2]  = useState(window.localStorage.getItem('idTareasCompletas2'))
  console.log(idTareasCompletas2=='TareaB2')

  const Ruta = () => {
    window.location.href='/ruta/tarea1'
  }

  const Validacion = () => {
    if (idTareasCompletas == 'TareaB1'){
        window.location.href='/ruta/tarea2'
    } else { 
    alert ('no ha completado tarea 1')
    }
  }

  return (
    <Flex direction='row' justify='space-evenly' align='center' w='60vw' h='30vh'>
      <Flex direction='column' border='2px solid blue' w='300px' h='250px' textAlign='center' borderRadius='20px'>
        <Box borderBottom='5px solid blue'>
          <h1>TAREA #1</h1>
        </Box >
            <Button
            id='TareaB1'
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
                boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            >
                <button
                disabled={idTareasCompletas == 'TareaB1' ? true:false}
                onClick={()=>Ruta()}>
                    Hacer tarea #1
                </button>
                
                </Button>
                <p>{idTareasCompletas == 'TareaB1' && 'tarea ya completada'}</p>  
      </Flex>
      <Flex direction='column' border='2px solid blue' w='300px' h='250px' textAlign='center' borderRadius='20px'>
        <Box borderBottom='5px solid blue'>
          <h1>TAREA #2</h1>
        </Box>
        <Button
            id='TareaB2'
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
                disabled={idTareasCompletas2 == 'TareaB2' ? true:false}
                onClick={()=>Validacion()}>
                    Hacer tarea #2
            </button>
        </Button>
        <p>{idTareasCompletas2 == 'TareaB2' && 'tarea ya completada'}</p>
      </Flex>
    </Flex>
  );
};