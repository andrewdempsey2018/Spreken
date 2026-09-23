
// 1. Get the query string from the current URL
const urlParams = new URLSearchParams(window.location.search);

// 2. Extract the 'id' value (returns the string "42")
const idString = urlParams.get('id');

// 3. Convert the string to an actual integer
const idInteger = parseInt(idString, 10);

// Use your integer safely
console.log(idInteger); // Output: 42
console.log(typeof idInteger); // Output: "number"

document.getElementById('hhh').textContent = "Day " + idInteger;

fetch("./data/words_day" + idInteger + ".csv")
    .then(response => response.text())
    .then(csv => {
        const rows = csv.trim().split("\n");
        const table = document.getElementById("wordTable");

        rows.forEach(row => {
            const words = row.split(",");

            const tr = document.createElement("tr");

            // Column 1
            const td1 = document.createElement("td");
            td1.textContent = words[0];
            tr.className = 'fs-3'; //rushed code
            tr.appendChild(td1);
            

            // Columns 2 and 3
            for (let i = 1; i <= 2; i++) {
                const td = document.createElement("td");

                td.textContent = "???";

                td.addEventListener("click", () => {
                    td.textContent = words[i];
                });

                tr.appendChild(td);
            }

            table.appendChild(tr);
        });
    });

fetch("./data/sentences_day" + idInteger + ".txt")
    .then(response => response.text())
    .then(text => {
        const lines = text.trim().split(/\r?\n/);
        const container = document.getElementById("sentences");

        lines.forEach((line, index) => {
            const div = document.createElement("div");

            // Odd-numbered lines are hidden
            if ((index + 1) % 2 === 1) {
                div.textContent = "???";

                div.addEventListener("click", () => {
                    div.textContent = line;
                    div.className = 'fs-3'; //rushed code
                });
            } else {
                div.textContent = line;
                div.className = 'fs-2'; //rushed code
            }

            container.appendChild(div);

        });
    });