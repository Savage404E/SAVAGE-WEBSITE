import { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 360);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0a0a0f',
      color: 'white',
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(10, 10, 15, 0.9)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(107, 33, 168, 0.3)',
      padding: isMobile ? '8px 12px' : '16px 24px',
    },
    navContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    logoText: {
      fontSize: isMobile ? '16px' : '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #a855f7, #c084fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    button: {
      background: 'linear-gradient(to right, #6b21a8, #a855f7)',
      color: 'white',
      padding: isMobile ? '8px 16px' : '12px 32px',
      borderRadius: '8px',
      fontWeight: 'bold',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 4px 14px rgba(107, 33, 168, 0.4)',
      fontSize: isMobile ? '12px' : 'inherit',
    },
    hero: {
      paddingTop: isMobile ? '80px' : '128px',
      paddingBottom: isMobile ? '32px' : '80px',
      padding: isMobile ? '12px' : '24px',
      textAlign: 'center',
      position: 'relative',
      backgroundImage: 'url(/hero-bg.gif)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 10, 15, 0.4)',
      zIndex: 1,
    },
    heroContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    heroVisual: {
      fontSize: '120px',
      marginBottom: '24px',
      filter: 'drop-shadow(0 0 30px rgba(107, 33, 168, 0.5))',
      animation: 'float 3s ease-in-out infinite',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'rgba(107, 33, 168, 0.2)',
      border: '1px solid rgba(107, 33, 168, 0.4)',
      borderRadius: '9999px',
      padding: '8px 16px',
      marginBottom: '32px',
    },
    title: {
      fontSize: 'clamp(56px, 8vw, 80px)',
      fontWeight: 'bold',
      marginBottom: '24px',
      textShadow: '0 0 40px rgba(107, 33, 168, 0.3)',
    },
    gradientText: {
      background: 'linear-gradient(to right, #a855f7, #c084fc, #a855f7)',
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'gradient 3s ease infinite',
    },
    description: {
      fontSize: '22px',
      color: '#9ca3af',
      maxWidth: '672px',
      margin: '0 auto 40px',
      lineHeight: '1.6',
    },
    ctaContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
      justifyContent: 'center',
      marginBottom: '64px',
      flexWrap: 'wrap',
    },
    ctaButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    secondaryButton: {
      border: '1px solid rgba(107, 33, 168, 0.5)',
      backgroundColor: 'transparent',
      color: 'white',
      padding: isMobile ? '8px 16px' : '12px 32px',
      borderRadius: '8px',
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'all 0.3s',
      fontSize: isMobile ? '12px' : 'inherit',
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isSmallMobile ? '8px' : isMobile ? '12px' : '24px',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    statCard: {
      border: '1px solid rgba(107, 33, 168, 0.3)',
      backgroundColor: 'rgba(10, 10, 15, 0.5)',
      backdropFilter: 'blur(4px)',
      borderRadius: '12px',
      padding: isSmallMobile ? '8px' : isMobile ? '12px' : '24px',
      boxShadow: '0 0 30px rgba(107, 33, 168, 0.3)',
      textAlign: 'center',
    },
    statNumber: {
      fontSize: isSmallMobile ? '18px' : isMobile ? '24px' : '36px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #a855f7, #c084fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    statLabel: {
      color: '#9ca3af',
      fontSize: '14px',
    },
    features: {
      padding: isMobile ? '32px 12px' : '80px 24px',
      backgroundColor: 'rgba(10, 10, 15, 0.5)',
      backgroundImage: 'url(./wall-bg.gif)',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      position: 'relative',
    },
    featuresContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    featuresTitle: {
      fontSize: 'clamp(36px, 5vw, 48px)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '16px',
    },
    featuresSubtitle: {
      color: '#9ca3af',
      textAlign: 'center',
      marginBottom: '64px',
      maxWidth: '672px',
      margin: '0 auto 64px',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isMobile ? '16px' : '32px',
    },
    gamePictures: {
      padding: isMobile ? '32px 12px' : '80px 24px',
      backgroundColor: 'rgba(10, 10, 15, 0.3)',
    },
    gamePicturesContent: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    gamePicturesTitle: {
      fontSize: 'clamp(36px, 5vw, 48px)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '16px',
    },
    gamePicturesSubtitle: {
      color: '#9ca3af',
      textAlign: 'center',
      marginBottom: '64px',
      maxWidth: '672px',
      margin: '0 auto 64px',
    },
    gamePictureRow: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      gap: isMobile ? '16px' : '48px',
      marginBottom: isMobile ? '32px' : '64px',
      maxWidth: '1200px',
      margin: '0 auto 64px',
    },
    gamePictureRowReverse: {
      flexDirection: isMobile ? 'column' : 'row-reverse',
    },
    gamePictureImage: {
      flex: '1',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 0 30px rgba(107, 33, 168, 0.3)',
    },
    gamePictureImg: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    gamePictureInfo: {
      flex: '1',
      border: '1px solid rgba(107, 33, 168, 0.3)',
      backgroundColor: 'rgba(10, 10, 15, 0.5)',
      backdropFilter: 'blur(4px)',
      borderRadius: '16px',
      padding: isMobile ? '16px' : '32px',
      boxShadow: '0 0 30px rgba(107, 33, 168, 0.3)',
    },
    gamePictureTitle: {
      fontSize: isMobile ? '18px' : '28px',
      fontWeight: 'bold',
      marginBottom: '16px',
      background: 'linear-gradient(to right, #a855f7, #c084fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    gamePictureDescription: {
      color: '#9ca3af',
      lineHeight: '1.6',
    },
    featureCard: {
      border: '1px solid rgba(107, 33, 168, 0.3)',
      backgroundColor: 'rgba(10, 10, 15, 0.5)',
      backdropFilter: 'blur(4px)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 0 30px rgba(107, 33, 168, 0.3)',
      transition: 'all 0.3s',
    },
    featureIcon: {
      width: '48px',
      height: '48px',
      backgroundColor: 'rgba(107, 33, 168, 0.2)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px',
      color: '#a855f7',
      fontSize: '24px',
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '12px',
    },
    featureDescription: {
      color: '#9ca3af',
    },
    cta: {
      padding: '60px 24px',
    },
    ctaContent: {
      maxWidth: '896px',
      margin: '0 auto',
      textAlign: 'center',
    },
    ctaCard: {
      border: '1px solid rgba(107, 33, 168, 0.3)',
      backgroundColor: 'linear-gradient(135deg, rgba(10, 10, 15, 0.5) 0%, rgba(107, 33, 168, 0.1) 100%)',
      backgroundImage: 'url(./door-bg.gif)',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backdropFilter: 'blur(4px)',
      borderRadius: '16px',
      padding: isMobile ? '20px 12px' : '32px',
      boxShadow: '0 0 30px rgba(107, 33, 168, 0.3)',
      position: 'relative',
      overflow: 'hidden',
    },
    ctaTitle: {
      fontSize: 'clamp(32px, 4vw, 42px)',
      fontWeight: 'bold',
      marginBottom: '12px',
    },
    ctaSubtitle: {
      fontSize: '16px',
      color: '#a855f7',
      marginBottom: '20px',
      fontWeight: '500',
    },
    ctaDescription: {
      color: '#9ca3af',
      marginBottom: '24px',
      maxWidth: '512px',
      margin: '0 auto 24px',
      lineHeight: '1.6',
    },
    ctaStats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '24px',
      flexWrap: 'wrap',
    },
    ctaStat: {
      textAlign: 'center',
    },
    ctaStatNumber: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#a855f7',
    },
    ctaStatLabel: {
      fontSize: '12px',
      color: '#6b7280',
    },
    footer: {
      borderTop: '1px solid rgba(107, 33, 168, 0.3)',
      padding: '32px 24px',
    },
    footerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '14px',
    },
  };

  const features = [
    { icon: "🎮", title: "Pet System", description: "Adopt and care for pets. Feed, clean, and play with them to level up." },
    { icon: "⚔️", title: "Dungeon System", description: "Explore dungeons with friends, battle monsters, and earn epic loot." },
    { icon: "⚡", title: "Economy", description: "Complete tasks, play games, and earn cash. Shop for items and upgrades." },
    { icon: "🎲", title: "RNG Games", description: "Test your luck with random number generation games and win big." },
    { icon: "🎯", title: "Battle Royale", description: "Compete in intense battles and be the last one standing." },
    { icon: "🚢", title: "Ship Battle", description: "Command your ship and engage in epic naval battles." },
    { icon: "🏆", title: "Badges", description: "Collect and display badges for your achievements." },
    { icon: "🤝", title: "Actions", description: "Fun social commands to interact with other users." },
    { icon: "🔢", title: "2048", description: "Classic puzzle game. Merge tiles to reach 2048." },
    { icon: "⚖️", title: "Split or Steal", description: "Trust game. Split the pot or steal it all." },
    { icon: "✂️", title: "Rock Paper Scissors", description: "Classic game of chance. Beat your opponent." },
    { icon: "🪙", title: "Coinflip", description: "Flip a coin and test your luck. Win or lose." },
    { icon: "🎰", title: "Slot Machine", description: "Spin the slots and match symbols for big wins." },
    { icon: "💣", title: "Mine", description: "Navigate the minefield. Avoid bombs and find treasure." },
    { icon: "🏰", title: "Clan System", description: "Join or create clans. Build your community together." },
    { icon: "🏛️", title: "Bank", description: "Store your cash safely and earn interest over time." },
    { icon: "🎟️", title: "Lottery", description: "Buy tickets for a chance to win the jackpot." },
    { icon: "🛒", title: "Shop", description: "Buy items, upgrades, and special items with your cash." },
    { icon: "🎡", title: "Roulette", description: "Spin the wheel and place your bets. Win big rewards." },
    { icon: "🎯", title: "Plinko", description: "Drop the ball and watch it bounce. Win based on where it lands." },
    { icon: "🎣", title: "Fishing", description: "Relax and fish at different locations. Catch rare fish and sell them." },
    { icon: "👑", title: "Leaderboards", description: "Compete with others for top rankings and earn exclusive rewards." },
    { icon: "📈", title: "Daily Rewards", description: "Claim daily bonuses and participate in events for extra rewards." },
  ];

  const gamePictures = [
    { image: "./card-rng.png", title: "Card RNG", description: "Test your luck with our card-based RNG games. Draw cards, play hands, and win big rewards with strategic gameplay and random outcomes." },
    { image: "./clan.png", title: "Clan Teams", description: "Join or create powerful clans with your friends. Build your community, compete in clan wars, and earn exclusive rewards together." },
    { image: "./dungeon.png", title: "Dungeon Fights", description: "Explore dangerous dungeons with your party. Battle monsters, find treasure, and conquer challenging boss fights for epic loot." },
    { image: "./pets.png", title: "Pet Lovers", description: "Adopt and care for adorable pets. Feed them, play with them, and watch them grow. Level up your pets for special bonuses." },
  ];

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <span style={{ fontSize: '32px' }}>🎮</span>
            <span style={styles.logoText}>SAVAGE</span>
          </div>
          <a href="https://discord.gg/besavage" target="_blank" rel="noopener noreferrer" style={styles.button}>
            Join Server
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            <span style={styles.gradientText}>SAVAGE</span>
            <br />
            <span style={{ color: 'white' }}>Discord Bot</span>
          </h1>
          
          <p style={styles.description}>
            Level up your Discord server with the ultimate gaming bot. Features pets, economy, dungeons, fishing, and more.
          </p>
          
          <div style={styles.ctaContainer}>
            <a href="https://discord.gg/besavage" target="_blank" rel="noopener noreferrer" style={{...styles.button, ...styles.ctaButton}}>
              <span>🔗</span>
              Add to Server
            </a>
            <a href="#features" style={{...styles.secondaryButton, ...styles.ctaButton}}>
              Explore Features
            </a>
            <a href="#game-pictures" style={{...styles.secondaryButton, ...styles.ctaButton}}>
              📸 Game Pictures
            </a>
          </div>
          
          <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '16px' }}>mine.gif</p>

          {/* Stats */}
          <div style={styles.stats}>
            <div style={styles.statCard}>
              <div style={{ fontSize: '32px', margin: '0 auto 12px' }}>👥</div>
              <div style={styles.statNumber}>400+</div>
              <div style={styles.statLabel}>Bot Users</div>
            </div>
            <div style={styles.statCard}>
              <div style={{ fontSize: '32px', margin: '0 auto 12px' }}>👑</div>
              <div style={styles.statNumber}>21K+</div>
              <div style={styles.statLabel}>Server Members</div>
            </div>
            <div style={styles.statCard}>
              <div style={{ fontSize: '32px', margin: '0 auto 12px' }}>⚔️</div>
              <div style={styles.statNumber}>20+</div>
              <div style={styles.statLabel}>Mini Games</div>
            </div>
            <div style={styles.statCard}>
              <div style={{ fontSize: '32px', margin: '0 auto 12px' }}>📈</div>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <div style={styles.featuresContent}>
          <h2 style={styles.featuresTitle}>
            <span style={styles.gradientText}>Features</span>
          </h2>
          <p style={styles.featuresSubtitle}>
            Everything you need for an engaging gaming experience
          </p>

          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Pictures Section */}
      <section id="game-pictures" style={styles.gamePictures}>
        <div style={styles.gamePicturesContent}>
          <h2 style={styles.gamePicturesTitle}>
            <span style={styles.gradientText}>Game Pictures</span>
          </h2>
          <p style={styles.gamePicturesSubtitle}>
            Visual showcase of our amazing game features
          </p>

          {gamePictures.map((game, index) => (
            <div key={index} style={{...styles.gamePictureRow, ...(index % 2 === 1 ? styles.gamePictureRowReverse : {})}}>
              <div style={styles.gamePictureImage}>
                <img src={game.image} alt={game.title} style={styles.gamePictureImg} />
              </div>
              <div style={styles.gamePictureInfo}>
                <h3 style={styles.gamePictureTitle}>{game.title}</h3>
                <p style={styles.gamePictureDescription}>{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaContent}>
          <div style={styles.ctaCard}>
            <h2 style={styles.ctaTitle}>
              <span style={styles.gradientText}>Ready to Level Up?</span>
            </h2>
            <p style={styles.ctaSubtitle}>
              Join the ultimate gaming experience
            </p>
            <p style={styles.ctaDescription}>
              Join our massive and famous community of 21k+ members! SAVAGE Bot is the most popular gaming bot with pets, dungeons, economy, and 20+ mini-games. Be part of something legendary.
            </p>
            <div style={styles.ctaStats}>
              <div style={styles.ctaStat}>
                <div style={styles.ctaStatNumber}>✨ AURA</div>
                <div style={styles.ctaStatLabel}>Badge</div>
              </div>
              <div style={styles.ctaStat}>
                <div style={styles.ctaStatNumber}>👥 21k+</div>
                <div style={styles.ctaStatLabel}>Members</div>
              </div>
              <div style={styles.ctaStat}>
                <div style={styles.ctaStatNumber}>🏆 Daily</div>
                <div style={styles.ctaStatLabel}>Rewards</div>
              </div>
            </div>
            <a href="https://discord.gg/besavage" target="_blank" rel="noopener noreferrer" style={{...styles.button, ...styles.ctaButton}}>
              <span>🔗</span>
              Join SAVAGE Server
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>&copy; 2024 SAVAGE Discord Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
