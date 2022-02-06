

const DrumMachine = () => {

const soundAndPressAnimation = (key) => {
  console.log('event is: ', key)
  
document.getElementById(`key${key}`).setAttribute('class', 'drum-pad-active');

document.getElementById(key).currentTime = 0;
document.getElementById(key).play();
    document.getElementById('display').innerText = document.getElementById(`key${key}`).getAttribute('name');
setTimeout(() => {document.getElementById(`key${key}`).setAttribute("class", "drum-pad");}, 100);

}

  
  const handleKeyPress = (event) => {

    const keyPressed = event.key.toUpperCase();
      const elementPressed = document.getElementById(keyPressed).parentElement
      elementPressed.click()
  };

document.addEventListener("keydown", handleKeyPress);

    
  
    //document.removeEventListener("keydown", handleKeyPress)
  

//document.addEventListener("keydown", handleKeyPress);

    return (
      <>
        <section
          id="header"
          className="d-flex justify-content-between text-center p-3"
        >
          <div className="fas fa-drum fa-lg"></div>
          <h1>Drum machine</h1>
          <div className="fas fa-drum fa-lg"></div>
        </section>
        <div id="drum-machine" className="container">
          <div className="key-container">
            <div
              className="drum-pad"
              id="keyQ"
              name="Heater-1"
              onClick={() => soundAndPressAnimation('Q')}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                className="clip"
                id="Q"
              ></audio>
              Q
            </div>
            <div
              className="drum-pad"
              id="keyW"
              name="Heater-2"
              onClick={() => soundAndPressAnimation('W')}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                className="clip"
                id="W"
              ></audio>
              W
            </div>
            <div
              className="drum-pad"
              id="keyE"
              name="Heater-3"
              onClick={() => soundAndPressAnimation('E')}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                className="clip"
                id="E"
              ></audio>
              E
            </div>

            <div
              className="drum-pad"
              id="keyA"
              name="Heater-4"
              onClick={() => soundAndPressAnimation('A')}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                className="clip"
                id="A"
              ></audio>
              A
            </div>
            <div
              className="drum-pad"
              id="keyS"
              name="Clap"
              onClick={() => soundAndPressAnimation('S')}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                className="clip"
                id="S"
              ></audio>
              S
            </div>
            <div
              className="drum-pad"
              id="keyD"
              name="Open-HH"
              onClick={() => soundAndPressAnimation('D')}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                className="clip"
                id="D"
              ></audio>
              D
            </div>

            <div
              className="drum-pad"
              id="keyZ"
              name="Kick'n Hat"
              onClick={() => soundAndPressAnimation('Z')}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                className="clip"
                id="Z"
              ></audio>
              Z
            </div>
            <div
              className="drum-pad"
              id="keyX"
              name="Kick"
              onClick={() => soundAndPressAnimation('X')}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                className="clip"
                id="X"
              ></audio>
              X
            </div>
            <div
              className="drum-pad"
              id="keyC"
              name="Closed-HH"
              onClick={() => soundAndPressAnimation('C')}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                className="clip"
                id="C"
              ></audio>
              C
            </div>
          </div>
          <div id="display">Sound name</div>
        </div>
        <footer id="copyright">
          created by <a href="https://azotamiota.github.io">azotamiota</a>
        </footer>
      </>
    ); 
}

export default DrumMachine;