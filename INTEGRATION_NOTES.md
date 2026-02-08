# Backend Integration Notes

## Dodawanie Nowej Gry
1. Przez Prisma Studio (GUI):
   - npx prisma studio
   - Kliknij "Game" → "Add Record"
   - Wypełnij pola
   
2. Przez kod (seed script):
   - Edytuj `prisma/seed.ts`
   - Dodaj nowy `await prisma.game.create({ ... })`
   - `npx prisma db seed`

## Struktura Obrazów
- `/public/images/games/` - cover images gier
- `/public/images/articles/` - hero images artykułów
- `/public/images/characters/` - portrety postaci
- Format: WebP (fallback: JPG)
- Naming: slug + extension (np. `the-witcher-3.webp`)

## API Endpoints
- `GET /api/games` - lista (query params: ?limit=10&genre=RPG)
- `GET /api/games/[slug]` - szczegóły + relacje
- `GET /api/search?q=query` - wyszukiwarka (min 2 znaki)

## Przyszłe Rozszerzenia
- [ ] Paginacja (offset/cursor-based)
- [ ] Full-text search (PostgreSQL tsvector)
- [ ] Image upload (Supabase Storage)
- [ ] User-generated content (reviews, ratings)

## 4. Production Deployment (Vercel + Supabase)

### Environment Variables Setup

1.  **Go to Vercel Dashboard** -> Project -> **Settings** -> **Environment Variables**.
2.  Add the following variable:

    | Key | Value |
    |-----|-------|
    | `DATABASE_URL` | Connection string from Supabase (see below) |

### Getting the Correct Supabase Connection String

> [!IMPORTANT]
> For serverless environments (Vercel, Netlify), you MUST use the **Transaction Pooler** connection, NOT the "Direct connection".

1.  Go to **Supabase Dashboard** -> Your Project -> Click **"Connect"** button (top right).
2.  In the "Connection String" tab:
    -   Type: **URI**
    -   Method: **Transaction** (NOT "Direct connection"!)
3.  Copy the connection string. It should look like:
    ```
    postgresql://postgres.YOUR_PROJECT_REF:[YOUR-PASSWORD]@aws-0-REGION.pooler.supabase.com:6543/postgres
    ```
4.  **Add `?pgbouncer=true` at the end** to prevent "prepared statement already exists" errors:
    ```
    postgresql://postgres.xxx:password@aws-0-xxx.pooler.supabase.com:6543/postgres?pgbouncer=true
    ```

### Password Requirements

> [!WARNING]
> Avoid special characters like `&`, `+`, `#` in your database password. They can break the connection string parsing. Use alphanumeric passwords only.

### After Changes

After updating environment variables, you MUST **Redeploy**:
-   Go to **Deployments** tab -> Click three dots on latest deployment -> **Redeploy**.

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `Can't reach database server` | Using "Direct connection" instead of "Transaction Pooler" | Switch to Transaction Pooler URL |
| `prepared statement "s0" already exists` | Missing `?pgbouncer=true` | Add parameter to URL |
| `Invalid password` | Special characters in password | Reset password to alphanumeric only |

