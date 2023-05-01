let tom = "Tom Hardy";
let jennifer = "Jennifer Winget";
let richard = "Richard Morrison";
let raj = "Rajan Jha";
let puneet = "Puneet Satish Patil";
let rahul = "Rahul Jha";
const element = (
  <ul style={{ color: "blue", fontSize: "24px" }}>
    <li>{tom}</li>
    <li>{jennifer}</li>
    <li>{richard}</li>
    <li>{raj.toUpperCase()}</li>
    <li>{puneet}</li>
    <li>{rahul}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));
