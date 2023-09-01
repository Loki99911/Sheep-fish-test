import { useMediaQuery } from "react-responsive";

interface MediaRules {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useMediaRules = (): MediaRules => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1280px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1281px)" });

  return { isMobile, isTablet, isDesktop };
};
