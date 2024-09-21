export default function PersonnelInfo({handleNameChange,name,mail,handleMailChange}) {
    return (
        <div className="personnel-info">
            <h1>Personnel Info</h1>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} onChange={handleNameChange}></input>
            </div>
             <div className="input-group">
                <label htmlFor="mail">Email</label>
                    <input id="mail" type="email" value={mail} onChange={handleMailChange}></input>
            </div>
            <div className="input-group">
                <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel"></input>
            </div>
            <div className="input-group">
                <label htmlFor="add">Address</label>
                    <input id="add" type="url"></input>
            </div>
        </div>
    )
}