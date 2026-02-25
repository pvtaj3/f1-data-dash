# 🏎️ F1 Data Dashboard - Bearman vs Ocon

A modern, interactive Formula 1 data visualization dashboard built with Next.js, featuring head-to-head comparison between Oliver Bearman and Esteban Ocon.

## ✨ Features

- 📊 **Interactive Charts**: Dynamic visualizations using Recharts
- 🎨 **F1 Styling**: Haas F1 team colors - clean white and red design
- 📱 **Mobile Responsive**: Fully optimized for all screen sizes
- ⚡ **Performance Metrics**: Lap times, sector analysis, and qualifying data
- 🏆 **Driver Comparison**: Side-by-side stats for Bearman and Ocon
- 🎭 **Smooth Animations**: Powered by Framer Motion
- ☀️ **Light Theme**: Clean, crisp light interface with Haas colors

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pvtaj3/f1-data-dash.git

# Navigate to project directory
cd f1-data-dash

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **UI**: React 18

## 🎯 Project Structure

```
f1-data-dash/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main dashboard page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── DriverCard.tsx    # Driver info card
│   │   ├── ComparisonChart.tsx
│   │   ├── PerformanceChart.tsx
│   │   ├── SectorAnalysis.tsx
│   │   └── StatsGrid.tsx     # Statistics grid
│   ├── data/
│   │   └── driverData.ts     # Mock F1 data
│   └── types/
│       └── driver.ts         # TypeScript types
├── public/                   # Static assets
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 📊 Data Sources

Currently using mock data for demonstration. In production, integrate with:
- Official F1 API
- Ergast Developer API
- OpenF1 API

## 🎨 Customization

Colors and themes can be customized in `tailwind.config.js`:

```javascript
colors: {
  'f1-red': '#E10600',
  'haas-white': '#FFFFFF',
  'haas-gray': '#B6BABD',
  // Add more team colors
}
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Formula 1® for inspiration
- Next.js team for the amazing framework
- Recharts for beautiful visualizations

---

⚡ Built with ❤️ for F1 fans
