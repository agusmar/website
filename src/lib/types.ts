export interface Settings {
  description: string;
  heroBackground: Image;
  heroWords: string[];
  logo: Image;
  menu: string[];
  socialnetworks: SocialNetworks;
  title: string;
}

export interface SocialNetworks {
  github: string;
  linkedin: string;
  twitch: string;
  twitter: string;
  youtube: string;
}

export interface Image {
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Event {
  title: string;
  slug: string;
  category: {
    name: string;
  };
  cover: {
    src: string;
    alt?: string;
  };
  date: string;
  description: string;
  recording?: string;
}

export interface Mentor {
  name: string;
  description: string;
  photo: {
    src: string;
    alt?: string;
  };
  isActive: boolean;
  web: string;
  calendly: string;
  linkedin: string;
  github: string;
  topics: [
    {
      _key: string;
      _ref: string;
    },
  ];
}

export interface CMYK {
  _id: string;
  name: string;
  description: string;
  color: string;
  image: {
    src: string;
  };
  github: string;
  demo: string;
}

export interface CMYKParticipant {
  discordUser: {
    _type: string;
    _ref: string;
  };
  participationLevel: string;
  aboutParticipant: string;
  previousKnowledge: string;
  experience: string;
  timeAvailability: string;
  otherQuestions: string;
  status: string;
}

export interface Topic {
  _id: string;
  title: string;
  description: string;
}

export interface Author {
  name: string;
  picture: string;
}

export interface Post {
  _id: string;
  title: string;
  author: Author;
  slug: {
    current: string;
  };
  coverImage: string;
  date: string;
  excerpt: string;
  content: any;
}

export interface Doc {
  title: string;
  slug: string;
  body: string;
}

export interface FeaturedCards {
  icon: string;
  title: string;
  description: string;
  color: string;
  btnText: string;
  link: string;
}
export interface ReactGroup {
  _id: string;
  _type: string;
  name: string;
  slug: {
    current: string;
  };
  topic: string;
  studyMaterial: string;
  teamCaptain: {
    _type: string;
    _ref: string;
  };
  participants?: string;
  meetings: string;
  plan: string;
  startDate: string;
  status: string;
}
export interface Person {
  _id: string;
  username: {
    current: string;
  };
  firstName?: string;
  lastName?: string;
  emai?: string;
  linkedin?: string;
  portfolio?: string;
  github?: string;
}

export type Profile = {
  slug: string;
  name: string;
  coverImage: string;
  role: string;
  email: string;
  availableForWork: boolean;
  socialMedia: {
    [name: string]: string;
  };
  ogImage: {
    url: string;
  };
  content: string;
  stack: string[];
};
