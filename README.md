---

## 📋 **README.md - English Portfolio Showcase**

```markdown
<div align="center">
  <h1>🍺 Browar Kwadrat</h1>
  <p>Professional home brewery showcase with QR-enabled beer descriptions</p>

[![Live Website](https://img.shields.io/badge/Live-browarkwadrat.pl-success?style=for-the-badge)](http://browarkwadrat.pl)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![SCSS](https://img.shields.io/badge/SCSS-Modules-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com/)
</div>

---

# Browar Kwadrat - Home Brewery Portfolio

## 🍺 Project Status: **✅ PRODUCTION READY**

**🚀 Live Website:** [browarkwadrat.pl](http://browarkwadrat.pl) *(when deployed)*  
**📍 Location:** Częstochowa, Poland  
**🎯 Purpose:** QR-enabled beer descriptions for home brewery labels

<div align="center">
  <table>
    <tr>
      <td align="center" width="50%">
        <strong>🍺 Craft Beer Showcase</strong>
        <br/>
        <em>Professional home brewery presentation</em>
        <br/><br/>
        <strong>📱 QR Integration:</strong>
        <br/>
        Physical Label → QR Scan → Beer Page → Full Details
      </td>
      <td align="center" width="50%">
        <strong>🎯 Featured Beers:</strong>
        <br/>
        • **Domówka** (#93) - Old School Pale Ale
        <br/>
        • **Wolnosypane** (#94) - Polish Pale Ale  
        <br/>
        • **50 metrów dalej jest taniej** (#95) - Polish Pale Ale
        <br/>
        <em>+ more batches in development</em>
      </td>
    </tr>
  </table>

**🏷️ Physical QR Labels** | **📱 Mobile-First Design** | **🎨 Professional UI** | **📋 Complete Recipes**
</div>

---

## 🚀 Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** SCSS Modules with design system variables
- **Icons:** React Icons (FontAwesome style)
- **Routing:** React Router DOM v7 with Layout pattern
- **Language:** JavaScript/JSX (no TypeScript complexity)
- **Architecture:** Component composition with unified Footer
- **Deployment:** Netlify ready with environment variables

## ✨ Key Features

### 🏗️ **Production System**
- [x] **QR-enabled beer pages** - Each beer has unique URL (e.g., `/domowka`)
- [x] **Mobile-optimized design** - Perfect for QR scanning from bottle labels
- [x] **Complete beer database** - Malts, hops, yeast, brewing parameters
- [x] **Professional home page** - Hero section + beer grid + about CTA
- [x] **Unified footer system** - Consistent social links across all pages
- [x] **Responsive layout** - Desktop and mobile experience

### 🍺 **Beer Information System**
- [x] **Detailed descriptions** - Story and brewing notes for each beer
- [x] **Complete ingredient lists** - Malts, hops, yeast, adjuncts with origins
- [x] **Brewing parameters** - Extract (°BLG), alcohol (% ABV), bitterness (IBU)
- [x] **Brewfather integration** - Direct links to full recipe details
- [x] **Batch tracking** - Each beer has unique batch number (#93, #94, #95)
- [x] **Style classification** - Beer style information (Pale Ale, etc.)

### 🎨 **Design System**
- [x] **Modern SCSS architecture** - Variables, modules, component-scoped styling
- [x] **Beautiful animations** - Hover effects, transforms, smooth transitions
- [x] **Glass morphism effects** - backdrop-filter blur with gradient borders
- [x] **Typography system** - Consistent font sizes and weights
- [x] **Color palette** - Beer-inspired golden accent (#FFBD59) with dark theme
- [x] **Card-based layout** - Unified card pattern across components

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Quick Start
```bash
# Clone repository
git clone https://github.com/yourusername/browar-kwadrat.git
cd browar-kwadrat

# Install dependencies
npm install

# Start development server
npm run dev  # Vite dev server on http://localhost:5173

# Build for production
npm run build