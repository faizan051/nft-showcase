import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'


const Button = ({ assetsUrl, link }) => {
    return (
        <div className={`${styles.btnBlack}`}>
            <img src={assetsUrl} className={`${styles.btnIcon}`} />
            <div className="flex flex-col justify-start" style={{ marginLeft: '20px' }}>
                <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
                <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
            </div>
        </div>
    )
}

export default Button