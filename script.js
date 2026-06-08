/* ===========================
   NEWS APPLICATION
   Modular, responsive news platform
   =========================== */

// ===========================
// STATE MANAGEMENT
// ===========================

let allArticles = [];
let currentCategory = "World";

const newsCategories = [
  "World",
  "Politics",
  "Business",
  "Technology",
  "Sports",
  "Entertainment",
  "Health",
  "Science",
  "Travel",
  "Opinion",
];

const imageFallbackSvg =
  "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-family=%22sans-serif%22 font-size=%2220%22 fill=%22%23888%22%3EImage+unavailable%3C/text%3E%3C/svg%3E";

// ===========================
// CONFIGURATION & MOCK DATA
// ===========================

/**
 * Mock news data generator with 12 articles per category
 * Optimized for fast generation: ~120 articles in <100ms
 */
const generateMockNews = () => {
  const categories = newsCategories;

  // Article templates for each category - 12 per category
  const articleTemplates = {
    World: [
      {
        title: "Global Climate Summit Reaches Historic Agreement",
        desc: "World leaders commit to aggressive emissions reduction targets at the annual climate conference.",
      },
      {
        title: "International Trade Negotiations Break Deadlock",
        desc: "Countries reach compromise on tariff reforms affecting billions in commerce.",
      },
      {
        title: "UN Reports Progress on Sustainable Development Goals",
        desc: "Global poverty rates decline amid coordinated international efforts.",
      },
      {
        title: "Cross-Border Infrastructure Project Begins",
        desc: "Multi-country tunnel project connects three major economic zones.",
      },
      {
        title: "World Population Milestone Achieved",
        desc: "Global community celebrates interconnectedness amid demographic shifts.",
      },
      {
        title: "International Education Exchange Program Expands",
        desc: "Record numbers of students participate in global learning initiatives.",
      },
      {
        title: "Ocean Conservation Treaty Signed by 150 Nations",
        desc: "Historic agreement aims to protect marine ecosystems and species.",
      },
      {
        title: "Global Health Initiative Announces Breakthroughs",
        desc: "Coordinated research efforts yield promising medical discoveries.",
      },
      {
        title: "World Tech Summit Unites Industry Leaders",
        desc: "Thousands of innovators gather to shape the future of technology.",
      },
      {
        title: "International Space Cooperation Intensifies",
        desc: "Nations collaborate on ambitious missions beyond Earth's orbit.",
      },
      {
        title: "Humanitarian Crisis Relief Efforts Expand Globally",
        desc: "International organizations coordinate massive aid distribution across regions.",
      },
      {
        title: "New Trade Agreement Benefits Developing Nations",
        desc: "Economic partnership promises growth and job creation in emerging markets.",
      },
    ],
    Politics: [
      {
        title: "New Election Laws Reshape Political Landscape",
        desc: "Government passes comprehensive voting reform legislation.",
      },
      {
        title: "Parliament Debates Healthcare Reform Bill",
        desc: "Lawmakers discuss major changes to national health policy.",
      },
      {
        title: "Presidential Address Outlines Economic Vision",
        desc: "Leader presents five-year plan for national prosperity.",
      },
      {
        title: "Congress Approves Infrastructure Investment",
        desc: "Bipartisan support for massive transportation and energy projects.",
      },
      {
        title: "Local Elections Bring New Leadership",
        desc: "Communities vote in mayors and council members for upcoming term.",
      },
      {
        title: "Policy Changes Announced on Climate Action",
        desc: "Government commits to aggressive carbon reduction targets.",
      },
      {
        title: "Political Summit Discusses Regional Cooperation",
        desc: "Leaders meet to strengthen diplomatic and economic ties.",
      },
      {
        title: "Constitutional Amendment Debate Heats Up",
        desc: "Lawmakers discuss potential changes to founding document.",
      },
      {
        title: "Government Anti-Corruption Initiative Launched",
        desc: "New agency formed to investigate and prevent fraud.",
      },
      {
        title: "Parliament Extends Legislative Session",
        desc: "Additional weeks allocated for pending important bills.",
      },
      {
        title: "Voting Rights Protection Act Signed into Law",
        desc: "Historic legislation strengthens democratic participation nationwide.",
      },
      {
        title: "Political Leaders Meet on Education Reform",
        desc: "Bipartisan coalition proposes sweeping changes to school systems.",
      },
    ],
    Business: [
      {
        title: "Stock Markets Rally on Strong Economic Data",
        desc: "Major indices reach new highs as companies report better earnings.",
      },
      {
        title: "Tech Giant Announces $50 Billion Investment",
        desc: "Major corporation commits to expanding operations globally.",
      },
      {
        title: "Merger Creates Industry-Leading Conglomerate",
        desc: "Two major companies join forces in record-breaking deal.",
      },
      {
        title: "Startup Raises Series C Funding",
        desc: "Innovation company secures major investment from venture capitalists.",
      },
      {
        title: "Corporate Earnings Beat Expectations",
        desc: "Quarterly results show resilience and strong profit growth.",
      },
      {
        title: "Energy Sector Undergoes Major Transformation",
        desc: "Companies pivot toward renewable and sustainable practices.",
      },
      {
        title: "Real Estate Market Shows Strong Growth",
        desc: "Property values rise amid increased investment interest.",
      },
      {
        title: "Banking Reform Legislation Passed",
        desc: "New regulations aim to improve financial system stability.",
      },
      {
        title: "Manufacturing Output Increases Significantly",
        desc: "Industrial production reaches highest levels in years.",
      },
      {
        title: "Consumer Spending Drives Economic Growth",
        desc: "Retail sales exceed forecasts amid economic optimism.",
      },
      {
        title: "Fortune 500 Company Announces Major Expansion",
        desc: "Business opens 500 new facilities across the nation.",
      },
      {
        title: "Cryptocurrency Market Reaches New Milestone",
        desc: "Digital assets gain mainstream adoption and institutional support.",
      },
      {
        title: "Policy Changes Announced on Climate Action",
        desc: "Government commits to aggressive carbon reduction targets.",
      },
      {
        title: "Political Summit Discusses Regional Cooperation",
        desc: "Leaders meet to strengthen diplomatic and economic ties.",
      },
      {
        title: "Constitutional Amendment Debate Heats Up",
        desc: "Lawmakers discuss potential changes to founding document.",
      },
      {
        title: "Government Anti-Corruption Initiative Launched",
        desc: "New agency formed to investigate and prevent fraud.",
      },
      {
        title: "Parliament Extends Legislative Session",
        desc: "Additional weeks allocated for pending important bills.",
      },
    ],
    Business: [
      {
        title: "Stock Markets Rally on Strong Economic Data",
        desc: "Major indices reach new highs as companies report better earnings.",
      },
      {
        title: "Tech Giant Announces $50 Billion Investment",
        desc: "Major corporation commits to expanding operations globally.",
      },
      {
        title: "Merger Creates Industry-Leading Conglomerate",
        desc: "Two major companies join forces in record-breaking deal.",
      },
      {
        title: "Startup Raises Series C Funding",
        desc: "Innovation company secures major investment from venture capitalists.",
      },
      {
        title: "Corporate Earnings Beat Expectations",
        desc: "Quarterly results show resilience and strong profit growth.",
      },
      {
        title: "Energy Sector Undergoes Major Transformation",
        desc: "Companies pivot toward renewable and sustainable practices.",
      },
      {
        title: "Real Estate Market Shows Strong Growth",
        desc: "Property values rise amid increased investment interest.",
      },
      {
        title: "Banking Reform Legislation Passed",
        desc: "New regulations aim to improve financial system stability.",
      },
      {
        title: "Manufacturing Output Increases Significantly",
        desc: "Industrial production reaches highest levels in years.",
      },
      {
        title: "Consumer Spending Drives Economic Growth",
        desc: "Retail sales exceed forecasts amid economic optimism.",
      },
    ],
    Technology: [
      {
        title: "Revolutionary AI Technology Transforms Healthcare",
        desc: "Machine learning algorithms show unprecedented accuracy in diagnosis.",
      },
      {
        title: "New Smartphone Features Redefine Mobile Computing",
        desc: "Latest devices introduce groundbreaking camera and processing tech.",
      },
      {
        title: "Quantum Computing Breakthrough Announced",
        desc: "Scientists achieve major milestone in quantum computation.",
      },
      {
        title: "Cybersecurity Experts Warn of New Threats",
        desc: "Emerging vulnerabilities require immediate attention from IT leaders.",
      },
      {
        title: "Cloud Computing Market Reaches New Peak",
        desc: "Demand for data services continues explosive growth.",
      },
      {
        title: "Blockchain Technology Gets Mainstream Adoption",
        desc: "Industries embrace distributed ledger technology for security.",
      },
      {
        title: "Virtual Reality Experiences Become More Realistic",
        desc: "New immersive technologies push boundaries of digital interaction.",
      },
      {
        title: "Electric Vehicle Technology Advances Rapidly",
        desc: "Battery innovations extend range and reduce costs significantly.",
      },
      {
        title: "5G Network Rollout Accelerates Worldwide",
        desc: "Next-generation wireless connectivity reaches more regions.",
      },
      {
        title: "Artificial Intelligence Ethics Framework Proposed",
        desc: "Industry leaders discuss responsible AI development standards.",
      },
      {
        title: "Metaverse Platforms Gain Mainstream Adoption",
        desc: "Virtual worlds attract billions of users and corporate investment.",
      },
      {
        title: "Data Privacy Laws Reshape Tech Industry",
        desc: "New regulations require companies to overhaul data practices.",
      },
    ],
    Sports: [
      {
        title: "Championship Soccer Team Wins Thrilling Final",
        desc: "Home team captures first title in a decade with dramatic victory.",
      },
      {
        title: "Olympic Games Break Viewership Records",
        desc: "Billions worldwide watch athletes compete at highest level.",
      },
      {
        title: "Basketball Star Signs Record Contract",
        desc: "Player becomes highest-paid athlete in league history.",
      },
      {
        title: "Tennis Tournament Crowns New Champion",
        desc: "Underdog player defeats favored competitor in stunning upset.",
      },
      {
        title: "Cricket World Cup Delivers Memorable Moments",
        desc: "International tournament showcases skills of top teams.",
      },
      {
        title: "Marathon Sets New World Record",
        desc: "Elite runner shatters previous best time in stunning performance.",
      },
      {
        title: "Golf Tournament Awards Largest Prize Pool",
        desc: "Professional golfers compete for record-breaking prize money.",
      },
      {
        title: "Rugby Championship Intensifies Competition",
        desc: "Teams battle for supremacy in fierce international matches.",
      },
      {
        title: "Swimming Championships Showcase New Talent",
        desc: "Young athletes break records and earn Olympic qualification.",
      },
      {
        title: "Formula One Season Builds to Dramatic Conclusion",
        desc: "Championship fight down to final races with multiple contenders.",
      },
      {
        title: "Mixed Martial Arts Champion Defends Title",
        desc: "Legendary fighter retains crown in spectacular fashion.",
      },
      {
        title: "Women's Sports Leagues Report Record Viewership",
        desc: "Female athletes achieve unprecedented audience engagement.",
      },
    ],
    Entertainment: [
      {
        title: "New Entertainment Streaming Service Launches",
        desc: "Industry disruption continues as new player enters competitive market.",
      },
      {
        title: "Oscar Nominations Announced with Surprises",
        desc: "Academy reveals diverse slate of films and performances.",
      },
      {
        title: "Music Festival Draws Record Attendance",
        desc: "Multi-day event features biggest artists from around the world.",
      },
      {
        title: "Popular TV Series Gets Early Renewal",
        desc: "Network commits to additional seasons of hit show.",
      },
      {
        title: "Celebrity Couple Announces Wedding Plans",
        desc: "Star-studded event expected to draw worldwide attention.",
      },
      {
        title: "Film Studio Announces Superhero Universe Expansion",
        desc: "Multiple projects in development for theatrical release.",
      },
      {
        title: "Concert Tour Breaks Box Office Records",
        desc: "Artist's shows sell out worldwide in record time.",
      },
      {
        title: "Documentary Wins Major Industry Award",
        desc: "Film receives recognition for outstanding cinematography.",
      },
      {
        title: "Theater Production Moves to Broadway",
        desc: "Acclaimed play begins New York run with extended booking.",
      },
      {
        title: "Streaming Platform Invests in Original Content",
        desc: "Company commits billions to exclusive programming.",
      },
      {
        title: "Grammy Awards Celebrate Music's Biggest Night",
        desc: "Industry honors artists across all genres and categories.",
      },
      {
        title: "New Video Game Sets Sales Records",
        desc: "Gaming industry reaches all-time high with latest blockbuster release.",
      },
    ],
    Health: [
      {
        title: "Breakthrough in Cancer Research Offers New Hope",
        desc: "Scientists discover treatment approach with improved outcomes.",
      },
      {
        title: "Mental Health Initiative Launches Nationwide",
        desc: "Government funds programs to expand psychological services.",
      },
      {
        title: "Vaccine Development Accelerates for Emerging Illness",
        desc: "Researchers make rapid progress on preventive medicine.",
      },
      {
        title: "Fitness Industry Reports Record Growth",
        desc: "Wellness programs and gym memberships reach all-time highs.",
      },
      {
        title: "Nutrition Study Reveals Dietary Breakthroughs",
        desc: "Research shows surprising benefits of Mediterranean diet.",
      },
      {
        title: "Hospital Network Expands Services",
        desc: "New facilities open to improve community healthcare access.",
      },
      {
        title: "Pharmaceutical Company Receives FDA Approval",
        desc: "New drug shows promise for previously untreatable condition.",
      },
      {
        title: "Medical Technology Innovation Awards Announced",
        desc: "Cutting-edge devices recognized for improving patient outcomes.",
      },
      {
        title: "Public Health Agency Reports Disease Eradication",
        desc: "Coordinated efforts successfully eliminate infectious disease.",
      },
      {
        title: "Sleep Science Study Provides Wellness Insights",
        desc: "Research highlights importance of quality rest for health.",
      },
      {
        title: "Telemedicine Usage Reaches New Heights",
        desc: "Virtual healthcare services transform patient accessibility.",
      },
      {
        title: "Personalized Medicine Advances Transform Treatment",
        desc: "Genetic testing enables tailored medical care for patients.",
      },
      {
        title: "Pharmaceutical Company Receives FDA Approval",
        desc: "New drug shows promise for previously untreatable condition.",
      },
      {
        title: "Medical Technology Innovation Awards Announced",
        desc: "Cutting-edge devices recognized for improving patient outcomes.",
      },
      {
        title: "Public Health Agency Reports Disease Eradication",
        desc: "Coordinated efforts successfully eliminate infectious disease.",
      },
      {
        title: "Sleep Science Study Provides Wellness Insights",
        desc: "Research highlights importance of quality rest for health.",
      },
    ],
    Science: [
      {
        title: "Space Agency Announces Plans for Mars Colony",
        desc: "10-year plan unveiled for permanent human settlement.",
      },
      {
        title: "Scientists Discover New Species in Amazon",
        desc: "Biodiversity research reveals previously unknown wildlife.",
      },
      {
        title: "Astronomy Project Captures Black Hole Image",
        desc: "Telescope array provides first direct visual evidence.",
      },
      {
        title: "Climate Scientists Publish Landmark Study",
        desc: "Research provides detailed projections for coming decades.",
      },
      {
        title: "Physics Experiment Validates Theoretical Model",
        desc: "Particle accelerator results confirm long-held hypothesis.",
      },
      {
        title: "Ocean Research Reveals Ecosystem Changes",
        desc: "Studies show adaptation and evolution of marine life.",
      },
      {
        title: "Genetics Breakthrough Opens Treatment Possibilities",
        desc: "Gene therapy shows promise for inherited conditions.",
      },
      {
        title: "Archaeology Team Uncovers Ancient Civilization",
        desc: "Excavation reveals previously unknown historical society.",
      },
      {
        title: "Materials Science Develops Super Material",
        desc: "New compound shows unprecedented strength properties.",
      },
      {
        title: "Climate Modeling Improves Prediction Accuracy",
        desc: "Advanced algorithms provide better weather forecasting.",
      },
      {
        title: "Nanotechnology Advances Medical Applications",
        desc: "Microscopic structures revolutionize drug delivery systems.",
      },
      {
        title: "Fusion Energy Breakthrough Achieved",
        desc: "Scientists successfully demonstrate net energy gain reaction.",
      },
    ],
    Travel: [
      {
        title: "Tropical Paradise Becomes Hottest Destination",
        desc: "Island nation sees record tourism amid exotic attractions.",
      },
      {
        title: "New Train Route Connects Major Cities",
        desc: "High-speed rail service reduces travel time significantly.",
      },
      {
        title: "Airport Expansion Opens New International Routes",
        desc: "Hub facility enables flights to previously unreachable regions.",
      },
      {
        title: "Cruise Industry Reports Strongest Bookings",
        desc: "Ship operators report record demand for ocean voyages.",
      },
      {
        title: "Adventure Travel Trends Show Growth",
        desc: "Travelers increasingly seek active and experiential holidays.",
      },
      {
        title: "Historical City Wins Tourism Award",
        desc: "Destination recognized for preserving cultural heritage.",
      },
      {
        title: "National Park Reaches Visitor Milestone",
        desc: "Protected area attracts record number of nature enthusiasts.",
      },
      {
        title: "Luxury Resort Chain Announces Global Expansion",
        desc: "Company opens properties in prime locations worldwide.",
      },
      {
        title: "Travel Booking Platform Reports Surge in Bookings",
        desc: "Online service reflects strong demand for trips and vacations.",
      },
      {
        title: "Budget Airline Launches New Routes",
        desc: "Carrier expands service to emerging and popular destinations.",
      },
      {
        title: "Sustainable Tourism Movement Gains Momentum",
        desc: "Travelers choose eco-friendly destinations and accommodations.",
      },
      {
        title: "Digital Nomad Visas Reshape Travel Landscape",
        desc: "Countries create programs to attract remote workers.",
      },
    ],
    Opinion: [
      {
        title: "The Future of Remote Work",
        desc: "Expert analysis on workplace flexibility reshaping culture.",
      },
      {
        title: "Why Education Needs Modern Reform",
        desc: "Commentary on adapting learning systems for new era.",
      },
      {
        title: "Sustainability: Business Imperative Not Burden",
        desc: "Analysis of economic benefits of environmental action.",
      },
      {
        title: "Social Media's Role in Modern Society",
        desc: "Perspective on technology's impact on human connection.",
      },
      {
        title: "Why Universal Healthcare Makes Economic Sense",
        desc: "Opinion piece examining benefits of healthcare reform.",
      },
      {
        title: "The Great Automation Transition",
        desc: "Thoughts on workforce adaptation to AI and robotics.",
      },
      {
        title: "Democracy in the Digital Age",
        desc: "Commentary on protecting democratic values online.",
      },
      {
        title: "Building More Inclusive Communities",
        desc: "Essay on fostering diversity and belonging locally.",
      },
      {
        title: "Climate Action: Individual and Collective Responsibility",
        desc: "Perspective on personal and systemic change needed.",
      },
      {
        title: "The Innovation Economy Rewards Risk-Takers",
        desc: "Analysis of entrepreneurship driving economic growth.",
      },
      {
        title: "Rethinking Economic Growth and Well-being",
        desc: "Opinion on measuring success beyond GDP metrics.",
      },
      {
        title: "The Role of Government in Technological Progress",
        desc: "Analysis of public sector innovation and regulation.",
      },
      {},
      {
        title: "Climate Action: Individual and Collective Responsibility",
        desc: "Perspective on personal and systemic change needed.",
      },
      {
        title: "The Innovation Economy Rewards Risk-Takers",
        desc: "Analysis of entrepreneurship driving economic growth.",
      },
    ],
  };

  // Image keywords for Unsplash search per category
  const imageKeywords = {
    World: ["world", "globe", "international"],
    Politics: ["politics", "government", "parliament", "law"],
    Business: ["business", "finance", "stock market", "corporate"],
    Technology: ["technology", "innovation", "AI", "digital"],
    Sports: ["sports", "athletes", "competition", "games"],
    Entertainment: ["entertainment", "movie", "music", "cinema"],
    Health: ["health", "medical", "fitness", "wellness"],
    Science: ["science", "research", "laboratory", "discovery"],
    Travel: ["travel", "tourism", "destination", "vacation"],
    Opinion: ["newspaper", "journalism", "writing", "editorial"],
  };

  // Pre-allocate array for 120 articles
  const mockArticles = new Array(120);
  let articleId = 0;
  const now = Date.now();

  // Generate 12 articles per category - optimized loop
  for (let catIdx = 0; catIdx < categories.length; catIdx++) {
    const category = categories[catIdx];
    const templates = articleTemplates[category] || [];
    const keywords = imageKeywords[category] || ["news"];
    const keywordCount = keywords.length;

    for (let idx = 0; idx < templates.length; idx++) {
      const template = templates[idx];
      const keyword = keywords[idx % keywordCount];

      mockArticles[articleId] = {
        id: articleId + 1,
        slug: `article-${articleId + 1}`,
        source: { name: "TrendZaar News" },
        author: `Author ${(articleId % 50) + 1}`,
        title: template.title,
        description: template.desc,
        url: `article.html?id=${articleId + 1}`,
        urlToImage: `https://loremflickr.com/800/600/${keyword}?random=${articleId + 1}`,
        publishedAt: new Date(now - (idx + 1) * 3600000).toISOString(),
        content: `Full article content for "${template.title}". ${template.desc} This is a detailed news story with comprehensive information about the topic. The article provides background, context, and implications of this important news. Read the full story to understand the complete picture.`,
        category: category,
      };
      articleId++;
    }
  }

  return Promise.resolve({ articles: mockArticles, status: "ok" });
};

