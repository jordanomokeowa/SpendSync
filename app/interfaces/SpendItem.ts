export default interface SpendItem {
    id: string;
    title: string;
    value: number;
    notes?: string;
    dueDate: Date;
    dateParent?: boolean;
}