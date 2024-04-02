import { Card, CardHeader, CardBody, Text } from '@chakra-ui/react'

const More = () => {
    return (
        <div className="grid grid-rows-2 p-10 gap-10 sm:grid-cols-2 sm:p-72" style={{backgroundColor: "#749BC2"}}>
            <div>
                <Card>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                </Card>
            </div>
            <div>
                <Card>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default More