// ===========================
// FETCH NEWS DATA
// ===========================

/**
 * Fetch news articles from API or mock data
 * To integrate with real API:
 * - Replace generateMockNews() with actual fetch call
 * - Example: https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY
 * - Or use: https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YOUR_API_KEY
 */
async function fetchNewsData() {
  try {
    // OPTION 1: Use mock data (current)
    const response = await generateMockNews();

    // OPTION 2: To use NewsAPI (requires API key):
    // const apiKey = 'YOUR_API_KEY';
    // const response = await fetch(
    //     `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    // );

    // OPTION 3: To use New York Times API:
    // const apiKey = 'YOUR_API_KEY';
    // const response = await fetch(
    //     `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
    // );

    if (!response || !response.articles) {
      throw new Error("Invalid response format");
    }

    return response.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

// ===========================
// DOM ELEMENTS
// ===========================

const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const heroSection = document.getElementById("heroSection");
const storiesGrid = document.getElementById("storiesGrid");
const loadingSpinner = document.getElementById("loadingSpinner");
const errorMessage = document.getElementById("errorMessage");
const miniSpinner = document.getElementById("miniSpinner");

// ===========================
// MOBILE MENU TOGGLE
// ===========================

/**
 * Toggle mobile hamburger menu
 */
function setupMobileMenu() {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

function showMiniSpinner() {
  if (!miniSpinner) return;
  miniSpinner.classList.remove("hidden");
}

function hideMiniSpinner() {
  if (!miniSpinner) return;
  miniSpinner.classList.add("hidden");
}

// ===========================
// HERO SECTION RENDERING
// ===========================

/**
 * Render hero section with featured story
 * @param {Object} article - Featured article object
 */
function renderHeroSection(article) {
  if (!article) return;

  const publishDate = formatDate(article.publishedAt);

  const heroHTML = `
        <div class="hero-card" style="cursor: pointer;" onclick="window.location.href='${article.url}'; return false;">
            <div class="hero-image">
                <img src="${article.urlToImage}" alt="${article.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22sans-serif%22 font-size=%2224%22 fill=%22%23888%22%3EImage not available%3C/text%3E%3C/svg%3E'" />
                <div class="hero-overlay"></div>
            </div>
            <div class="hero-content">
                <span class="hero-category">${article.category || "Featured"}</span>
                <h1 class="hero-title">${article.title}</h1>
                <p class="hero-description">${article.description}</p>
                <div class="hero-meta">
                    <span>${article.source?.name || "TrendZaar"}</span>
                    <span>${publishDate}</span>
                </div>
                <a href="${article.url}" class="read-more-btn">Read Full Story</a>
            </div>
        </div>
    `;

  heroSection.innerHTML = heroHTML;
}

// ===========================
// STORY CARDS RENDERING
// ===========================

/**
 * Render individual story card
 * @param {Object} article - Article object
 * @returns {string} HTML string for story card
 */
function createStoryCard(article) {
  const publishDate = formatDate(article.publishedAt);
  const excerpt = truncateText(article.description, 100);

  return `
        <article class="story-card" onclick="window.location.href='${article.url}'; return false;">
            <div class="story-image">
                <img src="${article.urlToImage}" alt="${article.title}" data-article-id="${article.id}" data-category="${article.category}" onerror="handleBrokenImage(this)" />
            </div>
            <div class="story-body">
                <span class="story-category-tag">${article.category || "News"}</span>
                <h3 class="story-title">${article.title}</h3>
                <p class="story-excerpt">${excerpt}</p>
                <time class="story-time" datetime="${article.publishedAt}">
                    ${publishDate}
                </time>
            </div>
        </article>
    `;
}

/**
 * Render all story cards to the grid
 * @param {Array} articles - Array of article objects
 */
function renderStoriesGrid(articles) {
  if (!articles || articles.length === 0) {
    storiesGrid.innerHTML = "<p>No stories available.</p>";
    return;
  }

  // Skip the first article (used as hero) and render the rest
  const storyArticles = articles.slice(1);
  const storiesHTML = storyArticles
    .map((article) => createStoryCard(article))
    .join("");

  storiesGrid.innerHTML = storiesHTML;

  // Add click event listeners to story cards
  addStoryCardClickListeners();
}

/**
 * Add click event listeners to story cards
 * Can be extended to open modal, redirect, etc.
 */
function addStoryCardClickListeners() {
  const storyCards = document.querySelectorAll(".story-card");
  storyCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Prevent navigation for now, can be extended
      e.preventDefault();
    });

    card.addEventListener("mouseover", () => {
      card.style.cursor = "pointer";
    });
  });
}

