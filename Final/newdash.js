// dashboard.js

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('expense-chart').getContext('2d');

    // Retrieve expenses data from expense page
    const expensesData = getExpenses().map(expense => expense.amount);

    const expenseChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: expensesData.length }, (_, i) => `Category ${i + 1}`),
            datasets: [{
                label: 'Expense Amount',
                data: expensesData,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
