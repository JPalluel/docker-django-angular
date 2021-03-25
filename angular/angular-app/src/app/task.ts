// an interface just defines the properties of an object and their type


export interface Task {
  id: number;
  title: string;
  content: string;
  created_on: Date;
  due_date: Date;
  isEditable:Boolean;
}