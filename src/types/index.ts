export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  desc: string;
  subServices: string;
  tech: string;
}

export interface ProjectItem {
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  tech: string[];
}
declare module "@studio-freight/lenis";
declare module "use-sound";