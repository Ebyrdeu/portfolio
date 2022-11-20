import {createStyles, CSSObject} from "@mantine/core";

const useProjectsStyles = createStyles((theme): Record<any, CSSObject> => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    background:"hsla(0,0%,100%,.1)",
    backdropFilter: "saturate(180%) blur(5px)",
    width: 400,
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      transform: 'scale(1.0)'
    },
    '&:hover': {
      transform: 'scale(1.05)'
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export default useProjectsStyles;