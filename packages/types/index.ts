export type Workspace = {
  name: string;
  version: string;
};

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
