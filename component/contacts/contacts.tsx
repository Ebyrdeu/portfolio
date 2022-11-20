import {ActionIcon, Anchor, Box, Group} from "@mantine/core";
import {IconBrandGithub, IconBrandLinkedin, IconMail, IconVolume, IconVolumeOff} from "@tabler/icons";
import useContactsStyles from "./styles/contacts.Styles";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {NextPage} from "next";

const Contacts: NextPage = () => {
  const {classes} = useContactsStyles(undefined, undefined);
  const [volumeStatus, setVolumeStatus] = useState<boolean>(false);
  const ref = useRef() as MutableRefObject<HTMLAudioElement>;

  useEffect(() => {
    (async () => ref.current.volume = 0.05)();
  }, [ref]);

  const handleVolume = async () => {
    setVolumeStatus(!volumeStatus);
    return volumeStatus ? ref.current.pause() : ref.current.play();
  };

  const checkVolumeStatus = volumeStatus
      ? <IconVolume className={classes.icon} size={18} stroke={1.1}/>
      : <IconVolumeOff className={classes.icon} size={18} stroke={1.1}/>;

  return (
      <>
        <Box className={classes.volumeWrapper}>
          <audio src={"/forest.mp3"} ref={ref}/>
          <ActionIcon onClick={handleVolume} className={classes.actionIcon} radius="xl" variant="filled">
            {checkVolumeStatus}
          </ActionIcon>
        </Box>
        <Group className={classes.wrapper}>
          <Anchor href={"mailto:ebyrdeu.khnykin@gmail.com"} target={"_blank"}>
            <ActionIcon className={classes.actionIcon} radius="xl" variant="filled">
              <IconMail className={classes.icon} size={18} stroke={1.1}/>
            </ActionIcon>
          </Anchor>
          <Anchor href={"https://github.com/Ebyrdeu"} target={"_blank"}>
            <ActionIcon className={classes.actionIcon} radius="xl" variant="filled">
              <IconBrandGithub className={classes.icon} size={18} stroke={1.1}/>
            </ActionIcon>
          </Anchor>
          <Anchor href={"https://www.linkedin.com/in/maxim-khnykin"} target={"_blank"}>
            <ActionIcon className={classes.actionIcon} radius="xl" variant="filled">
              <IconBrandLinkedin className={classes.icon} size={18} stroke={1.1}/>
            </ActionIcon>
          </Anchor>
        </Group>
      </>
  );
};

export default Contacts;