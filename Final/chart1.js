var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [ 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','Jan',],
        datasets: [{
            label: 'Savings in $',
            data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
            backgroundColor: [
                'rgba(242, 240, 240, 1)'

            ],
            borderColor: 'rgb(17, 172, 221)',

            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});

// dashboard.js

// document.addEventListener('DOMContentLoaded', function () {
//     const ctx = document.getElementById('lineChart').getContext('2d');

//     // Retrieve expenses data from expense page
//     const expensesData = getExpenses().map(expense => expense.amount);

//     const expenseChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: Array.from({ length: expensesData.length }, (_, i) => `Category ${i + 1}`),
//             datasets: [{
//                 label: 'Expense Amount',
//                 data: expensesData,
//                 fill: false,
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 2
//             }]
//         },
//         options: {
            
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// });
