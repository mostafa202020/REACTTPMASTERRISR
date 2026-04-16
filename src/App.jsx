import { useState } from 'react'
import { MemoryRouter  as Router, Routes, Route,Link } from 'react-router-dom'
import './App.css'
function Home() {
  return (
    <div className='div'>
      <h1>Home Page</h1>
    </div>
  );
}

// 🔹 Composants existants
function Welcome(p) {
  return <h1 className="welcome-text">Hello, {p.name}</h1>;
}

function Navbar(p) {
  return (
    <nav className="navbar">
      
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/welcomeHome">Welcome</Link>
        <Link to="/contact">Contactez-nous</Link>
        <Link to="/memoires">Mémoires</Link>
      </div>
    </nav>
  );
}

function Photo({ src, alt }) {
  return <img src={src} alt={alt || "photo"} className="photo" />;
}

// 🔹 Like Button
function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="like-container">
      <button onClick={() => setCount(count + 1)}>
        👍 Like
      </button>
      <p>{count} likes</p>
    </div>
  );
}

// 🔹 ✅ Home = ancienne structure
function WelcomeHome() {
  return (
    <>
  
    <div className='div'>
      <Welcome name="Ahmed" />
      <LikeButton />

      <Welcome name="Amine" />
      <LikeButton />
    </div></>
  );
}

// 🔹 Contact simple
function Contact() {
  

  return (
    <div className="contact-container">
      <h2>📩 Contactez-nous</h2>

      <input
        type="text"
        placeholder="Votre nom"
        
        className="input"
      />

      <textarea
        placeholder="Votre commentaire"
        
        className="textarea"
      />

      <div className="preview">
        <p><strong>Nom:</strong> </p>
        <p><strong>Commentaire:</strong> </p>
      </div>
    </div>
  );
}
function Memoires() {
  const images = ["/saida.png", "/saida.png", "/saida.png"];

  return (
    <div className="memories-container">
      <h2>🏙️ Mémoires de ma ville</h2>

      <div className="gallery">
        {images.map((img, i) => (
          <img key={i} src={img} alt="ville" className="memory-img" />
        ))}
      </div>
    </div>
  );
}
// 🔹 App avec Router
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar/>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcomeHome" element={<WelcomeHome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/memoires" element={<Memoires />} />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;