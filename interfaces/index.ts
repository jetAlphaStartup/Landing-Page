export interface Testimonial {
  profilePicture: string;
  text: string;
  rate: number;
  name: string;
}

export interface ProjectStep {
  subtitle: string;
  description: string;
  image: string;
  testimonial: Testimonial;
}

export interface ProjectUser {
  profilePicture: string;
  name: string;
}

export interface ProjectLink {
  url: string;
  linkedIn: string;
}

export interface Project {
  id: string;
  name: string;
  title: string;
  color: string;
  users: ProjectUser[];
  usersCount: number;

  steps: ProjectStep[];
  links: ProjectLink;
  background: React.ReactNode;
}
