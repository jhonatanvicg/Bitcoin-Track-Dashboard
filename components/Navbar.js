import {FaGithub, FaLinkedin} from "react-icons/fa";

const Navbar = () => {
    return ( 
        <div className="NavBar">
            <div className="NavBar__Logo">
                <img className="NavBar__Logo-Image" src="https://img.icons8.com/fluency/48/000000/bitcoin.png"/>
                <p className="NavBar__Logo-String">Daily Transactions Unconfirmed</p>
            </div>

            <div className="NavBar__SocialMediaContainer">
                <div className="NavBar__SocialMediaContainer-Github">
                <a href="https://github.com/jhonatanvicg" target="__blank" className="SocialMedia-Link">
                    <FaGithub color="white" size={"33px"} />
                </a>
                <p className="NavBar__SocialMediaContainer-Github-Text">@Username</p>
                <div className="NavBar__Hover"></div>
                </div>
                <div className="NavBar__SocialMediaContainer-LinkedIn">
                <a href="https://github.com/jhonatanvicg" target="__blank" className="SocialMedia-Link">
                    <FaLinkedin color="white" size={"33px"} />
                </a>
                <p className="NavBar__SocialMediaContainer-LinkedIn-Text">@Username</p>
                </div>
            </div>
            </div>
     );
}
 
export default Navbar;