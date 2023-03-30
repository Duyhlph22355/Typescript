import { useEffect, useState } from "react"
import Square from './square'

const Board = ({ children }) => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)
    const [timer, setTimer] = useState(3) 

    const handlePlay = (position) => {
        const newGame = game.map((g, index) => {
            if (index === position) {
                return player ? "X" : "O"
            }
            return g
        })
        setGame(newGame)
        setPlayer(!player)
        setTimer(3)
    }
    

    

    const Reset = () => {
        setGame([null, null, null, null, null, null, null, null, null]);
        setPlayer(true);
        setTimer(3)
    };
    const handleAutoPlay = () => {
        const emptyGame = game.map((square, index) => square ? null : index).filter(item => item != null)
        const position = emptyGame[Math.floor(Math.random()*emptyGame.length)];
        handlePlay(position)
        setTimer(3)
    }

    const listWinner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const checkWinner = () => {
        for(let i = 0; i < listWinner.length; i++) {
            const [p1, p2, p3] = listWinner[i]
            if(game[p1] === game[p2] && game[p2] === game[p3] && game[p1] != null) {
                return "Winner is: "+game[p1]
            }
            if (game.every((value) => value != null)) {
                return "Không có ai thắng"
            }
        }
        return null
    }

    useEffect(() => {
        if (timer < 0) {
            handleAutoPlay()
        }

        const interval = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])



    return <>
    <div>
    <h2> {checkWinner()}</h2>
    <h2>Timer: {timer}</h2>
    </div>
    <div className="grid grid-cols-3 gap-2 w-[240px]">
        <Square value={game[0]} position={0} handlePlay={handlePlay}/>
        <Square value={game[1]} position={1} handlePlay={handlePlay}/>
        <Square value={game[2]} position={2} handlePlay={handlePlay}/>
        <Square value={game[3]} position={3} handlePlay={handlePlay}/>
        <Square value={game[4]} position={4} handlePlay={handlePlay}/>
        <Square value={game[5]} position={5} handlePlay={handlePlay}/>
        <Square value={game[6]} position={6} handlePlay={handlePlay}/>
        <Square value={game[7]} position={7} handlePlay={handlePlay}/>
        <Square value={game[8]} position={8} handlePlay={handlePlay}/>
    </div>
    <button
        className="p-2 mt-3 border-[2px] text-black bg-[#14bdac] hover:bg-green-500 focus:bg-green-500"
        onClick={Reset}
      >
        Reset game
      </button>
    </>
}

export default Board