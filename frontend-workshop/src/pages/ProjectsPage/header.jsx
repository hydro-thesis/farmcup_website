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
            <Heading textAlign='center'> Projects </Heading>
            <Spacer/>
            <ButtonGroup w = {[`full`, `full`, `fit-content`]}>
                    <Button 
                            data-test-id='project-reset-btn'
                            colorScheme='orange' 
                            borderWidth='1px' 
                            onClick={handleCancel}
                            w = {[`full`, `full`, `fit-content`]}
                            > Reset </Button>
                    <Button 
                            data-test-id='project-add-btn'
                            as={Link} 
                            to='/projects/add' 
                            colorScheme = "green"
                            w = {[`full`, `full`, `fit-content`]}
                            > 
                        Add project 
                    </Button>                    
            </ButtonGroup>
        </HStack>
    )
}

Header.propType = {};
export default Header;