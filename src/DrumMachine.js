const DrumMachine = () => {
    return (
      <>
        <section id="header" className="text-center p-3">
          <h1>Drum machine</h1>
        </section>
        <div id="drumbox" className="container p-3 ms-auto me-auto">
          <div className="row gy-1">
            <div className="col-4 key"><button className="w-100">Key</button></div>
            <div className="col-4 key"><button className="w-100">Key</button></div>
            <div className="col-4 key"><button className="w-100">Key</button></div>


            <div className="col-4 key"><button className="w-100">Key</button></div>
            <div className="col-4 key"><button className="w-100">Key</button></div>
            <div className="col-4 key"><button className="w-100">Key</button></div>

     

            <div className="col-4 key"><button className="w-100">Key</button></div>
            <div className="col-4 key"><button className="w-100">Key</button></div>
            <div className="col-4 key"><button className="w-100">Key</button></div>
            </div>
          </div>
        
      </>
    ); 
}

export default DrumMachine;