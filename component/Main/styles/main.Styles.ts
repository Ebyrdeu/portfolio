import {createStyles, CSSObject} from "@mantine/core";

const useMainStyles = createStyles((theme): Record<any, CSSObject> => ({
  outerWrapper: {
    willChange: "transform",
  },
  innerWrapper: {
    overflow: "hidden",
    height: "100vh",
    position: "relative",
    textAlign: "center",
  },
  layer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center",
    willChange: "transform",
    transition: "transform .75s cubic-bezier(.075, .5, 0, 1)",
    zIndex: 2,
  },
  base: {
    backgroundImage: "url(/layer-base.png)",
    zIndex: 0,
  },
  middle: {
    backgroundImage: "url(/layer-middle.png)",
  },
  front: {
    backgroundImage: "url(/layer-front.png)",
  },
  layerText: {
    zIndex: 1,
    transition: "transform .75s cubic-bezier(.075, .5, 0, 1)",
    willChange: "transform",
    textTransform: "uppercase",
    color: "#E7E7E0FF",
    fontWeight: 900,
    textShadow: "0 0 15px #9d822b",
  },
  subtitle: {
    fontSize: "calc(calc(1vw + 1vh) / 1.1)",
    letterSpacing: "calc(calc(1vw + 1vh) / 3.50)",
  },
  title: {
    fontSize: "calc(calc(1vw + 1vh) * 2.35)",
    letterSpacing: "calc(calc(1vw + 1vh) / 10.55)",

  },
  dungeon: {
    ["&:before"]: {
      content: "''",
      position: "absolute",
      zIndex: 999,
      width: "100%",
      height: "calc(calc(1vw + 1vh) * 10)",
      backgroundImage: "url(/ground.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      top: "calc(calc(1vw + 1vh) * -5.5)",
    },
    background: "url(/dungeon.jpg)",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    textAlign: "center",
  },
  dungeonInner: {
    transition: "transform .75s cubic-bezier(.075, .5, 0, 1)",
  },

}));

export default useMainStyles;