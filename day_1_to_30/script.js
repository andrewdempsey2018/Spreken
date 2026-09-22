
fetch("words_day1.csv")
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

fetch("sentences_day1.txt")
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
                });
            } else {
                div.textContent = line;
            }

            container.appendChild(div);
        });
    });