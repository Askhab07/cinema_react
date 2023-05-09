import cinema from '../../../Assets/Image/cinema.png';

const FilmsItem = () => {
    return (
        <div>
            <img src={cinema} alt="" />
            <p>Jurassic World</p>
            <p>Science Fiction</p>
        </div>
    );
};

export default FilmsItem;