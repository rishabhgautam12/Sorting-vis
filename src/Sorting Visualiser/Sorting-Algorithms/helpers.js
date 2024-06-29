// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
export function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
export function disableSortingBtn() {
    document.getElementsByClassName("bubbleSort").disabled = true;
    document.getElementsByClassName("mergeSort").disabled = true;
    document.getElementsByClassName("quickSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
export function enableSortingBtn() {
    document.getElementsByClassName("bubbleSort").disabled = false;
    document.getElementsByClassName("mergeSort").disabled = false;
    document.getElementsByClassName("quickSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
export function disableSizeSlider() {
    document.getElementById("arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
export function enableSizeSlider() {
    document.getElementById("arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
export function disableNewArrayBtn() {
    document.getElementsByClassName("newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
export function enableNewArrayBtn() {
    document.getElementsByClassName("newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
export function sleep(milisec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, milisec);
    });
}
