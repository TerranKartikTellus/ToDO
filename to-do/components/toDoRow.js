import Button from "./button";
import CheckBox from "./checkbox";

export default function ToDoRow({list, update_List}){
    function removee(index){
      const updatedItems = [...list.slice(0, index), ...list.slice(index + 1)];
      update_List(updatedItems)
    }
    
    return (
      <div className=''>
          {list.length>0 ? list.map((i,index)=>(
            <div key={i} className='group flex flex-row items-center justify-between '>
             <CheckBox text={i}></CheckBox>
             <div onClick={()=>removee(index)} className='group-hover:visible invisible'> <Button  text={'✖'}></Button> </div>
            </div>
          )) : <p className='my-2 text-gray-500 text-sm pl-2'>No work found.</p>}
        </div>
    );
  }