// ===========================
// LOADING & ERROR HANDLING
// ===========================

/**
 * Show loading spinner
 */
function showLoadingSpinner() {
  loadingSpinner.classList.remove("hidden");
}

/**
 * Hide loading spinner
 */
function hideLoadingSpinner() {
  loadingSpinner.classList.add("hidden");
}

/**
 * Show error message
 */
function showErrorMessage() {
  errorMessage.classList.add("show");
}

/**
 * Hide error message
 */
function hideErrorMessage() {
  errorMessage.classList.remove("show");
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

/**
 * Format date string to readable format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

  if (diffInHours < 1) {
    return "Just now";
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  } else if (diffInHours < 48) {
    return "Yesterday";
  } else {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text with ellipsis
 */
function truncateText(text, maxLength) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

/**
 * Shuffle articles array using Fisher-Yates algorithm
 * @param {Array} articles - Articles to shuffle
 * @returns {Array} Shuffled articles
 */
function shuffleArticles(articles) {
  const shuffled = [...articles];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function preloadImage(src, timeout = 5000) {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error("No image source"));
      return;
    }

    const img = new Image();
    let finished = false;
    const timer = setTimeout(() => {
      if (!finished) {
        finished = true;
        img.src = "";
        reject(new Error("Image load timed out"));
      }
    }, timeout);

    img.onload = () => {
      if (!finished) {
        finished = true;
        clearTimeout(timer);
        resolve(src);
      }
    };

    img.onerror = () => {
      if (!finished) {
        finished = true;
        clearTimeout(timer);
        reject(new Error("Image failed to load"));
      }
    };

    img.src = src;
  });
}

