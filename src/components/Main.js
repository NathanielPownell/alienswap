import { useState, useEffect } from 'react'
import React from 'react'
import './Main.css'

import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import wethImg from '../assets/weth.png'

const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])


    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    
    }, [punkListData, selectedPunk])

    return (
        <div className='main'>
            <div className='mainContent'>

                <div className='punkHighlight'>

                    <div className='punContainer'>
                        <img className='selectedPunk' src={activePunk.image_url} alt="" />
                    </div>
                </div>
                <div className='punkDetails' style={{color: '#fff'}}>
                    <div className='title'>{activePunk.name}</div>
                    <span className='itemNumber'>#{activePunk.token_id}</span>
                    <div className='price'>
                        Price: &nbsp;
                        <img src={wethImg} />
                        {activePunk.traits[0]?.value}
                    </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img className="ownerImg" src={activePunk.owner.profile_img_url}
                        />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div className='address'>
                                {activePunk.owner.address}
                            </div>
                                                    </div>
                    </div>
                </div>
                </div>
                <div className='ownerLinks'>
                <div className='OwnerLink'>
                            <img src={instagramLogo} />
                        </div>
                        <div className='OwnerLink'>
                            <img src={twitterLogo} />
                        </div>
                        <div className='OwnerLink'>
                            <img src={moreIcon} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Main
