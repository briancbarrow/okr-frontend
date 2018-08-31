import React, { Component } from 'react';
import KeyResult from './KeyResult';
import { StyleSheet, css } from 'aphrodite';

class Okr extends Component {
    render(props) {
        return (
            <div className="Okr">
                <div className={css(styles.objective)}>
                    <div className={css(styles.objectiveHeader)}>
                        <p className={css(styles.objectiveBullet)}>O</p>
                        <h4 className={css(styles.objectiveName)}>Acheive record year over year revenues</h4>
                        <p className={css(styles.objectivePercentage)}>0%</p>

                    </div>
                    <div className="key-results">
                        <KeyResult />
                        <KeyResult />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    objective: {
        fontSize: '20px'
    },
    objectiveHeader: {
        display: 'flex',
        margin: 'auto',
        justifyContent: 'space-around'
    },
    objectiveBullet: {
        fontWeight: 600,
        color: 'black'
    },
    objectiveName: {
        color: '#629ffb'
    },
    objectivePercentage: {
        color: '#cc0101',
        fontWeight: 500,
    }
});

export default Okr;
