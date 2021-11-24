Chart.defaults.font.family = 'Conv_Montserrat-Regular,Conv_Montserrat-Bold,Tahoma, Arial, sans-serif';
const ctx = document.querySelector('.graph-reviews__canvas').getContext('2d');
var gradient1 = ctx.createLinearGradient(20,0,20,170);
var gradient2 = ctx.createLinearGradient(200,200,280,0);
var gradient3 = ctx.createLinearGradient(0,90,0,160);
var gradient4 = ctx.createLinearGradient(100,0, 100,150);
var gradient1Legend = ctx.createLinearGradient(10,0, 10,10);
var gradient2Legend = ctx.createLinearGradient(10,0, 10,10);
var gradient3Legend = ctx.createLinearGradient(10,0, 10,10);
var gradient4Legend = ctx.createLinearGradient(10,0, 5,5);
gradient1.addColorStop(0,'#FFE39C');
gradient1.addColorStop(1,'#FFBA9C');
gradient2.addColorStop(0,'#6FCF97');
gradient2.addColorStop(1,'#66D2EA');
gradient3.addColorStop(0,'#BC9CFF');
gradient3.addColorStop(1,'#8BA4F9');
gradient4.addColorStop(0,'#909090');
gradient4.addColorStop(1,'#3D4975');
gradient1Legend.addColorStop(0,'#FFE39C');
gradient1Legend.addColorStop(1,'#FFBA9C');
gradient2Legend.addColorStop(0,'#6FCF97');
gradient2Legend.addColorStop(1,'#66D2EA');
gradient3Legend.addColorStop(0,'#BC9CFF');
gradient3Legend.addColorStop(1,'#8BA4F9');
gradient4Legend.addColorStop(0,'#000000');
gradient4Legend.addColorStop(1,'#000000');
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
      'Великолепно',
      'Хорошо',
      'Удовлетворительно',
      'Разочарован'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [130, 65, 65, 0],
      backgroundColor: [
        gradient1,
        gradient3,
        gradient2,
        gradient4
      ]
    }]
  },
    options:{
      cutout:'90%',
      radius:60,
      maintainAspectRatio: false,
      rotation:180,
      plugins:{
        legend:{
          display:true,
          position:'right',
          align: 'end',
          maxWidth:200,
          labels:{
            boxHeight:10,
            boxWidth:10,
            usePointStyle: true,
            pointStyle:'circle',
            font:{
              size: 14
            },
          },
        },
      title:{
        display:true,
        position:'top',
        text:'Впечатления от номера',
        font:{
          size: 19,
          family:'Conv_Montserrat-Bold'
        },
        padding:{
          bottom: 15
        }
      }

      }
    }
})