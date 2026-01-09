# 🚀 Portfolio Website - Prabhat Saini

A modern, responsive portfolio website built with Next.js 16, showcasing professional experience, projects, skills, and achievements. Features a sleek dark mode design, smooth animations, and a fully functional contact form with database integration.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.0.10-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5.22-2D3748?style=for-the-badge&logo=prisma)

## ✨ Features

### 🎨 **Modern Design**

- **Dark Mode Support**: Seamless theme switching with `next-themes`
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Premium UI Components**: Built with Radix UI and shadcn/ui

### 📄 **Portfolio Pages**

- **Home**: Hero section with personal introduction and call-to-actions
- **About**: Detailed background and professional journey
- **Skills**: Categorized technical skills with visual badges
- **Experience**: Professional work history with achievements
- **Projects**: Showcase of major projects with tech stack and links
- **Publications**: Research papers and technical publications
- **Certifications**: Professional certifications and courses
- **Contact**: Interactive form with email notifications

### 🔧 **Technical Features**

- **Database Integration**: PostgreSQL with Prisma ORM
- **Email Notifications**: Nodemailer integration for contact form
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Analytics Ready**: Vercel Analytics integration
- **Type-Safe**: Full TypeScript implementation
- **Centralized Data**: Modular data management in `data/` directory
- **Icon Library**: SVG and brand icons via `svgl-react` and Lucide

## 🛠️ Tech Stack

### **Frontend**

- **Framework**: [Next.js 16.0.10](https://nextjs.org/) (React 19.2.0)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.1.9](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12.23.26](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)

### **Backend**

- **Database**: [PostgreSQL](https://www.postgresql.org/) (Neon)
- **ORM**: [Prisma 5.22](https://www.prisma.io/)
- **Email**: [Nodemailer 7.0.12](https://nodemailer.com/)
- **Validation**: [Zod 3.25.76](https://zod.dev/)
- **Forms**: [React Hook Form 7.60](https://react-hook-form.com/)

### **Additional Libraries**

- **Icons**: Lucide React, SVGL React
- **Notifications**: Sonner (Toast notifications)
- **Charts**: Recharts (if analytics are needed)
- **Theming**: next-themes

## 📦 Installation

### **Prerequisites**

- Node.js 18.x or higher
- pnpm (recommended) or npm
- PostgreSQL database (Neon or local)

### **Setup Steps**

1. **Clone the repository**

```bash
git clone https://github.com/Prabhat070saini/portfolio-prabhat-saini.git
cd portfolio-prabhat-saini
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
```

3. **Configure environment variables**
   Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"

# Email Configuration (for contact form)
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-specific-password"
```

> **Note**: For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

4. **Setup the database**

```bash
# Generate Prisma Client
pnpm db:generate

# Push schema to database
pnpm db:push

# Or run migrations
pnpm db:migrate
```

5. **Run the development server**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 🚀 Deployment

### **Vercel (Recommended)**

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### **Build for Production**

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
.
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── api/                 # API routes (contact form)
│   ├── certifications/      # Certifications page
│   ├── contact/             # Contact page
│   ├── experience/          # Experience page
│   ├── projects/            # Projects page & detail pages
│   ├── publications/        # Publications page
│   ├── skills/              # Skills page
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
│
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── footer.tsx           # Footer component
│   ├── navbar.tsx           # Navigation bar
│   ├── icons.tsx            # Custom icon components
│   └── project-card.tsx     # Project card component
│
├── config/                  # Configuration files
│   └── site.ts              # Site metadata, navigation, social links
│
├── data/                    # Centralized content data
│   ├── about.ts             # About page content
│   ├── certifications.ts    # Certifications data
│   ├── experience.ts        # Work experience data
│   ├── home.ts              # Home page content
│   ├── projects.ts          # Projects data
│   ├── publications.ts      # Publications data
│   ├── skills.ts            # Skills data
│   └── ui-text.ts           # UI labels and text
│
├── lib/                     # Utility functions
│   ├── utils.ts             # Helper functions
│   └── email.ts             # Email service utilities
│
├── prisma/                  # Database schema
│   └── schema.prisma        # Prisma schema definition
│
├── public/                  # Static assets
│   ├── favicon.png          # Favicon
│   ├── infrastructure.png   # Project images
│   └── ...                  # Other static files
│
├── styles/                  # Additional styles
│   └── globals.css          # Global CSS
│
├── .env                     # Environment variables (local)
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Customization

### **Update Personal Information**

Edit `config/site.ts` to update:

- Name, title, description
- Navigation links
- Social media links
- Contact information

### **Update Content**

All content is centralized in the `data/` directory:

- `data/home.ts` - Home page content
- `data/about.ts` - About page content
- `data/skills.ts` - Skills list
- `data/experience.ts` - Work experience
- `data/projects.ts` - Projects portfolio
- `data/certifications.ts` - Certifications
- `data/publications.ts` - Publications

### **Modify Styling**

- Tailwind configuration: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Theme colors: Defined in `globals.css` using CSS variables

## 📧 Contact Form

The contact form is fully functional with:

- Form validation using Zod
- Database storage via Prisma
- Email notifications using Nodemailer
- Loading states and error handling

### **email Configuration**

The contact form sends notifications to the email specified in `EMAIL_USER`. Update the email template in `app/api/contact/route.ts` to customize the message format.

## 📊 Database Schema

```prisma
model ConnectionRequest {
  id             Int      @id @default(autoincrement())
  connectorEmail String
  connectorName  String
  MobileNo       String?
  message        String
  createdAt      DateTime @default(now())
}
```

### **Database Commands**

```bash
# View data in Prisma Studio
pnpm db:studio

# Push schema changes
pnpm db:push

# Create and apply migrations
pnpm db:migrate

# Generate Prisma Client
pnpm db:generate
```

## 🔒 Environment Variables

| Variable       | Description                             | Required |
| -------------- | --------------------------------------- | -------- |
| `DATABASE_URL` | PostgreSQL connection string            | Yes      |
| `EMAIL_USER`   | Email address for sending notifications | Yes      |
| `EMAIL_PASS`   | App-specific password for email         | Yes      |

## 📝 Available Scripts

| Command            | Description                    |
| ------------------ | ------------------------------ |
| `pnpm dev`         | Start development server       |
| `pnpm build`       | Build for production           |
| `pnpm start`       | Start production server        |
| `pnpm lint`        | Run ESLint                     |
| `pnpm db:push`     | Push Prisma schema to database |
| `pnpm db:generate` | Generate Prisma Client         |
| `pnpm db:studio`   | Open Prisma Studio             |
| `pnpm db:migrate`  | Run database migrations        |

## 🌟 Key Features Explained

### **Centralized Configuration**

All site-wide settings are managed in `config/site.ts`, making it easy to update navigation, social links, and metadata.

### **Type-Safe Data Management**

Each data file exports TypeScript interfaces, ensuring type safety across the application.

### **Responsive Design**

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Optimized for all screen sizes

### **Performance Optimizations**

- Server-side rendering (SSR)
- Image optimization (Next.js Image)
- Code splitting
- Lazy loading components

### **Accessibility**

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Prabhat Saini**

- GitHub: [@Prabhat070saini](https://github.com/Prabhat070saini)
- LinkedIn: [Prabhat Saini](https://www.linkedin.com/in/prabhat-saini22/)
- Email: Prabhat07saini@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Neon](https://neon.tech/) - Serverless PostgreSQL

---

<div align="center">

**⭐ If you find this project helpful, please give it a star!**

Made with ❤️ by [Prabhat Saini](https://github.com/Prabhat070saini)

</div>
