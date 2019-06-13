import React, {Component} from 'react';
import { Bar, Line, Pie, Doughnut, Radar } from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{

    constructor(props){ //Chama o constutor para criar o gráfico
        super(props);
        let bgBorder = this.colorsChart(props.data); //Funcão que pega as cores para o gráfico
            this.state = { //Dados que compoem o gráfico
                chartData: {
                    type: props.type,
                    labels: props.labels,  //Gera os labels do relatório
                    datasets:[
                        {
                            label: props.label,
                            data: props.data,
                            backgroundColor: bgBorder.colors,
                            borderColor: bgBorder.borders
                        }
                    ],
                    options: {
                          legend: {
                              display: true
                          }
                        }
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
    const types = {  //Recebe tipos do gráfico
      Pie: Pie,
      Bar: Bar,
      Line: Line,
      Doughnut: Doughnut,
      Radar: Radar
    };
    const Type = types[this.props.type]; //Type contém tipos
     return(
          <div className="chart">
            <h1>{this.props.titleChart}</h1>
              <div className="container">
                  <Type data={this.state.chartData} options={{ maintainAspectRatio: false }} />
              </div>

          </div>
     );
   }
}

export default Chart;
