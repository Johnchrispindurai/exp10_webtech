
const http = require("http");

const PORT = 3000;

const stories = [
    {
        category: "TECHNOLOGY",
        title: "The next big shift in technology is already taking shape",
        description:
            "From artificial intelligence to everyday digital tools, a new wave of innovation is changing how people work and live.",
        author: "News Desk",
        time: "6 min read",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85"
    },
    {
        category: "SPORTS",
        title: "Beyond the scoreboard: the moments that make sport special",
        description:
            "The stories of teamwork, determination and the people behind the game.",
        author: "Sports Desk",
        time: "4 min read",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
    },
    {
        category: "BUSINESS",
        title: "Small businesses find new ways to reach a digital audience",
        description:
            "Online platforms are opening up fresh opportunities for independent businesses and local entrepreneurs.",
        author: "Business Desk",
        time: "5 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
        category: "EDUCATION",
        title: "How new learning tools are changing the classroom",
        description:
            "Students and teachers are exploring different ways to make learning more practical and accessible.",
        author: "Education Desk",
        time: "3 min read",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
    }
];

function articleCard(story, featured = false) {
    return `
        <article class="story ${featured ? "featured" : ""}">
            <a class="story-image" href="/article">
                <img src="${story.image}" alt="${story.category} news"
                     loading="lazy">
            </a>
            <div class="story-content">
                <span class="category">${story.category}</span>
                <h3><a href="/article">${story.title}</a></h3>
                <p class="description">${story.description}</p>
                <div class="byline">
                    <span>${story.author}</span>
                    <span>${story.time}</span>
                </div>
            </div>
        </article>
    `;
}

function header(activePage) {
    return `
        <div class="topline">
            <span>INDEPENDENT NEWS. EVERY DAY.</span>
            <span>YOUR DAILY READ</span>
        </div>

        <header class="masthead">
            <a class="brand" href="/home">
                DAILY<span>POST</span><i>.</i>
            </a>
            <p>Stories that matter. News that moves you.</p>
        </header>

        <nav class="navbar">
            <div class="nav-inner">
                <a class="${activePage === "home" ? "active" : ""}"
                   href="/home">Home</a>
                <a href="/home#latest">Latest News</a>
                <a href="/home#technology">Technology</a>
                <a href="/home#sports">Sports</a>
                <a href="/home#business">Business</a>
                <a class="${activePage === "about" ? "active" : ""}"
                   href="/about">About</a>
                <a class="${activePage === "contact" ? "active" : ""}"
                   href="/contact">Contact</a>
            </div>
        </nav>

        <div class="breaking">
            <span class="breaking-label">THE DAILY BRIEF</span>
            <span>Fresh perspectives on technology, sport, business and life.</span>
        </div>
    `;
}

function homePage() {
    return `
        <main>
            <section class="section-heading" id="latest">
                <div>
                    <span class="eyebrow">THE LATEST</span>
                    <h2>Today's headlines</h2>
                </div>
                <span class="edition">YOUR NEWS, YOUR WORLD</span>
            </section>

            <section class="lead-grid">
                <article class="lead-story">
                    <a href="/article" class="lead-image">
                        <img
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
                            alt="A modern workspace filled with natural light">
                    </a>
                    <div class="lead-copy">
                        <span class="category">THE BIG READ</span>
                        <h1>A changing world deserves a closer look.</h1>
                        <p>
                            The ideas, people and everyday changes shaping
                            the way we live. Start with the stories behind
                            the headlines.
                        </p>
                        <a class="read-link" href="/article">
                            Read the story <span>↗</span>
                        </a>
                    </div>
                </article>

                <aside class="editors-picks">
                    <span class="eyebrow">FROM THE NEWSROOM</span>
                    <h2>Worth your time</h2>
                    ${stories.slice(0, 3).map((story, index) => `
                        <a class="pick" href="/article">
                            <span class="pick-number">0${index + 1}</span>
                            <span>
                                <small>${story.category}</small>
                                <strong>${story.title}</strong>
                            </span>
                        </a>
                    `).join("")}
                    <p class="editor-note">
                        A few good stories to get your day started.
                    </p>
                </aside>
            </section>

            <section class="latest-section">
                <div class="section-heading">
                    <div>
                        <span class="eyebrow">HANDPICKED STORIES</span>
                        <h2>More to explore</h2>
                    </div>
                    <span class="edition">A LITTLE OF EVERYTHING</span>
                </div>

                <div class="story-grid">
                    ${articleCard(stories[0])}
                    ${articleCard(stories[1])}
                    ${articleCard(stories[2])}
                    ${articleCard(stories[3])}
                </div>
            </section>

            <section class="newsletter">
                <div>
                    <span class="eyebrow">A BETTER WAY TO CATCH UP</span>
                    <h2>Good stories. No unnecessary noise.</h2>
                    <p>
                        DAILYPOST brings together perspectives on the
                        subjects worth paying attention to.
                    </p>
                </div>
                <a class="button-link" href="/about">Meet our newsroom ↗</a>
            </section>
        </main>
    `;
}

