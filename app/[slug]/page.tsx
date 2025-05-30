import LandingTemplateA from '@/components/LandingTemplateA';
import LandingTemplateB from '@/components/LandingTemplateB';

const adGroupContent = {
  "gingivitis": {
    hero: {
      headline: "Stop Gingivitis in Its Tracks",
      subheadline: "Effective solutions for healthier gums.",
      videoUrl: "https://yourcdn.com/videos/gingivitis.mp4",
      price: "$19.99",
      badges: ["Dentist Recommended", "Money-Back Guarantee"],
      cta: "Get Relief Now"
    },
    // ... other section content objects (badges, reviews, etc.)
    // Example:
    reviews: {
      testimonials: [
        { name: "Alex", text: "My gums have never felt better!", stars: 5 }
      ]
    },
    // Fill in the rest of your sections as needed
  },
  "bleeding-gums": {
    hero: {
      headline: "End Bleeding Gums Today",
      subheadline: "Safe and proven treatment for sensitive gums.",
      videoUrl: "https://yourcdn.com/videos/bleeding-gums.mp4",
      price: "$24.99",
      badges: ["Clinically Tested", "Safe Ingredients"],
      cta: "Try It Risk-Free"
    },
    reviews: {
      testimonials: [
        { name: "Jamie", text: "No more blood when I brush!", stars: 5 }
      ]
    },
    // Fill in the rest of your sections as needed
  }
};

export default function LandingPage({ params }) {
  // params.slug: e.g., "gingivitis-a" or "bleeding-gums-b"
  const [adGroup, variant] = (() => {
    const parts = params.slug.split('-');
    if (parts.length > 2) {
      // Handles cases like "something-with-hyphen-a"
      return [parts.slice(0, -1).join('-'), parts[parts.length - 1]];
    } else {
      return parts;
    }
  })();

  // Get the content for this ad group
  const content = adGroupContent[adGroup];

  if (!content) {
    return <div>Sorry, this landing page does not exist.</div>;
  }

  // Render the appropriate template
  if (variant === 'a') {
    return <LandingTemplateA {...content} />;
  } else if (variant === 'b') {
    return <LandingTemplateB {...content} />;
  } else {
    return <div>Sorry, this landing page variant does not exist.</div>;
  }
}
