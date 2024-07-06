  import React from 'react';
  import { Button, Carousel, Container } from 'react-bootstrap';
  import directory from '../assets/img/directory';
  import { Link } from 'react-router-dom';

  const items = [
    { imageSrc: directory.imgCarru1, name: 'Melty Blood', category: 'Aventura',id:"/shop/Mel55d", price:55.55 },
    { imageSrc: directory.imgCarru2, name: 'Bayoneta', category: 'Aventura',id:"/shop/Bay45a", price:45.45 },
    { imageSrc: directory.imgCarru3, name: 'Rainbows Siege', category: 'Online',id:"/shop/Rai35e", price:35.35 },
    { imageSrc: directory.imgCarru4, name: 'Hotline Miami', category: 'Shooter', id:"/shop/Hot25r", price:25.25 },
    { imageSrc: directory.imgCarru5, name: 'Nier:Automata', category: 'Aventura',id:"/shop/Nie35r", price:35 },
    { imageSrc: directory.imgCarru6, name: 'Age of empire 2', category: 'Estrategia, Gestion de Recursos', id:"/shop/Age12y",price:12 }
  ];

  const GamesCarousel = () => {
    const renderCarouselItems = () => {
      return items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.imageSrc}
            alt={`Slide ${index + 1}`}
            style={{ maxHeight: 'calc(100vh - 100px)' }}
          />
          <Carousel.Caption  className=' text-warning z-3 d-flex align-items-end justify-content-center '>
            
            <Link to={item.id} state={item}>
              <Button>Comprar</Button>
            </Link>
            
          </Carousel.Caption>
        </Carousel.Item>
      ));
    };

    return (
      <Container className="d-flex justify-content-center align-items-center vh-70" style={{ width: '100%' }}>
        <Carousel interval={1500} style={{ width: '100%', maxHeight: 'calc(100vh - 100px)' }} pause="hover" controls={false}>
          {renderCarouselItems()}
        </Carousel>
      </Container>
    );
  };

  export default GamesCarousel;
