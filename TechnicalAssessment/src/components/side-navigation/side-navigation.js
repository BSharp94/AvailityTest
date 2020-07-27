import React, { useState, useEffect } from 'react'
import './side-navigation.css'

// Recursive function that displays the navigation items
function pageStructureToContent(pageStructure, depth = 0) {

    if (Array.isArray(pageStructure)) {
        return pageStructure.map(ps => pageStructureToContent(ps, depth + 1))
    } else {
        if (!pageStructure) return;
        return (
            <li>
                <a href = {"#" + pageStructure.id} className = {pageStructure.active ? 'active' : ''}>{pageStructure.title}</a>
                {
                    pageStructure.children && (
                        <ul>
                            {pageStructure.children.map(c => pageStructureToContent(c, depth + 1))}
                        </ul>
                    )
                }
            </li>
        )

    }
}

class SideNavigation extends React.Component {

    static getDerivedStateFromProps(props, state) {
        if (props.pageStructure !== state.pageStructure) {
            return { pageStructure: props.pageStructure}
        }
        return null;
    }

    constructor({pageStructure}) {
        super()
        this.state = { pageStructure }
    }

    render() {
        return (
            <nav className = "side-navigation__panel">
                <h4>Availity <br/>TechnicalAssessment</h4>
                <ul className = "side-navigation__top-list">
                    { pageStructureToContent(this.state.pageStructure) }
                </ul>
            </nav>            
        )
    }
}

export default SideNavigation;