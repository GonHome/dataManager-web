
export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type path = {
    text: string ;
    icon: string ;
    path: string ;
};

export enum TodosFilter {
  All = 'all',
  Completed = 'completed',
  Active = 'active',
}
