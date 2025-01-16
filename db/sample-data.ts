import { hashSync } from 'bcrypt-ts-edge';

const sampleData = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password : hashSync('123456', 10),
      role: 'admin'
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password : hashSync('123456', 10),
      role: 'user'
    }
  ],
  products: [
    {
      name: 'Cryptosteel Cassette Solo',
      slug: 'cryptosteel-cassette-solo',
      category: "Seed Backup",
      description: 'The Original 24-Word Seed Phrase Backup Solution',
      images: [
        '/images/sample-products/p1-1.jpg',
        '/images/sample-products/p1-2.jpg',
      ],
      price: 187.99,
      brand: 'Cryptosteel',
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: true,
      banner: 'banner-1.jpg',
    },
    {
      name: 'Cryptosteel Capsule Solo',
      slug: 'cryptosteel-capsule-solo',
      category: "Seed Backup",
      description: 'Stainless Steel Password & Seed Phrase Storage Solution',
      images: [
        '/images/sample-products/p2-1.jpg',
        '/images/sample-products/p2-2.jpg',
      ],
      price: 99.9,
      brand: 'Cryptosteel',
      rating: 4.2,
      numReviews: 8,
      stock: 10,
      isFeatured: true,
      banner: 'banner-2.jpg',
    },
    {
      name: 'SEEDPLATE Backup',
      slug: 'seedplate-backup',
      category: "Seed Backup",
      description: 'A better bitcoin seed metal backup plate',
      images: [
        '/images/sample-products/p3-1.jpg',
        '/images/sample-products/p3-2.jpg',
      ],
      price: 49.95,
      brand: 'SEEDPLATE',
      rating: 4.7,
      numReviews: 3,
      stock: 0,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Ledger Flex',
      slug: 'ledger-flex',
      category: "Hardware Wallet",
      description: 'Ledger’s next-generation crypto wallet with a secure E Ink touchscreen',
      images: [
        '/images/sample-products/p4-1.jpg',
        '/images/sample-products/p4-2.jpg',
      ],
      price: 249.95,
      brand: 'Ledger',
      rating: 3.6,
      numReviews: 5,
      stock: 10,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Ledger Nano S Plus',
      slug: 'ledger-nano-s-plus',
      category: "Hardware Wallet",
      description: 'Protect and manage your crypto and NFTs with the Ledger Nano S Plus',
      images: [
        '/images/sample-products/p5-1.jpg',
        '/images/sample-products/p5-2.jpg',
      ],
      price: 79.99,
      brand: 'Ledger',
      rating: 4.7,
      numReviews: 18,
      stock: 6,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'The Bitcoin Standard',
      slug: 'the-bitcoin-standard',
      category: "Books",
      description: 'Saifedean Ammous analyzes Bitcoin that make it a solid currency',
      images: [
        '/images/sample-products/p6-1.jpg',
        '/images/sample-products/p6-2.jpg',
      ],
      price: 29.99,
      brand: 'Wiley',
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: true,
      banner: null,
    },
  ],
};

export default sampleData;
