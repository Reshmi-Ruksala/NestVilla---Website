const express = require('express');
const router = express.Router();

// Contact information
const contactInfo = {
  company: "NestVilla Rentals",
  email: "info@nestvilla.com",
  phone: "+1 (555) 123-4567",
  whatsapp: "+1 (555) 123-4567",
  address: {
    street: "123 Villa Lane",
    city: "Paradise Bay",
    state: "FL",
    zipCode: "33101",
    country: "USA"
  },
  socialMedia: {
    facebook: "https://facebook.com/nestvilla",
    instagram: "https://instagram.com/nestvilla",
    twitter: "https://twitter.com/nestvilla"
  },
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    weekends: "10:00 AM - 4:00 PM",
    timezone: "EST"
  }
};

// GET /api/contact - Get contact information
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: contactInfo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact information',
      error: error.message
    });
  }
});

// POST /api/contact/inquiry - Submit contact inquiry
router.post('/inquiry', (req, res) => {
  try {
    const { name, email, phone, message, villaInterest, checkIn, checkOut } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }
    
    // In a real application, you would save this to a database
    // and possibly send an email notification
    const inquiry = {
      id: Date.now(), // Simple ID generation
      name,
      email,
      phone: phone || null,
      message,
      villaInterest: villaInterest || null,
      checkIn: checkIn || null,
      checkOut: checkOut || null,
      submittedAt: new Date().toISOString(),
      status: 'new'
    };
    
    // Log the inquiry (in production, save to database)
    console.log('New inquiry received:', inquiry);
    
    res.json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
      data: {
        inquiryId: inquiry.id,
        submittedAt: inquiry.submittedAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting inquiry',
      error: error.message
    });
  }
});

module.exports = router;

