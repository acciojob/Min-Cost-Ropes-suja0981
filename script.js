function mincost(arr) {
    let cost = 0;

    while (arr.length > 1) {
        arr.sort((a, b) => a - b);

        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        arr.push(sum);
    }

    return cost;
}

function calculateCost() {
    const input = document.getElementById("ropes").value;

    const arr = input
        .split(",")
        .map(Number);

    const cost = mincost(arr);

    document.getElementById("result").textContent =
        "Minimum Cost: " + cost;
}

module.exports = mincost;