async function getValidArticles(articles, limit = 10) {
  const valid = [];

  for (const article of articles) {
    if (valid.length >= limit) break;

    try {
      await preloadImage(article.urlToImage);
      valid.push(article);
    } catch {
      // Skip articles with broken images and try the next one
    }
  }

  if (valid.length === 0 && articles.length > 0) {
    return [{ ...articles[0], urlToImage: imageFallbackSvg }];
  }

  return valid;
}

async function getWorldSummaryArticles() {
  const summary = [];

  for (const category of newsCategories) {
    const categoryArticles = allArticles.filter(
      (article) => article.category === category,
    );
    const valid = await getValidArticles(categoryArticles, 1);
    if (valid.length > 0) summary.push(valid[0]);
  }

  return summary;
}

async function renderCategoryArticles(articles) {
  // Render immediately without blocking on image validation
  if (articles.length > 0) {
    renderHeroSection(articles[0]);
    renderStoriesGrid(articles);
  } else {
    heroSection.innerHTML = "<p>No stories available.</p>";
    storiesGrid.innerHTML = "<p>No stories available.</p>";
  }

  // Background validation: silently re-render on broken images via error handler
  getValidArticles(articles, Math.min(10, articles.length)).catch(() => {});
}

async function renderWorldSummary() {
  const heroCandidates = allArticles.filter(
    (article) => article.category === "World",
  );
  const heroArticle = heroCandidates[0] || allArticles[0];
  const summaryArticles = newsCategories
    .map((cat) => allArticles.find((a) => a.category === cat))
    .filter((a) => a && a.id !== heroArticle?.id);

  const articlesToRender = [heroArticle, ...summaryArticles];

  if (articlesToRender.length > 0) {
    renderHeroSection(articlesToRender[0]);
    renderStoriesGrid(articlesToRender);
  } else {
    heroSection.innerHTML = "<p>No summary stories available.</p>";
    storiesGrid.innerHTML = "<p>No summary stories available.</p>";
  }

  // Background validation: silently re-render on broken images via error handler
  getValidArticles(allArticles, 10).catch(() => {});
}

