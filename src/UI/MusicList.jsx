import React from 'react'
import MusicCart from './MusicCart'

const MusicList = ({ data }) => {
    return (

        <>

            {

                data?.map((item, index) => (
                    <MusicCart item={item} key={index} />
                ))

            }


        </>


    )
}

export default MusicList
