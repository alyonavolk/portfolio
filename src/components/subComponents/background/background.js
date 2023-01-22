import './background.scss';

const Background = () => {
    const bg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return (
        <div className='polygon'>
            {bg.map(() => <div>&nbsp;</div>)}
        </div>
    );
};

export default Background;