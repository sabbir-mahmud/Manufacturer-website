import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarousel = () => {
    return (
        <Carousel className='h-[600px] overflow-hidden my-24 rounded-xl' showArrows={true}>
            <div>
                <img src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJhdHRlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500" alt='' />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1592318348310-f31b61a931c8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0dGVyeSUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt='' />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1612965110642-d2ed35011901?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhdHRlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500" alt='' />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1597766325363-f5576d851d6a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmF0dGVyeSUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt='' />
            </div>
        </Carousel >
    );
};

export default HomeCarousel;