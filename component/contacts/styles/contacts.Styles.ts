import {createStyles, CSSObject} from "@mantine/core";

const useContactsStyles = createStyles((theme): Record<any, CSSObject> => ({

  /*Volume*/
  volumeWrapper: {
    zIndex: 9999,
    position: "fixed",
    left: 10,
    top: 10,
  },

  /*Contacts*/

  wrapper: {
    zIndex: 9999,
    position: "fixed",
    right: 10,
    top: 10,
  },

  actionIcon: {
    transition: "0.6s",
    boxShadow: "0 0 10px #9d822b",
    background: theme.colors.gray[1],
    ['&:hover']: {
      background: theme.colors.gray[1],
      transform: 'scale(1.2)'
    }
  },
  icon: {
    color: theme.colors.dark[6],
  },
}));

export default useContactsStyles;