import { Box} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CompanyProvider from "../../contexts/Company";
import Footer from "./footer";
import Form from "./form";

const ViewCompanies = () => {
    const {id = 'add'} = useParams();

    return (
        <CompanyProvider id = {id}>
            <Box w = 'full' maxW = 'container.md' mx='auto' flexDirection = {{base:'column', md: 'row'}} alignItems={{base:'flex-start', md: 'center'}}>             
                <Form />
                {id !== 'add' ? <Footer/> : '' }
            </Box>
        </CompanyProvider>
    );
}

ViewCompanies.propTypes = {}
export default ViewCompanies;