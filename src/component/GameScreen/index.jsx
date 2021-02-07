import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './index.css';

function Game() {
  const location = useLocation();

  const [value, setvalue] = useState('X')
  const [cellZero, setCellZero] = useState('');
  const [cellOne, setCellOne] = useState('');
  const [cellTwo, setCellTwo] = useState('');
  const [cellThree, setCellThree] = useState('');
  const [cellFour, setCellFour] = useState('');
  const [cellFive, setCellFive] = useState('');
  const [cellSix, setCellSix] = useState('');
  const [cellSeven, setCellSeven] = useState('');
  const [cellEight, setCellEight] = useState('');
  const [modal, setModal] = useState(false)

  useEffect(() => {
    validation()
  }, [value]);

  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    console.log(location.search); // result: '?query=abc'
    console.log(location.state); // result: 'some_value'
  }, [location]);

  const validation = () => {

    if (cellZero !== "" && cellZero === cellOne && cellZero === cellTwo) {
      console.log('win')
    }
    else if (cellZero !== "" && cellZero === cellThree && cellZero === cellSix) {
      console.log('win')
    }
    else if (cellZero !== "" && cellZero === cellFour && cellZero === cellEight) {
      console.log('win')
    }
    else if (cellOne !== "" && cellOne === cellFour && cellOne === cellSeven) {
      console.log('win')
    }
    else if (cellTwo !== "" && cellTwo === cellFour && cellTwo === cellSix) {
      console.log('win')
    }
    else if (cellTwo !== "" && cellTwo === cellFive && cellTwo === cellEight) {
      console.log('win')
    }
    else if (cellTwo !== "" && cellTwo === cellFive && cellTwo === cellEight) {
      console.log('win')
    }
    else if (cellThree !== "" && cellThree === cellFour && cellThree === cellFive) {
      console.log('win')
    }
    else if (cellSix !== "" && cellSix === cellSeven && cellSix === cellEight) {
      console.log('win')
    }

  }


  const handleOnclick = (e) => {
    let id = parseInt(e.target.id)
    console.log(id)

    if (id === 0) {
      setCellZero(value)
      if (value === 'X') {
        setvalue('O')
      }
      else if (value === 'O') {
        setvalue('X')
      }
    }
    else if (id === 1) {
      setCellOne(value)
      if (value === 'X') {
        setvalue('O')
      }
      else if (value === 'O') {
        setvalue('X')
      }
    }
    else if (id === 2) {
      setCellTwo(value)
      if (value === 'X') {
        setvalue('O')
      }
      else if (value === 'O') {
        setvalue('X')
      }
    }
    else if (id === 3) {
      setCellThree(value)
      if (value === 'X') {
        setvalue('O')
      }
      else if (value === 'O') {
        setvalue('X')
      }
    }
    else if (id === 4) {
      setCellFour(value)
      if (value === 'X') {
        setvalue('O')
      }
      else if (value === 'O') {
        setvalue('X')
      }
    }
    else if (id === 4) {
      setCellFour(value)
      if (value === 'X') {
        setvalue('O')
      }
      else if (value === 'O') {
        setvalue('X')
      }
    }
    else if (id === 5) {
      setCellFive(value)
      if (value === 'X') {
        setvalue('O')
      }
      else if (value === 'O') {
        setvalue('X')
      }
    }
    else if (id === 6) {
      setCellSix(value)
      if (value === 'X') {
        setvalue('O')
      }
      else if (value === 'O') {
        setvalue('X')
      }
    }
    else if (id === 7) {
      setCellSeven(value)
      if (value === 'X') {
        setvalue('O')
      }
      else if (value === 'O') {
        setvalue('X')
      }
    }
    else if (id === 8) {
      setCellEight(value)
      if (value === 'X') {
        setvalue('O')
      }
      else if (value === 'O') {
        setvalue('X')
      }
    }

  }

  return (
    <div className="App">
      <div className="board" id='board'>
        <div className="cell" id="0" onClick={handleOnclick} disan>{cellZero}</div>
        <div className="cell" id="1" onClick={handleOnclick}>{cellOne}</div>
        <div className="cell" id="2" onClick={handleOnclick} >{cellTwo}</div>
        <div className="cell" id="3" onClick={handleOnclick}>{cellThree}</div>
        <div className="cell" id="4" onClick={handleOnclick}>{cellFour}</div>
        <div className="cell" id="5" onClick={handleOnclick}>{cellFive}</div>
        <div className="cell" id="6" onClick={handleOnclick}>{cellSix}</div>
        <div className="cell" id="7" onClick={handleOnclick}>{cellSeven}</div>
        <div className="cell" id="8" onClick={handleOnclick}>{cellEight}</div>
      </div>


      <dialog id='preview-dialog'>
        <h1>Winner {value}</h1>
        <div id="btn-group" class="action-group">
          <button onclick="closeDialog();">CANCEL</button>
          <button onclick="closeDialog();">SUBMIT</button>
        </div>

      </dialog>

    </div>
  );
}

export default Game;
