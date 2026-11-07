const sections = [
  {
    title: 'Data Collection',
    icon: '📊',
    paragraphs: ['SAVAGE Bot collects the following data to provide its services:'],
    list: [
      <><strong>User IDs:</strong> Unique Discord user identifiers for game progress tracking</>,
      <><strong>Game Data:</strong> Cash, inventory, levels, achievements, and game statistics</>,
      <><strong>Server Data:</strong> Guild IDs for server-specific game progress</>,
      <><strong>Command Usage:</strong> When commands are used (not message content)</>,
      <><strong>User Preferences:</strong> Rules agreement status and settings</>,
    ],
  },
  {
    title: 'Data Security',
    icon: '🔐',
    paragraphs: ['All stored data is encrypted at rest using AES encryption. User IDs are stored as hashed values where possible. Data is stored securely on protected servers with limited access.'],
  },
  {
    title: "Data We Don't Store",
    icon: '🚫',
    list: [
      'Message content or chat logs',
      'Email addresses or personal contact information',
      'IP addresses or location data',
      'Private messages or DMs',
      'User passwords or authentication tokens',
    ],
  },
  {
    title: 'Your Data Rights',
    icon: '🗑️',
    paragraphs: ['You have the following rights regarding your data:'],
    list: [
      <><strong>Access:</strong> Request a copy of your stored data</>,
      <><strong>Deletion:</strong> Use <code>!deletemydata</code> to remove all your data</>,
      <><strong>Correction:</strong> Request corrections to inaccurate data</>,
      <><strong>Portability:</strong> Request your data in a machine-readable format</>,
    ],
  },
  {
    title: 'Message Content',
    icon: '📢',
    paragraphs: ["The bot processes message content in real-time to execute commands but does not store message content. Messages are discarded immediately after processing. Users cannot currently opt-out of message processing as it's required for bot functionality."],
  },
  {
    title: 'Agreement',
    icon: '📋',
    paragraphs: ["By using SAVAGE Bot, you agree to comply with these Terms of Service, Discord's Terms of Service, and all applicable laws and regulations."],
  },
  {
    title: 'Service Description',
    icon: '🎮',
    paragraphs: ['SAVAGE Bot provides entertainment services including gaming, economy systems, and social features on Discord. The service is provided "as is" without warranties.'],
  },
  {
    title: 'User Responsibilities',
    icon: '⚖️',
    list: [
      "Maintain account security and don't share credentials",
      'Use the bot responsibly and follow all rules',
      'Report bugs or issues to bot administrators',
      'Respect other users and server communities',
      'Not attempt to reverse engineer or exploit the bot',
    ],
  },
  {
    title: 'Prohibited Uses',
    icon: '⛔',
    list: [
      'Using the bot for illegal or harmful activities',
      'Spamming, flooding, or disrupting service',
      'Attempting to gain unauthorized access',
      'Selling or trading bot currency for real money',
      'Creating multiple accounts to bypass restrictions',
    ],
  },
  {
    title: 'Virtual Currency',
    icon: '💰',
    paragraphs: ['All in-game currency and items have no real-world value and cannot be exchanged for real money or goods. The bot reserves the right to modify or remove currency/items at any time.'],
  },
  {
    title: 'Service Modifications',
    icon: '🔧',
    paragraphs: ['SAVAGE Bot reserves the right to modify, suspend, or discontinue any part of the service at any time without notice. We may update these terms periodically.'],
  },
  {
    title: 'Disclaimer of Warranties',
    icon: '⚠️',
    paragraphs: ['The service is provided "as is" without warranties of any kind. We are not liable for any damages, losses, or issues arising from bot usage.'],
  },
  {
    title: 'Termination',
    icon: '🚫',
    paragraphs: ['We reserve the right to terminate or suspend access to the bot for violations of these terms, at our sole discretion, without notice.'],
  },
  {
    title: 'Age Requirements',
    icon: '👤',
    paragraphs: ['You must be at least 13 years old to use SAVAGE Bot. Users under 18 must have parental consent. We comply with COPPA and other child protection laws.'],
  },
  {
    title: 'Privacy and Data',
    icon: '🔒',
    paragraphs: ['Your privacy is important to us. Our collection and use of data is governed by our Privacy Policy. By using the bot, you consent to the data practices described therein.'],
  },
  {
    title: 'Intellectual Property',
    icon: '🎯',
    paragraphs: ['All bot features, code, designs, and content are owned by SAVAGE Bot and protected by copyright and other intellectual property laws. You may not copy, modify, or distribute our content without permission.'],
  },
  {
    title: 'Service Availability',
    icon: '⚡',
    paragraphs: ['While we strive for high uptime, we cannot guarantee 100% service availability. The bot may experience downtime for maintenance, updates, or technical issues beyond our control.'],
  },
  {
    title: 'Updates and Changes',
    icon: '🔄',
    paragraphs: ['We regularly update the bot with new features, bug fixes, and balance changes. Major changes will be announced in our Discord server. Continued use of the bot constitutes acceptance of these changes.'],
  },
  {
    title: 'Third-Party Services',
    icon: '🌐',
    paragraphs: ['The bot may integrate with third-party services (Discord API, payment processors, etc.). Your use of these services is subject to their respective terms and policies.'],
  },
  {
    title: 'Contact and Support',
    icon: '📧',
    paragraphs: ['For questions about these terms or to report violations, please contact our support team through the Discord server or use the appropriate channels provided in the bot.'],
  },
  {
    title: 'Last Updated',
    icon: '📅',
    paragraphs: ['These Terms of Service were last updated on January 2024. We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.'],
  },
]

function RulesPage() {
  return (
    <div className="rules-page">
      <header className="rules-nav">
        <a className="rules-brand" href="./" aria-label="SAVAGE Bot home">
          <span className="rules-brand-mark">S</span>
          <span>SAVAGE <span className="rules-brand-muted">BOT</span></span>
        </a>
        <a className="rules-back-button" href="./">
          <span aria-hidden="true">←</span> Back to main page
        </a>
      </header>

      <main>
        <section className="rules-hero">
          <div className="rules-hero-glow" aria-hidden="true" />
          <div className="rules-hero-content">
            <span className="rules-eyebrow"><span /> COMMUNITY GUIDE</span>
            <h1>SAVAGE <span>Rules &amp; Policies</span></h1>
            <p>Your Ultimate Discord Gaming &amp; Economy Companion</p>
            <a className="rules-scroll-button" href="#rules-list">Explore the guide <span aria-hidden="true">↓</span></a>
          </div>
          <div className="rules-hero-orb rules-hero-orb-one" aria-hidden="true" />
          <div className="rules-hero-orb rules-hero-orb-two" aria-hidden="true" />
        </section>

        <section className="rules-content" id="rules-list" aria-label="SAVAGE Bot rules and policies">
          <div className="rules-section-heading">
            <span>THE PLAYER HANDBOOK</span>
            <h2>Know the rules. <span>Play savage.</span></h2>
            <p>Please review the information below before using SAVAGE Bot.</p>
          </div>

          <div className="rules-grid">
            {sections.map((section, index) => (
              <article className="rules-card" key={section.title}>
                <div className="rules-card-heading">
                  <span className="rules-card-icon" aria-hidden="true">{section.icon}</span>
                  <span className="rules-card-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{section.title}</h3>
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="rules-footer">
        <span>© 2024 SAVAGE Discord Bot. All rights reserved.</span>
        <a href="./">← Return to SAVAGE Bot</a>
      </footer>
    </div>
  )
}

export default RulesPage
