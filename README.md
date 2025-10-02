# NestVilla - Luxury Villa Rental Website

A modern, responsive villa rental website built with Node.js backend and React frontend, showcasing two beautiful villas: **The Mangrove Nest** and **The Cozy Nest**.

## 🏖️ Features

- **Villa Showcase**: Beautiful galleries and detailed information for each villa
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Gallery**: Lightbox image viewer with navigation
- **Contact System**: Inquiry form with villa-specific booking requests
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **RESTful API**: Well-structured backend with organized endpoints

## 🏗️ Project Structure

```
NestVilla/
├── backend/                 # Node.js Express server
│   ├── data/               # Villa data and mock content
│   ├── routes/             # API route handlers
│   ├── uploads/            # Static file uploads
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service layer
│   │   └── utils/          # Utility functions
│   └── package.json        # Frontend dependencies
├── package.json            # Root package.json with scripts
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd NestVilla
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

This will start:
- Backend server on `http://localhost:5000`
- Frontend development server on `http://localhost:3001`

The frontend will automatically proxy API requests to the backend.

### Alternative: Start servers individually

**Backend only:**
```bash
cd backend
npm start          # Production mode
# or
npm run dev        # Development mode with nodemon
```

**Frontend only:**
```bash
cd frontend
npm start
```

## 🏠 Villa Information

### The Mangrove Nest
- **Location**: Mangrove Bay
- **Capacity**: Up to 8 guests
- **Bedrooms**: 4
- **Bathrooms**: 3
- **Price**: $350/night
- **Features**: Private Pool, Mangrove Views, Kayak Access, Wildlife Watching

### The Cozy Nest
- **Location**: Garden District
- **Capacity**: Up to 4 guests
- **Bedrooms**: 2
- **Bathrooms**: 2
- **Price**: $220/night
- **Features**: Private Garden, Hot Tub, Fireplace, Pet Friendly

## 🛠️ API Endpoints

### Villa Endpoints
- `GET /api/villas` - Get all villas
- `GET /api/villas/:slug` - Get villa by slug
- `GET /api/villas/:slug/pricing` - Get villa pricing
- `GET /api/villas/:slug/amenities` - Get villa amenities

### Contact Endpoints
- `GET /api/contact` - Get contact information
- `POST /api/contact/inquiry` - Submit contact inquiry

### Health Check
- `GET /api/health` - Server health check

## 📱 Pages & Components

### Pages
- **Home** (`/`) - Villa showcase and features
- **Villa Details** (`/villa/:slug`) - Detailed villa information
- **Gallery** (`/gallery`) - Photo gallery with filtering
- **Contact** (`/contact`) - Contact form and information

### Components
- **Header** - Navigation with responsive menu
- **Footer** - Contact info and links
- **Villa Cards** - Reusable villa display components
- **Image Gallery** - Interactive photo viewer
- **Contact Form** - Inquiry submission form

## 🎨 Styling & Design

- **CSS Framework**: Custom CSS with modern design principles
- **Color Scheme**: Professional blue and gray palette
- **Typography**: Clean, readable fonts
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions and hover effects

## 🔧 Development

### Backend Development
The backend uses Express.js with:
- CORS enabled for frontend communication
- Static file serving for images
- Structured route organization
- Error handling middleware

### Frontend Development
The frontend uses React with:
- React Router for navigation
- Axios for API communication
- Component-based architecture
- CSS modules for styling

### Adding New Villas
1. Add villa data to `backend/data/villas.js`
2. Add villa images to `backend/uploads/`
3. Update navigation in `frontend/src/components/Header.js`

## 📦 Dependencies

### Backend
- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variables
- **multer**: File upload handling
- **nodemon**: Development auto-restart

### Frontend
- **react**: UI library
- **react-router-dom**: Client-side routing
- **axios**: HTTP client
- **react-scripts**: Build tools

## 🚀 Deployment

### Backend Deployment
1. Set environment variables:
   ```
   PORT=5000
   NODE_ENV=production
   ```
2. Build and start:
   ```bash
   cd backend
   npm start
   ```

### Frontend Deployment
1. Build the production version:
   ```bash
   cd frontend
   npm run build
   ```
2. Serve the `build` folder with a static server

### Full Stack Deployment
For platforms like Heroku, Vercel, or DigitalOcean:
1. Configure build scripts in root `package.json`
2. Set up environment variables
3. Deploy both frontend and backend

## 🔒 Environment Variables

Create a `.env` file in the backend directory:
```env
PORT=5000
NODE_ENV=development

# Future database configuration
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=nestvilla
# DB_USER=your_username
# DB_PASS=your_password

# Future email configuration
# EMAIL_HOST=smtp.gmail.com
# EMAIL_PORT=587
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASS=your_app_password
```

## 📞 Contact Information

- **Email**: info@nestvilla.com
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Villa Lane, Paradise Bay, FL 33101

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Villa photos from placeholder services
- Icons from Font Awesome
- Design inspiration from modern hospitality websites

---

**Built with ❤️ for luxury villa rentals**
