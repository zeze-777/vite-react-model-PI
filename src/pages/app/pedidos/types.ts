export interface OrderItem {
    id?: number;
    item: string;
    price: number;
    quantity: number;
    subtotal: number;
  }
  
export interface TableData {
    id: number;
    waiter: string;
    table: string;
    order: OrderItem[];
    createdAt: Date;
    status: string;
    total: number;
  }