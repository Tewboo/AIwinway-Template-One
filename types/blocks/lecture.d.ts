export interface LectureSection {
  title: string;
  content: string;
  order: number;
}

export interface Lecture {
  disabled?: boolean;
  name?: string;
  title: string;
  description?: string;
  sections: LectureSection[];
}