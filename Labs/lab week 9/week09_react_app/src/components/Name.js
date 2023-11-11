const cssColor = {
    color: 'white',
    backgroundColor: 'blue'
}

function Name(props) {
    return (
        <>
            <h2>Hello James MacAloney</h2>
            <h3 style={{color: 'red'}}>{props.fnm}, {props.lnm}</h3>
            <h3 style={cssColor}>TEST CSS OBJECT</h3>
        </>
    );
}

export default Name