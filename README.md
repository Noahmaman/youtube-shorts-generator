# YouTube Shorts Generator

A modern web application that helps you generate engaging YouTube Shorts from your favorite YouTube videos. Built with Next.js and designed for Vercel deployment.

## Features

- 🎥 Convert YouTube videos to Shorts
- 🤖 AI-powered content analysis
- 📊 Analytics dashboard
- 🎨 Custom templates
- ⚡ Fast processing

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma (for database)
- NextAuth.js (for authentication)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/youtube-shorts-generator.git
cd youtube-shorts-generator
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="your-database-url"
NEXTAUTH_SECRET="your-nextauth-secret"
YOUTUBE_API_KEY="your-youtube-api-key"
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 