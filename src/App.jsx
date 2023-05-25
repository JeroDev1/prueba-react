import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Flex } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Tarea1 } from './Rutas/Tarea1';
import { Tarea2 } from './Rutas/Tarea2';
import { Tarea3_1 } from './Rutas/Tarea3_1';
import { Tarea3_2 } from './Rutas/Tarea3_2';
import { Tarea4_1 } from './Rutas/Tarea4_1';
import { Tarea4_2 } from './Rutas/Tarea4_2';
import { Tarea4_3 } from './Rutas/Tarea4_3';
import { Tarea5_1 } from './Rutas/Tarea5_1';
import { Tarea5_2 } from './Rutas/Tarea5_2';
import { Tarea6 } from './Rutas/Tarea6';

function App() {

  return (
      <Flex>
        <BrowserRouter>
              <div className="App">
                <Routes>
                  <Route path="/" element={<Header />}/>
                  <Route path="/ruta/tarea1" element={<Tarea1 />} />
                  <Route path="/ruta/tarea2" element={<Tarea2 />} />
                  <Route path="/ruta/tarea3_1" element={<Tarea3_1 />} />
                  <Route path="/ruta/tarea3_2" element={<Tarea3_2 />} />
                  <Route path="/ruta/tarea4_1" element={<Tarea4_1 />} />
                  <Route path="/ruta/tarea4_2" element={<Tarea4_2 />} />
                  <Route path="/ruta/tarea4_3" element={<Tarea4_3 />} />
                  <Route path="/ruta/tarea5_1" element={<Tarea5_1 />} />
                  <Route path="/ruta/tarea5_2" element={<Tarea5_2 />} />
                  <Route path="/ruta/tarea6" element={<Tarea6 />} />
                </Routes>
              </div>
        </BrowserRouter>
      </Flex>
  )
}

export default App
