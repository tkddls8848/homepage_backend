import React, {Fragment} from 'react'

import Leads from './leads'
import Forms from './form'

export default function dashboard() {
    return (
        <Fragment>
            <Leads></Leads>
            <Forms></Forms>
        </Fragment>
    )
}
