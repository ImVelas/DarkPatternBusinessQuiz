const data = [
    {
        name: 'Opt-Out',
        description: 'pressed?',
        value: false
    },
    {
        name: 'Preselection',
        description: 'disbaled?',
        value: false
    },
    {
        name: 'Disguised Ads',
        description: 'clickCount',
        value: 0
    }
];


function pressedOptOut() {
    data[0].value = true;
}

function disabledPreselection() {
    data[1].value = true;
}

function increaseClickCount() {
    data[2].value++;
}

function submit() {
    console.log("submitting...!")
    const titleKeys = Object.keys(data[0]);
    const refinedData = [];
    refinedData.push(titleKeys);

    data.forEach(item => {
        refinedData.push(Object.values(item));
    });

    let csvContent = '';

    refinedData.forEach(row => {
        csvContent += row.join(';') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })

    const xhr = new XMLHttpRequest();
    const url = "./main.php";
    xhr.open("POST", url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error('Error occurred:', xhr.status, xhr.statusText);
        }
        document.location.href = "result.html";
    };

    xhr.send(blob);
}