import ReadMobile from './ReadMobile';
import ReadTablet from './ReadTablet';

let mobile = window.matchMedia('(max-width: 767px)').matches;

const Read = ({ color, books }) => {
    return (
        <>
            {mobile ? (
                <ReadMobile color={color} books={books} />
            ) : (
                <ReadTablet color={color} books={books} />
            )}
        </>
    );
};

export default Read;
