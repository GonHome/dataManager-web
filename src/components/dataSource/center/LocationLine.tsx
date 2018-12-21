import React, { Component } from 'react';
import {Icon} from '@blueprintjs/core';
import {routeTypes} from '../../../reducers/router';
import * as dataSource from '../../../models/dataSource';

type propTypes = {
    route: routeTypes;
    leftMenus: dataSource.leftMenu[];
};

class LocationLine extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    showLine = (line: string[]) => {
        // @ts-ignore
        return line.map((item: string, index: number) => {
            if (line.length === index + 1  ) {
                return <span key={index} style={{color: '#3598dc'}}>{item}</span>;
            } else {
                return <span key={index}>{item} > </span>;
            }
        });
    };

    render() {
        const {route, leftMenus} = this.props;
        const {path} = route.keys;
        const line = ['管理中心'];
        const firstPath = path.split('/')[0];
        const secondPath = `${path.split('/')[0]}/${path.split('/')[1]}`;
        leftMenus.map((item1) => {
            if (firstPath === item1.path) {
                line.push(item1.name);
                item1.children.map((item2) => {
                    if (secondPath === item2.path) {
                        line.push(item2.name);
                    }
                });
            }
        });
        return (
            <div className={'location-line'}>
                <Icon className={'location-icon'} icon={'map-marker'}/>当前位置&nbsp;:&nbsp;{this.showLine(line)}
            </div>
        );
    }
}
export default LocationLine;
