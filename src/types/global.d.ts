// Add global type declarations here
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface Movie {
  id: number | string;
  title: string;
  description: string;
  year?: number;
  release_date?: string;
  rating?: number;
  vote_average?: number;
  genre?: string[];
  genres?: { id: number; name: string }[];
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  adult?: boolean;
  original_language?: string;
  original_title?: string;
}

// Add any other global type declarations you might need
