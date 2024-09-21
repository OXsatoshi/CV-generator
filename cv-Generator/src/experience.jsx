export default function Experience() {
    
    return (
          <div className="experience">
            <div>
                <h1>Experience</h1>
                  <div className="input-group">
                <label htmlFor="position">Degre</label>
                    <input id="position" type="text"></input>
            </div>
             <div className="input-group">
                <label htmlFor="company">Company</label>
                    <input id="company" type="text"></input>
            </div>
            <div className="input-group">
                <label htmlFor="city">City</label>
                    <input id="city" type="text"></input>
            </div>
           <div className="input-group">
                <label htmlFor="desc">Description</label>
                    <input id="desc" type="textArea"></input>
            </div>
            </div>

        </div>
    );
}