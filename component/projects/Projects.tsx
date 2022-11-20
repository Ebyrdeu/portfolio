import {AspectRatio, Card, Group, Image, Text} from "@mantine/core";
import data from "../../data/projects.json";
import useProjectsStyles from "./styles/projects.Styles";
import {motion} from "framer-motion";

const Projects = () => {
  const {classes} = useProjectsStyles(undefined, undefined);

  const projects = data.map(({projectName, projectLink, projectPreview, projectType}) => (
      <motion.div
          key={projectName}
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}>
        <Card
            p="md"
            radius="md"
            component="a"
            href={projectLink}
            target={"_blank"}
            className={classes.card}>
          <AspectRatio ratio={1920 / 1080}>
            <Image src={projectPreview} alt={projectName}/>
          </AspectRatio>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
            {projectType}
          </Text>
          <Text className={classes.title} mt={5}>
            {projectName}
          </Text>
        </Card>
      </motion.div>
  ));

  return (
      <Group mt={300} position={"center"}>
        {projects}
      </Group>
  );
};

export default Projects;