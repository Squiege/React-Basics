function Header() {
    const backgroundImage = 'https://i.pinimg.com/736x/d1/98/fe/d198fe50dc8fb1e540026cd4d332a215.jpg';
    const name = "Miyamoto Musashi";

    return (
        <header
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
            }}
            >
            <h1>{name}</h1>
            </header>
    );
};

export default Header;