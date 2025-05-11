// Import React library which is required for creating React components
import React from 'react';

// Define a functional component called TopBanner
// This component creates a scrolling banner showing product information
const TopBanner = () => {
  // Define an array of banner items, each containing product information
  // Each item has an 'up' object for the main text and a 'down' object for the subtext
  // The 'up' object contains the product name and number of orders
  // The 'down' object contains additional product benefits
  const bannerItems = [
    {
      up: { text: "Shea butter mask", orders: "60000+" },
      down: { text: "99% less split ends" }
    },
    {
      up: { text: "Scalpsense hair fall shampoo", orders: "20000+" },
      down: { text: "Reduces hairfall by 88%" }
    },
    {
      up: { text: "Dandruff vaccine", orders: "15000+" },
      down: { text: "92% dandruff reduction" }
    },
    {
      up: { text: "Botoplexx shampoo", orders: "120000+" },
      down: { text: "Reduces frizz by 98%" }
    },
    {
      up: { text: "Botoliss biotin shampoo", orders: "69000+" },
      down: { text: "75% less breakage" }
    },
    {
      up: { text: "Shea retention shampoo", orders: "75000+" }
    }
  ];

  // Return the JSX (HTML-like syntax) that will be rendered
  return (
    // Main container div with full width and black background
    // fixed: makes the banner stick to the top of the viewport
    // w-full: makes the div take full width of the viewport
    // overflow-hidden: prevents content from spilling outside the container
    // bg-black: sets the background color to black
    // z-50: ensures the banner stays above other content
    <div className="fixed top-0 left-0 w-full overflow-hidden bg-black z-50">
      {/* Container for the marquee animation */}
      {/* flex: makes this a flex container for horizontal layout */}
      {/* animate-marquee: applies the custom animation defined in tailwind.config.js */}
      {/* whitespace-nowrap: prevents text from wrapping to next line */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First list of items that will be visible */}
        {/* flex: makes list items display in a row */}
        {/* gap-4: adds spacing between list items */}
        {/* py-2.5: adds padding top and bottom */}
        {/* px-4: adds padding left and right */}
        <ul className="flex gap-4 py-2.5 px-4">
          {/* Map through bannerItems array to create list items */}
          {/* item: current item in the array */}
          {/* index: current index in the array */}
          {bannerItems.map((item, index) => (
            // Each list item with unique key for React's reconciliation
            // flex items-center: centers items vertically
            // text-[#D1E2D7]: sets text color to a light gray
            // text-xs: makes text extra small
            // border-r border-gray-300: adds right border with gray color
            <li key={index} className="flex items-center text-[#D1E2D7] text-xs border-r border-gray-300">
              {/* Container for padding and spacing */}
              {/* px-4: adds padding left and right */}
              <div className="px-4">
                {/* Single line container for all content */}
                {/* flex: makes items display in a row */}
                {/* items-center: centers items vertically */}
                {/* gap-2: adds small spacing between elements */}
                <div className="flex items-center gap-2">
                  {/* Product name in bold */}
                  <span className="font-bold">{item.up.text}</span>
                  {/* Separator */}
                  <span>-</span>
                  {/* Orders count in bold */}
                  <span className="font-bold">{item.up.orders} orders delivered</span>
                  {/* Conditional rendering of benefits if they exist */}
                  {item.down && (
                    <>
                      {/* Separator */}
                      <span>-</span>
                      {/* Benefits text */}
                      <span>{item.down.text}</span>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* Duplicate list for seamless infinite scroll effect */}
        {/* aria-hidden="true": makes this list invisible to screen readers */}
        {/* This is a copy of the first list to create continuous scrolling effect */}
        <ul className="flex gap-4 py-2.5 px-4" aria-hidden="true">
          {/* Same mapping as above to create duplicate items */}
          {bannerItems.map((item, index) => (
            <li key={index} className="flex items-center text-[#D1E2D7] text-xs border-r border-gray-300">
              <div className="px-4">
                {/* Single line container for all content */}
                <div className="flex items-center gap-2">
                  <span className="font-bold">{item.up.text}</span>
                  <span>-</span>
                  <span className="font-bold">{item.up.orders} orders delivered</span>
                  {item.down && (
                    <>
                      <span>-</span>
                      <span>{item.down.text}</span>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default TopBanner; 