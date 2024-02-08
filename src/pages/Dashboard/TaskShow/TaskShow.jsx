import PropTypes from 'prop-types';
import TaskCard from '../TaskCard/TaskCard';

const TaskShow = ({allTask}) => {
     
    return (
        <div className=''>
            <div className='mt-10  '>
            
            
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1   mt-6 gap-4'>
               {
                allTask?.map(task=> <TaskCard key={task._id} task={task}></TaskCard>)
               }
            </div>
           
           
           
        </div>
        </div>
    );
};
TaskShow.propTypes={
          allTask : PropTypes.array
}
export default TaskShow;