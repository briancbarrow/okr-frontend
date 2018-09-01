import React, { Component } from 'react';
import KeyResult from './KeyResult';
import ReactTable from 'react-table';
import { StyleSheet, css } from 'aphrodite';

class Okr extends Component {
    render(props) {
        const columns = [{
            id: 'krLabel',
            Header: 'O',
            accessor: () => 'KR'
        }, {
            // id: 'keyResult',
            Header: props => (
                <h5>{this.props.data.objective}</h5>        
            ),
            accessor: 'text',
            minWidth: 400
        }, {
            id: 'goalCompletion',
            Header: 'Current / Goal',
            accessor: d => `0 / ${d.goal.toLocaleString('en-US', { style: d.dataType, currency: 'USD' })}`
        }, {
            id: 'progress',
            Header: 'Progress',
            accessor: () => '0%'
        }]
        console.log(this.props.data);
        return (
            <div className="Okr">
                <ReactTable data={this.props.data.keyResults} columns={columns} showPagination={false} pageSize={3} />
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
    },
    krLabels: {
        fontSize: '0.9rem',
        color: 'darkgray'
    },
    keyResults: {
        display: 'flex',
        flexDirection: 'column'
    }
});

export default Okr;
