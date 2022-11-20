import {ActionIcon, Box, Group, Text, Button} from "@mantine/core";
import {NextPage} from "next";
import {useWindowScroll} from "@mantine/hooks";
import useMainStyles from "./styles/main.Styles";
import {IconAdjustments} from "@tabler/icons";
import Projects from "../projects/Projects";


const Main: NextPage = () => {
  // styles
  const {classes, cx} = useMainStyles(undefined, undefined);

  // hooks
  const [scroll] = useWindowScroll();

  return (
       <>
         <Box className={classes.outerWrapper}>
           <Group position={"center"} className={classes.innerWrapper}>

             {/*Title*/}
             <Box className={classes.layerText} sx={{transform: `translate3d(0, ${scroll.y / 2}px , 0)`}}>
               <Text className={classes.subtitle}>Frontend Developer</Text>
               <Text className={classes.title}>Maxim Khnykin</Text>
             </Box>

             {/*Layers*/}
             <Box className={cx(classes.layer, classes.base)} sx={{transform: `translate3d(0, ${scroll.y / 1.6}px , 0)`}}/>
             <Box className={cx(classes.layer, classes.middle)} sx={{transform: `translate3d(0, ${scroll.y / 2.5}px , 0)`}}/>
             <Box className={cx(classes.layer, classes.front)} sx={{transform: `translate3d(0, ${scroll.y / 5.7}px , 0)`}}/>
           </Group>
           <Group position={"center"} align={'center'} className={classes.dungeon} >
             <Box className={classes.dungeonInner} sx={{transform: `translate3d(0, ${scroll.y / -7.5}px , 0)`}}>
              <Projects/>
             </Box>
           </Group>
         </Box>
       </>

  );
};

export default Main;