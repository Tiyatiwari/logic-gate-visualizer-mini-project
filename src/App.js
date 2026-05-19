import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const [gate, setGate] = useState('AND');

  const calculateOutput = () => {
    switch(gate) {
      case 'AND': return inputA && inputB;
      case 'OR': return inputA || inputB;
      case 'NAND': return !(inputA && inputB);
      case 'NOR': return !(inputA || inputB);
      case 'XOR': return inputA !== inputB;
      case 'XNOR': return inputA === inputB;
      case 'NOT': return !inputA;
      default: return false;
    }
  };

  const output = calculateOutput();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Logic Gate Visualizer</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            
            <div className="mb-3">
              <label className="form-label">Select Gate:</label>
              <select className="form-select" value={gate} onChange={(e) => setGate(e.target.value)}>
                <option>AND</option>
                <option>OR</option>
                <option>NAND</option>
                <option>NOR</option>
                <option>XOR</option>
                <option>XNOR</option>
                <option>NOT</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Input A:</label>
              <button 
                className={`btn w-100 ${inputA ? 'btn-success' : 'btn-danger'}`}
                onClick={() => setInputA(!inputA)}
              >
                {inputA ? '1 - ON' : '0 - OFF'}
              </button>
            </div>

            {gate !== 'NOT' && (
              <div className="mb-3">
                <label className="form-label">Input B:</label>
                <button 
                  className={`btn w-100 ${inputB ? 'btn-success' : 'btn-danger'}`}
                  onClick={() => setInputB(!inputB)}
                >
                  {inputB ? '1 - ON' : '0 - OFF'}
                </button>
              </div>
            )}

            <div className="mt-4 p-3 text-center bg-dark text-white rounded">
              <h4>Output: {output ? '1' : '0'}</h4>
              <div 
                className="mx-auto mt-2 rounded-circle" 
                style={{
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: output ? '#28a745' : '#dc3545',
                  boxShadow: output ? '0 0 20px #28a745' : 'none'
                }}
              ></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;