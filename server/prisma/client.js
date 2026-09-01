// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient({
//   datasource: {
//     url: process.env.DATABASE_URL,
//   },
// });

// export default prisma;

// -- Source - https://stackoverflow.com/a/79846333
// -- Posted by Zain Fareed
// -- Retrieved 2026-05-06, License - CC BY-SA 4.0

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

export default prisma;