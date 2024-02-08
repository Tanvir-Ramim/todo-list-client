import PropTypes from 'prop-types';
import TaskCard from '../TaskCard/TaskCard';

const TaskShow = ({allTask}) => {
      console.log(allTask)
    return (
        <div>
            <div className='mt-10'>
            
            <div className='flex flex-col'>
            <div className='flex  flex-wrap   mt-6 gap-4'>
               {
                allTask?.map(task=> <TaskCard key={task._id} task={task}></TaskCard>)
               }
            </div>
           
            </div>
           
        </div>
        </div>
    );
};
TaskShow.propTypes={
          allTask : PropTypes.array
}
export default TaskShow;