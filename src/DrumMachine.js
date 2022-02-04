const DrumMachine = () => {

const kick = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
);

const handleClick = (e) => {
console.log('button has been pressed')
kick.play()
}

const handleKeyPress = (e) => {

}

    return (
      <>
        <section id="header" className="text-center p-3">
          <h1>Drum machine</h1>
        </section>
        <div id="drumbox" className="container">
          <div className="key-container">
            <div className="key" id='key1' onClick={handleClick}>
              <div className="btn">Key</div>
            </div>
            <div className="key" id='key2' onClick={handleClick}>
              <div className="btn">Key</div>
            </div>
            <div className="key" id='key3' onClick={handleClick}>
              <div className="btn">Key</div>
            </div>

            <div className="key" id='key4' onClick={handleClick}>
              <div className="btn">Key</div>
            </div>
            <div className="key" id='key5' onClick={handleClick}>
              <div className="btn">Key</div>
            </div>
            <div className="key" id='key6' onClick={handleClick}>
              <div className="btn">Key</div>
            </div>

            <div className="key" id='key7' onClick={handleClick}>
              <div className="btn">Key</div>
            </div>
            <div className="key" id='key8' onClick={handleClick}>
              <div className="btn">Key</div>
            </div>
            <div className="key" id='key9' onClick={handleClick}>
              <div className="btn">Key</div>
            </div>
          </div>
        </div>
      </>
    ); 
}

export default DrumMachine;