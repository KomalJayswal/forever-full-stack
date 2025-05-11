// Import React library which is required for creating React components
import React from 'react';

// Define a functional component called DiscountBanner
// This component creates a static banner showing discount information
const DiscountBanner = () => {
  return (
    // Main container div with background color and padding
    // bg-[#d1e2d7]: sets the background color to match the original
    // py-1: adds padding top and bottom
    // text-center: centers the text
    // mt-[32px]: adds margin top to account for fixed TopBanner height
    <div className="bg-[#d1e2d7] py-1 mt-[32px]">
      {/* Container for the discount message */}
      <div className="container mx-auto">
        {/* List container */}
        <ul>
          {/* List item with discount message */}
          {/* text-xs: makes text extra small */}
          {/* font-medium: sets font weight to 500 */}
          {/* text-center: centers the text */}
          <li className="text-xs font-medium text-center">
            5% additional discount on all prepaid orders
          </li>
        </ul>
      </div>
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default DiscountBanner; 