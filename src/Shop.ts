console.clear();

const shopName: string = 'Bordel';
let currency: string = 'Rub';

interface Product {
  id: number;
  pavadinimas: string;
  isigijimoKaina: number;
  pardavimoKaina: number;
  kiekis: number;
  kategorija: string;
}

const inventory: Product[] = [
  { id: 1, pavadinimas: 'Capura', isigijimoKaina: 70, pardavimoKaina: 150, kiekis: 2, kategorija: 'Auksine' },
  { id: 2, pavadinimas: 'Ziedas', isigijimoKaina: 30, pardavimoKaina: 100, kiekis: 15, kategorija: 'Auksinis' },
  { id: 3, pavadinimas: 'Auskarai', isigijimoKaina: 20, pardavimoKaina: 60, kiekis: 10, kategorija: 'Auksiniai' },
  { id: 4, pavadinimas: 'Apyranke', isigijimoKaina: 20, pardavimoKaina: 70, kiekis: 7, kategorija: 'Auksine' },
];

function intro(): string {
  return `Sveiki atvykę į ${shopName}! Mes prekiaujame ${currency} valiuta.`;
}

function displayInventory(): void {
  console.log('Inventorius:');
  for (const product of inventory) {
    console.log(`ID: ${product.id}, Pavadinimas: ${product.pavadinimas}`);
    console.log(`Isigijimo kaina: ${product.isigijimoKaina} ${currency}`);
    console.log(`Pardavimo kaina: ${product.pardavimoKaina} ${currency}`);
    console.log(`Kiekis: ${product.kiekis}`);
    console.log(`Kategorija: ${product.kategorija}`);
    console.log('----------------------------');
  }
}
console.log(intro());
displayInventory();