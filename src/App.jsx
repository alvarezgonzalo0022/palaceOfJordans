import React, { Fragment, useState } from 'react'
// import Keys from './components/week_2/class_2/Keys'
// import Main from './components/week_2/class_3/Main'
// import LocalApp from './components/week_3/LocalApp'
// import FormComponent from './components/week_3/class_2/FormComponent'

import Store from './components/Store';

const App = () => {
    const [viewSelected, setViewSelected] = useState("Local");

    const handleView = (view) => {
        setViewSelected(view)
    }

    const storeProps = {
        viewSelected,
        handleView
    }

    return (
        <Store {...storeProps}/>
    )
}
export default App