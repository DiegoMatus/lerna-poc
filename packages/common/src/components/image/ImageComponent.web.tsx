"use client"; // This is a client component 👈🏽

const WebImage = () => {
    return (
        <div style={{ paddingTop: 50 }}>
            <img
                style={{ width: 50, height: 50 }}
                src={'https://reactnative.dev/img/tiny_logo.png'} // Ruta local al archivo de imagen
                alt="Tiny Logo"
            />
            <img
                style={{ width: 50, height: 50 }}
                src="https://reactnative.dev/img/tiny_logo.png"
                alt="Tiny Logo"
            />
            <img
                style={{ width: 66, height: 58 }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
                alt="Logo"
            />
        </div>
    );
};

export default WebImage