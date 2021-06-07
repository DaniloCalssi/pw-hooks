import './Content.css'
import React, { useState } from "react"
import { Switch, Route } from 'react-router-dom'
import Hooks from '../../views/contents/UseState'
import UseState from '../../views/contents/UseState'
import NaoEncontrado from '../../views/contents//NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Hooks />
            </Route>
            <Route path="/UseState">
                <useState />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content