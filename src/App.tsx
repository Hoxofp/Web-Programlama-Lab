import './App.css'

function App() {
    return (
        <>
            <a href="#main-content" className="skip-link">
                Ana icerige atla
            </a>

            <header>
                <nav aria-label="Ana navigasyon">
                    <ul>
                        <li><a href="#hakkimda">Hakkimda</a></li>
                        <li><a href="#projeler">Projeler</a></li>
                        <li><a href="#iletisim">Iletisim</a></li>
                    </ul>
                </nav>
            </header>

            <main id="main-content">
                <h1>Eylül Can Kesici - Kisisel Portfolyo</h1>

                <section id="hakkimda">
                    <h2>Hakkimda</h2>
                    <figure>
                        <img src="/image.png" alt="Eylül Can Kesici'in vesikalik fotografi" />
                        <figcaption>Eylül Can Kesici</figcaption>
                    </figure>
                    <p>
                        Merhaba! Ben Eylül Can Kesici, 235542003 numarali ogrenciyim.
                        Web Tasarimi ve Programlama dersi kapsaminda modern web teknolojileri ogreniyorum.
                    </p>
                    <ul>
                        <li>React 18</li>
                        <li>TypeScript</li>
                        <li>Vite</li>
                    </ul>
                </section>

                <section id="projeler">
                    <h2>Projelerim</h2>
                    <article>
                        <h3>Proje 1: Hello World</h3>
                        <p>LAB-1 kapsaminda yapilan ilk React projesi.</p>
                        <img src="https://via.placeholder.com/150" alt="LAB-1 ekran goruntusu" />
                    </article>
                    <article>
                        <h3>Proje 2: Semantik Portfolyo</h3>
                        <p>LAB-2 kapsaminda yapilan semantik ve erisilebilir web sayfasi.</p>
                        <img src="https://via.placeholder.com/150" alt="LAB-2 ekran goruntusu" />
                    </article>
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
                <p>&copy; 2025 Eylül Can Kesici. Tum haklari saklidir.</p>
            </footer>
        </>
    )
}

export default App