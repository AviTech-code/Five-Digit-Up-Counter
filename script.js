
let btn = document.getElementById('start-btn');
let boxes = Array.from(document.getElementsByClassName('my-font'));
let countInterval;

btn.addEventListener('click', () => {
    let count = parseInt(document.getElementById("number").value);
    let number = 0;
    //if number is negative
    if (count < 0) {
        alert("Please enter a positive number");
        setBack();
        //clearInterval(countInterval);
        return;
    }
    //if number is not entered.
    if (isNaN(count)) {
        alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    //Here setInterval function starts
    countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);

            alert("Counter has stopped");
            setBack();
            return;
        }
        else {
            let i = boxes.length - 1;
            while (i >= 0) {
                if (boxes[i].innerText == 9) {
                    boxes[i].innerText = 0;
                }
                else {
                    boxes[i].innerText = parseInt(boxes[i].innerText, 10) + 1;
                    break;
                }
                i--;
            }
        }
        number++;
    }, 1000);

    function setBack() //to reset value of form and counter back to zero 
    {
        for (var i = 0; i <= 4; i++) {
            boxes[i].innerText = "0";
        }
        document.getElementById("number").value = '';
    }

})