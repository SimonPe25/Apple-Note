import React, { useEffect, useState } from 'react';
import { uid } from '../componets/Clock/uid'
import { Context } from '../context';
import Main from '../componets/Main/Main.jsx';

const IndexedDB = () => {

    const [dBList, setdBList] = useState([]);

    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open('WhiskeyDB', 6);

    DBOpenReq.addEventListener('error', (err) => {
        //console.warn(err);
    });
    DBOpenReq.addEventListener('success', (ev) => {

        db = ev.target.result;
        //console.log('success', db);

    });

    DBOpenReq.addEventListener('upgradeneeded', (ev) => {
        db = ev.target.result;
        console.log('upgrade', db);
        if (!db.objectStoreNames.contains('whiskeyStore')) {
            objectStore = db.createObjectStore('whiskeyStore', {
                keyPath: 'id',
            });
        }
    });

    const btnUpdate = (ev) => {
        ev.preventDefault();

        let name = document.getElementById('name').value.trim();
        let country = document.getElementById('country').value.trim();
        let key = document.whiskeyForm.getAttribute('data-key');

        console.log("name - ", name);
        console.log("country  --", country);


        if (key) {
            let whiskey = {
                id: key,
                name,
                country
            };
            let tx = makeTX('whiskeyStore', 'readwrite');
            tx.oncomplete = (ev) => {
                console.log(ev);
                buildList();
                clearForm();
            };

            let store = tx.objectStore('whiskeyStore');
            let request = store.put(whiskey);

            request.onsuccess = (ev) => {
                 console.log('successfully updated an object');

            };
            request.onerror = (err) => {
                 console.log('error in request to update');
            };
        }
    };

    const btnAdd = (ev) => {
        ev.preventDefault();

        let name = document.getElementById('name').value.trim();
        let country = document.getElementById('country').value.trim();

        console.log("Что здесь ", document.getElementById('name').value);

        let whiskey = {
            id: uid(),
            name,
            country
        };

        let tx = makeTX('whiskeyStore', 'readwrite');
        tx.oncomplete = (ev) => {
            console.log(ev);
            buildList();
            clearForm();
        };

        let store = tx.objectStore('whiskeyStore');
        let request = store.add(whiskey);

        request.onsuccess = (ev) => {
            console.log('successfully added an object');
        };
        request.onerror = (err) => {
            console.log('error in request to add');
        };
    };

    const btnDelete = (ev) => {
        ev.preventDefault();
    
        let key = document.whiskeyFormDel.getAttribute('data-key-del');

        if (key) {
            let tx = makeTX('whiskeyStore', 'readwrite');
            tx.oncomplete = (ev) => {
                console.log(ev);
                buildList();
                clearFormDel();
            };

            let store = tx.objectStore('whiskeyStore');
            let request = store.delete(key);

            request.onsuccess = (ev) => {
                console.log('successfully deleted an object');
            };
            request.onerror = (err) => {
                console.log('error in request to delete');
            };
        }
    };


    function buildList() {

        let tx = makeTX('whiskeyStore', 'readonly');
        tx.oncomplete = (ev) => { };
        let store = tx.objectStore('whiskeyStore');
        let getReq = store.getAll();

        getReq.onsuccess = (ev) => {
            let request = ev.target;
            console.log({ request });
            setdBList(request.result)
        };

        getReq.onerror = (err) => {
            console.warn(err);
        };
    }

    function makeTX(storeName, mode) {
        let tx = db.transaction(storeName, mode);
        tx.onerror = (err) => {
            console.warn(err);
        };
        return tx;
    }

    function clearForm(ev) {
        if (ev) ev.preventDefault();
        document.whiskeyForm.reset();
        document.whiskeyForm.removeAttribute('data-key');
     
    }
    function clearFormDel(ev) {
        if (ev) ev.preventDefault();
        document.whiskeyFormDel.reset();
        document.whiskeyFormDel.removeAttribute('data-key-del');
    }


    const wList = (ev) => {
        

        let id = ev.target.getAttribute('id');

        console.log("Start wList - ");

        let tx = makeTX('whiskeyStore', 'readonly');
        tx.oncomplete = (ev) => { };
        let store = tx.objectStore('whiskeyStore');
        let req = store.get(id);
        req.onsuccess = (ev) => {
            let request = ev.target;
            let whiskey = request.result;
            document.getElementById('name').value = whiskey.name;
            document.getElementById('country').value = whiskey.country;
            document.whiskeyForm.setAttribute('data-key', whiskey.id);
        };
        req.onerror = (err) => {
            console.warn(err);
        };
    }
    useEffect(() => {
        DBOpenReq.onsuccess = function (ev) {
            let tx = makeTX('whiskeyStore', 'readonly');
            tx.oncomplete = (ev) => {
                //console.log("OnComplete - ", ev);
            };

            let store = tx.objectStore('whiskeyStore');
            let getReq = store.getAll()
            getReq.onsuccess = (ev) => {
                let request = ev.target;
                setdBList(request.result)
            };
        };
    }, []);


    return (
        <>

            <Context.Provider value={{ dBList, wList, btnAdd, btnUpdate, btnDelete }}>
                <Main />
            </Context.Provider>

            {/* <form name="whiskeyForm" >
                <fieldset>
                    <p>
                        <label htmlFor="name">Whiskey: </label>
                        <input
                            type="text"
                            id="name"
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="country">Country of Origin: </label>
                        <input
                            type="text"
                            id="country"
                            required
                        />
                    </p>
                    <p>
                        <button id="btnAdd" onClick={btnAdd}>Add Whiskey</button>
                        <button id="btnUpdate" onClick={btnUpdate}>Update Whiskey</button>
                        <button id="btnDelete" onClick={btnDelete}>Delete Whiskey</button>
                    </p>
                </fieldset>
            </form>
            <div>
                <h1>Maссив</h1>
                <ul className='wList' onClick={wList}>
                    {dBList.map(card =>
                        <List
                            name={card.name}
                            id={card.id}
                            key={card.id}
                        >
                        </List>)}
                </ul>

            </div> */}
        </>
    );
};

export default IndexedDB;