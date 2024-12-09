import "./App.css";

function App() {
  return (
    <>
      {/* Navigasi */}
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#personal-info">Personal Info</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#work-experience">Work Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>

      {/* Kontainer Utama */}
      <div className="container">
        <header className="header">
          <h1>Rahmat Faris Akbar</h1>
          <p>ODP IT 20</p>
        </header>

        {/* Informasi Pribadi */}
        <section id="personal-info" className="section grid-layout">
          <div className="info">
            <h2>Personal Information</h2>
            <p>
              <strong>Email:</strong> example@mail.com
            </p>
            <p>
              <strong>Phone:</strong> +62 812 3456 7890
            </p>
            <p>
              <strong>Address:</strong> Jakarta, Indonesia
            </p>
          </div>
          <div className="map">
            <iframe
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.333524707281!2d106.82963755!3d-6.186468799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1733436592245!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Pendidikan */}
        <section id="education" className="section">
          <h2>Education</h2>
          <p>
            <strong>Bachelor of Informatics Engineering</strong>, Sepuluh
            Nopember Institute of Technology (ITS), Surabaya
          </p>
          <ul>
            <li>Graduated: 2024</li>
            <li>GPA: 3.84</li>
          </ul>
        </section>

        {/* Pengalaman Kerja */}
        <section id="work-experience" className="section">
          <h2>Work Experience</h2>
          <ul>
            <li>
              <strong>ODP IT</strong>, PT Bank Syariah Indonesia Tbk
            </li>
            <li>Training program participant</li>
          </ul>
        </section>

        {/* Keahlian */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div>Programming: C, C++, JavaScript</div>
            <div>Tools: Git, Figma, VS Code</div>
            <div>Languages: English, Indonesian</div>
          </div>
        </section>

        {/* Prestasi */}
        <section id="achievements" className="section">
          <h2>Achievements</h2>
          <ul>
            <li>Silver Medal - Math Olympiad (2021)</li>
            <li>Finalist - Competitive Programming Contest (2021)</li>
          </ul>
        </section>

        {/* Form Kontak */}
        <section id="contact-me" className="section">
          <h2>Contact Me</h2>
          <form id="contactForm" action="#" method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default App;
