import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



function Home() {
    return (
        <div>
            {/* carousel */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/img1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/img2.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/img3.jpg"
                    alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/img4.jpg"
                    alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/img5.jpg"
                    alt="Thid slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/img6.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            {/* story 1 */}
            <div className='mt-4 mb-4 flex'>
                <div className='w-2/3 text-center text-xl ml-4 border-l-2 border-b-2 border-t-0 border-r-0 rounded-xl'>
                    <h2>Zircone Stone Bridal Crown</h2>
                    <h3 className='mb-12'>All eyes are on you on your most special day with bridal crowns decorated with zircon stones arranged on silver plating ...Discover the zircon stone bridal crowns of various styles and heights now!</h3>
                    <div className='flex justify-center gap-5'>
                        <img src="img/zirconCrown1.jpg"/>
                        <img src="img/zirconCrown2.jpg"/>
                        <img src="img/zirconCrown3.jpg"/>
                    </div>
                </div>
                <div className='w-1/3 mr-4'>
                    <img src="img/zirconCrownRight.jpg"/>
                </div>
            </div>

            {/* story 2 */}
            <div className='mt-4 mb-12 flex'>
                <div className='w-1/3 ml-4'>
                    <img src="img/story1Left.jpg"/>
                </div>

                <div className='w-2/3 text-center text-xl mr-4 border-l-0 border-b-0 border-t-2 border-r-2 rounded-xl'>
                    <h2>Colourful Henna Crowns</h2>
                    <h3 className='mb-6'>You are the queen of the night with gold and silver plated zircon stone henna crowns! Get ready to shine with zircon stone henna crowns with a variety of colours, varying heights and details decorated with beads, feathers or crystals from purple to blue, green to yellow.</h3>
                    <div className='flex justify-center gap-5'>
                        <img src="img/story1right.jpg"/>
                        <img src="img/story1right2.jpg"/>
                        <img src="img/story1right3.jpg"/>
                    </div>
                </div>
                
            </div>

            {/* blocks */}
            <div className='flex flex-wrap gap-12 mr-4 ml-4 justify-center mb-8'>
                <a href='/weddingAccessory'><img src="img/1.jpg" height={"500px"} width={"500px"}/></a>
                <a href='/bridalCrown'><img src="img/2.jpg" height={"500px"} width={"500px"}/></a>
                <a href='/hennaCrown'><img src="img/3.jpg" height={"500px"} width={"500px"}/></a>
                <a href='/bridalaccessory'><img src="img/4.jpg" height={"500px"} width={"500px"}/></a>
                <a href='/headPiece'><img src="img/5.jpg" height={"500px"} width={"500px"}/></a>
                <a href='/bridalBouquet'><img src="img/6.jpg" height={"500px"} width={"500px"}/></a>
            </div>
        </div>
    );
}

export default Home;