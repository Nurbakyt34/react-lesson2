import WelcomeImg from '../../assets/Picture.png'

import './welcome.css'

function Welcome() {
    return (
        <div className="welcome">
            <div className='container'>
                <div className='welcome-img'>
                    <img src={WelcomeImg} alt="" />
                </div>
                <div className='welcome-text'>
                    <h2>Welcome to <br /> <span> delizioso</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                    <button>See our menu</button>
                </div>

            </div>
        </div>
    )
}


export default Welcome;