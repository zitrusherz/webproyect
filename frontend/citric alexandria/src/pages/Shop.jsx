import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import GameCard from '../components/GameCard';
import directory from '../assets/img/directory';
import { getFilteredGames } from '../api/filterGames';
import directoryGames from '../assets/img/directoryGames';

const Shop = () => {
    const [gamesToShow, setGamesToShow] = useState(30);
    const [loadedGamesCount, setLoadedGamesCount] = useState(30);
    const [loading, setLoading] = useState(false);
    const [filteredGames, setFilteredGames] = useState([]);
    const [allGames, setAllGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const observerRef = useRef(null);

    useEffect(() => {
        const fetchFilteredGames = async () => {
            try {
                const games = await getFilteredGames(); 
                setFilteredGames(games);
                setAllGames(games);
            } catch (error) {
                console.error('Error fetching games:', error);
                setFilteredGames([]);
            }
        };

        fetchFilteredGames(); 
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.9,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadMoreGames();
                }
            });
        }, options);

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [loadedGamesCount]);

    const loadMoreGames = () => {
        if (loadedGamesCount < filteredGames.length) {
            setLoading(true);
            setTimeout(() => {
                const nextBatch = Math.min(loadedGamesCount + 30, filteredGames.length);
                setGamesToShow(nextBatch);
                setLoadedGamesCount(nextBatch);
                setLoading(false);
            }, 1500);
        }
    };

    const filterByCategory = (category) => {
        const filtered = allGames.filter(game => game.category === category);
        setFilteredGames(filtered);
        setGamesToShow(30);
        setLoadedGamesCount(30);
    };

    const resetFilters = () => {
        setFilteredGames(allGames);
        setGamesToShow(30);
        setLoadedGamesCount(30);
    };

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = allGames.filter(game => game.name.toLowerCase().includes(value));
        setFilteredGames(filtered);
        setGamesToShow(30);
        setLoadedGamesCount(30);
    };

    return (
        <Container className="py-5">
            <h1 className="text-center mb-5 text-white">Game Shop</h1>
            <div className="d-flex flex-wrap justify-content-center mb-4">
                <Button variant="primary" className="m-2" onClick={() => filterByCategory('Action')}>Action</Button>
                <Button variant="primary" className="m-2" onClick={() => filterByCategory('Adventure')}>Adventure</Button>
                <Button variant="primary" className="m-2" onClick={() => filterByCategory('Strategy')}>Strategy</Button>
                <Button variant="primary" className="m-2" onClick={() => filterByCategory('RPG')}>RPG</Button>
                <Button variant="secondary" className="m-2" onClick={resetFilters}>Reset Filters</Button>
                <Form.Control 
                    type="text" 
                    placeholder="Search by game name" 
                    value={searchTerm} 
                    onChange={handleSearch} 
                    className="m-2" 
                    style={{ width: '300px' }}
                />
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {filteredGames.slice(0, gamesToShow).map((game) => (
                    <Col key={game.id}>
                        <GameCard
                            imageSrc={directoryGames[game.game_id] || directory.noGame}
                            name={game.name}
                            category={game.category}
                            price={game.price}
                            id={game.game_id}
                        />
                    </Col>
                ))}
            </Row>
            <div ref={observerRef}></div>
            {loading && (
                <div className="text-center mt-3">
                    <h2 className="pulse">Cargando...</h2>
                </div>
            )}
        </Container>
    );
};

export default Shop;
