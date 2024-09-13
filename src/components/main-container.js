import './styles/main.css'

const MainContainer = () => {
  return (  
    <div className='wrapper'>
      <img id='profile-pic' src="fred.webp" alt=""/>
      <p>@ale.dev</p>
      <button className='toggler'>TODO</button>
      <nav className='nav-buttons'>
        <button>TODO</button>
        <button>TODO</button>
        <button>TODO</button>
        <button>TODO</button>
      </nav>
      <div className='socials'>
        <img src="GitHub.svg" alt=""/>
        <img src="Instagram.svg" alt=""/>
        <img src="YouTube.svg" alt=""/>
        <img src="LinkedIn.svg" alt=""/>
      </div>
      <p id='copy'>&copy; Alexandre Rodrigues</p>
    </div>
  );
}

export default MainContainer;