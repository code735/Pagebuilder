export interface htmlTagObj {
  id: number;
  rootElement: string;
  styles: styles[];
  childElements: htmlTagObj[]
}

export interface styles {
  [key: string]: string;
}