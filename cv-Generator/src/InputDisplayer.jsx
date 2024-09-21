import PropTypes from 'prop-types';
export default function InputDisplayer({ name,mail }) {
    return (
        <div className="input-displayer">
            <div className="header">
                <div><h1>{name.c}</h1></div>
                <div>{mail }</div>    
            </div>
            
            <div className="body">
            </div>
      </div>  
    );
}
InputDisplayer.propTypes = {
  name: PropTypes.string.isRequired,
};