import React from 'react'
import { Table } from 'reactstrap'

const ScheduleList = (props) => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Creator
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Location
                    </th>
                    <th>
                        Time Start
                    </th>
                    <th>
                        Time End
                    </th>
                    <th>
                    </th>
                    <th>
                    </th>
                    <th>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </Table>
    )
}

export default ScheduleList
