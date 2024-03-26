import { Table, Thead, Tbody, Tr, Th, Td, Box, Button, ButtonGroup, LinkBox, LinkOverlay, useToken, CardBody, Card, TableContainer } from "@chakra-ui/react";
import { PropTypes } from 'prop-types';

const CompaniesTable = ({ data = []}) => {
    const [padding] = useToken('sizes', [4]);

    return (
        <Card maxW={{ base: `calc(100vw - ${padding})`, md: '80%' }} mx='auto'>
            <TableContainer>
                <Table className = 'dataTable'>
                    <Thead>
                        <Tr>
                            <Th>NAME</Th>
                            <Th>ADDRESS</Th>                    
                            <Th>CONTACT PERSON</Th>
                            <Th>EMAIL</Th>
                            <Th>CONTACT NUMBER</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.length > 0 && data.map ((companies, companiesIndex) => {
                            return (
                                <LinkBox as = {Tr} key = {`companies-${companiesIndex}`} className='row'>
                                    <Td>
                                        <LinkOverlay href = {`companies/${companies?.id}`}>
                                            {companies.name} </LinkOverlay>
                                    </Td>
                                    <Td>{companies.address}</Td>                        
                                    <Td>{companies.contactPerson}</Td>
                                    <Td>{companies.email}</Td>
                                    <Td>{companies.contactNumber}</Td>
                                </LinkBox>
                            )
                        })}
                    </Tbody>
                </Table>  
            </TableContainer>
        </Card>
    );
}
CompaniesTable.propTypes = {data: PropTypes.array, onDelete: PropTypes.func, onEdit: PropTypes.func, onCancel: PropTypes.func}
export default CompaniesTable;