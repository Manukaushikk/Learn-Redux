import React from 'react'


function Home(props) {
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.kindpng.com/picc/m/589-5896428_smartphone-motorola-png-transparent-png.png" alt='Motorola' />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ pice: 1000, name: 'Motorola Z2 Force' }) }
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home