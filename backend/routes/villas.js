const express = require('express');
const router = express.Router();
const villas = require('../data/villas');

// GET /api/villas - Get all villas
router.get('/', (req, res) => {
  try {
    // Return basic villa information for listing page
    const villaList = villas.map(villa => ({
      id: villa.id,
      name: villa.name,
      slug: villa.slug,
      shortDescription: villa.shortDescription,
      location: villa.location,
      maxGuests: villa.maxGuests,
      bedrooms: villa.bedrooms,
      bathrooms: villa.bathrooms,
      pricing: villa.pricing,
      images: villa.images.slice(0, 1), // Only first image for listing
      features: villa.features
    }));
    
    res.json({
      success: true,
      data: villaList
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching villas',
      error: error.message
    });
  }
});

// GET /api/villas/:slug - Get villa by slug
router.get('/:slug', (req, res) => {
  try {
    const { slug } = req.params;
    const villa = villas.find(v => v.slug === slug);
    
    if (!villa) {
      return res.status(404).json({
        success: false,
        message: 'Villa not found'
      });
    }
    
    res.json({
      success: true,
      data: villa
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching villa details',
      error: error.message
    });
  }
});

// GET /api/villas/:slug/pricing - Get pricing for a villa
router.get('/:slug/pricing', (req, res) => {
  try {
    const { slug } = req.params;
    const villa = villas.find(v => v.slug === slug);
    
    if (!villa) {
      return res.status(404).json({
        success: false,
        message: 'Villa not found'
      });
    }
    
    res.json({
      success: true,
      data: {
        name: villa.name,
        pricing: villa.pricing
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching pricing information',
      error: error.message
    });
  }
});

// GET /api/villas/:slug/amenities - Get amenities for a villa
router.get('/:slug/amenities', (req, res) => {
  try {
    const { slug } = req.params;
    const villa = villas.find(v => v.slug === slug);
    
    if (!villa) {
      return res.status(404).json({
        success: false,
        message: 'Villa not found'
      });
    }
    
    res.json({
      success: true,
      data: {
        name: villa.name,
        amenities: villa.amenities,
        features: villa.features
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching amenities',
      error: error.message
    });
  }
});

module.exports = router;
