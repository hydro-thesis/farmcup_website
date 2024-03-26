import { Button, ButtonGroup, HStack, Heading, Spacer, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import mockApi from "../../utils/mockApi";

const Header = () => {
    const handleCancel = () => {
        mockApi('POST', '/reset-data');
        window.location.reload();
    }

    return (
        <HStack w = 'full' maxW = 'container.md' mx='auto' flexDirection = {{base:'column', md: 'row'}} alignItems={{base:'flex-start', md: 'center'}} className="pageHeader"
                >
            <Heading textAlign='center'> Companies </Heading>
            <Spacer/>
            <ButtonGroup w = {[`full`, `full`, `fit-content`]}>
                    <Button 
                            data-test-id='reset-company-btn'
                            colorScheme='orange' 
                            borderWidth='1px' 
                            onClick={handleCancel}
                            w = {[`full`, `full`, `fit-content`]}
                            > Reset </Button>
                    <Button 
                            data-test-id='add-company-btn'
                            as={Link} 
                            to='/companies/add' 
                            colorScheme = "green"
                            w = {[`full`, `full`, `fit-content`]}
                            > 
                        Add company 
                    </Button>                    
            </ButtonGroup>
        </HStack>
    )
}

Header.propTypes = {};
export default Header;