import React, { useEffect, useState } from 'react';
import { uid } from '../componets/Clock/uid'
import { Context } from '../context';
import Main from '../componets/Main/Main.jsx';

const IndexedDB = () => {

    const [dBList, setdBList] = useState([]);
    let db = null;
    let objectStore = null;
    const DBOpenReq = indexedDB.open('NoteDB', 6);

    DBOpenReq.addEventListener('error', (err) => { });
    DBOpenReq.addEventListener('success', (ev) => {
        db = ev.target.result;
    });
    DBOpenReq.addEventListener('upgradeneeded', (ev) => {
        db = ev.target.result;
        if (!db.objectStoreNames.contains('noteStore')) {
            objectStore = db.createObjectStore('noteStore', {
                keyPath: 'id',
            });
        }
    });

    const btnUpdate = (ev) => {
        ev.preventDefault();
        const note = document.getElementById('note').value.trim();
        const noteContent = document.getElementById('noteContent').value.trim();
        const key = document.whiskeyForm.getAttribute('data-key');

        if (key) {
            const whiskey = {
                id: key,
                note,
                noteContent
            };
            const tx = makeTX('noteStore', 'readwrite');
            tx.oncomplete = (ev) => {
                buildList();
                clearForm();
            };

            const store = tx.objectStore('noteStore');
            const request = store.put(whiskey);
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
        const note = document.getElementById('note').value.trim();
        const noteContent = document.getElementById('noteContent').value.trim();
        const whiskey = {
            id: uid(),
            note,
            noteContent
        };

        const tx = makeTX('noteStore', 'readwrite');
        tx.oncomplete = (ev) => {
            buildList();
            clearForm();
        };

        const store = tx.objectStore('noteStore');
        const request = store.add(whiskey);
        request.onsuccess = (ev) => {
            console.log('successfully added an object');
        };
        request.onerror = (err) => {
            console.log('error in request to add');
        };
    };

    const btnDelete = (ev) => {
        ev.preventDefault();
        const key = document.whiskeyFormDel.getAttribute('data-key-del');
        if (key) {
            const tx = makeTX('noteStore', 'readwrite');
            tx.oncomplete = (ev) => {
                console.log(ev);
                buildList();
                clearFormDel();
            };

            const store = tx.objectStore('noteStore');
            const request = store.delete(key);
            request.onsuccess = (ev) => {
                console.log('successfully deleted an object');
            };
            request.onerror = (err) => {
                console.log('error in request to delete');
            };
        }
    };

    function buildList() {
        const tx = makeTX('noteStore', 'readonly');
        tx.oncomplete = (ev) => { };
        const store = tx.objectStore('noteStore');
        const getReq = store.getAll();
        getReq.onsuccess = (ev) => {
            const request = ev.target;
            console.log({ request });
            setdBList(request.result)
        };
        getReq.onerror = (err) => {
            console.warn(err);
        };
    }

    function makeTX(storeName, mode) {
        const tx = db.transaction(storeName, mode);
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
        const id = ev.target.getAttribute('id');
        const tx = makeTX('noteStore', 'readonly');
        tx.oncomplete = (ev) => { };
        const store = tx.objectStore('noteStore');
        const req = store.get(id);
        req.onsuccess = (ev) => {
            const request = ev.target;
            const whiskey = request.result;
            document.getElementById('note').value = whiskey.note;
            document.getElementById('noteContent').value = whiskey.noteContent;
            document.whiskeyForm.setAttribute('data-key', whiskey.id);
        };
        req.onerror = (err) => {
            console.warn(err);
        };
    };

    useEffect(() => {
        DBOpenReq.onsuccess = function (ev) {
            const tx = makeTX('noteStore', 'readonly');
            tx.oncomplete = (ev) => {
            };

            const store = tx.objectStore('noteStore');
            const getReq = store.getAll()
            getReq.onsuccess = (ev) => {
                const request = ev.target;
                setdBList(request.result)
            };
        };
    }, []);

    return (
        <>
            <Context.Provider value={{ dBList, wList, btnAdd, btnUpdate, btnDelete }}>
                <Main />
            </Context.Provider>
        </>
    );
};

export default IndexedDB;