import React, {Fragment} from 'react'

import Leads from './Leads'
import Forms from './form'

export default function dashboard() {
    return (
        <Fragment>
            <Leads></Leads>
            <Forms></Forms>
        </Fragment>
    )
}
