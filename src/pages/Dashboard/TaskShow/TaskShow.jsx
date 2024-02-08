import PropTypes from 'prop-types';
import TaskCard from '../TaskCard/TaskCard';

const TaskShow = ({allTaskInfo}) => {
     
    return (
        <div className=''>
            <div className='mt-10  '>
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:ml-0  sm:ml-8 ml-6  mt-6 gap-4'>
               {
                allTaskInfo?.map(task=> <TaskCard key={task._id} task={task}></TaskCard>)
               } 
            </div>
        </div>
        </div>
    );
};
TaskShow.propTypes={
    allTaskInfo : PropTypes.array
}
export default TaskShow;