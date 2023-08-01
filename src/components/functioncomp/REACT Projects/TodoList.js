import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./React.css";

const TodoList = () => {
    const [enterList, setEnterList] = useState('');
    const [storeList, setStoreList] = useState([]);
    const [editTask, setEditTask] = useState(null);



    const onClickButton = () => {
        if (enterList.trim() === '') {
            alert("Please enter the 'Task'");
            return;
        }
        // setStoreList((previousItems) => {
        //     return [...previousItems, enterList]
        // });

        if (editTask !== null) {
            const updatedList = storeList.map((value, index) => {
                if (index === editTask) {
                    return enterList;
                }
                return value;
            });
            setStoreList(updatedList);
            setEditTask(null);
        }
        else {
            setStoreList((previousItems) => [...previousItems, enterList]);
        }
        setEnterList('');
    };



    const onSelect = (id) => {
        setStoreList((previousItems) => {
            return previousItems.filter((value, index) => {
                return index !== id;
            });
        });
    };



    // const onEdit=(id)=>{
    //     setEditing(storeList.find((value,index)=>{
    //         return index===id;
    //     }))
    // }




    const onEdit = (index) => {
        setEditTask(index);
        setEnterList(storeList[index]);
    };



    return (
        <div className='ThisToDo'>
            <div className='App_body'>
                <p>ToDo List</p>
                <div className='App_input'>
                    <input type='text'
                        title='Task should be enter'
                        placeholder='Enter the task'
                        value={enterList}
                        onChange={(event) => setEnterList(event.target.value)}
                    />
                    <button onClick={onClickButton}>Add</button>
                </div>
                <div className='App_list'>
                    <ul>
                        {
                            storeList.map((value, index) => {
                                return (
                                    <div className='App_listEach' key={index}>
                                        <div className='App_listEach1'>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                        <div className='App_listEach2'>
                                            <div>
                                                <li>{value}</li>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon className="Edit"
                                                    icon={faPenToSquare}
                                                    onClick={() => onEdit(index)} />
                                            </div>
                                            <div>
                                                <FontAwesomeIcon className='Icons'
                                                    icon={faTrash}
                                                    onClick={() => onSelect(index)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;