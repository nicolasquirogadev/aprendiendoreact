import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"


const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}


const WCOMBOS = [ //combinaciones ganadoras
  //horizontales
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //verticales
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonales
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  
  const [winner, setWinner] = useState(null)
  const checkWinner = (boardToCheck) => {
    for (const combo of WCOMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) { 
        return boardToCheck[a] } // devuelve ganador (x / o)
      }
      //si no hay ganador
      return null
    }
    
    const resetGame = () => {
      setBoard(Array(9).fill(null))
      setTurn(TURNS.X)
      setWinner(null)
    }
    
    const isGameEnded = (newBoard) => {
      //checkear si no hay espacios libres en el tablero
      // newBoard = ['x', 'o', null, null, 'x', null, null, 'o', null]
      //si todos los espacios son distintos de null es porque el tablero esta lleno
      //si el tablero esta lleno y no hay ganador, hay empate
      return newBoard.every((square) => square != null)
    }
    
    const updateBoard = (index) => {
      if (board[index] || winner) return
      
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      
      const newBoard = [...board]
      newBoard[index] = turn // marca el turno actual en la posicion del array donde se clickea
      setBoard(newBoard)
      
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      console.log(`El ganador es: ${newWinner}`)
      confetti()
    } else if (isGameEnded(newBoard)){
      setWinner(false) // empate
    }
  }
  

  return (
    <>
     <h1>Amazing TaTeTi</h1>
    <main className='board'>
     <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}>

                  {square}

              </Square>
            )
          })
        }
     </section>

     <section className="turn">
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>

      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
     </section>

     { 
     winner != null && (
      <section className="winner">
        <div className="text">
          <h2>
            {
              winner === false
              ? 'Empate'
              : 'El ganador es:'
            }
          </h2>
          <header className="win">
            {winner && <Square>{winner}</Square>}
          </header>

          <footer>
            <button onClick={resetGame}>
              Jugar otra vez
            </button>
          </footer>
        </div>
      </section>

     )
     }
     </main>
    </>
  )
}

export default App