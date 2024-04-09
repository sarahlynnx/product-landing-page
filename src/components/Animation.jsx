import React, {useState, useEffect, useRef} from 'react';
import Container from 'react-bootstrap/Container';

const Animation = () => {
    const speed = 10;
    const starsContainerRef = useRef(null);
    const scrollingTextRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState('');


    useEffect(() => {
        const scrollingText = scrollingTextRef.current;
        const scrollingTextWidth = scrollingText.offsetWidth;
        const scrollAmountBoundary = Math.abs(window.innerWidth - scrollingTextWidth);
        let transformAmount = 0;
        let leftBound = 0;
        let rightBound = scrollAmountBoundary;
        let transformDirection = speed < 0 ? -1 : 1;
        let transformSpeed = Math.abs(speed) || 70;
        let startY = 0;

        const handleWheel = (e) => {
            const delta = e.deltaY || e.detail || (-e.wheelDelta);
            transformAmount += transformSpeed * transformDirection * delta;
            scrollingText.style.transform = `translateX(${-transformAmount}px)`;

            if (transformAmount < leftBound || transformAmount > rightBound) {
                return;
            }
            if (transformAmount < leftBound) {
                scrollingText.style.left = `${Math.round(leftBound - scrollingTextWidth)}px`;
                leftBound = parseInt(scrollingText.style.left, 10);
                rightBound = leftBound + scrollingTextWidth + scrollAmountBoundary;
            } else if (transformAmount > rightBound) {
                scrollingText.style.left = `${Math.round(rightBound + scrollingTextWidth - scrollAmountBoundary)}px`;
                rightBound += scrollingTextWidth;
                leftBound = rightBound - scrollingTextWidth - scrollAmountBoundary;
            }
            setScrollDirection(delta > 0 ? 'down' : 'up');
            clearTimeout(scrollingTimeout);
            scrollingTimeout = setTimeout(() => {
                setScrollDirection('');
            }, 500);
            e.preventDefault();
        };

        const handleTouchStart = (e) => {
            startY = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            const deltaY = e.touches[0].clientY - startY;
            handleWheel({deltaY});
            startY = e.touches[0].clientY;
        };

        const starsContainer = starsContainerRef.current;
        starsContainer.addEventListener('wheel', handleWheel);
        starsContainer.addEventListener('touchstart', handleTouchStart);
        starsContainer.addEventListener('touchmove', handleTouchMove);
        let scrollingTimeout;
        return () => {
            starsContainer.removeEventListener('wheel', handleWheel);
            starsContainer.removeEventListener('touchstart', handleTouchStart);
            starsContainer.removeEventListener('touchmove', handleTouchMove);
            clearTimeout(scrollingTimeout);
        };
    }, [speed]);

    useEffect(() => {
        const starsContainer = starsContainerRef.current;
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                const numStars = Math.floor((width * height) / 5000);
                addStars(numStars, width, height);
            }
        });
        observer.observe(starsContainer);

        return () => {
            observer.disconnect();
            const stars = starsContainer.querySelectorAll('.star');
            stars.forEach(star => star.remove());
        };
    }, []);

    const addStars = (numStars, containerWidth, containerHeight) => {
        const starsContainer = starsContainerRef.current;
        if (!starsContainer) return;

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * containerWidth}px`;
            star.style.top = `${Math.random() * containerHeight}px`;
            star.style.animationDuration = `${Math.random() * 4 + 1}s`; 
            star.style.animationDelay = `-${Math.random() * 5}s`;
            starsContainer.appendChild(star);
        }
    };

    return(
        <Container fluid className="mb-5">
            <div ref={starsContainerRef} className='starsContainer'>
                <div className='scrollingTextContainer' ref={scrollingTextRef}>
                    <div className={`scrolling-text ${scrollDirection === 'up' ? 'scrolling-up' : scrollDirection === 'down' ? 'scrolling-down' : ''}`}>
                        <h1 className="scrolling-text-content">HEALTHY INGREDIENTS IN DISGUISE</h1>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Animation;

