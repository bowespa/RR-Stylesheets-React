const styleText = {
    fontSize: '25px',
    textAlign: "center",
    margin: "40px",
    border: "5px solid green",
    background: "yellow",
    borderRadius: "10px"
};

const Window = (props) => {
    return (
        <div style={styleText}>
            <p>Click Here for Tickets!</p>
        </div>
    );
}

export default Window;