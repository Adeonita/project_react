import React, {Component} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{

    constructor(props){
        super(props);
        let bgBorder = this.colorsChart(props.data); //Funcão que pega as cores para o gráfico
        console.log(bgBorder);
            this.state = {
                chartData: {
                    labels: props.labels,  //Gera os labels do relatório
                    datasets:[
                        {
                            label: props.label,
                            data: props.data,
                            backgroundColor: bgBorder.colors,
                            borderColor: bgBorder.borders
                        }
                    ]
                }
            }
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    colorsChart(data){  //Retorna cores para o gráfico
      let colors = [];
      let borders = [];

      for (let i = 0; i < Object.values(data).length; i++) {
          let red = parseInt(this.getRandomArbitrary(0, 255));
          let blue = parseInt(this.getRandomArbitrary(0, 255));
          let green = parseInt(this.getRandomArbitrary(0, 255));
          colors.push('rgba('+red+ ',' + green + ',' + blue + ', 0.4)');
          borders.push('rgba('+red+ ',' + green + ',' + blue + ', 1)');
      }
      return {colors: colors, borders: borders};
    }

   render(){
       return(
            <div className="chart">
                <div className="container">
                    <Bar data={this.state.chartData} options={{ maintainAspectRatio: false }} />
                </div>

            </div>
       );
   }
}

export default Chart;
