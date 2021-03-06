import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import background from './assets/header.jpg';
import Velden from './assets/velden.png';
import Cardinal from './assets/cardinal.png';
import Team from './assets/team.png';

import Roleplay from './assets/roleplay.png';
import Community from './assets/community.png';
import Fun from './assets/fun.png';
import Avatar1 from './assets/avatars/avatar-1.webp';
import Avatar2 from './assets/avatars/avatar-2.webp';
import Avatar3 from './assets/avatars/avatar-3.webp';

export default {
  title: 'Corporate',
  navbar: {
    links: [
      {
        to: 'angebot',
        label: 'Angebot',
      },
      {
        to: 'velden',
        label: 'Velden',
      },
      {
        to: 'cardinal',
        label: 'Cardinal',
      },
      {
        to: 'team',
        label: 'Team',
      },
      {
        to: 'kontakt',
        label: 'Kontakt',
      },
    ],
    actions: [
      {
        href:
          'https://community.theyphania.de/',
        label: 'Community',
        target: '_blank',
      },
      {
        href:
          'https://hilfe.theyphania.de/',
        label: 'Hilfe',
        target: '_blank',
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x`,
      alt: 'Header',
    },
    title: 'Theyphania',
    subtitle: 'Rollenspiel und Multigaming Community',
    description:
      'Theyphania bietet dir eine Rollenspiel-Erfahrung der Extraklasse. Zusammen mit anderen Rollenspiel-Begeisterten laden wir dich ein auf eine Reise die du so schnell nicht vergessen wirst.',
    actions: [
      {
        as: 'a',
        href:
          'https://community.theyphania.de/register/',
        children: 'Tritt uns bei',
        target: '_blank',
      },
      {
        to: 'angebot',
        children: 'Erfahre mehr',
        variant: 'outline',
      },
    ],
  },
  angebot: {
    subtitle: 'Was wir machen',
    title: 'Unser Angebot',
    services: [
      {
        icon: Roleplay,
        title: 'Rollenspiel',
        text:
          'Das ??bernehmen eines fremden Charakters. Absolute Freiheit bei der Gestaltung der Rolle. Das macht unser Rollenspiel aus.',
      },
      {
        icon: Community,
        title: 'Gemeinschaft',
        text:
          'Nachts um 2 noch Lust auf eine schnelle Runde CS:GO? Bei uns findest du mit Sicherheit jemanden mit ??hnlichem Interesse.',
      },
      {
        icon: Fun,
        title: 'Spa??',
        text:
          'Mit unserem Fokus auf Fairness ist der Spielspa?? garantiert. Spiele zusammen mit Anderen um das Erlebnis noch spa??iger zu gestalten.',
      },
    ],
  },
  velden: {
    img: {
      src: Velden,
      srcSet: `${Velden} 1x`,
    },
    subtitle: 'Willkommen im K??nigreich',
    title: 'Velden',
    text:
      'Tauche in eine mittelalterliche Fantasy-Welt mit Fokus auf Adel und die Bourgeois ein. Nach einer apokalyptisch anmutenden Katastrophe, die den ganzen Kontinent Dakros ersch??tterte und der ein Gro??teil der Bev??lkerung zum Opfer fiel, ist das K??nigreich Velden aus den Ruinen des alten Kaiserreiches entstanden, um das nun von Monstern und finsteren Gestalten befallene Land wieder bewohnbar und sicher zu machen.',
    cta: {
      children: 'Zur Karte',
      href:
        'https://theyphania.de/minecraft/karten/velden',
      target: '_blank',
      as: 'a',
    },
  },
  cardinal: {
    img: {
      src: Cardinal,
      srcSet: `${Cardinal} 1x`,
    },
    subtitle: 'Powered by Theyphania',
    title: 'Cardinal',
    text:
      'Ein robustes Gamepanel im Stile des Cardinal-Systems aus der weltweit bekannten Anime-Serie "Sword Art Online" zur Verwaltung unserer Server und Services. Basierend auf dem quelloffenen Pterodactyl Panel nutzt Cardinal sein Potenziel durch die f??higen H??nde unseres Technikteams voll aus. Die Verwendung von Cardinal erlaubt es unserem Team effizient und sinnvoll mit unseren Servern zu interagieren, Updates zeitnah einzuspielen und geordnet seinen Pflichten gegen??ber der Community nachzukommen.',
    cta: {
      children: 'Mehr Infos zu Cardinal',
      href:
        'https://go.theypha.de/cardinal-info',
      target: '_blank',
      as: 'a',
    },
  },
  supportCta: {
    subtitle: 'Probleme innerhalb der Community?',
    title: 'Wir eilen zur Hilfe!',
    text:
      'Gehe einfach in unser Hilfe-Center und stelle eine Anfrage ??ber den Ticket-Support.',
    buttons: [
      {
        label: 'Er??ffne ein Ticket',
        href: 'https://hilfe.theyphania.de',
      },
    ],
  },
  team: {
    img: {
      src: Team,
      srcSet: `${Team} 1x`,
    },
    subtitle: 'Wer steckt hinter alledem?',
    title: 'Das Team',
    text:
      'Hier bei Theyphania steht neben dem Rollenspiel auch der Spa?? ganz weit vorne. Unser Team sorgt daf??r, dass unsere Mitglieder sorgenfrei und sicher den gr????tm??glichen Spa?? im Rollenspiel erfahren k??nnen. Dabei ist es egal, ob du wei??t wie man in Minecraft baut, Erfahrungen bei der Moderation von Mitgliedern, oder deine technischen Kenntnise uns weiterhelfen k??nnen. Wir freuen uns in jedem Fall auf eine Bewerbung von dir!',
    cta: {
      label: 'Jetzt bewerben!',
      href:
        'https://community.theyphania.de',
      target: '_blank',
      as: 'a',
    },
    people: [
      {
        avatar: {
          src: Avatar1,
          srcSet: `${Avatar1} 1x`,
        },
        name: 'Dantolan',
        position: 'Senior-Manager',
      },
      {
        avatar: {
          src: Avatar2,
          srcSet: `${Avatar2} 1x`,
        },
        name: 'Loapu',
        position: 'Senior-Manager',
      },
      {
        avatar: {
          src: Avatar3,
          srcSet: `${Avatar3} 1x`,
        },
        name: 'Tommy',
        position: 'Senior-Manager',
      },
    ],
  },
  contactCta: {
    subtitle: 'Wir suchen Teammitglieder.',
    title: 'Bewirb dich jetzt!',
    text:
      'Theyphania ist kein kleines Projekt. Wir brauchen tatkr??ftige Menschen die uns helfen unsere Vision zu verwirklichen.',
    buttons: [
      {
        label: 'Bewerben',
        href:
          'https://community.theyphania.de',
      },
      {
        label: 'Wiki',
        href: 'https://go.theyphania.de/confluence',
        variant: 'outline',
      },
    ],
  },
  kontakt: {
    subtitle: 'Noch Fragen?',
    title: 'Impressum',
    addresses: [
      {
        title: 'i. V. Benjamin Selig',
        address: textToMultiline`Langgasse 7\n35510 Butzbach\nDeutschland`,
        email: 'kontakt@theyphania.de',
        phone: '+49 160 2457 494',
      },
    ],
  },
  copyright: '?? 2022 Theyphania.',
};
