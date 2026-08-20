import React from "react";

const GitHubGlyph = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedInGlyph = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
  </svg>
);

const XGlyph = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.83-5.97 6.83H1.66l7.73-8.84L1.24 2.25h6.83l4.72 6.24 5.45-6.24Zm-1.16 17.52h1.83L7.02 4.13H5.06l12.02 15.64Z" />
  </svg>
);

const socialLinks = [
  { title: "X", link: "https://x.com/imtalha995", Icon: XGlyph },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/talha-asif-83b80522b/",
    Icon: LinkedInGlyph,
  },
  { title: "GitHub", link: "https://github.com/talhahasif", Icon: GitHubGlyph },
];

const SocialIcons = ({ className = "", iconClassName = "w-5 h-5" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    {socialLinks.map(({ title, link, Icon }) => (
      <a
        key={title}
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={title}
        title={title}
        className="dark:text-text_silver text-gray-700 hover:text-yellow-400 dark:hover:text-yellow-400 duration-300 hover:-translate-y-1 inline-flex"
      >
        <Icon className={iconClassName} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
export { socialLinks };
