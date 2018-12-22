export class ListaService {
    
  private lista: String[] = [];
  
    addItem(name: string) {
      this.lista.push(new String(name));
      console.log(this.lista);
    }
  
    addItems(items: String[]) {
      this.lista.push(...items);
    }
  
    getItems() {
      return this.lista.slice();
    }
  
    removeItem(index: number) {
      this.lista.splice(index, 1);
    }
  }