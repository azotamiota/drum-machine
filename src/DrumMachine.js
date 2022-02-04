const DrumMachine = () => {

document.addEventListener('keydown', function(event) {
    //console.log(`The ${event.key} has been pressed, keycode: ${event.keyCode}`);
    if (event.key === "q") {
      heater1.play();
    } else if (event.key === "w") {
      heater2.play();
    } else if (event.key === "e") {
      heater3.play();
    } else if (event.key === "a") {
      heater4.play();
    } else if (event.key === "s") {
      clap.play();
    } else if (event.key === "d") {
      openHH.play();
    } else if (event.key === "z") {
      kickNHat.play();
    } else if (event.key === "x") {
      kick.play();
    } else if (event.key === "c") {
      closedHH.play();
    } else {
        console.log('No sound for this key')
    }
})
const heater1 = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
);
const heater2 = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
);
const heater3 = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
);
const heater4 = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
);
const clap = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
);
const openHH = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
);
const kickNHat = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
);
const kick = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
);
const closedHH = new Audio(
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
);

// const handleClick = (e) => {
// console.log('button has been pressed')
// kick.play()
// }


    return (
      <>
        <section id="header" className="text-center p-3">
          <h1>Drum machine</h1>
        </section>
        <div id="drumbox" className="container">
          <div className="key-container">
            <button className="key" id="key1">
              <div className="btn">Key</div>
            </button>
            <div className="key" id="key2">
              <div className="btn">Key</div>
            </div>
            <div className="key" id="key3">
              <div className="btn">Key</div>
            </div>

            <div className="key" id="key4">
              <div className="btn">Key</div>
            </div>
            <div className="key" id="key5">
              <div className="btn">Key</div>
            </div>
            <div className="key" id="key6">
              <div className="btn">Key</div>
            </div>

            <div className="key" id="key7">
              <div className="btn">Key</div>
            </div>
            <div className="key" id="key8">
              <div className="btn">Key</div>
            </div>
            <div className="key" id="key9">
              <div className="btn">Key</div>
            </div>
          </div>
          
        </div>
      </>
    ); 
}

export default DrumMachine;