import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'

import CollectionList from './components/CollectionList';
import Main from './components/Main';


function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xb9E9092dE1de2fc5d4433c3676730CCED3d9DA07&order_direction=asc'
      )

      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <CollectionList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }

    </div>
  );
}

export default App;
