import Directory from "../../componets/directory/directory.component";
import { Outlet } from 'react-router-dom';

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Hats',
            imageUrl: 'https://img.freepik.com/free-photo/old-fedora-hat_1101-692.jpg',
        },
        {
            id: 2,
            title: 'Jackets',
            imageUrl: 'https://img.freepik.com/free-psd/black-hoodie-right-side-with-zipper-mockup_125540-695.jpg',
        },
        {
            id: 3,
            title: 'Sneakers',
            imageUrl: 'https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg',
        },
        {
            id: 4,
            title: 'Women',
            imageUrl: 'https://img.freepik.com/free-photo/perky-girl-stylish-glasses-stares-amazement-walking-pink-wall-brunette-culottes-orange-blouse-posing-with-red-handbag_197531-14254.jpg',
        },
        {
            id: 5,
            title: 'Men',
            imageUrl: 'https://img.freepik.com/free-photo/retro-man-dressed-shirt-lies-floor-posing_171337-9906.jpg',
        },
    ];

    return(
        <div>
            <Directory categories = {categories} />
            <Outlet/>
        </div>
    );
};

export default Home;