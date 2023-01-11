import './pageName.scss';

const PageName = ({children}) => {
    return (
        <div className='pageName'>
            <div className='pageName__line'>&nbsp;</div>
            <p className='pageName__title'>
                {children}
            </p>
        </div>
    );
};

export default PageName;