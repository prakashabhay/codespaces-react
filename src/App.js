import './App.css';
import React, {useRef, useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
function App() {
    const sigRef = useRef()
    const [signature, setSignature] = useState(null)
    const handleSignatureEnd = () => {
      setSignature(sigRef.current.toDataURL())
    }
    const clearSignature = () => {
      sigRef.current.clear();
      setSignature(null);
    }
  
    useEffect(() => {
      console.log(signature);
    }, [signature])

    return (<div>
      <SignatureCanvas
        canvasProps={{className: 'signature'}}
        ref={sigRef}
        onEnd={handleSignatureEnd}
      />
      <button onClick={clearSignature}>Edit</button>
    </div>
  )
}

export default App;
