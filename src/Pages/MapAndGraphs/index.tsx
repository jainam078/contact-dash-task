
import { useState } from "react";
import LineGraph from "./Graph";
import Map from "./Map";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { AiOutlineAreaChart } from "react-icons/ai";
import Button from "../../Components/FormElements/Button";
import { BsGraphUpArrow, BsPinMapFill } from "react-icons/bs";

const ChartAndMap = () => {
  const [graph, setGraph] = useState(true)

  return (
    <>
		<BreadCrumb
			icon={<AiOutlineAreaChart className='h-5 w-5'/>}
			title="Chart & Maps"
			subTitle="Covid 19 Dashboard"
		/>
      	<div className="grid grid-cols-1 gap-4">
			<div className="flex items-center justify-end mb-4">
				<Button
					onClick={() => {
						setGraph(true)
					}}
					variant={graph ? 'primary' : 'default'}
				>
					<BsGraphUpArrow className='mr-2 mt-0.5'/>
					Graph
				</Button>
				<Button
					onClick={() => {
						setGraph(false)
					}}
					variant={!graph ? 'primary' : 'default'}
				>
					<BsPinMapFill className='mr-2 mt-0.5'/>
					Map
				</Button>
			</div>
      	</div>
		{graph ? (<div>
			<h4 className="text-xl font-bold mb-2">Cases Fluctuations</h4>
			<LineGraph />
		</div>) :
		(<div>
			<h2 className="text-xl font-bold mb-2">World Map</h2>
			<Map />
		</div>)}
    </>
  )
}
export default ChartAndMap;
