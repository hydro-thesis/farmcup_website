import { Button, ButtonGroup, HStack, Heading, Spacer } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import mockApi from "../../utils/mockApi";

const Header = () => {
    const handleCancel = () => {
        mockApi('POST', '/reset-data');
        window.location.reload();
    }

    return (
        <HStack w = 'full' maxW = 'container.md' mx='auto' flexDirection = {{base:'column', md: 'row'}} alignItems={{base:'flex-start', md: 'center'}} className="pageHeader">
            <Heading textAlign={{base: 'center', md: 'flex-start'}}> Resources </Heading>
            <Spacer/>
            <ButtonGroup w = {[`full`, `full`, `fit-content`]}>
                    <Button 
                        data-test-id='reset-resource-btn'
                        colorScheme='orange'
                        borderWidth='1px' 
                        onClick={handleCancel}
                        w = {[`full`, `full`, `fit-content`]}
                        > Reset </Button>
                    <Button 
                        data-test-id='add-resource-btn'
                        as={Link} 
                        to='/resources/add' 
                        colorScheme = "green"
                        w = {[`full`, `full`, `fit-content`]}> 
                        Add resource 
                    </Button>                    
            </ButtonGroup>
        </HStack>
    )
}

Header.propTypes = {};
export default Header;