export interface linkButtonsInterface {
   title: string;
   classes: string[];
   href: string;
}

export interface sidenavLinkButtonsInterface{
   title: string;
   classes: string[];
   navPanelButtonLinks?: linkButtonsInterface[];
}

export const sidenavLinkButtons: sidenavLinkButtonsInterface[] = [
   {
      title: 'Chess',
      classes: ['chess-logo', 'home-top'],
   },
   {
      title: 'Play',
      classes: ['play-top'],
      navPanelButtonLinks:  [
         {
            title: 'Play',
            classes: ['play-panel-top'],
            href: 'play'
         },
         {
            title: 'Play Bots',
            classes: ['play-bots-top'],
            href: 'play/bots'
         },
         {
            title: 'Tournaments',
            classes: ['tournaments-top'],
            href: 'tournaments'
         },
         {
            title: '4 Player & Variants',
            classes: ['player-variants-top'],
            href: 'variants'
         },
         {
            title: 'Leaderboard',
            classes: ['leaderboard-top'],
            href: 'leaderboard'
         }
      ]
   },
   {
      title: 'Puzzles',
      classes: ['puzzles-top'],
      navPanelButtonLinks: [
         {
            title: 'Puzzles',
            classes: ['puzzles-panel-top'],
            href: 'puzzles'
         },
         {
            title: 'Puzzle Rush',
            classes: ['puzzles-rush-top'],
            href: 'puzzles/rush'
         },
         {
            title: 'Puzzle Battle',
            classes: ['puzzles-battle-top'],
            href: 'puzzles/battle'
         },
         {
            title: 'Daily Puzzle',
            classes: ['daily-puzzle-top'],
            href: 'daily-chess-puzzle'
         },
         {
            title: 'Custom Puzzle',
            classes: ['custom-puzzle-top'],
            href: 'puzzles/learning'
         }
      ]
   },
   {
      title: 'Learn',
      classes: ['lessons-top'],
      navPanelButtonLinks: [
         {
            title: 'Lessons',
            classes: ['lessons-top'],
            href: 'lessons'
         },
         {
            title: 'Courses',
            classes: ['courses-top'],
            href: 'courses'
         },
         {
            title: 'Openings',
            classes: ['openings-top'],
            href: 'lessons/learn-the-openings'
         },
         {
            title: 'Lesson Library',
            classes: ['lesson-library-top'],
            href: 'lessons/all-lessons'
         },
         {
            title: 'Analysis',
            classes: ['analysis-top'],
            href: 'analysis'
         },
         {
            title: 'Classroom',
            classes: ['classroom-top'],
            href: 'classroom'
         },
         {
            title: 'Insights',
            classes: ['insights-top'],
            href: 'insights'
         },
         {
            title: 'Endgames',
            classes: ['endgames-top'],
            href: 'endgames'
         },
         {
            title: 'Practice',
            classes: ['practise-top'],
            href: 'practice'
         },
         {
            title: 'Aimchess Training',
            classes: ['aimchess-training-top'],
            href: 'try'
         }
      ]
   },
   {
      title: 'Watch',
      classes: ['watch-top'],
      navPanelButtonLinks: [
         {
            title: 'Events',
            classes: ['events-top'],
            href: 'events'
         },
         {
            title: 'ChessTV',
            classes: ['chess-tv-top'],
            href: 'tv'
         },
         {
            title: 'Streamers',
            classes: ['streamer-top'],
            href: 'streamers'
         },
         {
            title: 'Play Now',
            classes: ['play-now-top'],
            href: 'play/online/watch'
         }
      ]
   },
   {
      title: 'News',
      classes: ['news-top'],
      navPanelButtonLinks: [
         {
            title: 'Chess Today',
            classes: ['chess-today-top'],
            href: 'today'
         },
         {
            title: 'News',
            classes: ['news-top'],
            href: 'news'
         },
         {
            title: 'Articles',
            classes: ['article-top'],
            href: 'articles'
         },
         {
            title: 'Top Players',
            classes: ['top-players-top'],
            href: 'players'
         },
         {
            title: 'Rankings',
            classes: ['ranking-top'],
            href: 'ratings'
         }
      ]
   },
   {
      title: 'Social',
      classes: ['social-top'],
      navPanelButtonLinks: [
         {
            title: 'Clubs',
            classes: ['club-top'],
            href: 'clubs'
         },
         {
            title: 'Forums',
            classes: ['forum-top'],
            href: 'forum'
         },
         {
            title: 'Members',
            classes: ['members-top'],
            href: 'members'
         },
         {
            title: 'Blogs',
            classes: ['blogs-top'],
            href: 'blogs'
         },
         {
            title: 'Coaches',
            classes: ['coaches-top'],
            href: 'coaches'
         }
      ]
   },
];
