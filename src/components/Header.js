import React from 'react'
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src="https://docs.moodle.org/400/en/images_en/thumb/e/e7/SharingCart-greycartplus.png/495px-SharingCart-greycartplus.png" />
            </div>
        </div>
    )
}

export default Header



