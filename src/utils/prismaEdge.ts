// ts-ignore 7017 is used to ignore the error that the global object is not
// defined in the global scope. This is because the global object is only
// defined in the global scope in Node.js and not in the browser.

import { PrismaClient } from "@prisma/client/edge";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prismaEdge: PrismaClient };

export const prismaEdge = globalForPrisma.prismaEdge || new PrismaClient();

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prismaEdge = prismaEdge;

export default prismaEdge;
