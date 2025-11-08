# contributEd Platform (Minimalist Stack)

## Stack
- **Backend**: Express.js (Node.js)
- **Frontend**: Vanilla HTML/CSS/JS
- **Database**: PostgreSQL
- **Cache**: Redis
- **SCM**: Gitea

## Quick Start

1. **Start infrastructure**
   ```bash
   docker-compose up -d
   ```

2. **Install API dependencies**
   ```bash
   cd api
   npm install
   ```

3. **Set up database**
   ```bash
   psql -h localhost -U contributed -d contributed_db -f ../database/schema.sql
   ```

4. **Start API**
   ```bash
   npm run dev
   ```

5. **Serve frontend**
   ```bash
   cd ../web
   python3 -m http.server 3000
   # or: npx serve .
   ```

6. **Open browser**
   ```
   http://localhost:3000
   ```

## Structure

```
contributed-platform/
├── api/              # Express API backend
├── web/              # Vanilla JS frontend
├── database/         # SQL schemas & migrations
├── infra/            # Docker configs
└── shared/           # Shared types & constants
```
