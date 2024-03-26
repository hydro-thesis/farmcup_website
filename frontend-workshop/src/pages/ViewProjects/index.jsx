import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProjectProvider from "../../contexts/Projects";
import Form from "./form";
import Footer from "./footer";
import SideNav from './../../components/SideNav/index';

const ViewProjects = () => {
    const {id = 'add'} = useParams();

    return (
        <ProjectProvider id = {id}>
            <Box w = 'full' maxW = 'container.md' mx='auto' flexDirection = {{base:'column', md: 'row'}} alignItems={{base:'flex-start', md: 'center'}}>
                <Form/>
                {id !== 'add' ? <Footer/> : ''}
            </Box>
        </ProjectProvider>
    );
}

ViewProjects.propTypes = {}
export default ViewProjects;