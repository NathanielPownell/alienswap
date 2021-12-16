import React from 'react'
import ethImg from '../assets/eth.png'
import wethImg from '../assets/weth.png'

import './CollectionCard.css'

const CollectionCard = ({id, name, traits, image}) => {
    return (
        <div className='collectionCard'>
            <img src={image} />
            <div className='details'>
                <div className='name'>
                    {name} <div className='id'>&#11044;#{id}</div>
                </div>
                <div className='priceContainer'>
                <img src={wethImg} className='wethImg' />
                    <div className='price'>
                        {traits[0]?.value}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
