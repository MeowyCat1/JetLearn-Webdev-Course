selector = document.getElementById("operationselect")
result = document.getElementById("result")
first = document.getElementById("firstbox")
second = document.getElementById("secondbox")
function docalc() {
    if (selector.value == "add") {
        result.innerText = Number(first.value) + Number(second.value)
    }
    else if (selector.value == "subtract") {
        result.innerText = Number(first.value) - Number(second.value)
    }
    else if (selector.value == "multiply") {
        result.innerText = Number(first.value) * Number(second.value)
    }
    else if (selector.value == "divide") {
        result.innerText = Number(first.value) / Number(second.value)
    }
    else {
        console.log("Oh no. It's not working. 😢")
    }

}