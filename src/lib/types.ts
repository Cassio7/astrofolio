export type ExperiencePosition = {
  title: string;
  year: string;
  description: string;
  skills: string[];
};

export type Experience = {
  company: string;
  positions: ExperiencePosition[];
};

export type Education = {
  institution: string;
  location?: string;
  title: string;
  course: string;
  titleThesis?: string;
  skills: string[];
};
