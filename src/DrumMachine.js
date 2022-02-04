const DrumMachine = () => {
    return (
      <>
        <section id="header" className="text-center p-3">
          <h1>Drum machine</h1>
        </section>
        <div id="drumbox" className="container">
          <div className="key-container">
            <div className="key">
              <div className="btn">Key</div>
            </div>
            <div className="key">
              <div className="btn">Key</div>
            </div>
            <div className="key">
              <div className="btn">Key</div>
            </div>

            <div className="key">
              <div className="btn">Key</div>
            </div>
            <div className="key">
              <div className="btn">Key</div>
            </div>
            <div className="key">
              <div className="btn">Key</div>
            </div>

            <div className="key">
              <div className="btn">Key</div>
            </div>
            <div className="key">
              <div className="btn">Key</div>
            </div>
            <div className="key">
              <div className="btn">Key</div>
            </div>
          </div>
        </div>
      </>
    ); 
}

export default DrumMachine;