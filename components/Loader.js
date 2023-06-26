import React from 'react'

function Loader() {
    const preloaderStyle = {
        backgroundImage: `url(http://drive.google.com/uc?export=view&id=1ZS2wcu-k8lavn-YbRdeaFnMSd0HjGIqT)`,
        height: '100vh',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'36%'
    }

    return (
        <div style={{ background: 'white' }}>
            <div className='preloader' style={preloaderStyle}>
            </div>
        </div>

    )
}

export default Loader
