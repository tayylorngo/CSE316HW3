import React            from 'react';
import TableHeader      from './TableHeader';
import TableContents    from './TableContents';

const MainContents = (props) => {
    return (
        <div className='table ' >
            <TableHeader
                disabled={!props.activeList._id} addItem={props.addItem}
                setShowDelete={props.setShowDelete} setActiveList={props.setActiveList}
                undo={props.undo} redo={props.redo} disabledUndo={props.disabledUndo}
                disabledRedo={props.disabledRedo} closeList={props.closeList}
                undoStyle={props.undoStyle} redoStyle={props.redoStyle} 
                sortList={props.sortList} currentListId={props.currentListId}
            />
            <TableContents
                key={props.activeList.id} activeList={props.activeList}
                deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                editItem={props.editItem} isPerformingUndo={props.isPerformingUndo} isPerformingDo={props.isPerformingDo}
            />
        </div>
    );
};

export default MainContents;