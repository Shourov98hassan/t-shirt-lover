import Reviews from '../Reviews/Reviews'

const Review = ({datas}) => {
    return (
        <div>
            <h1 className='customer-review'>Customer Reviews:</h1>
            {
                datas.map(data => <Reviews data={data} />)

            }
        </div>
    );
};

export default Review;