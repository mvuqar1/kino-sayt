import React, { useState } from 'react';
import './Favorites.css';
import { createList } from '../../api/createList';
import CustomBtn from '../CustomBtn';

const Favorites = ({ data, removeFromFavorites }) => {
    const [title, setTitle] = useState('');
    const [listId, setListId] = useState('');
    const [creatingList, setCreatingList] = useState(false);

    const btnDisabled = Boolean(
        title.trim() === '' ||
        data.length === 0 ||
        creatingList
    );

    const createListHandler = () => {
        setCreatingList(true)
        createList(title, data)
        .then(data => {
            if (data.id) {
                // id is created after successful POST by backend
                setListId(data.id)
            }
        })
        .catch(err => {
            console.log('err: '. err)
        })
    }

    return (
        <div className="favorites">
            <input disabled={creatingList} onChange={(e) => setTitle(e.target.value)} value={title} className="favorites__name" />
            <ul className="favorites__list">
                {data.map((item) => {
                    return (
                        <li
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBlock: '4px'
                            }}
                            key={item.imdbID}>{item.Title} ({item.Year})
                            <button disabled={creatingList} onClick={() => removeFromFavorites(item.imdbID)}>X</button>
                        </li>
                    );
                })}
            </ul>
            {
                listId ? (
                    <CustomBtn
                        to={'/list/' + listId}
                        type='link'
                    />
                ) : (
                    <CustomBtn
                        type={'button'}
                        onClick={createListHandler}
                        btnDisabled={btnDisabled}
                        title={creatingList ? 'Idet Zapros' : 'Сохранить список'}
                    />
                )
            }

        </div>
    );
};

export default Favorites;