export interface Link {
  id: number;
  href: string;
  title: string;
}

export interface Experience {
  start: string;
  end: string;
  title: string;
  company: Company;
  keyLearnings: Array<string>;
}

export interface Company {
  name: string;
  link: string;
}
