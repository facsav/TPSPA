import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';

const Juego = () => {
  const [targetNumber, setTargetNumber] = useState('');
  const [input, setInput] = useState('');

  const [win, setWin] = useState(false);
  const [fin, SetFin] = useState(false);
  
  const [repeticion, SetRepeticion] = useState(false);
  
  const [intentos, setIntentos] = useState([]);

  const GenerarNums = useCallback(() => {
    const digito = [];
    while (digito.length < 4) {
      const digit = Math.floor(Math.random() * 10);
      if (repeticion || !digito.includes(digit)) {
        digito.push(digit);
      }
    }
    setTargetNumber(digito.join(''));
  }, [repeticion]); 

  useEffect(() => {
    GenerarNums();
  }, [GenerarNums]); 

  const handleSubmit = () => {
    if (input.length !== 4 || isNaN(input)) {
      alert("Ingrese un número de 4 dígitos");
      return;
    }

    if (input === targetNumber) {
      setWin(true);
      SetFin(true);
      return;
    }

    const result = checkGuess(input);
    setIntentos([...intentos, { guess: input, result }]);
    
    if (intentos.length + 1 >= 10) {
      SetFin(true);
    }

    setInput('');
  };

  const checkGuess = (guess) => {
    let bulls = 0, regulars = 0, misses = 0;
    const guessDigits = guess.split('');
    const targetDigits = targetNumber.split('');

    guessDigits.forEach((digit, index) => {
      if (digit === targetDigits[index]) {
        bulls++;
      } else if (targetDigits.includes(digit)) {
        regulars++;
      } else {
        misses++;
      }
    });

    return { bulls, regulars, misses };
  };

  return (
    <div className='info'>
      <h1>Adivina el Número</h1>

      <label>
        Ingrese un número de 4 cifras:
        <br/>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={4}
          disabled={fin}
        />
      </label>
      <button onClick={handleSubmit} disabled={fin}>
        Intentar
      </button>

      <h2>Intentos:</h2>
      <ul>
        {intentos.map((attempt, index) => (
          <li key={index}>
            Intento {index + 1}: {attempt.guess} - {attempt.result.bulls} Bien {attempt.result.regulars} Regular {attempt.result.misses} Mal
          </li>
        ))}
      </ul>

      {fin && (
        <h2>
          {win ? 'Adivinaste el número!' : `Perdiste! Numero: ${targetNumber}`}
        </h2>
      )}

      <button onClick={() => window.location.reload()}>Reiniciar</button>
      <button>
                        <a href="/">Volver al menu</a>
      </button>
      
      <label>
        <input
          type="checkbox"
          checked={repeticion}
          onChange={() => SetRepeticion(!repeticion)}
          disabled={fin}
        />
        Permitir repetición de cifras
      </label>
    </div>
  );
};

export default Juego;
