'use strict'

// Don't forget the comma! No trailing slashes
// protocol://url.domain.ext

const sites = [
  {
    url: 'https://wiki.xxiivv.com',
    title: 'xxiivv',
    type: 'wiki',
    author: 'neauoire',
    contact: 'aliceffekt@gmail.com',
    rss: 'https://wiki.xxiivv.com/links/rss.xml',
    feed: 'https://wiki.xxiivv.com/twtxt.txt',
    wiki: 'https://wiki.xxiivv.com/scripts/database/glossary.ndtl'
  },

  {
    url: 'http://estevancarlos.com'
  },

  {
    url: 'https://electro.pizza',
    title: 'electro pizza',
    type: 'blog',
    author: 'rho',
    rss: 'https://electro.pizza/feed.xml',
    feed: 'https://electro.pizza/twtxt.txt'
  },

  {
    url: 'https://avanier.now.sh',
    title: 'Arachne',
    type: 'wiki',
    author: 'joshavanier',
    contact: 'joshavanier@protonmail.com',
    feed: 'https://avanier.now.sh/tw.txt'
  },

  {
    url: 'http://kaemura.com',
    title: 'kaemura.com',
    type: 'blog',
    author: 'kaemura',
    contact: 'chimera1190@gmail.com',
    feed: 'https://kaemura.com/twttxt.txt'
  },

  {
    url: 'https://liamcooke.com',
    title: 'liamcooke.com',
    author: 'slisne',
    contact: '@slisne@merveilles.town',
    rss: 'https://liamcooke.com/feed.xml',
    wiki: 'https://liamcooke.com/merveilles/wiki.ndtl',
    feed: 'https://liamcooke.com/merveilles/tw.txt'
  },

  {
    url: 'https://electricgecko.de',
    title: 'electricgecko',
    type: 'blog',
    author: 'electricgecko',
    contact: 'desk@electricgecko.de',
    rss: 'https://electricgecko.de/feed'
  },

  {
    url: 'https://wichniow.ski'
  },

  {
    url: 'https://hraew.autophagy.io'
  },

  {
    url: 'http://evenunto.net'
  },

  {
    url: 'https://anxl.faith'
  },

  {
    url: 'https://xvw.github.io',
    title: 'xvw.github.io',
    type: 'blog',
    author: 'xvw',
    contact: 'xaviervdw@gmail.com',
    rss: 'https://xvw.github.io/atom.xml'
  },

  {
    url: 'https://heracl.es'
  },

  {
    url: 'http://luminghao.com'
  },

  {
    url: 'https://turelio.github.io'
  },

  {
    url: 'https://shards.lectronice.com',
    title: 'shards',
    type: 'blog',
    author: 'lectronice',
    contact: 'i.love.spam@lectronice.com',
    feed: 'https://lectronice.com/hallway/twtxt.txt'
  },

  {
    url: 'https://craze.co.uk'
  },

  {
    url: 'https://shaneckel.com'
  },

  {
    url: 'https://cblgh.org',
    title: 'cblgh.org',
    author: 'cblgh',
    contact: 'cabal://cblgh.org',
    feed: 'https://cblgh.org/twtxt.txt'
  },

  {
    url: 'https://ellugar.co',
    title: 'ellugar',
    type: 'wiki',
    author: 'afk',
    contact: 'afk@ellugar.co',
    rss: 'http://feeds.ellugar.co/ellugar-logs'
  },

  {
    url: 'http://chigby.org',
    title: 'chigby.org',
    type: 'portfolio',
    contact: 'me@chigby.org',
    author: 'Cameron Higby-Naquin'
  },

  {
    url: 'https://longest.voyage'
  },

  {
    url: 'https://palomakop.tv'
  },

  {
    url: 'https://v-os.ca'
  },

  {
    url: 'https://jmandel.xyz'
  },

  {
    url: 'https://systems.ws'
  },

  {
    url: 'https://2d4.dev',
    title: '2d4.dev',
    author: 'jda0',
    contact: 'hi@2d4.dev',
    feed: 'https://2d4.dev/tw.txt',
    wiki: 'https://2d4.dev/wiki.ndtl'
  },

  {
    url: 'https://nathanwentworth.co'
  },

  {
    url: 'https://uonai.space'
  },

  {
    url: 'http://controls.ee'
  },

  {
    url: 'https://wasin.io'
  },

  {
    url: 'https://inns.studio'
  },

  {
    url: 'http://kokorobot.ca'
  },

  {
    url: 'https://ameyama.com',
    title: 'ameyama',
    type: 'blog',
    author: 'jrc03c',
    contact: 'josh@ameyama.com',
    rss: 'https://ameyama.com/blog/rss.xml',
    wiki: 'https://ameyama.com/data/wiki.ndtl'
  },

  {
    url: 'https://wake.st',
    title: 'wake.st',
    author: 'wakest',
    contact: '@liaizon@wake.st',
    feed: 'https://wake.st/twtxt.txt'
  },

  {
    url: 'https://xarene.la'
  },

  {
    url: 'https://alex.zyzhang.me'
  },

  {
    url: 'http://bildwissenschaft.vortok.info'
  },

  {
    url: 'https://jakofranko.github.com'
  },

  {
    url: 'https://aeriform.io'
  },

  {
    url: 'http://blog.lucasdidthis.com'
  },

  {
    url: 'http://npisanti.com',
    title: 'npisanti.com',
    author: 'npisanti',
    contact: 'nicola@npisanti.com',
    rss: 'http://npisanti.com/journal/rss.xml'
  },

  {
    url: 'https://underscorediscovery.ca'
  },

  {
    url: 'https://drisc.io',
    title: 'drisc.io',
    type: 'wiki',
    author: 'drisc',
    contact: 'cory@drisc.io',
    feed: 'https://drisc.io/hallway/twtxt.txt'
  },

  {
    url: 'https://ricky.codes'
  },

  {
    url: 'https://maxdeviant.com',
    title: 'maxdeviant.com',
    type: 'hybrid',
    author: 'Marshall Bowers',
    contact: 'elliott.codes@gmail.com'
  },

  {
    url: 'https://tynandebold.com'
  },

  {
    url: 'http://gytis.co'
  },

  {
    url: 'https://nomand.co'
  },

  {
    url: 'http://memoriata.com'
  },

  {
    url: 'https://mmm.s-ol.nu'
  },

  {
    url: 'https://chad.is'
  },

  {
    url: 'https://smidgeo.com/bots'
  },

  {
    url: 'https://iko.soy'
  },

  {
    url: 'http://atelieroilandsugar.com'
  },

  {
    url: 'https://magoz.is'
  },

  {
    url: 'https://szymonkaliski.com',
    author: 'Szymon Kaliski',
    type: 'hybrid',
    rss: 'https://szymonkaliski.com/feed.xml'
  },

  {
    url: 'https://phse.net',
    title: 'phse.net',
    type: 'blog',
    author: 'setphen',
    rss: 'https://phse.net/post/index.xml',
    feed: 'https://phse.net/twtxt/merv.txt'
  },

  {
    url: 'https://rosano.ca'
  },

  {
    url: 'https://soyboysky.github.io'
  },

  {
    url: 'https://gndclouds.cc'
  },

  {
    url: 'https://xuv.be'
  },

  {
    url: 'https://dsdshcym.github.io'
  },

  {
    url: 'https://wiki.chronica.xyz',
    title: 'chronica',
    type: 'wiki',
    author: 'ckipp',
    contact: 'ckipp@pm.me',
    feed: 'https://chronica.xyz/hallway.txt',
    wiki: 'https://chronica.xyz/glossary.ndtl'
  },

  {
    url: 'https://boffosocko.com'
  },

  {
    url: 'https://hex22.org',
    title: 'hex22',
    author: 'kodedninja',
    contact: 'karamanhunor@pm.me',
    feed: 'https://t.seed.hex22.org/twtxt.txt'
  },

  {
    url: 'https://patrikarvidsson.com'
  },

  {
    url: 'https://sophieleetmaa.com'
  },

  {
    url: 'https://xinniw.github.io'
  },

  {
    url: 'https://mboxed.github.io/sodatsu',
    title: 'sodatsu',
    type: 'wiki',
    author: 'm',
    contact: 'mboxxed@gmail.com',
    feed: 'https://mboxed.github.io/sodatsu/tw.txt'
  },

  {
    url: 'https://letters.vexingworkshop.com'
  },

  {
    url: 'https://tom.org.nz',
    title: 'Tom Hackshaw',
    type: 'portfolio',
    author: 'tomupom',
    contact: 'tom@tomhackshaw.com',
    wiki: 'https://a.tom.org.nz/glossary.ndtl'
  },

  {
    url: 'https://teknari.com'
  },

  {
    url: 'https://colectivo-de-livecoders.gitlab.io',
    title: 'Colectivo de Livecoders',
    type: 'blog',
    author: 'clic',
    contact: 'https://t.me/clic_laplata'
  },

  {
    url: 'https://www.madewithtea.com',
    title: 'madewithtea.com',
    type: 'blog'
  },

  {
    url: 'https://amorris.ca',
    title: 'amorris',
    author: 'amorris',
    type: 'blog',
    feed: 'https://feed.amorris.ca/hallway.txt',
    wiki: 'https://wiki.amorris.ca/glossary.ndtl'
  },

  {
    url: 'http://www.miha-co.ca',
    title: 'miha-co',
    type: 'portfolio'
  },

  {
    url: 'https://buzzert.net',
    title: 'buzzert.net',
    author: 'buzzert',
    type: 'blog'
  },

  {
    url: 'https://notes.stuartpb.com/',
    title: 'notes.stuartpb.com',
    type: 'wiki',
    author: 'stuartpb',
    contact: 's@stuartpb.com',
    feed: 'https://twtxt.stuartpb.com/xxiivv.txt'
  },

  {
    url: 'https://xxiii.co',
    title: 'xxiii',
    type: 'portfolio',
    author: 'serocell',
    contact: 'psignal@s900.net',
    rss: 'https://serocell.com/feeds/serocell.xml',
    feed: 'https://xxiii.co/twtxt.txt'
  },

  {
    url: 'https://kor.nz',
    title: 'kor',
    type: 'wiki',
    author: 'kormyen',
    contact: 'h@kor.nz',
    feed: 'https://kor.nz/twtxt.txt',
    wiki: 'https://kor.nz/db/glossary.ndtl'
  },

  {
    url: 'https://lublin.se',
    author: 'quite',
    contact: 'quite@hack.org',
    feed: 'https://lublin.se/twtxt.txt'
  },

  {
    url: 'https://zanneth.com',
    title: 'zanneth.com',
    author: 'zanneth',
    type: 'blog',
    contact: 'root@zanneth.com'
  },

  {
    url: 'https://eli.li',
    title: 'eli.li',
    author: 'eli_oat',
    type: 'blog',
    contact: 'hi@eli.li',
    rss: 'https://eli.li/feed.rss',
    feed: 'https://txt.eli.li/twtxt/twtxt.txt'
  },

  {
    url: 'https://gueorgui.net',
    title: 'Gueorgui Tcherednitchenko',
    author: 'gueorgui',
    type: 'portfolio',
    contact: 'hello@gueorgui.net'
  },

  {
    url: 'https://www.gkbrk.com',
    title: 'Leo',
    author: 'Leo',
    type: 'blog',
    contact: 'webring@gkbrk.com',
    rss: 'https://www.gkbrk.com/feed.xml',
    feed: 'https://www.gkbrk.com/twtxt.txt'
  },

  {
    url: 'https://www.tatecarson.com',
    title: 'Tate Carson',
    type: 'portfolio',
    author: 'Tate Carson',
    contact: 'tatecarson@gmail.com'
  },

  {
    url: 'https://azlen.me',
    title: 'azlen.me',
    author: 'azlen',
    type: 'wiki',
    contact: 'webring@azlen.me',
    feed: 'https://azlen.me/twtxt.txt',
    wiki: 'https://azlen.me/glossary.ndtl'
  },

  {
    url: 'https://opinionatedguide.github.io/',
    title: 'OpGuides',
    author: 'vega',
    contact: 'vegac@protonmail.com',
    feed: 'https://opinionatedguide.github.io/twtxt.txt'
  },

  {
    url: 'https://chrismaughan.com/',
    title: 'CMaughan',
    author: 'cmaughan',
    contact: 'mornymorny@gmail.com',
    feed: 'https://chrismaughan.com/twtxt.txt'
  },

  {
    url: 'https://oddworlds.org/',
    title: 'oddworlds soliloquy',
    type: 'blog',
    author: 'RaelZero',
    contact: 'gaz.gong@gmail.com'
  },

  {
    url: 'https://fundor333.com/',
    title: 'Fundor333',
    type: 'blog',
    author: 'Fundor 333',
    contact: 'blog@fundor333.com',
    feed: 'https://fundor333.com/twtxt.txt'
  },

  {
    url: 'https://cass.si/',
    contact: 'm@cass.si'
  },

  {
    url: 'https://dotcomboom.somnolescent.net/',
    title: 'dotcomboom.somnolescent.net',
    author: 'dcb',
    contact: 'dotcomboom@somnolescent.net',
    feed: 'https://dotcomboom.somnolescent.net/twtxt.txt'
  },

  {
    url: 'https://cadmican.neocities.org/',
    title: 'cadmican',
    contact: 'arachi@airmail.cc',
    author: 'Nihiltarier'
  },

  {
    url: 'https://jskjott.com',
    title: 'jskjott',
    contact: 'jonathan@jskjott.com',
    author: 'Jonathan Skjøtt'
  },

  {
    url: 'https://sixey.es/',
    title: 'sixey.es',
    contact: 'elmusho@gmail.com',
    author: 'sixeyes',
    type: 'portfolio'
  },

  {
    url: 'https://tilde.town/~dustin/',
    title: '0xdstn',
    contact: '0xdstn@protonmail.com',
    author: '0xdstn',
    type: 'wiki'
  },
  
   {
    url: 'https://jameschip.io/',
    title: 'James Chip',
    contact: 'henderson.j@protonmail.com',
    author: 'James',
    rss: 'https://jameschip.io/index.xml'   
  },

  { 
    url: 'https://dym.sh',
    type: 'hybrid',
    author: 'DYM',
    contact: 're@dym.sh',
    rss: 'https://dym.sh/rss.xml' 
  },

  { 
    url: 'https://patrick-is.cool/',
    author: 'Patrick Monaghan',
    contact: '0x5f.manpat@gmail.com',
    type: 'portfolio'
  },
  
  {
    url: 'https://icyphox.sh',
    type: 'hybrid',
    author: 'icyphox',
    contact: 'x@icyphox.sh',
    rss: 'https://icyphox.sh/blog/feed.xml',
    feed: 'https://icyphox.sh/twtxt.txt'
  }

]
