import './App.css'

function App() {
    return (
        <>
            <a href="#main-content" className="skip-link">
                Ana icerige atla
            </a>

            <header>
                <span className="site-title">Ahmet Mervan Erman</span>
                <nav aria-label="Ana navigasyon">
                    <ul>
                        <li><a href="#hakkimda">Hakkimda</a></li>
                        <li><a href="#projeler">Projeler</a></li>
                        <li><a href="#iletisim">Iletisim</a></li>
                    </ul>
                </nav>
            </header>

            <main id="main-content">
                <h1>Ahmet Mervan Erman - Kisisel Portfolyo</h1>

                <section id="hakkimda">
                    <h2>Hakkimda</h2>
                    <div className="about-content">
                        <figure>
                            <img src="/image.png" alt="Ahmet Mervan Erman'in vesikalik fotografi" />
                            <figcaption>Ahmet Mervan Erman</figcaption>
                        </figure>
                        <div>
                            <p>
                                Merhaba! Ben Ahmet Mervan Erman, 235541061 numarali ogrenciyim.
                                Web Tasarimi ve Programlama dersi kapsaminda modern web teknolojileri ogreniyorum.
                            </p>
                            <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="projeler">
                    <h2>Projelerim</h2>
                    <div className="project-grid">
                        <article className="project-card">
                            <img src="https://via.placeholder.com/400x200" alt="LAB-1 ekran goruntusu" />
                            <h3>Proje 1: Hello World</h3>
                            <p>LAB-1 kapsaminda yapilan ilk React projesi.</p>
                            <ul className="skill-tags">
                                <li>React</li>
                                <li>Vite</li>
                            </ul>
                        </article>

                        <article className="project-card">
                            <img src="https://via.placeholder.com/400x200" alt="LAB-2 ekran goruntusu" />
                            <h3>Proje 2: Semantik Portfolyo</h3>
                            <p>LAB-2 kapsaminda yapilan semantik ve erisilebilir web sayfasi.</p>
                            <ul className="skill-tags">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>A11y</li>
                            </ul>
                        </article>

                        <article className="project-card">
                            <img src="https://via.placeholder.com/400x200" alt="LAB-3 ekran goruntusu" />
                            <h3>Proje 3: Responsive Tasarim</h3>
                            <p>LAB-3 kapsaminda modern CSS, Flexbox ve Grid ile responsive portfolyo.</p>
                            <ul className="skill-tags">
                                <li>Flexbox</li>
                                <li>Grid</li>
                                <li>Responsive</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section id="iletisim">
                    <h2>Iletisim</h2>
                    <form action="#" method="POST" noValidate>
                        <fieldset>
                            <legend>Iletisim Formu</legend>

                            <div className="form-group">
                                <label htmlFor="name">Ad Soyad:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    minLength={2}
                                    aria-describedby="name-error"
                                />
                                <small id="name-error" className="error-msg" role="alert"></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-posta:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    aria-describedby="email-error"
                                />
                                <small id="email-error" className="error-msg" role="alert"></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Konu:</label>
                                <select id="subject" name="subject" required aria-describedby="subject-error">
                                    <option value="">-- Seciniz --</option>
                                    <option value="is">Is Teklifi</option>
                                    <option value="soru">Soru</option>
                                    <option value="oneri">Oneri</option>
                                </select>
                                <small id="subject-error" className="error-msg" role="alert"></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mesajiniz:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    minLength={10}
                                    aria-describedby="message-error"
                                ></textarea>
                                <small id="message-error" className="error-msg" role="alert"></small>
                            </div>

                            <button type="submit">Gonder</button>
                        </fieldset>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 Ahmet Mervan Erman. Tum haklari saklidir.</p>
            </footer>
        </>
    )
}

export default App