import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import PagesPromotionSearch from './promotion/search/Search'
import PagesPromotionForm from './promotion/form/Form'

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/create" component={PagesPromotionForm} />
                <Route path="/edit/:id" component={PagesPromotionForm} />
                <Route path="/" component={PagesPromotionSearch} />
            </Switch>
        </Router>
    )
}

export default Root;