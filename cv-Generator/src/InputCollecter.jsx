import Education from "./Education";
import Experience from "./experience";
import PersonnelInfo from "./Personnelnfo";
import PropTypes from 'prop-types';
export default function InputCollecter({name,handleNameChange,mail,handleMailChange}) {
    return (
        <div className="input-collecter">
            <PersonnelInfo name={name} handleNameChange={handleNameChange}
             mail={mail} handleMailChange={handleMailChange}
            />
            
            <Education />
            <Experience />
            <div className="button-wrapper">
            <button type='submit'>Submit</button>
            <button type='submit'>Delete</button>
        </div>
        </div>);

}
InputCollecter.propTypes = {
    handleNameChange: PropTypes.func.isRequired,
    name:PropTypes.string.isRequired
};