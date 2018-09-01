import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class KeyResult extends Component {
    render(props) {
        return (
            <div className="KeyResult">
                <p className="kr-bullet">KR</p>
                <h4 className="objective-name">Hit monthly revenue of 1.75 million</h4>
                <div className="current-vs-goal">
                    <p>0</p>/
                    <p>1750000</p>
                </div>
                <p className="percentage">0%</p>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    
});

export default KeyResult;
