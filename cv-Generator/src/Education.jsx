export default function Education() {
    return (
        <div className="education">
            <div>
                <h1>Education</h1>
                  <div className="input-group">
                <label htmlFor="degre">Degre</label>
                    <input id="degre" type="text"></input>
            </div>
             <div className="input-group">
                <label htmlFor="school">School</label>
                    <input id="school" type="text"></input>
            </div>
            <div className="input-group">
                <label htmlFor="city">City</label>
                    <input id="city" type="text"></input>
            </div>
           
            </div>

        </div>
    )
}