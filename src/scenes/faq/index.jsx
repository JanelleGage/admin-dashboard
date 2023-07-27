import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Fequently Asked Questions" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important question?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, veritatis sed. Obcaecati, distinctio nam. 
                        Et doloremque incidunt a exercitationem mollitia dolorem expedita, soluta dignissimos, quo eos aperiam molestiae sunt delectus?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        A not so important question?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, veritatis sed. Obcaecati, distinctio nam. 
                        Et doloremque incidunt a exercitationem mollitia dolorem expedita, soluta dignissimos, quo eos aperiam molestiae sunt delectus?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another important question?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, veritatis sed. Obcaecati, distinctio nam. 
                        Et doloremque incidunt a exercitationem mollitia dolorem expedita, soluta dignissimos, quo eos aperiam molestiae sunt delectus?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        One more important question?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, veritatis sed. Obcaecati, distinctio nam. 
                        Et doloremque incidunt a exercitationem mollitia dolorem expedita, soluta dignissimos, quo eos aperiam molestiae sunt delectus?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Last important question?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, veritatis sed. Obcaecati, distinctio nam. 
                        Et doloremque incidunt a exercitationem mollitia dolorem expedita, soluta dignissimos, quo eos aperiam molestiae sunt delectus?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;