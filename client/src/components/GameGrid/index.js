import React, { useState, useEffect } from "react";
import Computer from "../Computer";
import Timer from "../Timer";
import StartBtn from "../StartBtn";
import "./style.css";
import "../Mole1";
import Mole1 from "../Mole1";

function GameGrid(props) {
    const [moles, setMoles ] = useState([false]);
    const [mole1, setMole1 ] = useState([false]);
    const [mole2, setMole2 ] = useState([false]);
    const [mole3, setMole3 ] = useState([false]);
    const [mole4, setMole4 ] = useState([false]);
    const [mole5, setMole5 ] = useState([false]);
    const [mole6, setMole6 ] = useState([false]);
    const [mole7, setMole7 ] = useState([false]);
    const [mole8, setMole8 ] = useState([false]);
    const [mole9, setMole9 ] = useState([false]);
    // const [timeRemaining, setTime ] = useState(props.time);

    const [timer, setTimer ] = useState(10);
    const [playing, setPlaying ] = useState(false);

    const handleStartBtn = event => {
        if (playing === false) {
        setTimer(10);
        setPlaying(true);
        setTimeout(() => setTimer(timer-1), 1000)
        }
    }

    const handleClick1 = event => {
        console.log(event.target);
        //add to score
    }

    useEffect(() => {
        if (timer > -1 && playing === true) {
        setTimeout(() => setTimer(timer-1), 1000);
        showMole();
        }
        else {
        setTimer(10);
        //other end game logic, reactions here
        setPlaying(false);
        }
        }, [timer])

    // useEffect(() => {
    //     updateTime(props.time);
    //     console.log(timeRemaining);
    //     }, [props.time])

    // function updateTime(time) {
    //     setTime(time);
    // }

    useEffect(() => {
        if(playing === false) {
            console.log(playing);
        }
        else if  (playing === true) {
            startGame();
        }
        }, [playing])

    function randomTime(min, max) {
        return Math.floor(Math.random()*(max-min) + min);
    }

    function randomMole() {
        let index = Math.floor(Math.random()*9);
        return index;
    }

    // function showMole(lastIndex) {
    //     let idx = randomMole();
    //     if (idx === lastIndex) {
    //         return showMole(idx);
    //     }
    //     const moleArray = [...moles];
    //     moleArray[idx] = true;
    //     setMoles(moleArray);
    //     setTimeout(() => setMoles(revertArray(moleArray, idx)), randomTime(1000,2000));
    // }

    function showMole() {
        let idx = randomMole();
        if (idx === 0) {
            setMole1(true);
            setTimeout(() => setMole1(false), randomTime(1000,2000));
        }
        if (idx === 1) {
            setMole2(true);
            setTimeout(() => setMole2(false), randomTime(1000,2000));
        }
        if (idx === 2) {
            setMole3(true);
            setTimeout(() => setMole3(false), randomTime(1000,2000));
        }
        if (idx === 3) {
            setMole4(true);
            setTimeout(() => setMole4(false), randomTime(1000,2000));
        }
        if (idx === 4) {
            setMole5(true);
            setTimeout(() => setMole5(false), randomTime(1000,2000));
        }
        if (idx === 5) {
            setMole6(true);
            setTimeout(() => setMole6(false), randomTime(1000,2000));
        }
        if (idx === 6) {
            setMole7(true);
            setTimeout(() => setMole7(false), randomTime(1000,2000));
        }
        if (idx === 7) {
            setMole8(true);
            setTimeout(() => setMole8(false), randomTime(1000,2000));
        }
        if (idx === 8) {
            setMole9(true);
            setTimeout(() => setMole9(false), randomTime(1000,2000));
        }
    }

    function revertArray(array, index) {
        const newArray = [...array];
        newArray[index] = false;
        return newArray;
    }

    function startGame() {
        console.log("test");
        setTimeout(() => showMole(), randomTime(50,2000))
    }

    return(
        <div>
            <StartBtn handleStartBtn={handleStartBtn} />
            <Timer time={timer}/>
            <div className="row">
                <div className="column"> 
                    <Computer className="computer"> 
                        {mole1 === true && <Mole1 id="mole1-1" startGame={props.startGame} handleClick1={handleClick1}/>}
                        {/* <Mole1 id="mole1-1" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
                    </Computer>
                </div>
                <div className="column"> 
                    <Computer className="computer"> 
                        {mole2 === true && <Mole1 id="mole1-2" startGame={props.startGame} handleClick1={handleClick1}/>}  
                        {/* <Mole1 id="mole1-2" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
                    </Computer>
                </div>
                <div className="column"> 
                    <Computer className="computer"> 
                        {mole3 === true && <Mole1 id="mole1-3" startGame={props.startGame} handleClick1={handleClick1}/>}
                        {/* <Mole1 id="mole1-3" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
                    </Computer>
                </div>
            </div>
            <div className="row">
                <div className="column"> 
                    <Computer className="computer"> 
                        {mole4 === true && <Mole1 id="mole1-4" startGame={props.startGame} handleClick1={handleClick1}/>}
                        {/* <Mole1 id="mole1-4" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
                    </Computer>
                </div>
                <div className="column"> 
                    <Computer className="computer"> 
                        {mole5 === true && <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={handleClick1}/>}
                        {/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
                    </Computer>
                </div>
                <div className="column"> 
                    <Computer className="computer"> 
                        {mole6 === true && <Mole1 id="mole1-6" startGame={props.startGame} handleClick1={handleClick1}/>}
                        {/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
                    </Computer>
                </div>
            </div>
            <div className="row">
                <div className="column"> 
                    <Computer className="computer"> 
                        {mole7 === true && <Mole1 id="mole1-7" startGame={props.startGame} handleClick1={handleClick1}/>}
                        {/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
                    </Computer>
                </div>
                <div className="column"> 
                    <Computer className="computer"> 
                        {mole8 === true && <Mole1 id="mole1-8" startGame={props.startGame} handleClick1={handleClick1}/>}
                        {/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
                    </Computer>
                </div>
                <div className="column"> 
                    <Computer className="computer"> 
                        {mole9 === true && <Mole1 id="mole1-9" startGame={props.startGame} handleClick1={handleClick1}/>}
                        {/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
                    </Computer>
                </div>
            </div>
        </div>
    )
}

export default GameGrid;