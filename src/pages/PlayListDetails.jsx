import React, { useEffect, useRef, useState } from 'react';
import dataList from "../data/playlistData";
import "../styles/playListDetails.scss";
import { useParams } from 'react-router-dom';
import disk from "../img/disk.svg";


const PlayListDetails = () => {
    const { id } = useParams();
    const list = dataList.find((item) => item.id == id);
    const { image, audio, artist, musicName, duration } = list;

    const progressRef = useRef(null);
    const audioRef = useRef(null);
    const ctrlIconRef = useRef(null);

    audioRef.onloadedmetadata = function () {
        progressRef.max = audioRef.duration;
        progressRef.value = audioRef.currentTime;
    }

    const playPause = () => {
        const ctrlIcon = ctrlIconRef.current;

        if (ctrlIcon.classList.contains("fa-circle-pause")) {
            audioRef.current.pause();
            ctrlIcon.classList.remove("fa-circle-pause");
            ctrlIcon.classList.add("fa-circle-play");
        } else {
            audioRef.current.play();
            ctrlIcon.classList.remove("fa-circle-play");
            ctrlIcon.classList.add("fa-circle-pause");
        }
    };

    

    const [songs, setSongs] = useState(dataList);
    const [currentSong, setCurrentSong] = useState(songs[0]);

    const playNextSong = () => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrentSong(songs[nextIndex]);
    };

    const playPreviousSong = () => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
        setCurrentSong(songs[previousIndex]);
    };


    return (
        <section className="main">
            <main className='boxes lg:w-11/12'>
                <div className="center">
                    <div className="imgBox">
                        <img className='animate' src={image} alt="" />
                        <span className='sorcl'> <img src={disk} alt="" /> </span>
                    </div>
                    <div className="bottom-bar">
                        <div className="icons">
                            <div className="prev" onClick={playPreviousSong}> <i className="fa-solid fa-backward-step"></i> </div>
                            <div className="play" onClick={playPause}> <i ref={ctrlIconRef} className="fa-solid fa-circle-play"></i> </div>
                            <div className="next" onClick={playNextSong}> <i className="fa-solid fa-forward-step"></i> </div>
                        </div>
                        <audio controls controlsList='foobar nodownload' ref={audioRef}>
                            <source src={audio} type='audio/mpeg' />
                        </audio>
                    </div>
                    <input type="range" value={null} id='progress' ref={progressRef} />


                </div>
            </main>
        </section>
    );
}

export default PlayListDetails;

