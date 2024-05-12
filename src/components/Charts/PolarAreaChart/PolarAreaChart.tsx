import ReactApexChart from 'react-apexcharts'
import { polarAreaChartData } from '../data/polarAreaChartData'

const PolarAreaChart = () => {
    return (
        <div className='w-full'>
            <ReactApexChart options={polarAreaChartData.options} series={polarAreaChartData.series} type='polarArea' height={350} />
        </div>
    )
}

export default PolarAreaChart