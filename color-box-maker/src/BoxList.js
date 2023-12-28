import { useState } from "react";
import Box from './Box.js';
import NewBoxForm from './NewBoxForm';

const BoxList = ()=>{
	const initialState = []
	const [boxes, setBoxes] = useState(initialState);
	const addBox=(newBox)=>{
		// spread all boxes in state and add new box
		setBoxes(boxes=>[...boxes, newBox])
	}
	// id will be passed from Box when function executes
	const removeBox = id =>{
	// add all boxes to new array if the box's id is not equal to the id passed to the function, and use the new array as the value of boxes 
    setBoxes(boxes => boxes.filter(box => box.id !== id));
	}

	return(
		<div className="BoxList"> 
			<NewBoxForm addBox={addBox}/>
			<div className="BoxList-Boxes">{boxes.map(box=> {
				return(
					<Box 
						key={box.id}
						id={box.id}
						color={box.color}
						width={box.width}
						height={box.height}
						removeBox={removeBox}
					/>
				)
			})}</div>
		</div>

	)
}

export default BoxList;