function articlePage() {
    return `
        <main class="inner-page">
            <a class="back-link" href="/home">← Back to headlines</a>
            <span class="eyebrow">THE BIG READ</span>
            <h1>A changing world deserves a closer look.</h1>
            <p class="article-intro">
                Understanding the stories behind the headlines starts
                with curiosity, context and asking better questions.
            </p>
            <img class="article-hero"
                 src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
                 alt="A modern workspace">
            <p class="article-caption">
                A closer look at the ideas shaping everyday life.
            </p>
            <div class="article-body">
                <p>
                    The world is always changing, but understanding those
                    changes takes more than a quick glance at a headline.
                    It means looking at the people involved, the ideas
                    being discussed and the details that often go unnoticed.
                </p>
                <h2>Looking beyond the headline</h2>
                <p>
                    Technology, education, sport and business all influence
                    our daily lives. Each story offers a different way to
                    understand the world around us.
                </p>
                <p>
                    At DAILYPOST, our aim is to make those subjects easier
                    to explore through clear writing and a reader-friendly
                    presentation.
                </p>
            </div>
            <a class="read-link" href="/home">Explore more stories ↗</a>
        </main>
    `;
}

function aboutPage() {
    return `
        <main class="inner-page about-page">
            <span class="eyebrow">OUR STORY</span>
            <h1>News should inform you, not overwhelm you.</h1>
            <p class="article-intro">
                DAILYPOST is an online news portal built around a simple
                idea: useful stories deserve clear, thoughtful presentation.
            </p>

            <div class="about-band">
                <span>01</span>
                <div>
                    <h2>Clarity first</h2>
                    <p>We aim to make information easy to read and understand.</p>
                </div>
            </div>
            <div class="about-band">
                <span>02</span>
                <div>
                    <h2>Different perspectives</h2>
                    <p>Our sample newsroom covers technology, sports,
                       business and education.</p>
                </div>
            </div>
            <div class="about-band">
                <span>03</span>
                <div>
                    <h2>Made for readers</h2>
                    <p>A straightforward layout helps readers find their
                       way around the site.</p>
                </div>
            </div>

            <p class="demo-note">
                This is a student demonstration project. The stories shown
                are sample content, not live news reporting.
            </p>
            <a class="read-link" href="/home">Back to the headlines ↗</a>
        </main>
    `;
}

function contactPage() {
    return `
        <main class="inner-page contact-page">
            <span class="eyebrow">GET IN TOUCH</span>
            <h1>Every good conversation starts somewhere.</h1>
            <p class="article-intro">
                Have feedback about the site or an idea for a story?
                We'd be glad to hear from you.
            </p>

            <div class="contact-card">
                <span class="eyebrow">THE NEWSROOM</span>
                <h2>DAILYPOST Editorial Team</h2>
                <p>
                    This student project demonstrates a contact page
                    for an online news portal.
                </p>
                <p><strong>Email:</strong> news@dailypost.example</p>
                <p class="demo-note">
                    The example email address is a placeholder, not a
                    monitored contact address.
                </p>
                <a class="read-link" href="/home">Back to the homepage ↗</a>
            </div>
        </main>
    `;
}

