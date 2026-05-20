# JourneySync

> Një platformë moderne dhe e plotë për planifikimin dhe menaxhimin e udhëtimeve, që ndihmon përdoruesit të zbulojnë destinacione, të ruajnë preferencat e tyre dhe të bashkëpunojnë në udhëtime me miqtë.

---

## Tabela e Përmbajtjes

- [Përshkrimi i Përgjithshëm](#përshkrimi-i-përgjithshëm)
- [Karakteristikat](#karakteristikat)
- [Teknologjia e Përdorur](#teknologjia-e-përdorur)
- [Kërkimet Paraprakale](#kërkimet-paraprakale)
- [Instalimi & Konfigurimi](#instalimi--konfigurimi)
- [Struktura e Projektit](#struktura-e-projektit)
- [Skriptat e Disponueshme](#skriptat-e-disponueshme)
- [API endpoints](#përfundimet-e-api-t)
- [Modelet e Bazës së Të Dhënave](#modelet-e-bazës-së-të-dhënave)
- [Autentifikimi](#autentifikimi)
- [Konfigurimi](#konfigurimi)
- [Kontributi](#kontributi)
- [Licenca](#licenca)
- [Kontakti & Suporti](#kontakti--suporti)

---

## Përshkrimi i Përgjithshëm

**JourneySync** është një platformë inovative e hartuar për planifikimin dhe menaxhimin e përvojave të udhëtimit. Ajo i mundëson përdoruesit të:

- Zbulojnë destinacione udhëtimi
- Ruajnë dhe organizojnë udhëtime të preferuara
- Krijojnë dhe menaxhojnë udhetime të detajuara
- Bashkëpunojnë me miqtë në udhëtime të përbashkëta
- Komunikim në kohë reale me shoqëruesit e udhëtimit
- Mbeten të informuar me njoftimet dhe ftesa për udhëtime
- Hyrje në panelet e administrimit për menaxhimin e udhëtimeve dhe përdoruesve

Platforma kombinon dizajn modern të ndërfaqes, ndërveprimin e lehtë dhe funksionalitetin e fuqishëm full-stack për ta bërë planifikimin e udhëtimit intuitiv dhe të këndshëm.

---

## Karakteristikat

### Karakteristikat e Përdoruesit
- **Autentifikimi i Përdoruesit**: Regjistrim i sigurt, hyrje dhe rivendosje fjalëkalimi me NextAuth
- **Menaxhimi i Profilit**: Përditësoni informacionin e profilit dhe preferencat e udhëtimit
- **Zbulimi i Udhëtimeve**: Shfletoni dhe eksploroni destinacione publike të udhëtimit
- **Favorite Trips**: Ruani udhëtime të preferuara për qasje të shpejtë
- **Menaxhimi i Udhëtimeve**: Krijoni, përditësoni dhe fshini udhëtime personale
- **Bashkëpunimi në Udhëtime**: Ftoni miqtë të bashkohen në udhëtime dhe menaxhoni itinerare të përbashkëta
- **Chat në Kohë Reale**: Mesazhe brenda udhëtimit për koordinimin me shoqëruesit
- **Njoftimet**: Paralajmërime në kohë reale për ftesa dhe përditësime të udhëtimeve
- **Connections(Friendships)**: Lidhuni me përdorues të tjerë dhe menaxhoni listat e miqve
- **Mesazhe të Drejtpërdrejtë**: Dërgoni mesazhe për përdoruesit e tjerë

### Karakteristikat e Administrimit
- **Përmbledhje e Statistikore e Sistemit**: Analitika dhe përmbledhje e sistemit
- **Menaxhimi i Përdoruesve**: Shikoni dhe menaxhoni të gjithë përdoruesit e platformës
- **Menaxhimi i Udhëtimeve**: Mbikëqyrni dhe menaxhoni të gjitha udhëtimet në platformë
- **Regjistri i Auditimit**: Gjurmoni aktivitetet e sistemit dhe veprimet e përdoruesit

---

##  Teknologjia e Përdorur

### Frontend
- **Framework**: [Next.js 16.2.1](https://nextjs.org) - Framework React me renderim nga ana e serverit
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Framework CSS me shërbime
- **Komponentët e Ndërfaqes**: [Lucide React](https://lucide.dev) - Biblioteka e ikonave të bukura
- **Menaxhimi i Formave**: [React Hook Form](https://react-hook-form.com) - Përpunim i performant i formave
- **Validimi**: [Zod](https://zod.dev) - Validimi i skemës me TypeScript të parë
- **Animacioni**: [Framer Motion](https://www.framer.com/motion) - Biblioteka e lëvizjeve e gatshme për prodhim
- **Siguria e Tipeve**: [TypeScript 5.9](https://www.typescriptlang.org)

### Backend
- **Runtime**: Node.js / Next.js
- **API routes**: API routes të Next.js
- **Autentifikimi**: [NextAuth.js 4.24](https://next-auth.js.org) - Autentifikimi fleksibël
- **Siguria e Fjalëkalimit**: [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Hashing i fjalëkalimit
- **Shërbime të Formave**: classnames, clsx - Bashkimi i shërbimeve CSS

### Baza e Të Dhënave
- **Baza e Të Dhënave**: [MongoDB](https://www.mongodb.com) - Baza e të dhënave NoSQL
- **ODM**: [Mongoose 9.3](https://mongoosejs.com) - Modelimi i objekteve të MongoDB
- **Lidhja**: Native Director i MongoDB

### Mjetet e Zhvillimit
- **Linting**: [ESLint 9](https://eslint.org)
- **PostCSS**: [PostCSS 4](https://postcss.org)
- **Menaxheri i Paketave**: npm/yarn/pnpm/bun

---

## Kërkimet Paraprakale

Para se të filloni, sigurohuni që keni instaluar sa vijon:

- **Node.js**: v18.0.0 ose më i lartë
- **npm** ose **yarn** ose **pnpm** ose **bun** (versioni më i ri)
- **MongoDB**: Instancë lokale ose llogari MongoDB Atlas
- **Git**: Për kontrollin e versionit

### Konfigurimi i Mjedisit
Do të duhen variablat e mjedisit të mëposhtëm:

```env
# Lidhja MongoDB
MONGODB_URI=mongodb://localhost:27017/journeysync
# ose për MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/journeysync

# Konfigurimi i NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=çelësi-juaj-sekret-këtu

# API Keys
# Shtoni API Keys të palës së tretë këtu
```

---

## Instalimi & Konfigurimi

### Hapi 1: Klononi Repositor-in

```bash
git clone https://github.com/yourusername/JourneySync.git
cd JourneySync/journey-sync
```

### Hapi 2: Instaloni Varësitë(Dependencies)

```bash
npm install
# ose
yarn install
# ose
pnpm install
# ose
bun install
```

### Hapi 3: Konfigurimi i Variablave të Mjedisit (Environment Variables)

Krijoni një skedar `.env.local` në direktoriumin `journey-sync`:

```bash
cp .env.example .env.local
```

Redaktoni `.env.local` me konfigurimin tuaj:

```env
MONGODB_URI=lidhja-juaj-koneksioni-mongodb
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=gjenero-një-çelës-të-rastësishtë-sekreti
```

Për të gjeneruar një secret key:
```bash
openssl rand -base64 32
```

### Hapi 4: Konfigurimi i MongoDB

**Opsioni A: MongoDB Lokal**
```bash
# Sigurohuni që MongoDB po bëhet run në portën 27017
mongod
```

**Opsioni B: MongoDB Atlas (Cloud)**
1. Krijoni një llogari falas në [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Krijoni një cluster
3. Merrni litarën e lidhjes tuaj
4. Përditësoni `MONGODB_URI` në `.env.local`

### Hapi 5: Inicializimi i Përdoruesit Admin (Opsional)

```bash
npm run seed-admin
# Kjo krijon një llogari admin në bazën e të dhënave
```

### Hapi 6: Ekzekutimi i Serverit të Zhvillimit

```bash
npm run dev
```

Hapni [http://localhost:3000](http://localhost:3000) për të parë aplikacionin.

---

##  Struktura e Projektit

```
journey-sync/
├── pages/                          # Faqet e Next.js dhe rrugët e API-t
│   ├── _app.tsx                   # Mbështetës aplikacioni
│   ├── _document.tsx              # Dokument custom
│   ├── index.tsx                  # Faqja kryesore
│   ├── about.tsx                  # Faqja rreth nesh
│   ├── contact.tsx                # Faqja kontakti
│   ├── login.tsx                  # Faqja e hyrjes
│   ├── signup.tsx                 # Faqja e regjistrim
│   ├── reset-password.tsx         # Faqja e rivendosjes së fjalëkalimit
│   ├── favorites.tsx              # Faqja e preferuarve
│   ├── trips.tsx                  # Faqja e udhëtimeve publike
│   ├── communitypage.tsx          # Faqja e komunitetit
│   ├── dashboard/                 # Tabela e kontrollit të përdoruesit
│   ├── admin/                     # Tabela e kontrollit të administrimit
│   └── api/                       # API Routes
│       ├── auth/                  # Auth endpoints
│       ├── dashboard/             # Dashboard endpoints
│       ├── trips/                 # Trips endpoints
│       ├── favorites/             # Favorites endpoints
│       ├── friends/               # Friends endpoints
│       ├── messages/              # Messages endpoints
│       └── notifications/         # Notifications endpoints
├── src/
│   ├── architecture/              # Modelet arkitekturale
│   │   ├── ssr/                  #Rendering services nga ana e serverit
│   │   ├── isr/                  # Incremental Static Regulation
│   │   └── srg/                  # Shërbime gjeneruese statike
│   ├── assets/                    # Asetet statike
│   │   ├── icons/                # Skedarët e ikonave
│   │   └── images/               # Skedarët e imazheve
│   ├── components/                # Komponentët React
│   │   ├── dashboard/            # Komponentët e tablosë
│   │   ├── layout/               # Komponentët e paletës
│   │   └── ui/                   # Komponentët e ndërfaqes të përdorshme
│   ├── context/                   # Furnizimet e kontekstit React
│   ├── hooks/                     # Hallkat e personalizuara React
│   ├── lib/                       # Funksionet e shërbimeve
│   ├── models/                    # Skemat e Mongoose
│   ├── types/                     # Përkufizimet e tipit TypeScript
│   └── styles/                    # Stilet globale
├── public/                        # Skedarët statike
├── .env.local                     # Variablat e mjedisit (krijoni këtë)
├── next.config.ts                 # Konfigurimi i Next.js
├── tsconfig.json                  # Konfigurimi i TypeScript
├── tailwind.config.js             # Konfigurimi i Tailwind CSS
├── postcss.config.mjs             # Konfigurimi i PostCSS
└── package.json                   # Varësitë e projektit
```

---

##  Skriptat e Disponueshme

Ekzekutoni këto komanda në direktoriumin `journey-sync`:

```bash
# Zhvillim
npm run dev              # Filloni serverin e zhvillimit në portën 3000

# Prodhim
npm run build            # Ndërtoni për prodhim
npm start               # Filloni serverin e prodhimit

# Cilësia e Kodit
npm run lint            # Ekzekutoni ESLint për të kontrolluar cilësinë e kodit

# Baza e Të Dhënave
npm run seed-admin      # Krijoni përdoruesin admin
npm run test-db         # Testoni lidhjen e bazës të dhënave
```

---

## Përfundimet e API-t

### Autentifikimi (`/api/auth/`)
- `POST /register` - Regjistro përdoruesin e ri
- `POST /reset-password` - Kërkoni rivendosje fjalëkalimi
- `GET /[...nextauth]` - Përfundimet e NextAuth (signin, callback, etj.)

### Udhëtimet (`/api/trips/`)
- `GET /public` - Merr të gjitha udhëtimet publike
- `GET /joined` - Merr udhëtimet e lidhura të përdoruesit
- `POST /invite` - Dërgoni ftesë për udhëtim
- `POST /accept-invite` - Pranoni ftesën për udhëtim
- `POST /join` - Bashkohuni në një udhëtim publik
- `POST /chat` - Dërgoni mesazh në chattin e udhëtimit
- `GET /dashboard` - Merr të dhënat e tablosë së udhëtimit
- `POST /cms` - Menaxhimi i përmbajtjes së udhëtimit

### Tabela e Kontrollit (`/api/dashboard/`)
- `GET /client/allTrips` - Merr të gjitha udhëtimet e përdoruesit
- `POST /client/addTrip` - Shtoni udhëtim të ri
- `POST /client/updateTrip` - Përditësoni detajet e udhëtimit
- `DELETE /client/deleteTrip` - Fshini një udhëtim
- `POST /client/updateProfile` - Përditësoni profilin e përdoruesit
- `POST /client/updateName` - Përditësoni emrin e përdoruesit
- `GET /client/getUser` - Merrni informacionin e përdoruesit
- `GET /client/myTrips` - Merr udhëtimet e përdoruesit

### Admin (`/api/dashboard/admin/`)
- `GET /overview` - Përmbledhje e tablosë administratore
- `GET /allUsers` - Merr të gjithë përdoruesit

### Përfundimet e Tjera
- `GET /api/favorites` - Udhëtimet e preferuara të përdoruesit
- `GET /api/friends` - Lista e miqve të përdoruesit
- `GET /api/messages` - Mesazhet e përdoruesit
- `GET /api/notifications` - Njoftimet e përdoruesit
- `POST /api/contact` - Dërgoni mesazh kontakti

---

## Modelet e Bazës së Të Dhënave

### Përdoruesi
```
- _id: ObjectId
- email: String (unik)
- name: String
- password: String (i përpunuar)
- profile: Object
- createdAt: Date
- updatedAt: Date
```

### Udhëtimi
```
- _id: ObjectId
- title: String
- description: String
- destination: String
- startDate: Date
- endDate: Date
- creator: ObjectId (User)
- participants: [ObjectId] (Users)
- itinerary: [Object]
- isPublic: Boolean
- createdAt: Date
- updatedAt: Date
```

### Udhëtimi i Preferuar
```
- _id: ObjectId
- user: ObjectId (User)
- trip: ObjectId (Trip)
- createdAt: Date
```

### Miqësia
```
- _id: ObjectId
- requester: ObjectId (User)
- recipient: ObjectId (User)
- status: String (pending, accepted, rejected)
- createdAt: Date
```

### Mesazhi i Drejtpërdrejtë
```
- _id: ObjectId
- sender: ObjectId (User)
- recipient: ObjectId (User)
- content: String
- createdAt: Date
```

### Njoftimi
```
- _id: ObjectId
- user: ObjectId (User)
- type: String
- content: String
- relatedTrip: ObjectId (Trip)
- isRead: Boolean
- createdAt: Date
```

### Regjistri i Auditimit
```
- _id: ObjectId
- user: ObjectId (User)
- action: String
- resource: String
- timestamp: Date
```

---

## Autentifikimi

JourneySync përdor **NextAuth.js** për autentifikimin:

- **Mbështetës Furnizuesish**: Autentifikimi me email/fjalëkalim
- **Siguria e Fjalëkalimit**: Fjalëkalime të përpunuar me bcryptjs
- **Menaxhimi i Seancës**: Trajtimi i sigurt i seancës
- **Rrugë të Mbrojtura**: Rrugë API dhe faqe të mbrojtura me kontrolle autentifikimi

### Rrjedha e Hyrjes
1. Përdoruesi dërgon kredenciale në faqën e hyrjes
2. NextAuth validizon kredencialet ndaj MongoDB
3. Seanca krijohet pas autentifikimit të suksesshëm
4. Përdoruesi ridrejtohet në tabela e kontrollit

### Rrjedha e Regjistrim
1. Përdoruesi dërgon formën e regjistrim
2. Validim i inputit me Zod
3. Përpunim i fjalëkalimit me bcryptjs
4. Dokument i përdoruesit i krijuar në MongoDB
5. Konfirmim dhe ridrejtim në hyrje

---

##  Konfigurimi

### Konfigurimi i Next.js (`next.config.ts`)
- Konfiguruar për optimizimin e prodhimit
- Optimizimi i imazheve i aktivizuar
- Rrugët e API-t të konfiguruara

### Tailwind CSS (`tailwind.config.js`)
- Konfigurimi i temës personalizuar
- Mbështetje e modalitetit të errët
- Paleta e zgjeruar e ngjyrave

### TypeScript (`tsconfig.json`)
- Kontroll i rreptë i tipit të aktivizuar
- Aliase të shtegut të konfiguruar për importime të pastra
- Mbështetje React 19

### ESLint (`eslint.config.mjs`)
- Rregullat e rekomanduara të Next.js
- Mbështetje TypeScript
- Praktikat më të mira React

---

## Kontributi

Kontributet janë të mirëpritura! Ja se si të filloni:

1. **Bëni clone repository-in**
   ```bash
   git clone https://github.com/yourusername/JourneySync.git
   ```

2. **Krijoni një branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Bëni ndryshimet tuaja**
   - Ndiqni stilin e kodit ekzistues
   - Shkruani mesazhe commit të kuptimtë
   - Testoni ndryshimet tuaja në nivel lokal

4. **Krijo commit ndryshimeve tuaja**
   ```bash
   git commit -m "Add: përshkrim i ndryshimeve tuaja"
   ```

5. **Push në branch-in tuaj**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Krijoni një Pull Request**
   - Përshkruani atë që keni ndryshuar
   - Referonco çdo probleme të lidhur
   - Sigurohuni që të gjitha testet kalojnë

### Udhëzimet e Stilit të Kodit
- Përdorni TypeScript për sigurinë e tipit
- Ndiqni praktikat më të mira React
- Përdorni emra të ndryshueshëm dhe funksionesh të kuptimtë
- Mbajni komponentët të fokusuar dhe të përdorshme
- Shkruani komente për logjikën komplekse

---

##  Licenca

Ky projekt është zhvilluar **ekskluzivisht për qëllime akademike** në kuadër të lëndës **Zhvillimi i Ueb-it në anën e Klientit**. Të gjithë jemi student të vitit të fundit të studimeve Bachelor në fakultetin e Shkencave Kompjuterike dhe Inxhinieri në **UBT (University for Bussines and Technology)** 

### Kufizuese të Licencës:
- **Jo për përdorim komercial**: Ky projekt nuk mund të përdoret për qëllime tregtare ose për të gjeneruar të ardhura
- **Vetëm për akademi**: Mund të përdoret vetëm për projektet edukuese, kërkimin akademik dhe qëllimet studimore
- **Qëllimet e nxënies**: Mund të përshtatet dhe të ndryshohet për projekte arsimore persona
- **Rishpërndarje**: Nuk lejohet rishpërndarja komerciale ose plagjiaturë pa pëlqimin shprehimor

### Termat e Plotë:
Për informacione të plota rreth licencës, shikoni skedarin [LICENSE](LICENSE).

**Përvojë**: Ky projekt u zhvillua si pjesë e një iniciative akademike edukuese dhe nuk është i licencuar për përdorim komercialisht.

---

##  Kontakti & Suporti

Për pyetje, reagime ose suport, ju lutemi kontaktohuni:

- **Problemet**: [GitHub Issues](https://github.com/yourusername/JourneySync/issues)
- **Email**: ertihoxha874@gmail.com

### Raportimi i Gabimeve
Nëse gjeni një gabim, ju lutemi krijoni një problem me:
- Përshkrim të gabimit
- Hapat për të riprodhuar
- Sjellja e pritur
- Sjellja aktuale
- Pamje të ekranit (nëse zbatueshëm)

### Kërkesat për Karakteristikat
Keni ide për një karakteristikë të re? Hapni një problem dhe përshkruani:
- Karakteristikën që do të dëshironit të shihni
- Pse do të ishte e dobishme
- Si duhet të funksionojë

---

## Mirënjohja

- Ndërtuar me [Next.js](https://nextjs.org)
- Stilizuar me [Tailwind CSS](https://tailwindcss.com)
- Fuqiz i [MongoDB](https://www.mongodb.com)
- Autentifikimi sipas [NextAuth.js](https://next-auth.js.org)
- Ikonat nga [Lucide React](https://lucide.dev)

---

## Shtesa: Diagrame te Arkitektures

### Si Funksionon Sistemi

```mermaid
flowchart TD
    U[Perdoruesi / Admini] --> FE[Frontend<br/>Next.js Pages]
    FE --> API[Backend<br/>API Routes]
    API --> JWT[JWT Auth<br/>Access Token + Refresh Token]
    API --> SES[NextAuth Session]
    JWT --> AUTHZ[Autorizimi i kerkesave]
    SES --> AUTHZ
    AUTHZ --> CORE[Logjika e sistemit]
    CORE --> TRIP[Menaxhimi i udhetimeve]
    CORE --> FRIEND[Miqesite dhe ftesat]
    CORE --> MSG[Mesazhet dhe Trip Chat]
    CORE --> NOTIF[Njoftimet]
    CORE --> ADMIN[Admin Dashboard]
    TRIP --> DB[(MongoDB)]
    FRIEND --> DB
    MSG --> DB
    NOTIF --> DB
    ADMIN --> DB

    classDef actor fill:#fef3c7,stroke:#d97706,color:#7c2d12,stroke-width:2px;
    classDef frontend fill:#dbeafe,stroke:#2563eb,color:#1e3a8a,stroke-width:2px;
    classDef backend fill:#dcfce7,stroke:#16a34a,color:#14532d,stroke-width:2px;
    classDef auth fill:#fae8ff,stroke:#a21caf,color:#701a75,stroke-width:2px;
    classDef domain fill:#ffe4e6,stroke:#e11d48,color:#881337,stroke-width:2px;
    classDef db fill:#e0f2fe,stroke:#0891b2,color:#164e63,stroke-width:2px;

    class U actor;
    class FE frontend;
    class API,AUTHZ backend;
    class JWT,SES auth;
    class CORE,TRIP,FRIEND,MSG,NOTIF,ADMIN domain;
    class DB db;
```

### Diagrami i Arkitektures se Sistemit

```mermaid
flowchart LR
    U[User / Admin] --> FE[Next.js Frontend Pages]
    FE --> API[Next.js API Routes]
    API --> AUTH[JWT Auth Layer<br/>Access Token + Refresh Token]
    API --> NA[NextAuth Session Layer]
    AUTH --> DB[(MongoDB)]
    NA --> DB
    API --> DB
    API --> MOD[Domain Models<br/>Trip, User, Friendship, Notification]
    MOD --> DB
```

### Rrjedha e Autentifikimit me JWT

```mermaid
sequenceDiagram
    participant P as Postman / Client
    participant A as /api/auth/login
    participant D as MongoDB
    participant R as /api/auth/refresh
    participant X as Protected API

    P->>A: POST email + password
    A->>D: Validate user + password
    D-->>A: User found
    A-->>P: accessToken + refreshToken
    P->>X: Authorization Bearer accessToken
    X-->>P: Protected resource
    P->>R: POST refreshToken
    R->>D: Verify stored refresh token
    R-->>P: New accessToken + new refreshToken
```

### ERD

```mermaid
erDiagram
    USER ||--o{ TRIP : creates
    USER ||--o{ FAVORITE_TRIP : saves
    USER ||--o{ NOTIFICATION : receives
    USER ||--o{ AUDIT_LOG : triggers
    USER ||--o{ CONTACT : sends
    USER ||--o{ FRIENDSHIP : requester
    USER ||--o{ FRIENDSHIP : recipient
    USER ||--o{ DIRECT_MESSAGE : participates
    TRIP ||--o{ FAVORITE_TRIP : bookmarked_in
    TRIP ||--o{ TRIP_MEETING : has
    TRIP ||--o{ FRIENDSHIP : context_trip

    USER {
      ObjectId _id
      string name
      string email
      string password
      string role
      array refreshTokens
    }

    TRIP {
      ObjectId _id
      string userEmail
      string name
      string destination
      string tripDay
      string hour
      number numberOfPeople
      string visibility
      string status
      string inviteCode
    }

    FAVORITE_TRIP {
      ObjectId _id
      string userEmail
      string tripId
    }

    FRIENDSHIP {
      ObjectId _id
      string requesterEmail
      string recipientEmail
      string tripId
      string status
    }

    DIRECT_MESSAGE {
      ObjectId _id
      string conversationKey
      array participants
      array messages
    }

    NOTIFICATION {
      ObjectId _id
      string userEmail
      string title
      string body
      string type
      boolean read
    }

    CONTACT {
      ObjectId _id
      string name
      string email
      string subject
      string message
    }

    AUDIT_LOG {
      ObjectId _id
      string actorEmail
      string action
      string entityType
      string entityId
      string summary
    }

    TRIP_MEETING {
      ObjectId _id
      string tripId
      string hostEmail
      boolean active
      array participants
      array signals
    }
```

---

## Shtesa: JWT Authentication Update

JourneySync tash i mbeshtet te dy format:

- `NextAuth session` per frontend-in ekzistues
- `JWT access token + refresh token` per testim me Postman dhe konsumim API

### Endpoint-et e reja te auth-it

- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `GET /api/auth/me`

### Environment variables te rekomanduara

```env
JWT_ACCESS_SECRET=access-secret-key
JWT_REFRESH_SECRET=refresh-secret-key
```

Nese keto dy variable nuk vendosen, kodi bie mbrapa te `NEXTAUTH_SECRET`, por per production rekomandohet qe secila me pas sekretin e vet.

---

## Shtesa: Si me i Testu API ne Postman

### 1. Environment ne Postman

```text
baseUrl=http://localhost:3000
accessToken=
refreshToken=
tripId=
friendEmail=
inviteCode=
notificationId=
friendshipId=
messageId=
```

### 2. Auth flow ne Postman

1. `POST {{baseUrl}}/api/auth/register`
```json
{
  "name": "Test User",
  "email": "testuser@example.com",
  "password": "secret123"
}
```
2. `POST {{baseUrl}}/api/auth/login`
```json
{
  "email": "testuser@example.com",
  "password": "secret123"
}
```
3. Ruaje `accessToken` dhe `refreshToken` nga response.
4. Per endpoint-et e mbrojtura perdor `Authorization: Bearer {{accessToken}}`.
5. `POST {{baseUrl}}/api/auth/refresh`
```json
{
  "refreshToken": "{{refreshToken}}"
}
```
6. `POST {{baseUrl}}/api/auth/logout`
```json
{
  "refreshToken": "{{refreshToken}}"
}
```

### 3. Auth endpoints

| Endpoint | Method | Auth | Body / Query | Test |
|---|---|---|---|---|
| `/api/auth/register` | POST | No | `name, email, password` | Krijon user |
| `/api/auth/login` | POST | No | `email, password` | Merr `accessToken` + `refreshToken` |
| `/api/auth/refresh` | POST | No | `refreshToken` | Rifreskon token-at |
| `/api/auth/logout` | POST | No | `refreshToken` | Mbyll sesionin JWT |
| `/api/auth/me` | GET | Bearer | - | Merr user-in aktual |
| `/api/auth/reset-password` | POST | No | `email, password` | Nderrim password |
| `/api/auth/[...nextauth]` | GET/POST | Session | internal | Per browser flow |

### 4. System endpoints

| Endpoint | Method | Auth | Body / Query | Test |
|---|---|---|---|---|
| `/api/hello` | GET | No | - | Route test |
| `/api/test-db` | GET | No | - | Kontrollon DB connection |
| `/api/seed-admin` | POST | No | - | Krijon admin default `admin@journeysyncsystem.com / AdminStrongPass2026` |

### 5. Dashboard client endpoints

| Endpoint | Method | Auth | Body / Query | Test |
|---|---|---|---|---|
| `/api/dashboard/client/getUser` | GET | Bearer | - | Merr profil + stats |
| `/api/dashboard/client/myTrips` | GET | Bearer | - | Merr trip-at e user-it |
| `/api/dashboard/client/allTrips` | GET | Bearer | - | Merr trip-at e dukshme |
| `/api/dashboard/client/addTrip` | POST | Bearer | `name, destination, tripDay, hour, description, numberOfPeople, visibility, status` | Krijon trip |
| `/api/dashboard/client/updateTrip` | PUT | Bearer | `id` + fusha opsionale | Perditeson trip |
| `/api/dashboard/client/deleteTrip?id={{tripId}}` | DELETE | Bearer | Query `id` | Fshin trip |
| `/api/dashboard/client/updateProfile` | PUT | Bearer | `name, bio, city, travelStyle, avatarColor` | Perditeson profil |
| `/api/dashboard/client/updateName` | PUT | Bearer | `name` | Nderrim emri |

Shembull `addTrip`
```json
{
  "name": "Prizren Weekend",
  "destination": "Prizren",
  "tripDay": "2026-06-20",
  "hour": "08:30",
  "description": "Road trip me shoqeri",
  "numberOfPeople": 4,
  "visibility": "Private",
  "status": "Planned"
}
```

Shembull `updateTrip`
```json
{
  "id": "{{tripId}}",
  "name": "Prizren Weekend Updated",
  "numberOfPeople": 5,
  "visibility": "Public",
  "status": "In Progress"
}
```

### 6. Dashboard admin endpoints

| Endpoint | Method | Auth | Body / Query | Test |
|---|---|---|---|---|
| `/api/dashboard/admin/overview` | GET | Bearer Admin | - | Merr statistika admin |
| `/api/dashboard/admin/allUsers` | GET | Bearer Admin | - | Merr users |
| `/api/contact` | GET | Bearer Admin | - | Merr kontaktet |

### 7. Trip endpoints

| Endpoint | Method | Auth | Body / Query | Test |
|---|---|---|---|---|
| `/api/trips/public` | GET | No | - | Merr trip-at publike |
| `/api/trips/joined` | GET | Bearer | - | Merr trip-at joined |
| `/api/trips/join` | POST | Bearer | `tripId` | Join trip publik |
| `/api/trips/invite` | POST | Bearer | `tripId`, opsionale `friendEmail` | Gjeneron invite ose e dergon te friend |
| `/api/trips/accept-invite` | POST | Bearer | `inviteCode` | Pranon ftese |
| `/api/trips/dashboard?id={{tripId}}` | GET | Bearer | Query `id` | Merr dashboard te trip-it |
| `/api/trips/cms` | PUT | Bearer | `tripId, dashboardTheme, dashboardContent` | Perditeson dashboard content |
| `/api/trips/chat` | POST | Bearer | `tripId, message` | Dergon mesazh ne chat |
| `/api/trips/meeting?tripId={{tripId}}` | GET | Bearer | Query `tripId` | Merr gjendjen e meeting |
| `/api/trips/meeting` | POST | Bearer | `tripId, action, targetEmail?, signalType?, payload?` | `start`, `join`, `leave`, `end`, `signal` |

Shembull `join`
```json
{
  "tripId": "{{tripId}}"
}
```

Shembull `invite`
```json
{
  "tripId": "{{tripId}}",
  "friendEmail": "{{friendEmail}}"
}
```

Shembull `accept-invite`
```json
{
  "inviteCode": "{{inviteCode}}"
}
```

Shembull `cms`
```json
{
  "tripId": "{{tripId}}",
  "dashboardTheme": "forest",
  "dashboardContent": {
    "heroTitle": "Prizren Weekend",
    "heroDescription": "Trip dashboard",
    "highlights": ["Prizren", "4 spots", "Planned"],
    "hostNotes": "Takimi ne 08:00"
  }
}
```

Shembull `chat`
```json
{
  "tripId": "{{tripId}}",
  "message": "A jeni gati per nisje?"
}
```

Shembull `meeting start`
```json
{
  "tripId": "{{tripId}}",
  "action": "start"
}
```

Shembull `meeting signal`
```json
{
  "tripId": "{{tripId}}",
  "action": "signal",
  "targetEmail": "{{friendEmail}}",
  "signalType": "offer",
  "payload": {
    "sdp": "example"
  }
}
```

### 8. Favorites, friends, messages, notifications, contact

| Endpoint | Method | Auth | Body / Query | Test |
|---|---|---|---|---|
| `/api/favorites` | GET | Bearer | - | Merr favorites |
| `/api/favorites` | POST | Bearer | `tripId` | Shton favorite |
| `/api/favorites?tripId={{tripId}}` | DELETE | Bearer | Query `tripId` | Largon favorite |
| `/api/friends` | GET | Bearer | - | Merr friendships |
| `/api/friends` | POST | Bearer | `friendEmail, tripId` | Dergon friend request |
| `/api/friends` | PATCH | Bearer | `friendshipId` | Pranon friend request |
| `/api/messages?friendEmail={{friendEmail}}` | GET | Bearer | Query `friendEmail` | Merr biseden |
| `/api/messages` | POST | Bearer | `friendEmail, text` | Dergon mesazh |
| `/api/messages` | PATCH | Bearer | `friendEmail, action, messageId?, emoji?` | `seen` ose `react` |
| `/api/notifications` | GET | Bearer | - | Merr njoftimet |
| `/api/notifications` | PATCH | Bearer | `notificationId` ose `readAll` | Mark as read |
| `/api/contact` | POST | No | `name, email, subject?, message` | Dergon kontakt form |

Shembull `friends POST`
```json
{
  "friendEmail": "{{friendEmail}}",
  "tripId": "{{tripId}}"
}
```

Shembull `friends PATCH`
```json
{
  "friendshipId": "{{friendshipId}}"
}
```

Shembull `messages POST`
```json
{
  "friendEmail": "{{friendEmail}}",
  "text": "Pershendetje, a je per udhetim kete vikend?"
}
```

Shembull `messages PATCH` per `seen`
```json
{
  "friendEmail": "{{friendEmail}}",
  "action": "seen"
}
```

Shembull `messages PATCH` per `react`
```json
{
  "friendEmail": "{{friendEmail}}",
  "action": "react",
  "messageId": "{{messageId}}",
  "emoji": "🔥"
}
```

Shembull `notifications PATCH`
```json
{
  "notificationId": "{{notificationId}}"
}
```

ose

```json
{
  "readAll": true
}
```

Shembull `contact POST`
```json
{
  "name": "Test Contact",
  "email": "contact@example.com",
  "subject": "Demo",
  "message": "Kjo eshte nje prove nga Postman."
}
```

### 9. Renditja e testimeve te rekomanduara

1. `GET /api/test-db`
2. `POST /api/auth/register`
3. `POST /api/auth/login`
4. `GET /api/auth/me`
5. `POST /api/dashboard/client/addTrip`
6. `GET /api/trips/public`
7. `POST /api/favorites`
8. `POST /api/trips/invite`
9. `POST /api/friends`
10. `POST /api/messages`
11. `GET /api/notifications`
12. `POST /api/auth/refresh`
13. `POST /api/auth/logout`

---

## Module Diagram

```mermaid
flowchart LR
    subgraph UI[Presentation Modules]
        PAGES[pages]
        COMPONENTS[src/components]
        CONTEXT[src/context]
        HOOKS[src/hooks]
    end

    subgraph APP[Application Modules]
        API[pages/api]
        ARCH[src/architecture]
        LIB[src/lib]
        TYPES[src/types]
    end

    subgraph DOMAIN[Domain Modules]
        MODELS[src/models]
    end

    DB[(MongoDB)]

    PAGES --> COMPONENTS
    PAGES --> CONTEXT
    PAGES --> HOOKS
    PAGES --> API
    COMPONENTS --> TYPES
    CONTEXT --> HOOKS
    CONTEXT --> TYPES
    HOOKS --> LIB
    HOOKS --> TYPES
    API --> LIB
    API --> MODELS
    API --> TYPES
    ARCH --> LIB
    ARCH --> TYPES
    LIB --> MODELS
    MODELS --> DB
```

## Use Case Diagram

```mermaid
flowchart LR
    USER[Actor: User]
    ADMIN[Actor: Admin]

    subgraph SYS[JourneySync System]
        UC1([Register])
        UC2([Login])
        UC3([Refresh Token])
        UC4([Manage Profile])
        UC5([Create Trip])
        UC6([Update or Delete Trip])
        UC7([Browse Public Trips])
        UC8([Join Trip])
        UC9([Invite Friend])
        UC10([Accept Invite])
        UC11([Manage Favorites])
        UC12([Send Friend Request])
        UC13([Send Direct Message])
        UC14([Use Trip Chat])
        UC15([View Notifications])
        UC16([Start or Join Meeting])
        UC17([Send Contact Message])
        UC18([View Admin Overview])
        UC19([View All Users])
        UC20([Review Contact Messages])
    end

    USER --> UC1
    USER --> UC2
    USER --> UC3
    USER --> UC4
    USER --> UC5
    USER --> UC6
    USER --> UC7
    USER --> UC8
    USER --> UC9
    USER --> UC10
    USER --> UC11
    USER --> UC12
    USER --> UC13
    USER --> UC14
    USER --> UC15
    USER --> UC16
    USER --> UC17

    ADMIN --> UC2
    ADMIN --> UC3
    ADMIN --> UC18
    ADMIN --> UC19
    ADMIN --> UC20
```

## Request Lifecycle Diagram

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant FE as Frontend
    participant API as API Route
    participant AUTH as JWT / NextAuth
    participant DB as MongoDB

    U->>FE: Open page / submit action
    FE->>API: HTTP request
    API->>AUTH: Validate session or bearer token
    AUTH-->>API: User identity + role
    API->>DB: Read / write domain data
    DB-->>API: Result
    API-->>FE: JSON response
    FE-->>U: Updated UI / feedback
```

## System Capability Matrix

| Area | User | Admin | Main API | Stored In |
|---|---|---|---|---|
| Authentication | Yes | Yes | `/api/auth/*` | `journeysync_users` |
| Profile Management | Yes | Limited | `/api/dashboard/client/updateProfile` | `journeysync_users` |
| Public Trip Discovery | Yes | Yes | `/api/trips/public` | `trips` |
| Personal Trip Management | Yes | Oversight | `/api/dashboard/client/*` | `trips` |
| Trip Invitations | Yes | Yes | `/api/trips/invite`, `/api/trips/accept-invite` | `trips`, `notifications` |
| Favorites | Yes | Yes | `/api/favorites` | `favorite_trips` |
| Friend Requests | Yes | Yes | `/api/friends` | `friendships` |
| Direct Messages | Yes | Yes | `/api/messages` | `direct_messages` |
| Trip Chat | Yes | Yes | `/api/trips/chat` | `trips` |
| Notifications | Yes | Yes | `/api/notifications` | `notifications` |
| Meeting Room | Yes | Yes | `/api/trips/meeting` | `trip_meetings` |
| Contact Messages | Yes | Review | `/api/contact` | `contacts` |
| Admin Analytics | No | Yes | `/api/dashboard/admin/overview` | multiple collections |
| User Oversight | No | Yes | `/api/dashboard/admin/allUsers` | `journeysync_users` |

## Quick Architecture Snapshot

| Layer | Responsibility | Main Folders | Example |
|---|---|---|---|
| Presentation Layer | UI, pages, navigation, forms | `pages`, `src/components` | `pages/login.tsx` |
| Client State Layer | session, hooks, context | `src/context`, `src/hooks` | `AppShellContext` |
| API Layer | request handling and validation | `pages/api` | `pages/api/trips/join.ts` |
| Auth Layer | login, access control, token refresh | `pages/api/auth`, `src/lib/auth.ts`, `src/lib/jwt.ts` | `login.ts`, `refresh.ts` |
| Domain Layer | business rules and models | `src/models`, `src/lib` | `Trip`, `Friendship`, `Notification` |
| Data Layer | persistence in MongoDB | `src/lib/db.ts` | `mongoose.connect(...)` |

<div align="center">

**JourneySync**

[kthehu në krye](#-journeysync)

</div>
