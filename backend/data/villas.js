const villas = [
  {
    id: 1,
    name: "The Mangrove Nest",
    slug: "mangrove-nest",
    description: "A luxurious villa nestled among beautiful mangroves, offering tranquility and natural beauty. Perfect for those seeking a peaceful retreat with stunning water views and abundant wildlife.",
    shortDescription: "Luxury villa with mangrove views and natural surroundings",
    location: "Mangrove Bay",
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      "Private Pool",
      "Mangrove Views",
      "Kayak Access",
      "Wildlife Watching",
      "Air Conditioning",
      "WiFi",
      "Full Kitchen",
      "BBQ Area",
      "Parking",
      "24/7 Security"
    ],
    pricing: {
      perNight: 350,
      weeklyDiscount: 10, // 10% discount for 7+ nights
      monthlyDiscount: 25, // 25% discount for 30+ nights
      cleaningFee: 75,
      securityDeposit: 500
    },
    images: [
      "/assets/mangrove-nest/exterior.jpg",
      "/assets/mangrove-nest/pool.jpg",
      "/assets/mangrove-nest/living-room.jpg",
      "/assets/mangrove-nest/bedroom.jpg",
      "/assets/mangrove-nest/mangrove-view.jpg"
    ],
    features: {
      pool: true,
      wifi: true,
      kitchen: true,
      parking: true,
      airConditioning: true,
      petFriendly: false,
      beachAccess: false,
      waterAccess: true
    },
    rules: [
      "Check-in: 3:00 PM",
      "Check-out: 11:00 AM",
      "No smoking inside",
      "No parties or events",
      "Quiet hours: 10 PM - 8 AM",
      "Maximum 8 guests"
    ],
    coordinates: {
      lat: 25.7617,
      lng: -80.1918
    }
  },
  {
    id: 2,
    name: "The Cozy Nest",
    slug: "cozy-nest",
    description: "A charming and intimate villa perfect for couples or small families. Features cozy interiors, beautiful garden views, and all the comforts of home in a peaceful setting.",
    shortDescription: "Intimate villa perfect for couples and small families",
    location: "Garden District",
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "Private Garden",
      "Hot Tub",
      "Fireplace",
      "Garden Views",
      "Air Conditioning",
      "WiFi",
      "Full Kitchen",
      "Outdoor Dining",
      "Parking",
      "Pet Friendly"
    ],
    pricing: {
      perNight: 220,
      weeklyDiscount: 15, // 15% discount for 7+ nights
      monthlyDiscount: 30, // 30% discount for 30+ nights
      cleaningFee: 50,
      securityDeposit: 300
    },
    images: [
      "/assets/cozy-nest/exterior.jpg",
      "/assets/cozy-nest/garden.jpg",
      "/assets/cozy-nest/living-room.jpg",
      "/assets/cozy-nest/bedroom.jpg",
      "/assets/cozy-nest/hot-tub.jpg"
    ],
    features: {
      pool: false,
      wifi: true,
      kitchen: true,
      parking: true,
      airConditioning: true,
      petFriendly: true,
      beachAccess: false,
      waterAccess: false,
      hotTub: true,
      fireplace: true
    },
    rules: [
      "Check-in: 3:00 PM",
      "Check-out: 11:00 AM",
      "No smoking inside",
      "Small pets allowed (additional fee)",
      "Quiet hours: 10 PM - 8 AM",
      "Maximum 4 guests"
    ],
    coordinates: {
      lat: 25.7717,
      lng: -80.1818
    }
  }
];

module.exports = villas;