function notFoundPage() {
    return `
        <main class="inner-page not-found">
            <span class="eyebrow">ERROR 404</span>
            <h1>This page missed the news desk.</h1>
            <p>The address may be incorrect, or the page may have moved.</p>
            <a class="button-link" href="/home">Return to DAILYPOST</a>
        </main>
    `;
}

function layout(content, activePage) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description"
                  content="DAILYPOST online news portal demonstration">
            <title>DAILYPOST — Stories that matter</title>
            <style>
                :root {
                    --ink: #202526;
                    --muted: #6d7472;
                    --paper: #fbfaf7;
                    --white: #ffffff;
                    --red: #b63232;
                    --line: #e5e2dc;
                    --soft: #f0eee8;
                }

                * { box-sizing: border-box; }

                html { scroll-behavior: smooth; }

                body {
                    margin: 0;
                    background: var(--paper);
                    color: var(--ink);
                    font-family: Arial, Helvetica, sans-serif;
                    line-height: 1.65;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                img {
                    display: block;
                    width: 100%;
                    object-fit: cover;
                }

                .topline {
                    display: flex;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 9px 6%;
                    background: var(--ink);
                    color: #f6f2e9;
                    font-size: 10px;
                    letter-spacing: 1.6px;
                }

                .masthead {
                    text-align: center;
                    padding: 25px 16px 21px;
                }

                .brand {
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: clamp(38px, 5vw, 61px);
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.2;
                }

                .brand span { color: var(--red); }
                .brand i { color: var(--red); }

                .masthead p {
                    margin: 5px 0 0;
                    color: var(--muted);
                    font-family: Georgia, serif;
                    font-size: 14px;
                    font-style: italic;
                }

                .navbar {
                    border-top: 1px solid var(--line);
                    border-bottom: 1px solid var(--line);
                    background: var(--paper);
                }

                .nav-inner {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 31px;
                    padding: 12px 16px;
                    flex-wrap: wrap;
                }

                .nav-inner a {
                    font-size: 12px;
                    font-weight: 700;
                }

                .nav-inner a:hover,
                .nav-inner a.active {
                    color: var(--red);
                }

                .breaking {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 13px;
                    padding: 10px 15px;
                    border-bottom: 1px solid var(--line);
                    color: #525957;
                    font-size: 12px;
                    text-align: center;
                }

                .breaking-label {
                    color: var(--red);
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1.2px;
                }

                main {
                    width: min(1120px, 90%);
                    margin: 38px auto 65px;
                }

                .section-heading {
                    display: flex;
                    align-items: end;
                    justify-content: space-between;
                    gap: 15px;
                    margin-bottom: 19px;
                }

                .eyebrow {
                    color: var(--red);
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1.8px;
                }

                h1, h2, h3, h4, p { margin-top: 0; }

                .section-heading h2 {
                    margin: 3px 0 0;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 29px;
                    font-weight: 500;
                    letter-spacing: -.7px;
                    line-height: 1.25;
                }

                .edition {
                    color: var(--muted);
                    font-size: 9px;
                    letter-spacing: 1.3px;
                }

                .lead-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.8fr) minmax(240px, .8fr);
                    gap: 32px;
                    padding-bottom: 36px;
                    border-bottom: 1px solid var(--line);
                }

                .lead-image {
                    display: block;
                    overflow: hidden;
                    background: var(--soft);
                }

                .lead-image img {
                    height: 355px;
                    transition: transform .35s ease;
                }

                .lead-image:hover img,
                .story-image:hover img {
                    transform: scale(1.035);
                }

                .lead-copy { padding: 21px 0 0; }

                .lead-copy h1 {
                    max-width: 650px;
                    margin: 7px 0 12px;
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: clamp(32px, 4vw, 47px);
                    font-weight: 500;
                    letter-spacing: -1.3px;
                    line-height: 1.13;
                }

                .lead-copy p {
                    max-width: 590px;
                    margin-bottom: 16px;
                    color: #5d6461;
                    font-size: 14px;
                }

                .read-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--red);
                    font-size: 12px;
                    font-weight: 800;
                }

                .read-link span { font-size: 18px; }

                .editors-picks {
                    padding-left: 25px;
                    border-left: 1px solid var(--line);
                }

                .editors-picks > h2 {
                    margin: 5px 0 15px;
                    font-family: Georgia, serif;
                    font-size: 24px;
                    font-weight: 500;
                }

                .pick {
                    display: grid;
                    grid-template-columns: 32px 1fr;
                    gap: 11px;
                    padding: 16px 0;
                    border-top: 1px solid var(--line);
                }

                .pick-number {
                    color: #c7c0b5;
                    font-family: Georgia, serif;
                    font-size: 24px;
                }

                .pick small {
                    display: block;
                    margin-bottom: 4px;
                    color: var(--red);
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                .pick strong {
                    display: block;
                    font-family: Georgia, serif;
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 1.4;
                }

                .editor-note {
                    margin: 8px 0 0;
                    color: var(--muted);
                    font-size: 12px;
                    font-style: italic;
                }

                .latest-section { padding-top: 36px; }

                .story-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 27px 23px;
                }

                .story {
                    display: grid;
                    grid-template-columns: 155px minmax(0, 1fr);
                    gap: 17px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid var(--line);
                }

                .story-image {
                    display: block;
                    height: 150px;
                    overflow: hidden;
                    background: var(--soft);
                }

                .story-image img {
                    height: 100%;
                    transition: transform .35s ease;
                }

                .story-content { min-width: 0; }

                .category {
                    color: var(--red);
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 1.2px;
                }

                .story h3 {
                    margin: 5px 0 8px;
                    font-family: Georgia, serif;
                    font-size: 19px;
                    font-weight: 500;
                    line-height: 1.3;
                }

                .story h3 a:hover { color: var(--red); }

                .description {
                    margin-bottom: 12px;
                    color: var(--muted);
                    font-size: 11px;
                    line-height: 1.6;
                }

                .byline {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px 13px;
                    color: var(--muted);
                    font-size: 10px;
                }

                .newsletter {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 25px;
                    margin-top: 42px;
                    padding: 28px;
                    background: #eeece5;
                }

                .newsletter h2 {
                    margin: 5px 0 7px;
                    font-family: Georgia, serif;
                    font-size: 25px;
                    font-weight: 500;
                    line-height: 1.25;
                }

                .newsletter p {
                    margin-bottom: 0;
                    color: #626966;
                    font-size: 12px;
                }

                .button-link {
                    display: inline-block;
                    flex-shrink: 0;
                    padding: 12px 17px;
                    background: var(--red);
                    color: white;
                    font-size: 11px;
                    font-weight: 700;
                }

                .button-link:hover { background: #922626; }

                .inner-page {
                    max-width: 850px;
                    min-height: 360px;
                }

                .back-link {
                    display: block;
                    margin-bottom: 30px;
                    color: var(--muted);
                    font-size: 12px;
                }

                .inner-page > h1 {
                    max-width: 800px;
                    margin: 8px 0 15px;
                    font-family: Georgia, serif;
                    font-size: clamp(36px, 6vw, 57px);
                    font-weight: 500;
                    letter-spacing: -1.5px;
                    line-height: 1.12;
                }

                .article-intro {
                    max-width: 720px;
                    color: #666d69;
                    font-family: Georgia, serif;
                    font-size: 19px;
                    line-height: 1.6;
                }

                .article-hero {
                    max-height: 440px;
                    margin-top: 25px;
                }

                .article-caption {
                    color: var(--muted);
                    font-size: 10px;
                    font-style: italic;
                }

                .article-body {
                    max-width: 680px;
                    margin: 35px auto;
                    font-size: 15px;
                    line-height: 1.9;
                }

                .article-body h2 {
                    margin-top: 28px;
                    font-family: Georgia, serif;
                    font-size: 27px;
                    font-weight: 500;
                }

                .about-band {
                    display: grid;
                    grid-template-columns: 55px 1fr;
                    gap: 18px;
                    padding: 24px 0;
                    border-top: 1px solid var(--line);
                }

                .about-band > span {
                    color: var(--red);
                    font-family: Georgia, serif;
                    font-size: 28px;
                }

                .about-band h2,
                .contact-card h2 {
                    margin-bottom: 5px;
                    font-family: Georgia, serif;
                    font-size: 24px;
                    font-weight: 500;
                }

                .about-band p,
                .contact-card p {
                    margin-bottom: 0;
                    color: var(--muted);
                    font-size: 14px;
                }

                .contact-card {
                    margin-top: 30px;
                    padding: 28px;
                    border: 1px solid var(--line);
                    background: white;
                }

                .contact-card h2 { margin-top: 10px; }

                .contact-card p { margin-bottom: 15px; }

                .demo-note {
                    margin-top: 25px;
                    padding-top: 15px;
                    border-top: 1px solid var(--line);
                    color: var(--muted);
                    font-size: 11px;
                }

                .not-found { text-align: center; padding-top: 55px; }
                .not-found h1 { margin: 12px auto; }

                footer {
                    padding: 28px 6%;
                    background: var(--ink);
                    color: #eeeae2;
                }

                .footer-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    max-width: 1120px;
                    margin: auto;
                }

                .footer-brand {
                    font-family: Georgia, serif;
                    font-size: 25px;
                    font-weight: bold;
                }

                .footer-brand span { color: #e88a80; }

                footer p {
                    margin: 4px 0 0;
                    color: #c0c3be;
                    font-size: 10px;
                }

                .footer-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 18px;
                    font-size: 11px;
                }

                .footer-links a:hover { color: #e88a80; }

                @media (max-width: 760px) {
                    .nav-inner { gap: 12px 20px; }

                    .lead-grid { grid-template-columns: 1fr; }

                    .lead-image img { height: 270px; }

                    .editors-picks {
                        padding: 22px 0 0;
                        border-left: 0;
                        border-top: 1px solid var(--line);
                    }

                    .story-grid { grid-template-columns: 1fr; }

                    .newsletter {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .edition { display: none; }
                }

                @media (max-width: 480px) {
                    .topline { font-size: 8px; }

                    main { width: 91%; margin-top: 25px; }

                    .story {
                        grid-template-columns: 112px minmax(0, 1fr);
                        gap: 12px;
                    }

                    .story-image { height: 120px; }

                    .story h3 { font-size: 16px; }

                    .description { font-size: 10px; }

                    .brand { letter-spacing: -2px; }

                    .breaking { align-items: flex-start; flex-direction: column; gap: 3px; }

                    .footer-inner {
                        align-items: flex-start;
                        flex-direction: column;
                    }
                }
            </style>
        </head>
        <body>
            ${header(activePage)}
            ${content}

            <footer>
                <div class="footer-inner">
                    <div>
                        <a class="footer-brand" href="/home">DAILY<span>POST</span>.</a>
                        <p>Independent in spirit. Curious by nature.</p>
                        <p>Student demonstration project · Sample stories</p>
                    </div>
                    <div class="footer-links">
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </footer>
        </body>
        </html>
    `;
}

const server = http.createServer((req, res) => {
    const pathname = new URL(req.url, "http://localhost").pathname;

    let content;
    let activePage = "home";
    let statusCode = 200;

    if (pathname === "/" || pathname === "/home") {
        content = homePage();
        activePage = "home";
    } else if (pathname === "/about") {
        content = aboutPage();
        activePage = "about";
    } else if (pathname === "/contact") {
        content = contactPage();
        activePage = "contact";
    } else if (pathname === "/article") {
        content = articlePage();
    } else {
        content = notFoundPage();
        statusCode = 404;
    }

    res.writeHead(statusCode, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(layout(content, activePage));
});

server.listen(PORT, () => {
    console.log(`DAILYPOST is running at http://localhost:${PORT}`);
});
