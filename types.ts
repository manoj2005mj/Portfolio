export interface Project {
  title: string;
  date: string;
  tech: string[];
  description: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  type: 'Internship' | 'Leadership';
}

export interface Award {
  title: string;
  issuer?: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  score?: string;
}
