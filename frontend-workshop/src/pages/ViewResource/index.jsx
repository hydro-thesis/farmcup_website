import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ResourceProvider from "../../contexts/Resources";
import Form from "./form";
import Footer from "./footer";

const ViewResource = () => {
    const {id = 'add'} = useParams();
    return (
        <ResourceProvider id = {id}>
            <Box w = 'full' maxW = 'container.md' mx='auto' flexDirection = {{base:'column', md: 'row'}} alignItems={{base:'flex-start', md: 'center'}}>
                <Form />
                {id !== 'add' ? <Footer/> : ''}
            </Box>
        </ResourceProvider>
    );
}

ViewResource.propTypes = {}
export default ViewResource;