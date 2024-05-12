import ReactApexChart from 'react-apexcharts'
import { mixedChartData } from '../data/mixedChartData'

const MixedChart = () => {
    return (
        <div className='w-full'>
            <ReactApexChart options={mixedChartData.options} series={mixedChartData.series} type="line" height={350} />
        </div>
    )
}

export default MixedChart