import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../home/home.component'
import Product from '../product/product.component'
import AddProduct from '../product/add-product.component'
import SaleBill from '../salebill/salebill.component'

export default function Routes({}) {
    return (
        <HashRouter>
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/saleBill"} exact component={SaleBill} />
                <Route path={"/products"} exact component={AddProduct} />
            </Switch>
        </HashRouter>
    )
}
