const DrumMachine = () => {
    return (
      <>
        <section id="header" className="text-center p-3">
          <h1>Drum machine</h1>
        </section>
        <div id="drumbox" className="container ms-auto me-auto">
          <div className="row m-3">
            <button className="col-4 key">W</button>
            <button className="col-4 key">Q</button>
            <button className="col-4 key">E</button>
</div>
<div className="row m-3">

            <button className="col key">A</button>
            <button className="col key">key1</button>
            <button className="col key">key1</button>

            </div>

<div className="row m-3">

            <button className="col key">key1</button>
            <button className="col key">key1</button>
            <button className="col key">key1</button>
            </div>
          </div>
        
      </>
    ); 
}

export default DrumMachine;