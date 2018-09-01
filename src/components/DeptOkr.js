import React, { Component } from 'react';
import Okr from './Okr';
import { StyleSheet, css } from 'aphrodite';

class DeptOkr extends Component {
    render(props) {
        return (
            <div className="DeptOkr">
                <h1 className={css(styles.deptName)}>{this.props.dept.department}</h1>
                {
                    this.props.dept.okrs.map((okr, i) => {
                        okr.kr = 'KR';
                        return <Okr key={`okr-${i}`} data={okr} />
                    })
                }
            </div>
        );
    }
}

const styles = StyleSheet.create({
    deptName: {
        fontSize: '3rem',
        fontWeight: 400
    },
});

export default DeptOkr;
