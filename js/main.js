/// <reference types="../@types/jquery"/>

let inputSearchByName = document.getElementById("inputSearchByName")
let inputSearchByTransactionData = document.getElementById("inputSearchByTransactionData")

$(document).ready(() => {
    $("#screenLoad").fadeOut(500)
    $("body").css("overflow-y", "hidden")
})

let dataBase = {
    "customers": [
        {
            "id": 1,
            "name": "Ahmed Ali",
            "dates": "2022-01-01 , 2022-01-02",
            "amount1": "1000 EGP",
            "amount2": "2000 EGP",
            "amount": 1000
        },
        {
            "id": 2,
            "name": "Aya Elsayed",
            "dates": "2022-01-01 , 2022-01-02",
            "amount1": "550 EGP",
            "amount2": "1300 EGP",
            "amount": 550
        },

        {
            "id": 3,
            "name": "Mina Adel",
            "dates": "2022-01-01 , 2022-01-02",
            "amount1": "500 EGP",
            "amount2": "1250 EGP",
            "amount": 500
        },
        {
            "id": 4,
            "name": "Sarah Reda",
            "dates": "2022-01-01",
            "amount1": "750 EGP",
            "amount2": "",
            "amount": 750
        },
        {
            "id": 5,
            "name": "Mohamed Sayed",
            "dates": "2022-01-01 , 2022-01-02",
            "amount1": "2500 EGP",
            "amount2": "875 EGP",
            "amount": 2500
        }
    ],
    "transactions": [
        {
            "id": 1,
            "customer_id": 1,
            "date": "2022-01-01",
            "amount": 1000
        },
        {
            "id": 2,
            "customer_id": 1,
            "date": "2022-01-02",
            "amount": 2000
        },
        {
            "id": 3,
            "customer_id": 2,
            "date": "2022-01-01",
            "amount": 550
        },
        {
            "id": 4,
            "customer_id": 3,
            "date": "2022-01-01",
            "amount": 500
        },
        {
            "id": 5,

            "customer_id": 2,
            "date": "2022-01-02",
            "amount": 1300
        },
        {
            "id": 6,
            "customer_id": 4,
            "date": "2022-01-01",
            "amount": 750
        },
        {
            "id": 7,
            "customer_id": 3,
            "date": "2022-01-02",
            "amount": 1250
        },
        {
            "id": 8,
            "customer_id": 5,
            "date": "2022-01-01",
            "amount": 2500
        },
        {
            "id": 9,
            "customer_id": 5,
            "date": "2022-01-02",
            "amount": 875
        }
    ]
}

displayCustomer(dataBase.customers)

function displayCustomer(dataBase) {
    let cartona = ``
    for (let i = 0; i < dataBase.length; i++) {
        cartona += `
        
                        <tr onclick="displayChart('${dataBase[i].name}' , '${dataBase[i].amount}')">
                            <td class="text-center">${i}</td>
                            <td class="text-center">${dataBase[i].name}</td>
                            <td class="text-center">${dataBase[i].dates}</td>
                            <td class="text-center">${dataBase[i].amount1} , ${dataBase[i].amount2}</td>
                        </tr>

            `
        document.getElementById("displayContainer").innerHTML = cartona
    }
}

particlesJS.load('particles-js', 'js/particles.json');

$("#colorPicker").delay(1000).animate({ left: -217.8 }, 1000)


$(".d-inline-block").eq(0).css("backgroundColor", "#323b3f")
$(".d-inline-block").eq(1).css("backgroundColor", "rgb(220, 53, 69)")
$(".d-inline-block").eq(2).css("backgroundColor", "rgb(255, 193, 7)")
$(".d-inline-block").eq(3).css("backgroundColor", "rgb(13, 202, 240)")
$(".d-inline-block").eq(4).css("backgroundColor", "rgb(25, 135, 84)")
$(".d-inline-block").eq(5).css("backgroundColor", "purple")
let newColor = ""

let ColorPickerLeft = $("#colorPicker").css("left")
$(".fa-gear").on("click", function () {
    $("#colorPicker").animate({ left: "0" }, 1000)
    $(this).fadeOut(300)
    $(".fa-xmark").fadeIn(300)
})

$(".fa-xmark").on("click", function () {
    $("#colorPicker").animate({ left: -217.8 }, 1000)
    $(this).fadeOut(300)
    $(".fa-gear").fadeIn(300)
})

newColor = localStorage.getItem("newColor")
$("#particles-js").css("backgroundColor", newColor)
$("#screenLoad").css("backgroundColor", newColor)
$(".d-inline-block").on("click", function () {
    $("#screenLoad").fadeIn(500)
    $("body").css("overflow-y", "hidden")
    newColor = $(this).css("backgroundColor")
    localStorage.setItem("newColor", newColor)
    $("#particles-js").css("backgroundColor", newColor)
    $("#screenLoad").css("backgroundColor", newColor)
    $("#colorPicker").animate({ left: -217.8 }, 1000)
    $(".fa-xmark").fadeOut(300)
    $(".fa-gear").fadeIn(300)
    $("#screenLoad").fadeOut(500)
    $("body").css("overflow-y", "visible")
})

$("#btnReset").on("click", function () {
    inputSearchByName.value = ""
})

function search(inputValue) {
    let cartona = ""
    for (let i = 0; i < dataBase.customers.length; i++) {
        if (dataBase.customers[i].name.toLowerCase().includes(inputValue.toLowerCase())) {
            cartona += `

            <tr onclick="displayChart('${dataBase.customers[i].name}' , '${dataBase.customers[i].amount}')">
                            <td class="text-center">${i}</td>
                            <td class="text-center">${dataBase.customers[i].name}</td>
                            <td class="text-center">${dataBase.customers[i].dates}</td>
        <td class="text-center">${dataBase.customers[i].amount1} , ${dataBase.customers[i].amount2}</td>
                        </tr>

            `
            document.getElementById("displayContainer").innerHTML = cartona
        }
    }
}

Chart.defaults.color = 'white';

const ctx = document.getElementById('myChart');

function displayChart(customerName, transactionAmount) {
    $("#hiddenTitle").addClass("d-none")
    try {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [customerName],
                datasets: [{
                    label: '# of Amount Transactions',
                    data: [transactionAmount,],
                    borderWidth: 1,
                    borderColor: 'teal',
                    backgroundColor: 'teal',
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                },
            }
        });
    } catch (error) {
        console.log();
    }
}