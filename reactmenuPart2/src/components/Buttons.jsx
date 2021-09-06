function Buttons({btn1, btn2, btn3,btn4, btn5,btn6,btn7,btn8}) {
    
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          <button style={{ backgroundColor: "lightskyblue" }}>{btn1}</button>
          <button style={{ backgroundColor: "orange" }}>{btn2}</button>
          <button style={{ backgroundColor: "green" }}>{btn3}</button>
          <button style={{ backgroundColor: "pink" }}>{btn4}</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button style={{ backgroundColor: "aqua" }}>{btn5}</button>
          <button style={{ backgroundColor: "maroon" }}>{btn6}</button>
          <button style={{ backgroundColor: "purple" }}>{btn7}</button>
          <button style={{ backgroundColor: "goldenrod" }}>{btn8}</button>
        </div>
      </div>
    );
}

export default Buttons;