window.handleBrokenImage = async function (imgElement) {
  imgElement.onerror = null;
  imgElement.src = imageFallbackSvg;

  if (currentCategory) {
    await filterAndDisplayNews(currentCategory);
  }
};

async function shuffleNews() {
  if (currentCategory === "World") {
    await renderWorldSummary();
    return;
  }

  const currentArticles =
    currentCategory === "All"
      ? allArticles
      : allArticles.filter((article) => article.category === currentCategory);

  if (currentArticles.length > 0) {
    const shuffled = shuffleArticles(currentArticles);
    // Render immediately without blocking on validation
    if (shuffled.length > 0) {
      renderHeroSection(shuffled[0]);
      renderStoriesGrid(shuffled);
      // Background validation
      getValidArticles(shuffled, Math.min(10, shuffled.length)).catch(() => {});
    }
  }
}

// ===========================
// MAIN APPLICATION FLOW
// ===========================

/**
 * Initialize and load news application
 */
async function initializeApp() {
  try {
    showLoadingSpinner();
    hideErrorMessage();

    // Fetch news data
    const articles = await fetchNewsData();

    if (articles && articles.length > 0) {
      // Store all articles globally for filtering
      allArticles = articles;

      // Store articles in localStorage for article.html access
      localStorage.setItem("trendzaarArticles", JSON.stringify(articles));

      // If URL has a category param, use it. Otherwise default to World summary.
      const urlCategory = (function () {
        try {
          const params = new URLSearchParams(window.location.search);
          return params.get("category");
        } catch (e) {
          return null;
        }
      })();

      if (urlCategory) {
        currentCategory = urlCategory;
        updateActiveNavLink(urlCategory);
        showMiniSpinner();
        try {
          await filterAndDisplayNews(urlCategory);
        } finally {
          hideMiniSpinner();
        }
      } else {
        updateActiveNavLink("World");
        await filterAndDisplayNews("World");
      }

      hideLoadingSpinner();
    } else {
      throw new Error("No articles found");
    }
  } catch (error) {
    console.error("Application error:", error);
    hideLoadingSpinner();
    showErrorMessage();

    // Render empty states with fallback
    heroSection.innerHTML =
      '<div style="padding: 2rem; text-align: center; background: #f5f5f5; border-radius: 8px;"><p style="color: #888;">Unable to load featured story. Please refresh the page.</p></div>';
    storiesGrid.innerHTML =
      '<p style="text-align: center; color: #888; padding: 2rem;">Unable to load stories. Please refresh the page.</p>';
  }
}

