import React from 'react'
import CollectionCard from './CollectionCard'

import './CollectionList.css'

const CollectionList = ({punkListData, setSelectedPunk}) => {
    return (
        <div className='cardList'>
            {punkListData.map(punk => (
                <div onClick={() => setSelectedPunk(punk.token_id)}>
                    <CollectionCard 
                        key={punk.token_id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_url}
                    />
                </div>
            ))}
            
        </div>
    )
}

export default CollectionList
