import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPages />
          <div>
          
     
          <div class="footer-col ">
     <h4> <p>&copy; 2021-2022 ECOLE POLYTECHNIQUE SOUSSE</p></h4>
    </div>
    <div class="footer">
                <h4 class="font-bold font-archivo ">Contactez-nous</h4>
                
                <a ><h4 class="opacity-20 mt-4 whitespace-nowrap">Téléphone : +216 55 882 947  </h4></a>
              
                
            </div>
</div>

</div>
        
      </Router>
    </DataProvider>
    
  );
}

export default App;
