import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/music-cart.scss"

const MusicCart = ({ item }) => {
    return (
        <>

            <div className='cart  lg:w-full mb-3'>

                <div className="music-item">
                    
                    <Link to={`/playlistdetails/${item.id}`}>

                        <div className='all'>
                            <div className="music-img">
                                
                            <div className='order'> <p>{item.order}-</p> </div>

                                <div className='img'>
                                    <img src={item.image} alt="" />
                                </div>

                                <div className='title'>
                                    <p>{item.musicName}</p>
                                </div>
                            </div>

                            <div className="music-artist">
                                <p>{item.artist}</p>
                            </div>

                            <div className="music-duration">
                                <p>{item.duration}</p>
                            </div>
                        </div>

                    </Link>
                    <hr />
                </div>

            </div>

        </>
    )
}

export default MusicCart
