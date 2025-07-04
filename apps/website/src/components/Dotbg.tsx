import React from "react";

const DotBackground = ({ children }: { children: React.ReactNode }) => {
  const dotSvg = encodeURIComponent(`
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="2" height="2" fill="#797C6A"/>
      <g id="UI Designs">
      <path d="M-1744 -2218.2C-1744 -2219.3 -1743.1 -2220.2 -1742 -2220.2H7526.04C7527.15 -2220.2 7528.04 -2219.3 7528.04 -2218.2V9666.6C7528.04 9667.7 7527.15 9668.6 7526.04 9668.6H-1742C-1743.1 9668.6 -1744 9667.7 -1744 9666.6V-2218.2Z"/>
      <path d="M-1742 -2220.2V-2219.2H7526.04V-2220.2V-2221.2H-1742V-2220.2ZM7528.04 -2218.2H7527.04V9666.6H7528.04H7529.04V-2218.2H7528.04ZM7526.04 9668.6V9667.6H-1742V9668.6V9669.6H7526.04V9668.6ZM-1744 9666.6H-1743V-2218.2H-1744H-1745V9666.6H-1744ZM-1742 9668.6V9667.6C-1742.55 9667.6 -1743 9667.15 -1743 9666.6H-1744H-1745C-1745 9668.26 -1743.66 9669.6 -1742 9669.6V9668.6ZM7528.04 9666.6H7527.04C7527.04 9667.15 7526.59 9667.6 7526.04 9667.6V9668.6V9669.6C7527.7 9669.6 7529.04 9668.26 7529.04 9666.6H7528.04ZM7526.04 -2220.2V-2219.2C7526.59 -2219.2 7527.04 -2218.75 7527.04 -2218.2H7528.04H7529.04C7529.04 -2219.85 7527.7 -2221.2 7526.04 -2221.2V-2220.2ZM-1742 -2220.2V-2221.2C-1743.66 -2221.2 -1745 -2219.85 -1745 -2218.2H-1744H-1743C-1743 -2218.75 -1742.55 -2219.2 -1742 -2219.2V-2220.2Z" fill="white" fill-opacity="0.1"/>
      <g id="Desktop Screen" clip-path="url(#clip0_617_24287)">
      <rect width="1440" height="7763" transform="translate(-17 -984)" fill="white"/>
      <rect width="1440" height="7763" transform="translate(-17 -984)" fill="#050505"/>
      <g id="all">
      <g id="Our Process of working">
      <g id="dots" opacity="0.6">
      <g id="frame" opacity="0.2">
      <path id="." d="M1 2C0.725926 2 0.490741 1.90185 0.294444 1.70556C0.0981482 1.50926 0 1.27407 0 1C0 0.725926 0.0981482 0.490741 0.294444 0.294444C0.490741 0.0981482 0.725926 0 1 0C1.27407 0 1.50926 0.0981482 1.70556 0.294444C1.90185 0.490741 2 0.725926 2 1C2 1.18148 1.9537 1.34815 1.86111 1.5C1.77222 1.65185 1.65185 1.77407 1.5 1.86667C1.35185 1.95556 1.18519 2 1 2Z" fill="white"/>
      </g>
      </g>
      </g>
      </g>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_617_24287">
      <rect width="1440" height="7763" fill="white" transform="translate(-17 -984)"/>
      </clipPath>
      </defs>
      </svg>
  `);
  return (
    <div
      className=" overflow-hidden h-full rounded-2xl"
      style={{
        backgroundImage: `url("data:image/svg+xml,${dotSvg}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "18px 18px",
        backgroundPosition: "center",
      }}
    >
      <div className="backdrop:blur-sm rounded-sm">{children}</div>
    </div>
  );
};

export default DotBackground;
