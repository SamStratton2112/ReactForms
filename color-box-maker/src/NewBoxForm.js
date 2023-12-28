import { useState } from "react";
import { v4 as uuid} from 'uuid';


const NewBoxForm = ({addBox})=>{
  const initialState = {
    color : '',
    width : '',
    height : '',
    id: ''
  }
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e)=>{
    // destructure values from event object 
    const {name, value} = e.target;
    setFormData(data=>({
      ...data,
      [name] : value
    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    // update state in parent 
    addBox({...formData, id: uuid()});
    // clear input fields 
    setFormData(initialState);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        id='color'
        type="text"
        name ="color"
        placeholder="Color"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id='width'
        type="text"
        name ="width"
        placeholder="Width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        id='height'
        type="text"
        name ="height"
        placeholder="Height"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  )
}

export default NewBoxForm;