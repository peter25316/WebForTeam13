import '../style/hero.css';
import discordLogo from "../static/discord_ava.png"

function Hero(){
    return (
        <div className="Hero">
            <div className="hero-text">
                <h1>
                    CS321 Team 13 D-STOCK BOT
                </h1>
                <h4>
                    This is a class project of CS321 GMU
                </h4>
                <ul>Amy Tran</ul>
                <ul>Frank Costantino</ul>
                <ul>Saugat Adhikari</ul>
                <ul>William Melchor-Guerra</ul>
                <ul>Phuong Tran</ul>
                <ul>Peter Huynh</ul>
                <ul>Olivia Vuong</ul>
                <a 
                    className="hero-invite"
                    href="https://discord.com/"
                    target="_blank"
                    >Add to Discord
                </a>
            </div>
            <div>
                <img className="hero-logo" src={discordLogo}/>
            </div>
        </div>
    )
}
export default Hero;