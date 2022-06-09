const style = {
    fontSize: '25px',
    textAlign: "center",
    margin: "40px",
    border: "5px solid red",
    background: "lightblue",
    borderRadius: "10px"
}

const SeatingChart = (props) => {
    return (
        <div style={style}>
            <p>Click Here for Seating Chart</p>
        </div>
    );
}

export default SeatingChart;