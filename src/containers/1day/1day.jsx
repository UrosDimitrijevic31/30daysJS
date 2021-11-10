import React, { useState } from 'react';
import './1day.css';
import clap from '../../sounds/clap.wav';
import hihat from '../../sounds/hihat.wav';
import kick from '../../sounds/kick.wav';
import openhat from '../../sounds/openhat.wav';
import boom from '../../sounds/boom.wav';
import ride from '../../sounds/ride.wav';
import snare from '../../sounds/snare.wav';
import tom from '../../sounds/tom.WAV';
import tink from '../../sounds/tink.wav';

const Day1 = () => {
    const [style1, setStyle1] = useState('key');
    window.addEventListener('keydown', (e) => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  
        if(!audio) return;

        audio.currentTime = 0;
        const playPromise = audio.play();

        if(playPromise !== undefined) {
            playPromise
            .then(_ => {
                return audio.play();
            })
            .catch( error => console.log('NE RADI'))
        }

        setStyle1({style1: 'key playing'});

    } )

    return (
        <>
            <div className="keys">
                <div className={style1.style1}>
                    <kbd data-key="63" >A</kbd>
                    <span className="sound">clap</span>
                </div>
                <div className="key">
                    <kbd data-key="83">S</kbd>
                    <span className="sound">hihat</span>
                </div>
                <div className="key">
                    <kbd data-key="68">D</kbd>
                    <span className="sound">kick</span>
                </div>
                <div className="key">
                    <kbd data-key="70">F</kbd>
                    <span className="sound">openhat</span>
                </div>
                <div className="key">
                    <kbd data-key="71">G</kbd>
                    <span className="sound">boom</span>
                </div>
                <div className="key">
                    <kbd data-key="72">H</kbd>
                    <span className="sound">ride</span>
                </div>
                <div className="key">
                    <kbd data-key="74">J</kbd>
                    <span className="sound">snare</span>
                </div>
                <div className="key">
                    <kbd data-key="75">K</kbd>
                    <span className="sound">tom</span>
                </div>
                <div className="key">
                    <kbd data-key="76">L</kbd>
                    <span className="sound">tink</span>
                </div>
            </div>

            <audio data-key="65" src={boom}></audio>
            <audio data-key="83" src={hihat}></audio>
            <audio data-key="68" src={kick}></audio>
            <audio data-key="70" src={openhat}></audio>
            <audio data-key="71" src={boom}></audio>
            <audio data-key="72" src={ride}></audio>
            <audio data-key="74" src={snare}></audio>
            <audio data-key="75" src={tom}></audio>
            <audio data-key="76" src={tink}></audio>
        </>
    )
}

export default Day1;