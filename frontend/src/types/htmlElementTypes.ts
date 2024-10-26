export interface htmlTagObj {
  id: number;
  rootElement: string;
  styles: styles[];
  childElements: htmlTagObj[]
}

export interface styles {
  [key: string]: string;
}

export interface initialState {
  allHtmlTags: htmlTagObj[],
  switchControl: string,
  currentSelectedTag: htmlTagObj | null
}