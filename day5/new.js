function fetchAPI(){
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=UFSHJ6CKHYGJ597DRV94R8TQ5";
    fetch(url)
    .then((res)=>res.json())
    .then(renderUI);
}
fetchAPI()

function renderUI(data){
    const days = data.days;
    console.log(days);

    const childRow = document.createElement("row")
    const row = document.createElement("tr");
    let cell1 = document.createElement("th");
    cell1.innerText='Date';
    row.appendChild(cell1);

    const cell2 = document.createElement("th");
    cell2.innerText = 'Maximum Temperature';
    row.appendChild(cell2);

    root.appendChild(childRow);

    // const cell3 = document.createElement("th");
    // cell3.innerText = 'Minimum Temperature';
    // row.appendChild(cell3);

    // ShadowRoot.append(row);
}

renderUI();