/**
 * Setup category filtering on nav links
 * Called only once during initialization to avoid duplicate listeners
 */
function setupCategoryFiltering() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    // Remove any existing listeners to prevent duplicates
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);
  });

  // Re-query after cloning
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();
      // Prefer explicit data-category attribute to avoid text mismatch
      const category = link.dataset.category || link.textContent.trim();
      currentCategory = category;
      // immediate UI feedback
      updateActiveNavLink(category);
      showMiniSpinner();
      try {
        await filterAndDisplayNews(category);
      } finally {
        hideMiniSpinner();
      }
      hamburgerBtn.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

/**
 * Update active state on nav links
 * @param {string} category - Selected category name
 */
function updateActiveNavLink(category) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    if (link.textContent.trim() === category) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * Filter articles by category and display
 * @param {string} category - Category to filter by
 */
async function filterAndDisplayNews(category) {
  if (category === "World") {
    await renderWorldSummary();
    return;
  }

  let filteredArticles = allArticles;

  if (category !== "All") {
    filteredArticles = allArticles.filter(
      (article) => article.category === category,
    );
  }

  if (filteredArticles.length > 0) {
    await renderCategoryArticles(filteredArticles);
  } else {
    heroSection.innerHTML = "<p>No articles found for this category.</p>";
    storiesGrid.innerHTML = "<p>No articles found for this category.</p>";
  }
}

/**
 * Setup event listeners and initialize
 */
function setupEventListeners() {
  // Mobile menu toggle
  setupMobileMenu();

  // Category filtering
  setupCategoryFiltering();

  // Shuffle button
  const shuffleBtn = document.getElementById("shuffleBtn");
  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      await shuffleNews();
    });
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") {
        e.preventDefault();
      }
    });
  });
}

// ===========================
// APPLICATION START
// ===========================

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  initializeApp();

  // Optional: Auto-refresh news every 5 minutes
  // setInterval(initializeApp, 5 * 60 * 1000);
});
