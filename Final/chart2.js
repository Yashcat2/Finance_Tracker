var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Food & Beverage', 'Rent', 'Transport', 'Shopping','Relaxing'],

        datasets: [{
            label: 'Employees',
            data: [25, 12, 8, 16,7],
             backgroundColor: [
                'rgb(83, 223, 209)','rgb(46, 181, 224)','rgb(0, 168, 168)','rgb(12, 105, 128)','rgb(157, 227, 246)'
                // 'rgba(41, 155, 99, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                
                // 'rgba(120, 46, 139,1)',
                // 'rgba(255, 206, 86, 1)'

            ],
            borderColor: [
                'rgb(196, 219, 224)','rgb(46, 181, 224)','rgb(0, 168, 168)','rgb(12, 105, 128)','rgb(157, 227, 246)'
                // 'rgba(41, 155, 99, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(120, 46, 139,1)',
                // 'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});