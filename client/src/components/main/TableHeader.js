import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };

    const undoButtonStyle = props.disabledUndo ? {pointerEvents: "none", color: "#322d2d"} : {pointerEvents: "auto", color: "#e9edf0"};
    const redoButtonStyle = props.disabledRedo ? {pointerEvents: "none", color: "#322d2d"} : {pointerEvents: "auto", color: "#e9edf0"};

    return (
        <WRow className="table-header">
            <WCol size="3">
                <WButton className='table-header-section' wType="texted" >Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted">Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" >Status</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" >Assigned To</WButton>
            </WCol>

            <WCol size="2">
                <div className="table-header-buttons">
                    <WButton onClick={props.disabledUndo ? clickDisabled : props.undo} wType="texted" className={`${buttonStyle}`} style={undoButtonStyle}>
                        <i className="material-icons">undo</i>
                    </WButton>
                    <WButton onClick={props.disabledRedo ? clickDisabled : props.redo} wType="texted" className={`${buttonStyle}`} style={redoButtonStyle}>
                        <i className="material-icons">redo</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.closeList} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>
        </WRow>
    );
};

export default TableHeader;