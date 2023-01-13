import './projectItem.scss';

const ProjectItem = ({img, color, size, link, text}) => {
    return (
        <button className='projectItem'
        onClick={() => window.location.href = {link}}>
            <img src={img} alt='' />
            <p className={`projectItem__name 
            projectItem__name_${color} projectItem__name_${size}`}>
                {text}
            </p>
        </button>
    );
};

export default ProjectItem;