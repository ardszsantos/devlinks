// MainContainer.js
import './styles/main.css'
import ThemeToggler from './theme-toggler';


const MainContainer = () => {
  return (
    <div className='wrapper'>
      <img id='profile-pic' src="fred.png" alt="" />
      <p>@ale.dev</p>
      <button className='toggler'>
        <ThemeToggler />
      </button>
      <nav className='nav-buttons'>
        <button>Veja meu portfólio</button>
        <button>Baixe meu currículo</button>
        <button>Me siga no spotify</button>
        <button>Entre em contato</button>
      </nav>
      <div className='socials'>
        <img src="GitHub.svg" alt="" />
        <img src="Instagram.svg" alt="" />
        <img src="YouTube.svg" alt="" />
        <img src="LinkedIn.svg" alt="" />
      </div>
      <p id='copy'>&copy; Alexandre Rodrigues ~ <span>2024</span></p>
    </div>
  );
}

export default MainContainer;
