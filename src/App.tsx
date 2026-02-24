import { useState } from 'react'
import './App.css'

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const validateForm = () => {
        const newErrors = { name: '', email: '', subject: '', message: '' }
        let isValid = true

        if (!formData.name || formData.name.length < 2) {
            newErrors.name = 'Ad Soyad en az 2 karakter olmalıdır.'
            isValid = false
        }

        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Geçerli bir e-posta adresi giriniz.'
            isValid = false
        }

        if (!formData.subject) {
            newErrors.subject = 'Lütfen bir konu seçiniz.'
            isValid = false
        }

        if (!formData.message || formData.message.length < 10) {
            newErrors.message = 'Mesaj en az 10 karakter olmalıdır.'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            setSubmitted(true)
            setFormData({ name: '', email: '', subject: '', message: '' })
            setErrors({ name: '', email: '', subject: '', message: '' })
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Kullanıcı yazdıkça hata mesajını temizle
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    return (
        <>
            {/* Skip Navigation - Erişilebilirlik için */}
            <a href="#main-content" className="skip-link">
                Ana içeriğe atla
            </a>

            {/* HEADER */}
            <header className="site-header">
                <h1>Ahmet Mervan Erman</h1>
                <p className="subtitle">Web Geliştirici &amp; Öğrenci</p>
                <nav aria-label="Ana navigasyon">
                    <ul className="nav-list">
                        <li><a href="#hakkimda">Hakkımda</a></li>
                        <li><a href="#projeler">Projeler</a></li>
                        <li><a href="#iletisim">İletişim</a></li>
                    </ul>
                </nav>
            </header>

            {/* MAIN */}
            <main id="main-content">

                {/* HAKKIMDA */}
                <section id="hakkimda" aria-labelledby="hakkimda-baslik">
                    <h2 id="hakkimda-baslik">Hakkımda</h2>
                    <div className="hakkimda-content">
                        <figure className="profil-figure">
                            <img
                                src="/profil.svg"
                                alt="Ahmet Mervan Erman'ın vesikalık fotoğrafı"
                                className="profil-img"
                            />
                            <figcaption>Ahmet Mervan Erman</figcaption>
                        </figure>
                        <div className="hakkimda-text">
                            <p>
                                Merhaba! Ben Ahmet Mervan Erman, 235541061 numaralı öğrenciyim.
                                Web Tasarımı ve Programlama dersi kapsamında modern web teknolojileri
                                öğreniyorum. Semantik HTML, erişilebilirlik ve kullanıcı deneyimi
                                konularına özel ilgi duyuyorum.
                            </p>
                            <h3>Kullandığım Teknolojiler</h3>
                            <ul className="tech-list">
                                <li>React 18</li>
                                <li>TypeScript</li>
                                <li>Vite</li>
                                <li>HTML5 &amp; CSS3</li>
                                <li>JavaScript (ES6+)</li>
                                <li>Git &amp; GitHub</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PROJELERİM */}
                <section id="projeler" aria-labelledby="projeler-baslik">
                    <h2 id="projeler-baslik">Projelerim</h2>
                    <div className="projeler-grid">

                        <article className="proje-card">
                            <h3>Kişisel Portföy Sayfası</h3>
                            <p>
                                Semantik HTML5, erişilebilirlik ilkeleri ve form doğrulama kullanılarak
                                oluşturulmuş kişisel tanıtım sayfası. Lighthouse erişilebilirlik puanı
                                90+ hedeflenmektedir.
                            </p>
                            <h4>Kullanılan Teknolojiler</h4>
                            <ul>
                                <li>React + TypeScript</li>
                                <li>Vite</li>
                                <li>Semantik HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </article>

                        <article className="proje-card">
                            <h3>Hello World Projesi (LAB-1)</h3>
                            <p>
                                Web Tasarımı ve Programlama dersi LAB-1 kapsamında oluşturulmuş ilk
                                React + TypeScript projesi. Geliştirme ortamı kurulumu ve Git iş akışı
                                öğrenildi.
                            </p>
                            <h4>Kullanılan Teknolojiler</h4>
                            <ul>
                                <li>React 18</li>
                                <li>TypeScript</li>
                                <li>Vite</li>
                                <li>Git</li>
                            </ul>
                        </article>

                    </div>
                </section>

                {/* İLETİŞİM */}
                <section id="iletisim" aria-labelledby="iletisim-baslik">
                    <h2 id="iletisim-baslik">İletişim</h2>

                    {submitted && (
                        <div className="success-msg" role="alert">
                            Mesajınız başarıyla gönderildi! Teşekkürler.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                        <fieldset>
                            <legend>İletişim Formu</legend>

                            <div className="form-group">
                                <label htmlFor="name">Ad Soyad:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    minLength={2}
                                    value={formData.name}
                                    onChange={handleChange}
                                    aria-describedby="name-error"
                                    aria-invalid={errors.name ? 'true' : undefined}
                                />
                                <small id="name-error" className="error-msg" role="alert">
                                    {errors.name}
                                </small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-posta:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-describedby="email-error"
                                    aria-invalid={errors.email ? 'true' : undefined}
                                    placeholder="ornek@mail.com"
                                />
                                <small id="email-error" className="error-msg" role="alert">
                                    {errors.email}
                                </small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Konu:</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    aria-describedby="subject-error"
                                    aria-invalid={errors.subject ? 'true' : undefined}
                                >
                                    <option value="">-- Seçiniz --</option>
                                    <option value="is">İş Teklifi</option>
                                    <option value="soru">Soru</option>
                                    <option value="oneri">Öneri</option>
                                </select>
                                <small id="subject-error" className="error-msg" role="alert">
                                    {errors.subject}
                                </small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mesajınız:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    minLength={10}
                                    value={formData.message}
                                    onChange={handleChange}
                                    aria-describedby="message-error"
                                    aria-invalid={errors.message ? 'true' : undefined}
                                />
                                <small id="message-error" className="error-msg" role="alert">
                                    {errors.message}
                                </small>
                            </div>

                            <button type="submit">Gönder</button>
                        </fieldset>
                    </form>
                </section>

            </main>

            {/* FOOTER */}
            <footer className="site-footer">
                <p>&copy; 2025 Ahmet Mervan Erman. Tüm hakları saklıdır.</p>
                <p>Web Tasarımı ve Programlama - LAB 2</p>
            </footer>
        </>
    )
}

export default App