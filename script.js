//factory function jest to funkcja która zwrac obiekt
const list = () => {
  const items = []

  return {
    addItem : (item) => items.push(item),
    getItems : () => items,
  }
}

const list2 = list();

list2.addItem('Create AI');
list2.getItems(); // We have to items by invoke this function
list2.items //undefined - encalpsulation or hermetization code by closures - we cannot achive that by class
list2.addItem = ''

