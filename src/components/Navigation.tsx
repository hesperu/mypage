import React, {useState} from 'react';

interface NavigationProps{
  setCurrentSection: (section: string) => void;
  
}

const Navigation : React.FC<NavigationProps> = ({ setCurrentSection}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <header className="border-b-4 border-green-600 h-24 lg:h-40 bg-white text-green-700">
        {/*ハンバーガーボタン*/}
        <div className="lg:hidden flex items-center z-10 absolute">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? (
              <svg className="h-24 w-24 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-20 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
        {/*PC画面でのナビゲーション*/}
        <img src="./hesperu_logo.png" alt="Logo" className="h-20 lg:w-auto w-full lg:h-1/2 h-full object-contain"/>
        <nav className="container mx-auto px-6 lg:px-10 py-6 lg:py-10 ">
          <ul className="flex items-center justify-between space-x-20 lg:space-x-40">
            <li
              className="nav_contents"
              onClick={() => setCurrentSection('about')}
            >
              About me
            </li>
            <li
              className="nav_contents"
              onClick={() => setCurrentSection('experience')}
            >
              Experiences
            </li>
            <li
              className="nav_contents"
              onClick={() => setCurrentSection('contacts')}
            >
              Contacts
            </li>
          </ul>
        </nav>
      {/*ハンバーガーメニュー内の画面*/}
      <nav className={isMenuOpen ? "lg:hidden visible text-left text-5xl fixed bg-slate-50 bg-opacity-50 left-0 top-0 w-1/2 h-screen justify-start pt-20 px-3 ease-linear duration-300" : "invisible"}>
        <ul>
          <li
            className="smapho_nav_contents"
            onClick={() => {setCurrentSection('about'); toggleMenu()}}
          >
            About me
          </li>
          <li
            className="smapho_nav_contents"
            onClick={() => {setCurrentSection('experience'); toggleMenu()}}
          >
            Experiences
          </li>
          <li
            className="smapho_nav_contents"
            onClick={() => {setCurrentSection('contacts'); toggleMenu()}}
          >
            Contacts
          </li>
        </ul>
        </nav>
        </header>
      </div>
  );
};
export default Navigation;
