import React, { useState } from 'react'
import MusicList from '../UI/MusicList'
import dataList from "../data/playlistData"
import "../styles/playList.scss"

const PlayList = () => {

    const [data, setData] = useState(dataList)
    const handleSearch = (x) => {
        const searchValue = x.target.value;
        const searchData = dataList.filter((item) => item.musicName.toLowerCase().includes(searchValue.toLowerCase()))
        setData(searchData)
    }

    const handleFilter = (x) => {
        const filteredValue = x.target.value;

        if (filteredValue === "") {
            setData(dataList);
        } else {
            const filteredData = dataList.filter(
                (item) => item.language === filteredValue
            );
            setData(filteredData);
        }
    };
    const options = [
        { value: "AZ", label: "AZ" },
        { value: "TR", label: "TR" },
        { value: "EN", label: "EN" },
        { value: "RU", label: "RU" },

    ];
    return (
        <>

            <section className='main'>
                <div className="filter">
                    <input className='search' type="search" placeholder='Search...' onChange={handleSearch} />

                    <select className='option' onChange={handleFilter}>
                        <option value={""}>All</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                </div>
                <hr style={{ borderColor: "#500021" }} />
                <MusicList data={data} />
            </section>

        </>
    )
}

export default PlayList
