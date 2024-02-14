
const arr = [1, 1, 1, 1, 2, 2, 1];

const size = arr.length;
let i = 0;
while (i < size) {
    let count = 1;

    for (let j = i + 1; j < size; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count > 1) {
        console.log(`${arr[i]} = ${count} times`);
        let j = i + 1;
        while (j < size && arr[i] === arr[j]) {
            j++;
        }
        i = j;
    } else {
        i++;
    }
}