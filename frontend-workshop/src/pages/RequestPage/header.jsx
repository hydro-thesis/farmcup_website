import { Button, ButtonGroup, HStack, Heading, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import mockApi from "../../utils/mockApi";

const Header = () => {
    const handleCancel = () => {
        mockApi('POST', '/reset-data');
        window.location.reload();
    }

    return (
        <HStack w = 'full' maxW = 'container.md' mx='auto' flexDirection = {{base:'column', md: 'row'}} alignItems={{base:'flex-start', md: 'center'}} className="pageHeader">
            <Heading 
                    
                    textAlign='center'> Requests </Heading>
            <Spacer/>
            <ButtonGroup w = {[`full`, `full`, `fit-content`]}>
                    <Button 
                            data-test-id = 'request-reset-btn'
                            colorScheme='orange' 
                            borderWidth='1px' 
                            onClick={handleCancel}
                            w = {[`full`, `full`, `fit-content`]}
                            > Reset </Button>
                    <Button 
                            data-test-id = 'request-add-btn'
                            as={Link} 
                            to='/requests/add' 
                            colorScheme = "green"
                            w = {[`full`, `full`, `fit-content`]}> 
                        Add request 
                    </Button>                    
            </ButtonGroup>
        </HStack>
    )
}

Header.propType = {};
export default Header;