// MainContainer.js
import './styles/main.css'
import ThemeToggler from './theme-toggler';


const MainContainer = () => {
  return (
    <div className='wrapper'>
      <img id='profile-pic' src="fred.png" alt="" />
      <p>@ale.dev</p>
      
        <ThemeToggler />
      
      <nav className='nav-buttons'>
        <button><a>Veja meu portfólio</a></button>
        <button><a>Baixe meu currículo</a></button>
        <button><a>Me siga no spotify</a></button>
        <button><a>Entre em contato</a></button>
      </nav>
      <div className='socials'>
        <a href="#" class="icon icon-github"></a>
        <a href="#" class="icon icon-instagram"></a>
        <a href="#" class="icon icon-youtube"></a>
        <a href="#" class="icon icon-linkedin"></a>
      </div>
      <p id='copy'>&copy; Alexandre Rodrigues ~ <span>2024</span></p>
    </div>
  );
}

export default MainContainer;
