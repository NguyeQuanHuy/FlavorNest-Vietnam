// ─────────────────────────────────────────────────────────────
//  src/lib/prisma.ts
//  FlavorNest Vietnam — Prisma Client với driver adapter (pg)
//  Prisma 7 yêu cầu adapter cho engine "client"
// ─────────────────────────────────────────────────────────────

import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
})

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
    })

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
}